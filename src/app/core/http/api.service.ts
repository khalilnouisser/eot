import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  imageHeaders: HttpHeaders;

  constructor(private http: HttpClient) {
    this.imageHeaders = new HttpHeaders({'File-Upload': 'true'});
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

  getOrganisationById(id: string): Promise<any> {
    return this.http.get(`${environment.serverUrl}/organizations?id=${id}`)
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

  uploadOrganisationLogo(id: number, file: File): Promise<any> {
    const fd = new FormData();
    fd.append('files', file, file.name);
    fd.append('ref', 'organization');
    fd.append('refId', id.toString());
    fd.append('field', 'logo');
    return this.http.post(`${environment.serverUrl}/upload`, fd, { headers: this.imageHeaders })
      .toPromise()
      .catch(ApiService.handleError);
  }

  addOrganisation(body: any): Promise<any> {
    return this.http.post(`${environment.serverUrl}/organizations`, JSON.stringify(body))
      .toPromise()
      .catch(ApiService.handleError);
  }

  getVoyages(): Promise<any> {
    return this.http.get(`${environment.serverUrl}/voyages`)
      .toPromise()
      .catch(ApiService.handleError);
  }

}
