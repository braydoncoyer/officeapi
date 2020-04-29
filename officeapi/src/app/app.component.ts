import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ApiService} from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  response: Object;
  inputValue = 'quotes/random';

  firstAPIResponse = `
    {
      "_id": "5e93b4a43af44260882e33b0",
      "firstname": "Michael",
      "lastname": "Scott",
      "__v": 0
    },
  `;

  randomQuoteCode = `
  {
    "data": {
      "_id": "5e9668186a66e65486e244a5",
      "content": "Bears, Beets, Battlestar Galactica.",
      "character": {
        "_id": "5e93b4f03af44260882e33b1",
        "firstname": "Jim",
        "lastname": "Halpert",
        "__v": 0
      },
      "__v": 0
    }
 }
  `;

  characterResourceResponse = `
    "data": {
      "_id": "5e93b4f03af44260882e33b1",
      "firstname": "Jim",
      "lastname": "Halpert",
      "__v": 0
    }
  `;

  episodeResourceResponse = `
  "data": {
    "_id": "5e94d646f733a1332868e1dc",
    "title": "Pilot",
    "description": "A documentary crew gives a firsthand introduction to the staff of the Scranton branch of the Dunder Mifflin Paper Company, managed by Michael Scott.",
    "airDate": "2005-03-24T06:00:00.000Z",
    "__v": 0
  }
  `;

  crewResourceResponse = `
  "data": {
    "_id": "5e9524139511994a07f9a317",
    "name": "Michael Schur",
    "role": "Writer/Actor",
    "__v": 0
  }
  `;

  constructor(private apiService: ApiService, private ref: ChangeDetectorRef) {}

  ngOnInit() {
    this.apiService.get(this.inputValue).subscribe(result => {
      this.response = result;
    });
  }

  fetchData() {
    this.apiService.get(this.inputValue).subscribe(result => {
      this.response = null;
      this.ref.detectChanges();
      if (result.length > 10) {
        this.response = result.slice(0, 5);
      } else {
        this.response = result;
      }
    });
  }

  suggestionClicked(value: any) {
    this.response = null;
    this.inputValue = value;
    this.ref.detectChanges();
    this.fetchData();
  }
}
