import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  hataliMi = true;
  gosterilsinMi = false;
  isimler = ['Ali', 'Ayşe', 'Mehmet'];

  constructor() { }

  ngOnInit(): void {
  }

}
