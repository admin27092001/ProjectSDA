import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-booking',
  templateUrl: './add-booking.component.html',
  styleUrls: ['./add-booking.component.css'],

})
export class AddBookingComponent implements OnInit {
  public options: string[];
  public locale: any;
  public today: Date;
  public formBooking: FormGroup;
  constructor(
    private formBulider: FormBuilder
  ) {
    this.options = ['title, credential, college-insurance, other']
    if (navigator.language == 'es') {
      this.locale = {
        firstDayOfWeek: 1,
        dayNames: ["domingo", "lunes", "martes", "miércoles", "jueves", "viernes", "sábado"],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"],
        monthNamesShort: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
        today: 'Hoy',
        clear: 'Borrar'
      }
    } else {
      this.locale = {
        firstDayOfWeek: 0,
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        today: 'Today',
        clear: 'Clear',
        dateFormat: 'mm/dd/yy',
        weekHeader: 'Wk'
      }
    }
   this.today = new Date();
   if(this.today.getMinutes()<30){
     this.today.setMinutes(30);
   }else{
     this.today.setHours(this.today.getHours()+1);
     this.today.setMinutes(0);
   }
   this.today.setSeconds(0);
   this.today.setMilliseconds(0);

   this.formBooking = this.formBulider.group({
     name: new FormControl('',Validators.required),
     date: new FormControl(this.today),
     service: new FormControl(this.options[0])
   })
  }

  ngOnInit() {
  }
  addBooking(){
    console.log(this.formBooking.value);
  }
}
