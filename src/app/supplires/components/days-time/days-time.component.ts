import { Component, ElementRef } from '@angular/core';
import { Day } from '../../interfaces/day';

@Component({
  selector: 'app-days-time',
  templateUrl: './days-time.component.html',
  styleUrls: ['./days-time.component.css']
})
export class DaysTimeComponent {

  isDayActivated!: boolean;


  toggleTimePicker(event: Event, day: { id: string; name: string; activated?: boolean; }) {
    const checkbox = event.target as HTMLInputElement;
    day.activated = checkbox.checked;

    if (checkbox && checkbox.checked) {
      this.isDayActivated = true;
    } else {
      this.isDayActivated = false;
    }

    if (day.activated === undefined) {
      day.activated = false;
    }
  }

  days = [
    { id: 'day1', name: 'days.saturday', activated: false, moreTime:[] },
    { id: 'day2', name: 'days.sunday', activated: false, moreTime:[]  },
    { id: 'day3', name: 'days.monday', activated: false, moreTime:[]  },
    { id: 'day4', name: 'days.tuesday', activated: false, moreTime:[]  },
    { id: 'day5', name: 'days.wednesday', activated: false, moreTime:[] },
    { id: 'day6', name: 'days.thursday', activated: false, moreTime:[]  },
    { id: 'day7', name: 'days.friday', activated: false, moreTime:[]  }
  ];

  cloneRow(day: Day) {
    day.moreTime.push(day);
  }

  removeClonedRow(day: Day) {
    day.moreTime.shift();
  }
}
