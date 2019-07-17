import { Component,Input, OnChanges,Output,EventEmitter } from '@angular/core';


@Component({
    selector: 'mob-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    @Input() rating: number;
    starWidth: number;
    constructor() {
        console.log('in the constructor of SC');
    };


@Output() ratingClicked:EventEmitter<string>=new  EventEmitter<string>();

    ngOnChanges():void{
        console.log('On changes the constructor of SC');
        this.starWidth=this.rating * 86 / 5;

    }

    onClick():void{

console.log('On click changes the constructor of SC ');
this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);

}

    
}
