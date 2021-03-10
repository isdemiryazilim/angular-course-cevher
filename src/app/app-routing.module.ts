import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';


const routes: Routes = [
  { path: 'hakkinda', component: HakkindaComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
