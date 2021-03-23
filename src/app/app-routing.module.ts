import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InsightsComponent } from './pages/insights/insights.component';
import { JobsComponent } from './pages/jobs/jobs.component';
import { AboutComponent } from './pages/about/about.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MapComponent } from './pages/map/map.component';
import { InsightDetailsComponent } from './pages/insight-details/insight-details.component';
import { LoginComponent } from './pages/login/login.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AddComponent } from './pages/add/add.component';
import { StatResolver } from './core/resolvers/stat.resolver';
import { HomeInsightResolver } from './core/resolvers/home-insight.resolver';
import { InfographyInsightResolver } from './core/resolvers/infography-insight.resolver';
import { ReportInsightResolver } from './core/resolvers/report-insight.resolver';
import { PartnerResolver } from './core/resolvers/partner.resolver';
import { MapOrganisationsResolver } from './core/resolvers/map-organisations.resolver';
import { InsightDetailResolver } from './core/resolvers/insight-detail.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      stats: StatResolver,
      insights: HomeInsightResolver
    }
  },
  {
    path: 'map',
    component: MapComponent,
    resolve: {
      organisations: MapOrganisationsResolver
    }
  },
  {
    path: 'insights',
    component: InsightsComponent,
    resolve: {
      infography: InfographyInsightResolver,
      reports: ReportInsightResolver
    }
  },
  {
    path: 'insights/:id',
    component: InsightDetailsComponent,
    resolve: {
      insight: InsightDetailResolver
    }
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
    resolve: {
      partners: PartnerResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
    children: [
      {
        path: 'sign-in',
        component: SigninComponent,
      },
      {
        path: 'sign-up',
        component: SignupComponent,
      },
    ]
  },
  {
    path: 'add',
    component: AddComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
