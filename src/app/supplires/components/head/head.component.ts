import { Component, EventEmitter, Output, Renderer2 } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css']
})
export class HeadComponent {

  @Output() emitFromChild = new EventEmitter<boolean>();

  constructor(private translate: TranslateService , private renderer: Renderer2) {
    translate.setDefaultLang('en');
    translate.use('en');
  }

  isArabic:boolean = false;

  useLanguage(event: Event): void {

    if (event.target instanceof HTMLInputElement) {
      this.isArabic = event.target.checked;

      if (this.isArabic) {
        this.translate.use('ar');
        this.renderer.setAttribute(document.body, 'dir', 'rtl');
      } else {
        this.translate.use('en');
        this.renderer.removeAttribute(document.body, 'dir');
      }
      this.emitFromChild.emit(this.isArabic);
    }
  }
}
