/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "cardbase", component: BaseComponent, loadChildren: "./cards/cards.module#CardsModule", data: { some_data: 'some value' } },
    { path: "homebase", component: BaseComponent, loadChildren: "./home/home.module#HomeModule", data: { some_data: 'some value' } },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
