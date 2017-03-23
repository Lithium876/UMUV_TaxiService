import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
 
 
  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyDURZs-S3auet2cvxfxL2qDbKwfAa6udJI",
    authDomain: "umuv-c30d9.firebaseapp.com",
    databaseURL: "https://umuv-c30d9.firebaseio.com",
    storageBucket: "umuv-c30d9.appspot.com",
    messagingSenderId: "22478716729"
  };
 
 
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}