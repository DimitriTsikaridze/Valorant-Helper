//Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';

//Firebase
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
