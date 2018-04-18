import { Component, OnInit } from '@angular/core';
import { FlashcardService } from '../../flashcard.service';

@Component({
  selector: 'app-fc-set-list',
  templateUrl: './fc-set-list.component.html',
  styleUrls: ['./fc-set-list.component.css']
})
export class FcSetListComponent implements OnInit {
  sets: any = [];

  constructor(private fcService: FlashcardService) { }

  ngOnInit() {
    this.getSetList();
  }

  getSetList() {
    this.fcService.getAllSets().then((res) => {
      this.sets = res;
      console.log(res);
    }, (err) => {
      console.log(err);
    });
  }



}
