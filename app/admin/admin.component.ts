import {Component, OnInit} from 'angular2/core';
import {FirebaseService} from '../firebase/firebase.service';


@Component({
  selector: 'admin',
  templateUrl: './app/templates/admin.html',
  providers: [FirebaseService]
})

export class Admin {
  public firebaseRef;

  public card = {
    header: '',
    // date: Date,
    images: [
      "app/images/angular.jpg"
    ],
    link: '',
    text: '',
    author: '',
    category: [
      "JavaScript",
      "Framework",
      "MVC"
    ],
    tags:['HTML','JS']
  }

  constructor(private _firebaseService: FirebaseService) { }; // create a private static link to ProductService not a normal new ProductService();

  ngOnInit() {
    this.firebaseRef = this._firebaseService.getFirebaseRef();
  }

  createCard() {
    // console.log(this.firebaseRef);
    this.firebaseRef.child("cards").push(this.card);


  }
}
