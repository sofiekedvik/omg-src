import {Component, View} from 'angular2/core';
import {RouterLink} from 'angular2/router';

@Component({
    selector: 'nav-bar',
    directives: [RouterLink],
    templateUrl: "./app/templates/navigation.html"
})
export class Navigation {

}
