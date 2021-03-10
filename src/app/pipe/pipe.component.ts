import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  tarih = new Date();
  para = 14.99;

  constructor() { }

  ngOnInit(): void {
  }

}
