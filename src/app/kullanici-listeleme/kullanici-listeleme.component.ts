import { Component, OnInit } from '@angular/core';
import { KullaniciService } from '../kullanici.service';
import { tap } from 'rxjs/operators'

@Component({
  selector: 'app-kullanici-listeleme',
  templateUrl: './kullanici-listeleme.component.html',
  styleUrls: ['./kullanici-listeleme.component.css']
})
export class KullaniciListelemeComponent implements OnInit {

  kullanicilar = [];
  kullanicilarBackend = [];

  constructor(private kullaniciService: KullaniciService) {
    this.kullanicilar = this.kullaniciService.kullaniciListesiGetir();

    this.kullaniciService.kullaniciListesiGetirBackend().pipe(
      tap(res => {
        this.kullanicilarBackend = res;
      })
    ).subscribe();

  }

  ngOnInit(): void {
  }

}
