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
    "firstName": "Michael",
    "id": 1,
    "lastName": "Scott"
  }
  `;

  randomQuoteCode = `
  {
    "id": 66,
    "content": "Shut up about the sun. SHUT UP ABOUT THE SUN!",
    "character": {
        "id": 15,
        "firstName": "Gabe",
        "lastName": "Lewis"
    }
  }
  `;

  characterResourceResponse = `
  {
    "id": 2,
    "firstName": "Jim",
    "lastName": "Halpert"
  }
  `

  episodeResourceResponse = `
  {
    "id": 70,
    "episodeTitle": "Pilot",
    "episodeDescription": "A documentary crew gives a firsthand introduction to the staff of the Scranton branch of the Dunder Mifflin Paper Company, managed by Michael Scott.",
    "season": 1,
    "episode": 1,
    "director": "Ken Kwapis",
    "airDate": "3905-04-24T05:00:00.000+0000"
  }
  `

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
