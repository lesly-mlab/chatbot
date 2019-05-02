import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TransportService } from './services/transport-service';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule  } from '@angular/fire/database';
import { Observable } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase, 'Chat-Bot'),
    AngularFirestoreModule,
    AngularFireStorageModule, // imports firebase/storage only needed for storage features
    AppRoutingModule,
    AngularFireDatabaseModule 
  ],

  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    TransportService,
    AngularFireModule,
    AngularFireDatabaseModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
