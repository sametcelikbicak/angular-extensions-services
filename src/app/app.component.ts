import { Component, VERSION } from "@angular/core";
import "./string.extensions";
import { Test } from "./test";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = `Angular ${VERSION.major} service using in extension method `;
  serviceMessage = "";

  constructor() {
    this.serviceMessage = Test.serviceMessage();
  }
}
