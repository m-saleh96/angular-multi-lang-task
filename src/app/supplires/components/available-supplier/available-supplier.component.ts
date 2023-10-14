import { Component, Input } from '@angular/core';
import { CounterService } from '../../services/counter.service';



@Component({
  selector: 'app-available-supplier',
  templateUrl: './available-supplier.component.html',
  styleUrls: ['./available-supplier.component.css']
})

export class AvailableSupplierComponent {
  @Input()  isArabic!:boolean;

  selectedAppointment: string ='multi';

  constructor(private counterService:CounterService){}

  get isAppointmentSelected(): boolean {
    return this.selectedAppointment === 'multi';
  }

  selectedOption: string ='fixed';
  minutes: number = 0;


  get isFixedTimeSelected(): boolean {
    if (this.selectedOption === 'service') {
      this.minutes = 0;
    }
    return this.selectedOption === 'fixed';
  }


  increaseMinutes() {
    this.minutes++;
    this.counterService.setCounter(this.minutes);
  }

  decreaseMinutes() {
    if (this.minutes > 0) {
      this.minutes--;
      this.counterService.setCounter(this.minutes);
    }
  }

}
