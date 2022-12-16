import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpStatusCode
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === HttpStatusCode.NotFound) {
            alert('not found the path.');
          } else if (err.status === HttpStatusCode.BadRequest) {
            alert('wrong input');
          } else {
            alert('some error occurred.');
            console.log(err);
          }
        }
        return EMPTY;
      })
    );
  }
}
