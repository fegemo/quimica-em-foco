import { Component, OnInit } from "@angular/core";
import { AuthService } from "../core/auth.service";
import { defaultIfEmpty } from "rxjs/operators";

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  constructor(public auth: AuthService) {}

  ngOnInit() {}
}
