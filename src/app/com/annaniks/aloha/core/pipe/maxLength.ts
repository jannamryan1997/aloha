import { Pipe, PipeTransform } from "@angular/core";

@Pipe(
    { name: "maxLength" }
)

export class MaxLength implements PipeTransform {

    transform(value: string):string {
        if (value.length >= 20) {
           return value.slice(0,20)+'...';
        }
        else{
            return value;
        }
    }
}

