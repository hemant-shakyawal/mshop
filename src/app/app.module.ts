import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProductListComponent } from './mobiles/mobile-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SeparatorPipe } from  './shared/separator-pipe';
import { StarComponent } from './shared/star.component';
import { MobileService } from './mobiles/Mobile-Service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { MobileDetailComponent } from './mobiles/mobile-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
      SeparatorPipe,
      StarComponent,WelcomeComponent,MobileDetailComponent

  ],
  imports: [
    BrowserModule,FormsModule ,HttpClientModule,
    RouterModule.forRoot([
      { path: 'mobiles', component: ProductListComponent },
      { path: 'mobiles/:id', component: MobileDetailComponent },
      { path: 'welcome', component: WelcomeComponent },
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
  ])
  ],
  providers: [MobileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
