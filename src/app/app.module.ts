import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { PipeComponent } from './pipe/pipe.component';
import { InputVeOutputComponent } from './input-ve-output/input-ve-output.component';
import { MerhabaComponent } from './merhaba/merhaba.component';
import { DirectivesComponent } from './directives/directives.component';
import { KullaniciListelemeComponent } from './kullanici-listeleme/kullanici-listeleme.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    AnasayfaComponent,
    HakkindaComponent,
    DataBindingComponent,
    PipeComponent,
    InputVeOutputComponent,
    MerhabaComponent,
    DirectivesComponent,
    KullaniciListelemeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
