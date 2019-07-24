/**
* @author Bazzite (https://www.bazzite.com)
* @license MIT License Copyright (c) 2018 Bazzite
*/

import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { DataService } from "../shared/data.service";
import { takePicture, requestPermissions } from 'nativescript-camera';
import { ImageAsset } from 'tns-core-modules/image-asset';
import * as geolocation from "nativescript-geolocation";
import { Accuracy } from "ui/enums";
@Component({
	selector: "Cards",
	moduleId: module.id,
	templateUrl: "./cards.component.html",
	styleUrls: ["./cards.component.css"]
})
export class CardsComponent implements OnInit {
	toEmail;
	ccEmail;
	bccEmail;
	subject;
	message;
	lat = 0;
	lon = 0;
	speed = 0;
	addr = "";
	public saveToGallery: boolean = true;
	public cameraImage: ImageAsset;

	onTakePictureTap(args) {
		requestPermissions().then(
			() => this.capture(),
			() => alert('permissions rejected')
		);
	}
	constructor(private routerExtensions: RouterExtensions) { }
	getLocation(args): void {
		geolocation.getCurrentLocation({ desiredAccuracy: Accuracy.high, maximumAge: 5000, timeout: 20000 })
			.then(res => {
				this.lat = res.latitude;
				this.lon = res.longitude;
				this.speed = res.speed;
				// get the address (REQUIRES YOUR OWN GOOGLE MAP API KEY!)
				/*fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + res.latitude + "," + res.longitude + "&key=AIzaSyDd-SyrlUAGXHiUWUSQMCegzJLgEn8qY-g")
					.then((response) => response.json()).then((r) => {
						console.log(r);
						if (r.results[0]) {
							this.addr = r.results[0].formatted_address;
						}
					});*/
			});
	}
	ngOnInit(): void { }
	capture() {
		takePicture({ width: 250, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery })
			.then((imageAsset: any) => {
				this.cameraImage = imageAsset;
				imageAsset.getImageAsync(function (nativeImage) {
					let scale = 1;
					let height = 0;
					let width = 0;
					if (imageAsset.android) {
						// get the current density of the screen (dpi) and divide it by the default one to get the scale
						scale = nativeImage.getDensity() / imageAsset.android.util.DisplayMetrics.DENSITY_DEFAULT;
						height = imageAsset.options.height;
						width = imageAsset.options.width;
					} else {
						scale = nativeImage.scale;
						width = nativeImage.size.width * scale;
						height = nativeImage.size.height * scale;
					}
					console.log(`Displayed Size: ${width}x${height} with scale ${scale}`);
					console.log(`Image Size: ${width / scale}x${height / scale}`);
				});
			}, (error) => {
				console.log("Error: " + error);
			});
	}
	onEmailSend(): void {
		// basic validation
		if (!this.ccEmail || !this.toEmail || !this.cameraImage || !this.lat) {
			this.alert("Please enter all required fields!");
			return;
		} else {
			this.alert("Ticket created successfully!");
			this.routerExtensions.navigate(["/homebase"], { clearHistory: true });
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