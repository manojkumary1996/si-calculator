import { Component } from '@angular/core';
import { SimpleInterestService } from './simple-interest.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  p: number;
  r: number;
  t: number;
  si: number;
  new: number;


   constructor(public sInterest: SimpleInterestService) { }

  ngOnInit(): void {
  }

  siCalc() {
    this.si = this.sInterest.siCalculator(this.p, this.r, this.t);
    this.new = this.sInterest.amount(this.si, this.p);


  }
  clear() {
    this.si = null;
    this.new = null;
    this.p = null;
    this.r = null;
    this.t = null;
  }
}
