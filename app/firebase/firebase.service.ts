import {Injectable} from 'angular2/core';

@Injectable()

export class FirebaseService{
  public firebaseRef = new Firebase("https://omgsrc.firebaseio.com/");


  getFirebaseRef(){
    return this.firebaseRef;
  }
}
