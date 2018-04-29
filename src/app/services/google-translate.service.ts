import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GoogleTranslateService {

  translateURL = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDqIt6ShY8Zd9qyD9NFQ4UpGTXQy5bhq8c';


  constructor(private http: Http) { }

  translateWord(q, source, target) {
    return new Promise((resolve, reject) => {
      this.http.post(this.translateURL + '&q=' + q + '&source=' + source + '&target=' + target)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }



  // translateWord(q, source, target) {
  //   return new Promise((resolve, reject) => {
  //     let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
  //     let options = new RequestOptions({ headers: headers });
  //
  //     let params = new URLSearchParams();
  //     params.append('q', q);
  //     params.append('source', source);
  //     params.append('target', target);
  //     console.log(params);
  //     this.http.post(this.translateURL, params)
  //       .map(res => res.json())
  //       .subscribe(res => {
  //         resolve(res);
  //       }, (err) => {
  //         reject(err);
  //       });
  //   });
  // }

  translateWords(q, source, target) {
    return new Promise((resolve, reject) => {
      var url = this.translateURL + '&source=' + source + '&target=' + target;
      for (var i = 0; i < q.length; i++) {
        url = url + '&q=' + q[i];
      }
      this.http.post(url)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}

