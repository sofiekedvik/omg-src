///<reference path='../firebase.d.ts'/>

import {Component,View} from 'angular2/core';
import {NgForm} from 'angular2/common';



var template = `
  <login>
  <h2>Sign in</h2>
  <input id="username" #username name="username" [(ngModel)]='user.name' type="text">
  <input id="password" #password name="password" [(ngModel)]='user.password' type="text">
  <button (click)="logInputData(username.value)">Add Todo</button>
  </login>
`;

@Component({
  selector: 'login',
  template: template
})

// @View({
//   template: template
// })

export class Login {

  constructor(
    public firebase: string,
    public username: string,
    public password: string,
    public text: string
  ){ }

  // var firebase = new Firebase("https://omgsrc.firebaseio.com");

  // function logInputData(username, password){
  //   console.log(username);
  // }
  // hämta input data
    // verifiera
    // sätt variabler

    // function typeSome(text){
    //   console.log(text);
    // }
  // firebase.createUser({
  //   email    : "lookforadmir@gmail.com",
  //   password : "monkey"
  // }, function(error, userData) {
  //   if (error) {
  //     console.log("Error creating user:", error);
  //   } else {
  //     console.log("Successfully created user account with uid:", userData.uid);
  //   }
  // });

  // function getUserInput(){
  //   var username = docuement.querySelector('#username').value;
  //   var password = docuement.querySelector('#passoword').value;
  //
  //   userLogin(username, password);
  //
  //   function userLogin(username, password){
  //     firebase.authWithPassword({
  //      email    : username,
  //      password : password
  //      }, function(error, authData) {
  //        if (error) {
  //          console.log("Login Failed!", error);
  //        } else {
  //         console.log("Authenticated successfully with payload:", authData);
  //       }
  //     });
  //   }
  //
  // }

  // function createAUser(firebase){
  //   firebase.createUser({
  //   // email    : … ,
  //   // password : …
  //   }, function(error, userData) {
  //     if (error) {
  //       console.log("Error creating user:", error);
  //     } else {
  //       console.log("Successfully created user account with uid:", userData.uid);
  //     }
  //   })
  // }

}
