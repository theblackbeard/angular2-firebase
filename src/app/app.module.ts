import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListingsComponent } from './components/listings/listings.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListingComponent } from './components/listing/listing.component';
import { AddListingComponent } from './components/add-listing/add-listing.component';
import { EditListingComponent } from './components/edit-listing/edit-listing.component';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';
import { FirebaseService} from './services/firebase.service';
import { FlashMessagesModule} from 'angular2-flash-messages';

export const firebaseConfig = {
  apiKey: 'AIzaSyDHOjgJBw8V-0BRIUTVCw3SDYvDKumrsA8',
  authDomain: 'proplistings-51af7.firebaseapp.com',
  databaseURL: 'https://proplistings-51af7.firebaseio.com',
  storageBucket: 'proplistings-51af7.appspot.com',
  messagingSenderId: '994827684299'
};

const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
};

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'listings', component: ListingsComponent },
  {path: 'listing/:id', component: ListingComponent },
  {path: 'add-listings', component: AddListingComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListingsComponent,
    NavbarComponent,
    ListingComponent,
    AddListingComponent,
    EditListingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
