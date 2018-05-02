import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FlashcardService} from '../../services/flashcard.service';
import {SupportedLanguages} from '../../supported-languages';
import {GoogleTranslateService} from '../../services/google-translate.service';
import {Set} from '../../set';
import {Flashcard} from '../../flashcard';

@Component({
  selector: 'app-edit-set',
  templateUrl: './edit-set.component.html',
  styleUrls: ['./edit-set.component.css']
})
export class EditSetComponent implements OnInit {
  // set = {
  //   // _id: '5ad99c20414a797db1262f33',
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
  set = new Set();

  setLength: number;
  radioSelected: string = "option1";
  supportedLanguages = new SupportedLanguages();
  languages = this.supportedLanguages.languages;
  from: string;
  to: string;
  notSelectedLanguages: boolean = false;
  notGenerated: boolean = true;
  wordList = [];
  wordListTextArea = "";
  infoName: string;

  constructor(private route: ActivatedRoute, private fcService: FlashcardService, private gtranslateService: GoogleTranslateService, private router: Router) {
  }

  ngOnInit () {
    this.getSet(this.route.snapshot.params['id']);
    console.log("Edit set entered. Current set:", this.set);
  }

  getSet(id) {
    this.fcService.getSet(id).then((res) => {
      Object.assign(this.set, res);
      this.getForeignLanguage();
      this.getBaseLanguage();
      this.setLength = this.set.flashcards.length;
      this.infoName = this.set.name;
    }, (err) => {
      console.log(err);
    });
  }

  updateSet() {
    console.log("Set updated. Update set:", this.set);
    this.set.nrOfCards = this.set.flashcards.length;
    console.log(this.set.nrOfCards);
    var id = this.route.snapshot.params['id'];
    this.fcService.updateSet(id, this.set).then((result) => {
      console.log("Set updated", this.set);
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


  // From list generate separate flashcards
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
