import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';
import { InputVeOutputComponent } from './input-ve-output/input-ve-output.component';
import { DirectivesComponent } from './directives/directives.component';
import { KullaniciListelemeComponent } from './kullanici-listeleme/kullanici-listeleme.component';
import { KayitFormComponent } from './kayit-form/kayit-form.component';
import { CokluDilComponent } from './coklu-dil/coklu-dil.component';
import { AngularMaterialComponent } from './angular-material/angular-material.component';


const routes: Routes = [
  { path: 'hakkinda', component: HakkindaComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'input-ve-output', component: InputVeOutputComponent },
  { path: 'directives', component: DirectivesComponent },
  { path: 'service', component: KullaniciListelemeComponent },
  { path: 'kayit-form', component: KayitFormComponent },
  { path: 'coklu-dil', component: CokluDilComponent },
  { path: 'angular-material', component: AngularMaterialComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
