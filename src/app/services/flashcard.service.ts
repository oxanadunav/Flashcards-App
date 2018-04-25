import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class FlashcardService {

  constructor(private http: Http) { }

  // get("/api/sets")
  getAllSets() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/sets')
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //get("/api/sets/:id")
  getSet(id) {
    return new Promise((resolve, reject) => {
      this.http.get('/api/sets/' + id)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res)
        }, (err) => {
          reject(err);
        });
    });
  }

  //post("/api/sets")
  createSet(data) {
    return new Promise((resolve, reject) => {
      this.http.post('/api/sets', data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  //put("/api/sets/:id")
  updateSet(id, data) {
    return new Promise((resolve, reject) => {
      this.http.put('/api/sets/'+id, data)
        .map(res => res.json())
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  // delete("/api/sets/:id")
  deleteSet(id) {
    return new Promise((resolve, reject) => {
      this.http.delete('/api/sets/'+id)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
