import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificateDownloadComponent } from './certificate-download/certificate-download.component';
import { CertificateGenerateComponent } from './certificate-generate/certificate-generate.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'Create', component: CertificateGenerateComponent },
  { path: 'Download', component: CertificateDownloadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
