import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HakkindaComponent } from './hakkinda/hakkinda.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { PipeComponent } from './pipe/pipe.component';


const routes: Routes = [
  { path: 'hakkinda', component: HakkindaComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'pipe', component: PipeComponent },
  { path: '', component: AnasayfaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
