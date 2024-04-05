import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './site/home/home.component';
import { ContactComponent } from './site/contact/contact.component';
import { HeaderComponent } from './site/header/header.component';
import { FooterComponent } from './site/footer/footer.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
