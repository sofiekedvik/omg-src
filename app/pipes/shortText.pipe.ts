import {Pipe, PipeTransform} from "angular2/core";

@Pipe({name: "shortText"})

export class ShortText implements PipeTransform {
	transform(argument: string){
		if(argument.length > 170){
			return argument.substring(0, 170) + " [ ... ]";
		} else {
			return argument;
		}
	}
}