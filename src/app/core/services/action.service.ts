import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})

export class ActionService {
  private _pairs;

  constructor(private http: HttpClient) {
  }


  getAllPairs() {
    return this.http.get<any>('api/btcprice/all').pipe(map(resp => {
      return resp;
    }));
  }

  // set pairs(value:string){}

}

