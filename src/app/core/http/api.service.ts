import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {
  }

  login(body: any): Promise<any> {
    return this.http
      .post(environment.serverUrl + '/api/users/login', body)
      .toPromise()
      .catch(this.handleError);
  }

  getBrands(): Promise<any> {
    return this.http
      .get(environment.serverUrl + '/api/brands/admin')
      .toPromise()
      .catch(this.handleError);
  }

  public extractData(res: Response): any {
    const body = res.json();
    return body;
  }

  private handleError(error: Response | any): Promise<any> {
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

}
