import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { credentialsKey } from '../authentication/credentials.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor() {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // add authorization header with jwt token if available
    let token: string;
    if ((localStorage.getItem(credentialsKey))) {
      token = JSON.parse(localStorage.getItem(credentialsKey));
    } else if ((sessionStorage.getItem(credentialsKey))) {
      token = JSON.parse(sessionStorage.getItem(credentialsKey));
    }
    console.log('here', token);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    if (!request.headers.has('Content-Type') && !request.headers.has('File-Upload')) {
      request = request.clone({headers: request.headers.set('Content-Type', 'application/json')});
    }

    return next.handle(request);
  }
}
