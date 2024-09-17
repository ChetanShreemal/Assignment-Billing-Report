import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BillingService } from '../../billing.service';
import { AgChartOptions } from 'ag-charts-community';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { BillingReport } from '../../models/billing-report';

@Component({
  selector: 'app-billing-report',
  templateUrl: './billing-report.component.html',
  styleUrls: ['./billing-report.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class BillingReportComponent implements OnInit {
  mode = 'date';
  viewMode: string = 'tabular';
  dateMode = 'date';
  public options: AgChartOptions = {};
  dateFormat = 'yyyy/MM/dd';
  filterLocations: string[] = ['Any', 'Mumbai', 'Pune', 'Delhi', 'Banglore', 'Chennai']; // Mock locations
  locations = [];
  filterForm: FormGroup = this.fb.group({
    timeFrame: ['week', Validators.required], // Default to 'week'
    timeFrameDatePicker: ['', Validators.required], // Default to ''
    customRange: this.fb.group({
      startDate: [{ value: null, disabled: true }, Validators.required],
      endDate: [{ value: null, disabled: true }, Validators.required]
    }),
    locations: []
  });
  billingReports: BillingReport[] = [];
  filteredReports: BillingReport[] = [];

  constructor(private fb: FormBuilder, private billingService: BillingService) { }

  ngOnInit(): void {
    this.initializeForm();
    this.fetchBillingReports();
  }
  getTotalBalance(): number {
    return this.filteredReports.reduce((total, report) => total + (Number(report.bill_amount) || 0), 0);
  }

  private updateChart(): void {
    if (this.options) {
      this.options.data = [...new Map(this.filteredReports.map(item =>
        [item['transactionDate'], item])).values()].map(x => {
          let temp: any = {
            transactionDate: x.transactionDate,
          }
          this.filteredReports.forEach(y => {
            temp[x.location] = +x.bill_amount
          })
          return temp;
        })
      console.log(this.options.data);
      this.options.series = [...new Map(this.filteredReports.map(item =>
        [item['location'], item])).values()].map(x => {
          let temp: any = {
            type: "line",
            xKey: "transactionDate",
            yKey: x.location,
            yName: x.location,
          }
          return temp;
        })
      console.log(this.options.series);
    }
  }

  // View mode switching logic
  onViewModeChange(mode: string): void {
    this.viewMode = mode;
  }

  onDateModeChange(selectedMode: string): void {
    if (selectedMode === 'single') {
      this.mode = 'date';
    }
  }

  // Export chart to PDF
  exportChartToPDF(): void {
    const chartElement = document.querySelector('ag-charts') as HTMLElement | null;
    if (chartElement) {
      html2canvas(chartElement).then(canvas => {
        const pdf = new jsPDF('landscape', 'mm', 'a4');
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = 210; // PDF width in mm (A4 size)
        const imgHeight = canvas.height * imgWidth / canvas.width;

        pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('chart-report.pdf');
      });
    }
  }

  // Export table to Excel
  exportTableToExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.billingReports || []);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Billing Reports': worksheet },
      SheetNames: ['Billing Reports']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, 'billing-report');
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    saveAs(data, `${fileName}.xlsx`);
  }

  // Initialize the form with appropriate controls and validators
  private initializeForm(): void {
    this.filterForm.get('timeFrame')?.valueChanges.subscribe(value => {
      this.onTimeFrameChange(value);
    });

  }

  // Fetch billing reports from service
  private fetchBillingReports(): void {
    this.billingService.getBillingReports().subscribe({
      next: (data: BillingReport[]) => {
        this.billingReports = data; // Set the billingReports to the received data
        this.filteredReports = data; // Initialize filteredReports
        this.updateChart(); // Update the chart when data is fetched
      },
      error: (err) => {
        console.error('Error fetching billing reports:', err);
      }
    });
  }

  // Handle custom range enabling/disabling
  public onTimeFrameChange(value: string): void {
    const customRangeControl = this.filterForm.get('customRange') as FormGroup;
    if (value === 'dateRange') {
      customRangeControl.enable();
    } else {
      customRangeControl.disable();
      customRangeControl.reset();
    }
  }

  private applyFilters(): void {
    const filters = this.filterForm.value;
    const { timeFrame, timeFrameDatePicker, customRange, locations } = filters;
    let filtered: BillingReport[] = [...this.billingReports];
    let selected: any = [];

    // Filter by location
    if (locations !== null) {
      locations.forEach((location: string) => {
        selected = [...selected, ...filtered.filter((report: BillingReport) => report.location === location)]
      });
    }
    filtered = selected;
    const now = new Date();

    // Filter by date range based on selected time frame
    if (timeFrame === 'custom') {
      const startDate = new Date(customRange.startDate);
      const endDate = new Date(customRange.endDate);
      filtered = filtered.filter((report: BillingReport) => {
        const transactionDate = new Date(report.transactionDate);
        return transactionDate >= startDate && transactionDate <= endDate;
      });
    } else {
      filtered = filtered.filter((report: BillingReport) => {
        const transactionDate = new Date(report.transactionDate);
        switch (timeFrame) {
          case 'date':
            return this.isSameDay(transactionDate, now);
          case 'week':
            return this.isSameWeek(transactionDate, now);
          case 'month':
            return this.isSameMonth(transactionDate, now);
          case 'year':
            return this.isSameYear(transactionDate, now);
          default:
            return true;
        }
      });
    }

    this.filteredReports = filtered;
    console.log(this.filteredReports);
    this.options.series = this.filteredReports.map((x) => {
      return {
        'type': 'line',
        'xKey': x.transactionDate,
        'yKey': x.bill_amount,
        'yName': x.location
      }
    });
    this.updateChart();
  }

  // methods for date comparison
  isSameDay(date1: Date, date2: Date): boolean {
    return date1.toDateString() === date2.toDateString();
  }

  isSameWeek(date: Date, current: Date): boolean {
    const startOfWeek = new Date(current.setDate(current.getDate() - current.getDay()));
    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
    return date >= startOfWeek && date <= endOfWeek;
  }

  isSameMonth(date: Date, current: Date): boolean {
    return date.getFullYear() === current.getFullYear() && date.getMonth() === current.getMonth();
  }

  isSameYear(date: Date, current: Date): boolean {
    return date.getFullYear() === current.getFullYear();
  }

  // Form submission
  onSubmit(): void {
    console.log(this.filterForm.value);
    if (this.filterForm.valid) {
      this.applyFilters();
    } else {
      console.warn('Form is invalid');
    }
  }
}
