import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
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

}

