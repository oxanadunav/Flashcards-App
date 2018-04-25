import { Component, OnInit } from '@angular/core';
import {FlashcardService} from '../../services/flashcard.service';
import {Router} from '@angular/router';
import { Set } from '../../set';

@Component({
  selector: 'app-new-set',
  templateUrl: './new-set.component.html',
  styleUrls: ['./new-set.component.css']
})
export class NewSetComponent implements OnInit {
  set = new Set();
  setLength: number = this.set.flashcards.length;
  langs: string[] = [
    'English',
    'Romanian',
    'German',
  ];

  radioSelected: string = "option1";

  constructor(private fcService: FlashcardService, private router: Router) {
    console.log(this.set);
  }

  ngOnInit() {
  }

  addRow() {
    this.set.flashcards.push({front:"",back:""});
    this.setLength += 1;
  }

  deleteFlashcard(flashcard) {
    console.log(flashcard);
    let index = this.set.flashcards.indexOf(flashcard);
    if (index > -1) {
      this.set.flashcards.splice(index, 1);
      this.setLength -= 1;
    }
    if (this.setLength == 0) {
      this.addRow();
    }
  }

  saveSet() {
    this.fcService.createSet(this.set).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/sets', id]);
    }, (err) => {
      console.log(err);
    });
  }

  generateFlashcards() {
    console.log("Generate flashcards entered");
  }

  get diagnostic() { return JSON.stringify(this.set); }
}
