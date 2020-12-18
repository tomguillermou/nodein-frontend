import { NgModule } from '@angular/core';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
    declarations: [],
    imports: [
        HttpClientModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }, // TODO: Remove and inject token via API service implementation
    ]
})
export class CoreModule { }
