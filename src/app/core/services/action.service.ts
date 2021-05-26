import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ActionService {
  private _active;

  constructor(private http: HttpClient) {
  }


  getAllPairs() {
    return this.http.get<any>('api/btcprice/all').pipe(map(resp => {
      return resp;
    }));
  }

  setStrategy(payload: any) {
    return this.http.post<any>('api/strategy/' + payload.name, payload).pipe(map(data => {
      console.log('data', data);
      return data;
    }));
  }

  getActiveStrategy() {
    return this.http.get<any>('api/strategy/all').pipe(map(data => {
      return data;
    }));
  }

  stopStrategy(name: string) {
    return this.http.delete<any>('api/strategy/' + name).pipe(map(data => {
      return data;
    }));
  }

  // set pairs(value:string){}
  set activeStartegy(value: any) {

  }
}

