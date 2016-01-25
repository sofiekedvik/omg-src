import {Component, OnInit} from 'angular2/core';
import {FirebaseService} from '../firebase/firebase.service';
import {ShortText} from '../pipes/shortText.pipe';

@Component({
  selector: 'card',
  templateUrl: "./app/templates/cards.html",
  pipes: [ShortText],
  providers: [FirebaseService]

})

export class CardsComponent {
  public firebaseRef;
  public articles;

  constructor(private _firebaseService: FirebaseService) { }; // create a private static link to ProductService not a normal new ProductService();

  ngOnInit() {
    this.firebaseRef = this._firebaseService.getFirebaseRef();
    this.getCard();
  }

  getCard(){
    var self = this; // här blir this appen
    this.firebaseRef.once("value", function(snapshot) {
      self.articles = snapshot.val().cards;
      var articleObject = self.articles;
        console.log(articleObject);
        for(var item in articleObject){
          // console.log(item.val());
        }
    })
  }



}
