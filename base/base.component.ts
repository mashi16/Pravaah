/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
import * as app from "tns-core-modules/application";
import * as utils from "tns-core-modules/utils/utils";
import { Page } from "tns-core-modules/ui/page";
import { TranslateService, LangChangeEvent } from '../@ngx-translate/core@10.0.2';

import enLang from '../locale/en'
import esLang from '../locale/es'

@Component({
	selector: "Base",
	moduleId: module.id,
	templateUrl: "./base.component.html",
	styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {
	public currentLanguage = 'en';
	private _activatedUrl: string;
	private _sideDrawerTransition: DrawerTransitionBase;

	constructor(
		private page: Page,
		private router: Router,
		private routerExtensions: RouterExtensions,
		private translate: TranslateService) {
		this.page.actionBarHidden = true;


	}

	ngOnInit(): void {

	}

	

	/*onTapAuthor(): void {
		utils.openUrl("https://www.bazzite.com?ref=mygold-app")
	}

	onTapLogo(): void {
		utils.openUrl("https://mygold.fun")
	}*/
}