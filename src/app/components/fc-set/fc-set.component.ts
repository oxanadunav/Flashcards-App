import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FlashcardService} from '../../services/flashcard.service';
import {StudySetComponent} from '../study-set/study-set.component';

@Component({
  selector: 'app-fc-set',
  templateUrl: './fc-set.component.html',
  styleUrls: ['./fc-set.component.css']
})
export class FcSetComponent implements OnInit  {
  set = {};

  // set = {
  //   _id: '5ad99c20414a797db1262f33',
  //   name: 'anotimpuri',
  //   fromLanguage: 'English',
  //   toLanguage: 'Romanian',
  //   nrOfCards: 10,
  //   flashcards: [{
  //     front: 'winter',
  //     back: 'iarna'
  //   }, {
  //     front: 'spring',
  //     back: 'primavara'
  //   }, {
  //     front: 'summer',
  //     back: 'vara'
  //   }, {
  //     front: 'autumn',
  //     back: 'toamna'
  //   }]
  // };

  viewFlashcards = true;
  viewStudySet = false;
  viewStatistics = false;

  constructor(private route: ActivatedRoute, private fcService: FlashcardService) {
    console.log(this.set);
  }

  ngOnInit () {
    this.getSet(this.route.snapshot.params['id']);
  }

  // Show the flashcards
  receiveMessageFromStudySet() {
    this.viewFlashcards = true;
    this.viewStudySet = false;
    this.viewStatistics = false;
  }

  getSet(id) {
    this.fcService.getSet(id).then((res) => {
      this.set = res;
      console.log(this.set);
    }, (err) => {
      console.log(err);
    });
  }

  btnStudySetPressed() {
    this.viewStudySet = true;
    this.viewFlashcards = false;
    this.viewStatistics = false;
  }

  btnViewStatisticsPressed() {
    this.viewStatistics = true;
    this.viewFlashcards = false;
    this.viewStudySet = false;
  }
}

