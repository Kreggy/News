import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/Http';
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'News';
  private articles = [];
  private search = "";
  private adress = "https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apiKey=7efbfb56607a43ee84875a0b3d0b1de0";
  faArrowCircleRight = faArrowCircleRight;

  clickedButton() {
    this.adress = "https://newsapi.org/v2/everything?q="+this.search+"&sortBy=publishedAt&apiKey=7efbfb56607a43ee84875a0b3d0b1de0";
    console.log(this.adress);
    this.articles = [];
    this.httpClient
    .get(this.adress)
    .subscribe(
      (data: any) => {
        this.articles = data["articles"];
        console.log("nice vol. 2");
        }, (error) => {
          console.log("fuck")
      }
    );
  }

  constructor(private httpClient: HttpClient) {
    this.httpClient
    .get(this.adress)
    .subscribe(
      (data: any) => {
        this.articles = data["articles"];
        console.log("nice vol. 2");
        }, (error) => {
          console.log("fuck vol. 2");
      }
    );
  }
}