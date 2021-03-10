import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-merhaba',
  templateUrl: './merhaba.component.html',
  styleUrls: ['./merhaba.component.css']
})
export class MerhabaComponent implements OnInit {
  @Input() isim: string;
  @Output() clickButton = new EventEmitter<string>();

  click(message: string) {
    this.clickButton.emit(message);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
