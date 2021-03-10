import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-ve-output',
  templateUrl: './input-ve-output.component.html',
  styleUrls: ['./input-ve-output.component.css']
})
export class InputVeOutputComponent implements OnInit {

  ad = 'Ali';

  alertGoster(event) {
    alert(event)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
