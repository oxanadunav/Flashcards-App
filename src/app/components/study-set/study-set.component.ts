import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FcSetComponent} from '../fc-set/fc-set.component';

@Component({
  selector: 'app-study-set',
  templateUrl: './study-set.component.html',
  styleUrls: ['./study-set.component.css']
})
export class StudySetComponent implements OnInit {
  @Input() flashcards;
  @Output() messageEvent = new EventEmitter();

  // Data for flashcards in template
  setLength: number;
  usedFlashcards;
  index;
  flashcard: String;

  modeNotChosen = true;
  memorizeMode = false;
  testMode = false;

  // For memorize mode
  shuffled = false;
  shuffledEdited = false;
  flipped = false;

  frontSide = true; //show front first
  oneSide = true; //show just one side

  // For test mode
  testOptionsChosen: boolean;
  orderRadioSelected: string = "orderRadio1";
  sideRadioSelected: string = "sideRadio1";

  answerShown = false;
  testFinished: boolean;
  rightAnswered: number;
  wrongAnswered: number;

  constructor() {
  }

  ngOnInit() {
    console.log("flashcards from fc-set parent", this.flashcards);
    this.setLength = this.flashcards.length;
    this.usedFlashcards = this.flashcards;
    this.index = 0; // index in flashcards array
    this.flashcard = this.usedFlashcards[this.index]; // initial flashcard
  }

  // To see flashcards
  sendMessageToFcSet() {
    this.messageEvent.emit();
  }

  memorizePressed() {
    this.memorizeMode = true;
    this.modeNotChosen = false;
    this.testMode = false;
  }

  testPressed() {
    this.testOptionsChosen = false;
    this.testMode = true;
    this.modeNotChosen = false;
    this.memorizeMode = false;
  }

  studyAgain() {
    this.modeNotChosen = true;
    this.memorizeMode = false;
    this.testMode = false;
    this.index = 0;
  }

  /* In memorize mode */
  btnShufflePressed() {
    if (this.shuffled) {
      this.usedFlashcards = this.flashcards;
    }
    else {
      this.usedFlashcards = this.shuffle(this.flashcards.slice(0)); //send a copy of array
    }
    this.shuffled = !this.shuffled;
    console.log("Shuffle pressed:", this.usedFlashcards);

    //show info about shuffle
    this.shuffledEdited = true;
    //wait 3 Seconds and hide
    setTimeout(function() {
      this.shuffledEdited = false;
    }.bind(this), 1000);
    this.flashcard = this.usedFlashcards[this.index];
  }

  shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  showPrevious() {
      this.index--;
      this.flashcard = this.usedFlashcards[this.index];
      this.flipped = false;
  }

  showNext() {
      this.index++;
      this.flashcard = this.usedFlashcards[this.index];
      this.flipped = false;
  }


  /* In test mode */

  startTest() {
    this.testOptionsChosen = true;
    this.rightAnswered = 0;
    this.wrongAnswered = 0;
    this.testFinished = false;

    // if shuffled selected
    if (this.orderRadioSelected == "orderRadio1") {
      this.usedFlashcards = this.flashcards;
    }
    else {
      this.usedFlashcards = this.shuffle(this.flashcards.slice(0)); //send a copy of array
    }

    // back side was selected
    if (this.sideRadioSelected == "sideRadio2") {
      this.frontSide = false;
    }

    this.flashcard = this.usedFlashcards[this.index];
  }

  rightAnswer() {
    this.answerShown = !this.answerShown;
    this.index++;
    this.flashcard = this.usedFlashcards[this.index];
    this.rightAnswered++;
    if (this.index == this.usedFlashcards.length) {
      this.index--;
      this.testFinished = true;
    }
  }

  wrongAnswer() {
    this.answerShown = !this.answerShown;
    this.index++;
    this.flashcard = this.usedFlashcards[this.index];
    this.wrongAnswered++;
    if (this.index == this.usedFlashcards.length) {
      this.index--;
      this.testFinished = true;
    }
  }

}
