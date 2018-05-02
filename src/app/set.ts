import {Flashcard} from './flashcard';

export class Set {
  _id: string;
  name: string;
  description: string;
  fromLanguage: string;
  toLanguage: string;
  nrOfCards: number;
  createdOn: any;
  flashcards: Flashcard[];


  constructor() {
    this.nrOfCards = 0;
    this.createdOn = new Date();
    this.flashcards = [new Flashcard()];
  }
}
