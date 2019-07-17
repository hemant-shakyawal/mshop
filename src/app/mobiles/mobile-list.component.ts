import { Component, OnInit } from '@angular/core';
import { IMobile } from './IMobile';
import { MobileService } from './Mobile-Service';
@Component({
    selector: 'mobile-mobiles',
    templateUrl: './mobile-list.component.html',
    styleUrls: ['./mobile-list.component.css']
})
export class ProductListComponent implements OnInit {

    pageTitle: string = 'Moble shop';
    imgageUrl: string = 'assets/images/';
    showImages: boolean = true;
    redcolor: string = 'redbg';
    _listFilter: string;
    errorMessage: string;

    mobiles: IMobile[];
    filteredMobiles: IMobile[];

    get listFilter(): string {
        return this._listFilter;

    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredMobiles = this.listFilter ? this.performFilter(this.listFilter) : this.mobiles;

    }

    //old code befor service
    // mobiles: IMobile[] = [
    //     {
    //         "msId": 1,
    //         "name": "Motorola",
    //         "model": "MG",
    //         "releaseDate": "March 19, 2016",
    //         "description": "Motorola Rocks.",
    //         "price": 10000,
    //         "rating": 3.2,
    //         "image": "motorola-moto-m-.jpeg"
    //     },
    //     {
    //         "msId": 2,
    //         "name": "Lenovo",
    //         "model": "K6 Power",
    //         "releaseDate": "March 18, 2016",
    //         "description": "Lenova Super",
    //         "price": 20000,
    //         "rating": 4.2,
    //         "image": "lenovo-k6-power.jpeg"
    //     }
    // ];



    constructor(private _mobileSevice: MobileService) {
        //oldcode
        // this.filteredMobiles=this.mobiles;
        // this._listFilter=''
    }

    displayMobile(): void {
        console.log('this is my mobile');
        (this.showImages == true) ? this.showImages = false : this.showImages = true;

    }

    ngOnInit(): void {

        this._mobileSevice.getProducts()
            .subscribe(mobiles => {
                this.mobiles = mobiles;
                this.filteredMobiles = this.mobiles;
            },
                error => this.errorMessage = <any>error);

        //this.mobiles=this._mobileSevice.getMobileList();
        //this.filteredMobiles=this.mobiles;
        //old code 
        // console.log('oninit of angular is initialized');
        // this.mobiles[0].name=this.mobiles[0].name.toUpperCase();
    }


    performFilter(filterBy: string): IMobile[] {

        filterBy = filterBy.toLocaleLowerCase();
        return this.mobiles.filter((mobile: IMobile) =>
            mobile.name.toLocaleLowerCase().indexOf(filterBy) !== -1);


    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Mobile List: ' + message;


    }
}
