import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
import { User } from "../shared/user.model";
@Component({
	selector: "Login",
	moduleId: module.id,
	templateUrl: "./login.component.html",
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	isLoggingIn = true;
	processing = false;
	user: User;
	@ViewChild("password", { static: false }) password: ElementRef;
	constructor(private page: Page, private routerExtensions: RouterExtensions) {
		this.page.actionBarHidden = true;
		this.user = new User();
		this.user.aadhar = 1234
		this.user.password = "abc";
	}

	ngOnInit(): void {
	}
	toggleForm() {
		this.isLoggingIn = !this.isLoggingIn;
	}
	submit() {
		/*	if (!this.user.aadhar || !this.user.password) {
				this.alert("Please provide both an Aadhar address and password.");
				return;
			}*/

		this.processing = true;
		if (this.isLoggingIn) {
			this.login();
		} else {
			this.processing = false;
			this.isLoggingIn = true;
			//	this.register();
		}
	}

	focusPassword() {
		this.password.nativeElement.focus();
	}

	login() {
        /*   this.userService.login(this.user)
               .then(() => {
                   this.processing = false;
                   this.routerExtensions.navigate(["/home"], { clearHistory: true });
               })
               .catch(() => {
                   this.processing = false;
                   this.alert("Unfortunately we could not find your account.");
               });*/
		//	this.alert(JSON.stringify(this.user));
		if ((this.user.aadhar == 1234) && this.user.password == "abc") {
			this.processing = false;
			this.routerExtensions.navigate(["/homebase"], { clearHistory: true });
		} else {
			this.processing = false;
			this.alert("Unfortunately we could not find your account.");
		}
	}

	alert(message: string) {
		return alert({
			title: "Pravaah",
			okButtonText: "OK",
			message: message
		});
	}
}