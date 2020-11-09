import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[] = [
    new Quotes(1, '“Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.”','Author name: Brian Tracy',"Franko",new Date(2000,3,14)),
    new Quotes(2,'“The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” ','Author name: Winston Churchill',"Franko",new Date(2015,7,3)),
    new Quotes(3,'“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.”','Author name: Steve Jobs',"Franko",new Date(2016,12,1))
  ];

  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  upvotes(index) {

    this.quotes[index].like++;
  }
  downvotes(index) {

    this.quotes[index].unlike++;
  }


  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  highestUpVote() {
    let appHighUpvote = new Quotes(0, '', '','', new Date());
    for (let i = 0; i < this.quotes.length; i++) {
      if (this.quotes[i].like > appHighUpvote.like) {
        appHighUpvote = this.quotes[i];
      }
    }
    if (appHighUpvote.like > 0) {
      return appHighUpvote;
    } else {
      return;
    }
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  constructor() { }

  ngOnInit() {
  }

}
