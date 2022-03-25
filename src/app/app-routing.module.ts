import { AddBookingComponent } from './components/add-booking/add-booking.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'add-booking', component: AddBookingComponent},
  {path: '**', pathMatch:'full', redirectTo: 'add-booking'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
