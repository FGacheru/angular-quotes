import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';


@Component({
  selector: 'app-toggle-details',
  templateUrl: './toggle-details.component.html',
  styleUrls: ['./toggle-details.component.css']
})
export class ToggleDetailsComponent implements OnInit {


  @Input() quote: Quotes;
  @Output() isComplete = new EventEmitter<boolean>();

  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
 
  constructor() { }

  ngOnInit(): void {
  }

}
