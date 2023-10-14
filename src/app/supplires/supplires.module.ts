import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuppliresRoutingModule } from './supplires-routing.module';
import { SuppliresComponent } from './supplires.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HeadComponent } from '../supplires/components/head/head.component';
import { SupplierComponent } from '../supplires/components/supplier/supplier.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AvailableSupplierComponent } from '../supplires/components/available-supplier/available-supplier.component';
import { WorkingHoursComponent } from '../supplires/components/working-hours/working-hours.component';
import { DaysTimeComponent } from '../supplires/components/days-time/days-time.component';


@NgModule({
  declarations: [
    SuppliresComponent,
    HeadComponent,
    SupplierComponent,
    AvailableSupplierComponent,
    WorkingHoursComponent,
    DaysTimeComponent
  ],
  imports: [
    CommonModule,
    SuppliresRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
  ]
})
export class SuppliresModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}
