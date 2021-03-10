import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KullaniciService {

  constructor(private http: HttpClient) { }

  kullaniciListesiGetir() {
    return [
      { ad: 'Ali', soyad: 'Yılmaz' },
      { ad: 'Ayşe', soyad: 'Demir' },
    ];
  }

  kullaniciListesiGetirBackend() {
    const url = 'http://localhost:7070/egitim-kullanicilar';
    return this.http.get<any>(url);
  }
}
