import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

export const firebaseConfig = {
	apiKey: "AIzaSyCU-8r_GSrShg2BvbcOW6eB9DdA5IaXuvI",
    authDomain: "testapp-26869.firebaseapp.com",
    databaseURL: "https://testapp-26869.firebaseio.com",
    projectId: "testapp-26869",
    storageBucket: "testapp-26869.appspot.com",
    messagingSenderId: "170920931040"
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	HttpModule,
	AngularFireModule.initializeApp(firebaseConfig),
	AngularFireDatabaseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
