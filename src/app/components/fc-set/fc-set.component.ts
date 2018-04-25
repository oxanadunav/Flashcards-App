import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FlashcardService} from '../../services/flashcard.service';

@Component({
  selector: 'app-fc-set',
  templateUrl: './fc-set.component.html',
  styleUrls: ['./fc-set.component.css']
})
export class FcSetComponent implements OnInit {

  set = {};

  constructor(private route: ActivatedRoute, private fcService: FlashcardService) {
    console.log(this.set);
  }

  ngOnInit () {
    this.getSet(this.route.snapshot.params['id']);
  }

  getSet(id) {
    this.fcService.getSet(id).then((res) => {
      this.set = res;
      console.log(this.set);
    }, (err) => {
      console.log(err);
    });
  }
}
