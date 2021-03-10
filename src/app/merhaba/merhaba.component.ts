import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-merhaba',
  templateUrl: './merhaba.component.html',
  styleUrls: ['./merhaba.component.css']
})
export class MerhabaComponent implements OnInit {
  @Input() isim: string;

  constructor() { }

  ngOnInit(): void {
  }

}
