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

  constructor(private fcService: FlashcardService, private gtranslateService: GoogleTranslateService, private router: Router) {
  }

  ngOnInit() {
  }

  // getLanguages() {
  //   this.gtranslateService.getLanguages().then((res) => {
  //     this.languages = res.data.languages;
  //   }, (err) => {
  //     console.log(err);
  //   });
  // }


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

  translateWord(id:number) {
    this.gtranslateService.translateWord(this.set.flashcards[id].front, this.from, this.to).then((res) => {
      this.set.flashcards[id].back = res["data"].translations[0].translatedText;
    }, (err) => {
      console.log(err);
    });

  }

  getBaseLanguage() {
    var languageObj = this.languages.find(o => o.name === this.set.fromLanguage);
    this.from = languageObj.language;
  }

  getForeignLanguage() {
    var languageObj = this.languages.find(o => o.name === this.set.toLanguage);
    this.to = languageObj.language;
  }

  get diagnostic() {
    return JSON.stringify(this.set);
  }
}
