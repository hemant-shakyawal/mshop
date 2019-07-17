import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { IMobile } from './Imobile';

@Component({
  templateUrl: './mobile-detail.component.html',
  styleUrls: ['./mobile-detail.component.css']
})
export class MobileDetailComponent implements OnInit {

    pageTitle: string = 'Mobile Detail';
    mobile: IMobile;

    mobiles: IMobile[] = [
        {
            "msId": 1,
            "name": "Motorola",
            "model": "MG",
            "releaseDate": "March 19, 2016",
            "description": "Motorola Rocks.",
            "price": 10000,
            "rating": 3.2,
            "image": "motorola-moto-m-.jpeg"
        },
        {
            "msId": 2,
            "name": "Lenovo",
            "model": "K6 Power",
            "releaseDate": "March 18, 2016",
            "description": "Lenova Super",
            "price": 20000,
            "rating": 4.2,
            "image": "lenovo-k6-power.jpeg"
        },
        {
            "msId": 3,
            "name": "Nokia",
            "model": "520",
            "releaseDate": "May 21, 2016",
            "description": "Now Managed by Microsoft",
            "price": 15000,
            "rating": 4.8,
            "image": "nokia.jpg"
        },
        {
            "msId": 4,
            "name": "Letv",
            "model": "max2",
            "releaseDate": "May 15, 2016",
            "description": "Best Economical Phone",
            "price": 7500,
            "rating": 3.7,
            "image": "leeco.jpg"
        }
    ];

    constructor(private _route: ActivatedRoute,
        private _router: Router) {
      }

      ngOnInit() : void {
        let id = +this._route.snapshot.paramMap.get('id');
        this.pageTitle += `: ${id}`;
        this.mobile = this.mobiles.find(this.findMobile, [id]);
    }
  
    navigateBack(): void {
        this._router.navigate(['/mobiles']);
    }
    private findMobile(element: IMobile) {
        return element.msId == +this[0];
    }
  


}