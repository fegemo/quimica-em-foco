import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import {
  AngularFireStorageModule,
  AngularFireStorageReference
} from "@angular/fire/storage";
import { Observable, of } from "rxjs";
import { switchMap, startWith, tap } from "rxjs/operators";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
import { Router } from "@angular/router";
import { auth } from "firebase/app";

interface User {
  uid: string;
  email: string;
  name?: string;
  picture?: string;
  color?: string;
}

@Injectable({
  providedIn: "root"
})
export class AuthService {
  user: Observable<User>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else {
          return of(null);
        }
      }),
      tap(user => localStorage.setItem("user", JSON.stringify(user))),
      startWith(JSON.parse(localStorage.getItem("user")))
    );
  }

  googleLogin() {
    const provider = new auth.GoogleAuthProvider();
    this.oAuthLogin(provider);
  }

  twitterLogin() {
    const provider = new auth.TwitterAuthProvider();
    this.oAuthLogin(provider);
  }

  oAuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider).then(credential => {
      this.updateUserData(credential.user);
    });
  }

  updateUserData(user) {
    const userRef: AngularFirestoreDocument<User> = this.afs.doc<User>(
      `users/${user.uid}`
    );

    const data: User = {
      uid: user.uid,
      email: user.email,
      name: user.displayName,
      picture: user.photoURL,
      color: "goldenrod"
    };

    return userRef.set(data).catch(alert);
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => localStorage.removeItem("user"));
  }
}
