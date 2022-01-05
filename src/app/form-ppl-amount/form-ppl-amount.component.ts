import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-ppl-amount',
  templateUrl: './form-ppl-amount.component.html',
  styleUrls: ['./form-ppl-amount.component.scss'],
})
export class FormPplAmountComponent implements OnInit {
  private currentNumber = 1;

  constructor() { }
  private increment() {
    this.currentNumber++;
  }
  
  private decrement() {
    this.currentNumber--;
  }
  ngOnInit() {}

}
