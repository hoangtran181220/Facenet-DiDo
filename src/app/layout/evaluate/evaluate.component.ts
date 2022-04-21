import { Component, OnInit } from '@angular/core';
import { evaluateCustomer } from 'src/app/evaluate-customer';

@Component({
  selector: 'app-evaluate',
  templateUrl: './evaluate.component.html',
  styleUrls: ['./evaluate.component.css']
})
export class EvaluateComponent implements OnInit {
  evaluateCustomer = evaluateCustomer

  constructor() { }

  ngOnInit(): void {
  }

}
