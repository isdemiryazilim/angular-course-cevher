import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

const KULLANICILAR = [
  { ad: 'Ahmet', soyad: 'Yılmaz' },
  { ad: 'Ayşe', soyad: 'Öztürk' },
  { ad: 'Mehmet', soyad: 'Çelik' },
  { ad: 'Fatma', soyad: 'Demir' },
];

@Component({
  selector: 'app-angular-material',
  templateUrl: './angular-material.component.html',
  styleUrls: ['./angular-material.component.css']
})
export class AngularMaterialComponent {
  displayedColumns: string[] = ['ad', 'soyad'];
  dataSource = KULLANICILAR;

  constructor(private snackBar: MatSnackBar) { }

  bildirimGoster() {
    this.snackBar.open('Bir Hata Oluştu', 'Kapat', {
      horizontalPosition: 'end',
      verticalPosition: 'top',
    });
  }
}
