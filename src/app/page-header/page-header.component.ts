import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationStart } from "@angular/router";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-page-header",
  templateUrl: "./page-header.component.html",
  styleUrls: ["./page-header.component.css"]
})
export class PageHeaderComponent implements OnInit {
  notInHome = false;
  constructor(private router: Router, private activeRoute: ActivatedRoute) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationStart))
      .subscribe((event: NavigationStart) => {
        this.notInHome = event.url.length > 0 && event.url !== "/";
      });
  }

  ngOnInit() {}

  navigateHome() {
    this.router.navigate([""]);
  }
}
