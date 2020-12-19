import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleInterestService {
  si: number;
  
  constructor() { }

  siCalculator(p: number, r: number, t: number) {

    return this.si = p * r * t /(100*12);

  }

  amount(si: number, p: number) {

    return si + p;

  }
}
