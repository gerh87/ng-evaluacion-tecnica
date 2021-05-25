import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children:
      [
        {
          path: 'settings',
          loadChildren: () =>
            import('./modules/settings/settings.module').then(m => m.SettingsModule)
        },
        {
          path: 'weather',
          loadChildren: () =>
            import('./modules/weather/weather.module').then(m => m.WeatherModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
