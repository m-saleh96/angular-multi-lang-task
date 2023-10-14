import { Component } from '@angular/core';

@Component({
  selector: 'app-working-hours',
  templateUrl: './working-hours.component.html',
  styleUrls: ['./working-hours.component.css']
})
export class WorkingHoursComponent {
  isTraditionalSettingsSelected = true;

  selectTraditionalSettings() {
    this.isTraditionalSettingsSelected = true;
  }

  selectAdvancedSettings() {
    this.isTraditionalSettingsSelected = false;
  }
}
