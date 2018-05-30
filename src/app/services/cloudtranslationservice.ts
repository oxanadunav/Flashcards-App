import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CloudTranslationService {

  translateURL = 'https://translation.googleapis.com/language/translate/v2?key=...';

  constructor(private http: HttpClient) { }

  translateWord(q, source, target) {
    return new Promise((resolve, reject) => {
      this.http.post(this.translateURL, {q: q, source: source, target: target})
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  translateWords(q, source, target) {
    return new Promise((resolve, reject) => {
      var url = this.translateURL;
      for (var i = 0; i < q.length; i++) {
        url = url + '&q=' + q[i];
      }
      this.http.post(url, {source: source, target: target})
        .subscribe(res => {
          resolve(res);
          console.log(res);
        }, (err) => {
          reject(err);
        });
    });
  }
}

