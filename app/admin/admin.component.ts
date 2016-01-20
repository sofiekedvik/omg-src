import {Component, OnInit} from 'angular2/core';
import {FirebaseService} from '../firebase/firebase.service';


@Component({
  selector: 'admin',
  templateUrl: './app/templates/admin.html',
  providers: [FirebaseService]
})

export class Admin {
  public firebaseRef;
  public articles;

  public card = {
    "header": "",
    "images": [],
    "date": "",
    "link": "",
    "text": "",
    "author": "",
    "category": [],
    "type": {
      article: true,
      tutorial: false
    }
  }
  constructor(private _firebaseService: FirebaseService) { }; // create a private static link to ProductService not a normal new ProductService();
  // ngOnInit() {
  //   this.firebaseRef = this._firebaseService.getFirebaseRef();
  //   var self = this;
  // }
  ngOnInit(){
    this.firebaseRef = this._firebaseService.getFirebaseRef();
    // var self = this;
    // this.firebaseRef.child("cards").set(
    //   {
    //     "header": "Pipes in Angular 2",
    //     "date": "2016-01-13",
    //     "images": [
    //       "app/images/angular.jpg"
    //     ],
    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
    //     "text": "In most applications, users navigate from one view to the next as they perform application tasks.",
    //     "author": "Angular",
    //     "category": [
    //       "JavaScript",
    //       "Framework",
    //       "MVC"
    //     ],
    //     "article": true,
    //     "tutorial": false
    //   },
    //   {
    //     "header": "Pipes in React",
    //     "date": "2016-01-12",
    //     "images": [
    //       "app/images/wordpress.jpg"
    //     ],
    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
    //     "text": "The browser is a familiar model of application navigation. We enter a URL in the address bar and the browser navigates to a corresponding page. We click links on the page and the browser navigates to a new page. ",
    //     "author": "React",
    //
    //     "category": [
    //       "JavaScript",
    //       "Framework",
    //       "MVC"
    //     ],
    //     "article": true,
    //     "tutorial": false
    //   }
    // )
    this.createCard();
  }

  createCard() {
    this.firebaseRef = this._firebaseService.getFirebaseRef();
    this.firebaseRef.child('cards').once("value",function(snapshot){
      console.log(snapshot.val());
        // chatRef.child("messages").push({
        //     username: username,
        //     message: message
        // })
    });

    // this.firebaseRef = this._firebaseService.getFirebaseRef();
    // var self = this;
    // var usersRef = this.firebaseRef.child("cards");
    // usersRef.set(
    //   {
    //     "header": "Pipes in Angular 2",
    //     "date": "2016-01-13",
    //     "images": [
    //       "app/images/angular.jpg"
    //     ],
    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
    //     "text": "In most applications, users navigate from one view to the next as they perform application tasks.",
    //     "author": "Angular",
    //     "category": [
    //       "JavaScript",
    //       "Framework",
    //       "MVC"
    //     ],
    //     "article": true,
    //     "tutorial": false
    //   },
    //   {
    //     "header": "Pipes in React",
    //     "date": "2016-01-12",
    //     "images": [
    //       "app/images/wordpress.jpg"
    //     ],
    //     "link": "https://angular.io/docs/ts/latest/guide/router.html",
    //     "text": "The browser is a familiar model of application navigation. We enter a URL in the address bar and the browser navigates to a corresponding page. We click links on the page and the browser navigates to a new page. ",
    //     "author": "React",
    //
    //     "category": [
    //       "JavaScript",
    //       "Framework",
    //       "MVC"
    //     ],
    //     "article": true,
    //     "tutorial": false
    //   }
    //   );

  }



}
