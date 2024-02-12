// api.interceptor.ts
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const modifiedReq = req.clone({
      headers: req.headers.set('Authorization', 'ZGV2ZWxvcG1lbnRVc2VyOmRldmVsb3BtZW50UGFzc3dvcmQ='),
    });
    return next.handle(modifiedReq);
  }
}