import { Component, OnInit } from '@angular/core';
import {FlashcardService} from '../../services/flashcard.service';

@Component({
  selector: 'app-fc-shared-set-list',
  templateUrl: './fc-shared-set-list.component.html',
  styleUrls: ['./fc-shared-set-list.component.css']
})
export class FcSharedSetListComponent implements OnInit {

  sets: any = [];

  constructor(private fcService: FlashcardService) { }

  ngOnInit() {
    this.getSetList();
  }

  getSetList() {
    this.fcService.getAllSets("").then((res) => {
      this.sets = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }

}
