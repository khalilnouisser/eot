import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  private static handleError(error: Response | any): Promise<any> {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }

  getStats(): Promise<any> {
    return this.http.get(`${environment.serverUrl}/stats`)
      .toPromise()
      .catch(ApiService.handleError);
  }

  getInsights(type?: string): Promise<any> {
    return this.http.get(`${environment.serverUrl}/insights?${type ? `type=${type}` : ''}`)
      .toPromise()
      .catch(ApiService.handleError);
  }

  getPartners(): Promise<any> {
    return this.http.get(`${environment.serverUrl}/partners`)
      .toPromise()
      .catch(ApiService.handleError);
  }

  getOrganisations(type?: string): Promise<any> {
    return this.http.get(`${environment.serverUrl}/organizations?${type ? `type=${type}` : ''}`)
      .toPromise()
      .catch(ApiService.handleError);
  }

  getInsightById(id: string): Promise<any> {
    return this.http.get(`${environment.serverUrl}/insights?id=${id}`)
      .toPromise()
      .catch(ApiService.handleError);
  }

  login(body: any): Promise<any> {
    return this.http.post(`${environment.serverUrl}/auth/local`, JSON.stringify(body))
      .toPromise()
      .catch(error => {
        return Promise.reject(error.error.message[0].messages[0].message);
      });
  }

  register(body: any): Promise<any> {
    return this.http.post(`${environment.serverUrl}/users`, JSON.stringify(body))
      .toPromise()
      .catch(error => {
        return Promise.reject(error.error.message[0].messages[0].message);
      });
  }

}
