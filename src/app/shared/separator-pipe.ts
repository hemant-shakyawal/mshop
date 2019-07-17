import { Pipe, PipeTransform } from "@angular/core";


@Pipe({

    name: 'separator'

})


export class  SeparatorPipe implements  PipeTransform{

    transform( value:string, charecter:string ) {

        return value.replace('-',charecter)

    }



}