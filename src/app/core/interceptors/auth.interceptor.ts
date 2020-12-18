import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// NOT RELEVANT IF YOU IMPLEMENT AN API SERVICE CLASS THAT INJECTS TOKEN IN HEADERS FOR EACH REQUEST
// TODO: Change that

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = localStorage.getItem('token');

        if (token) {
            const cloned = req.clone({
                headers: new HttpHeaders({
                    Authorization: 'Bearer ' + token
                })
            });

            return next.handle(cloned);

        } else {
            return next.handle(req);
        }
    }
}
