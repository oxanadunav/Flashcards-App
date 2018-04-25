import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashcardService } from '../../services/flashcard.service';

@Component({
  selector: 'app-fc-set-list',
  templateUrl: './fc-set-list.component.html',
  styleUrls: ['./fc-set-list.component.css']
})
export class FcSetListComponent implements OnInit {
  sets: any = [];

  constructor(private route: ActivatedRoute, private router:Router, private fcService: FlashcardService) { }

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

  deleteSet(id) {
    this.fcService.deleteSet(id).then((result) => {
      this.getSetList();
    }, (err) => {
      console.log(err);
    });
  }



}
