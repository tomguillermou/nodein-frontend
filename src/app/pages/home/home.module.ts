import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../core/guards/auth.guard';

import { SharedModule } from "../../shared/shared.module";

import { HomeComponent } from "./home.component";

const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })
    ],
    declarations: [
        HomeComponent,
    ],
    exports: [
        RouterModule
    ]
})
export class HomeModule { }
