import {Component} from 'angular2/core';

var template = `
  <h2>Sign in</h2>
  <input id="username"type="text" name="name" value="">
  <input id="password" type="text" name="name" value="">
  <button id="login" type="submit" name="button">Login</button>
`;

@Component({
  template: template
})

export class Login {
}
