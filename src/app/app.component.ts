import { Component } from "@angular/core";
import { AngularFirestore } from "@angular/fire/firestore";
import { RouterOutlet } from "@angular/router";
import { slider as routeSlider } from "./route-animations";
import { slider as menuSlider } from "./menu-animations";
import { AnimationEvent } from "@angular/animations";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  animations: [routeSlider(), menuSlider("400ms")]
})
export class AppComponent {
  title = "quimica-em-foco";
  headerMenuShown = false;

  constructor(db: AngularFirestore) {}

  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData["animation"]
    );
  }

  onAnimationEvent(event: AnimationEvent) {
    switch (event.toState) {
      case "toRight":
        this.headerMenuShown = true;
        break;
      case "toLeft":
        this.headerMenuShown = false;
        break;
    }
  }
}
