import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherMainComponent } from './pages/weather-main/weather-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'weather',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WeatherMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WeatherRoutingModule { }
