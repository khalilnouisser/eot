import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {InsightsComponent} from './pages/insights/insights.component';
import {JobsComponent} from './pages/jobs/jobs.component';
import {AboutComponent} from './pages/about/about.component';
import {PartnersComponent} from './pages/partners/partners.component';
import {ContactComponent} from './pages/contact/contact.component';
import {MapComponent} from './pages/map/map.component';
import {InsightDetailsComponent} from './pages/insight-details/insight-details.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'map',
    component: MapComponent,
  },
  {
    path: 'insights',
    component: InsightsComponent,
  },
  {
    path: 'insights/:id',
    component: InsightDetailsComponent,
  },
  {
    path: 'jobs',
    component: JobsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'partners',
    component: PartnersComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
