import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css']
})
export class NgClassComponent implements OnInit {

  valorClassBinding: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  mudarClassBinding(){
    this.valorClassBinding = !this.valorClassBinding;
  }
}
