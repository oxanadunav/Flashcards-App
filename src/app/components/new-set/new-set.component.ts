import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FlashcardService} from '../../services/flashcard.service';
import {GoogleTranslateService} from '../../services/google-translate.service';
import { Set } from '../../set';
import {SupportedLanguages} from '../../supported-languages';

@Component({
  selector: 'app-new-set',
  templateUrl: './new-set.component.html',
  styleUrls: ['./new-set.component.css']
})
export class NewSetComponent implements OnInit {
  set = new Set();
  setLength: number = this.set.flashcards.length;
  radioSelected: string = "option1";
  supportedLanguages = new SupportedLanguages();
  languages = this.supportedLanguages.languages;
  from: string;
  to: string;
  notSelectedLanguages: boolean = true;
  notGenerated: boolean = true;
  wordList = [];
  wordListTextArea = "";

  constructor(private fcService: FlashcardService, private gtranslateService: GoogleTranslateService, private router: Router) {
  }

  ngOnInit() {
  }

  saveSet() {
    this.set.nrOfCards = this.set.flashcards.length;
    console.log(this.set.nrOfCards);
    this.fcService.createSet(this.set).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/sets', id]);
    }, (err) => {
      console.log(err);
    });
  }

  addRow() {
    this.set.flashcards.push({front:"",back:""});
    this.setLength += 1;
  }

  deleteFlashcard(flashcard) {
    console.log("Delete:", flashcard);
    let index = this.set.flashcards.indexOf(flashcard);
    if (index > -1) {
      this.set.flashcards.splice(index, 1);
      this.setLength -= 1;
    }
    if (this.setLength == 0) {
      this.addRow();
    }
  }

  getForeignLanguage() {
    var languageObj = this.languages.find(o => o.name === this.set.fromLanguage);
    this.from = languageObj.language;
    this.notSelectedLanguages = !((this.set.fromLanguage) && (this.set.toLanguage));
  }

  getBaseLanguage() {
    var languageObj = this.languages.find(o => o.name === this.set.toLanguage);
    this.to = languageObj.language;
    this.notSelectedLanguages = !((this.set.fromLanguage) && (this.set.toLanguage));
  }

  enterPressed(id:number) {
    this.translateWord(id);
    this.addRow();
  }

  translateWord(id:number) {
    this.gtranslateService.translateWord(this.set.flashcards[id].front, this.from, this.to).then((res) => {
      this.set.flashcards[id].back = res["data"].translations[0].translatedText;
    }, (err) => {
      console.log(err);
    });
  }


  translateWords() {
    this.gtranslateService.translateWords(this.wordList, this.from, this.to).then((res) => {
      this.introduceFlashcards(res["data"].translations);
    }, (err) => {
      console.log(err);
    });

  }

  introduceFlashcards(translatedWordList) {
    for (var i = 0; i < this.wordList.length; i++) {
      this.set.flashcards.push({front: this.wordList[i],back: translatedWordList[i].translatedText});
      this.setLength = this.wordList.length;
    }
  }

  generateFlashcards() {
    if (!this.notSelectedLanguages) {
      if (this.setLength == 1) {
        this.set.flashcards.splice(0, 1);
        this.setLength -= 1;
      }
      this.notGenerated = false;
      this.wordList = this.wordListTextArea.split(' ');
      if (this.wordList.length == 1) {
        this.wordList = this.wordListTextArea.split(/\n/);
      }

      this.translateWords();
    }

  }

}
