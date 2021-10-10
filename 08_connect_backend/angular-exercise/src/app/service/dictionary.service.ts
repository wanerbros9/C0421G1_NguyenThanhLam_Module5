import {Injectable} from '@angular/core';
import {Word} from '../model/word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: Word[] = [
    {word: 'orange', mean: 'cam'},
    {word: 'red', mean: 'đỏ'},
    {word: 'yellow', mean: 'vàng'},
    {word: 'blue', mean: 'xanh'},
    {word: 'pink', mean: 'hồng'},
  ];

  findAll() {
    return this.dictionaryList;
  }

  findByWord(stringWord: string) {
    for (let string of this.dictionaryList) {
      if (string.word == stringWord) {
        return string;
      }
    }
  }

  constructor() {
  }
}
