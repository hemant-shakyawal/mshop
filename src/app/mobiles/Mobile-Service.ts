import { IMobile } from './Imobile';
import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class MobileService{

    mobileList : IMobile[];

    private _productUrl = './assets/mobiles.json';
    constructor(private _http: HttpClient) { }
getProducts():Observable<IMobile[]> {
    return this._http.get<IMobile[]>(this._productUrl)
        .do(data => console.log('All: ' + JSON.stringify(data)))
        .catch(this.handleError);
}

private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}



//     getMobileList():IMobile[]{

// this.mobileList=[

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
//     },{
//         "msId": 3,
//         "name": "Lenovo Yoga",
//         "model": "Yoga-Tab3",
//         "releaseDate": "March 18, 2017",
//         "description": "Lenova Yoga",
//         "price": 20600,
//         "rating": 4.5,
//         "image": "nokia.jpg"
//       }


// ]
// return this.mobileList;

//     }

}
