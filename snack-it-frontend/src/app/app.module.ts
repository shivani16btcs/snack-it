import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../header/header.component';
import { TaglineComponent } from 'src/tagline/tagline.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TaglineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
