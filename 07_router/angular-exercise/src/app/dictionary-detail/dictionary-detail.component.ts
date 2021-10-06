import {Component, OnInit} from '@angular/core';
import {Word} from '../model/word';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {

  dictionaryDetail: Word | null | undefined;

  constructor(private activatedRoute: ActivatedRoute, private dictionaryService: DictionaryService) {
    activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const name = paramMap.get('word');
      console.log(name);
      this.dictionaryDetail = dictionaryService.findByWord(name);
    });
  }

  ngOnInit(): void {
  }

}
