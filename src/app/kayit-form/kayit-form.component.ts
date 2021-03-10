import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-kayit-form',
  templateUrl: './kayit-form.component.html',
  styleUrls: ['./kayit-form.component.css']
})
export class KayitFormComponent implements OnInit {
  kayitForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.kayitForm = this.formBuilder.group({
      ad: ['', Validators.required],
      sehir: ['hatay']
    });
  }

  formYolla() {
    console.log(this.kayitForm.value);
    alert('Form');
  }

  ngOnInit(): void {
  }

}
