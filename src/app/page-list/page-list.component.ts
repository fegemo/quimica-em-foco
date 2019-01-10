import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

  pages: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.pages = db.collection('pages').valueChanges();
  }

  ngOnInit() {
  }

}
