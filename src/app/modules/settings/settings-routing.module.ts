import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './pages/cities/cities.component';
import { CountriesComponent } from './pages/countries/countries.component';
import { SettingsMainComponent } from './pages/settings-main/settings-main.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'settings',
    pathMatch: 'full'
  },
  {
    path: '',
    component: SettingsMainComponent,
    children: [
      {
        path: 'countries',
        component: CountriesComponent
      },
      {
        path: 'cities',
        component: CitiesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
