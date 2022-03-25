
import {TranslateService} from './services/translate.service';

//angular
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//module
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// components
import { AppComponent } from './app.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { HeaderComponent } from './components/header/header.component';
import { AddBookingComponent } from './components/add-booking/add-booking.component';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export function translateFactory(provider: TranslateService){
return() => provider.getData();
}

@NgModule({
  declarations: [
    AppComponent,
    TranslatePipe,
    HeaderComponent,
    AddBookingComponent,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CalendarModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    TranslateService,
    {
      provide: APP_INITIALIZER,
      useFactory: translateFactory,
      deps:[TranslateService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
