import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page-thumb',
  templateUrl: './page-thumb.component.html',
  styleUrls: ['./page-thumb.component.css']
})
export class PageThumbComponent implements OnInit {

  @Input('data') public info;

  constructor() { }

  ngOnInit() {
  }

}
