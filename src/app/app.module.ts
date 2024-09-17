import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingReportComponent } from './components/billing-report/billing-report.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { AgGridModule } from 'ag-grid-angular';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { HttpClientModule } from '@angular/common/http';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { FilePdfOutline, FileExcelOutline } from '@ant-design/icons-angular/icons';


// Angular Chart Component
import { AgCharts } from 'ag-charts-angular';
// Chart Options Type Interface
import { AgChartOptions } from 'ag-charts-community';


@NgModule({
  declarations: [
    AppComponent,
    BillingReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    NzLayoutModule,
    NzFormModule,
    NzSelectModule,
    NzButtonModule,
    NzDatePickerModule,
    NzGridModule,
    AgGridModule,
    NzTableModule,
    NzCardModule,
    NzRadioModule,
    HttpClientModule,
    NzSpaceModule,
    NzIconModule,
    AgCharts
  ],
  providers: [
    provideNzI18n(en_US),
    { provide: NZ_ICONS, useValue: [FilePdfOutline, FileExcelOutline] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
