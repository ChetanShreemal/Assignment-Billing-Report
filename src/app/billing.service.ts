import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  // private apiUrl = 'https://66e7c68eb17821a9d9d9e1e3.mockapi.io/';  

  constructor(private http: HttpClient) {}

  // Mock billing report data
  getBillingReports(): Observable<any[]> {
    // Mock data - this should be replaced with a real HTTP call in a production environment
    return of([
      
          {
            "patientFirstname": "John",
            "patientLastname": "Doe",
            "transactionDate": "2024-09-01",
            "patientMRN": 10001,
            "encounter": "encounter 1",
            "dob": "1960-09-01",
            "location": "Delhi",
            "bill_amount": "1234.56",
            "id": "1"
          },
          {
            "patientFirstname": "Jane",
            "patientLastname": "Smith",
            "transactionDate": "2024-09-01",
            "patientMRN": 10002,
            "encounter": "encounter 2",
            "dob": "1970-09-01",
            "location": "Pune",
            "bill_amount": "3145.78",
            "id": "2"
          },
          {
            "patientFirstname": "Alice",
            "patientLastname": "Johnson",
            "transactionDate": "2024-09-03",
            "patientMRN": 10003,
            "encounter": "encounter 3",
            "dob": "1980-07-30",
            "location": "Mumbai",
            "bill_amount": "456.89",
            "id": "3"
          },
          {
            "patientFirstname": "Bob",
            "patientLastname": "Brown",
            "transactionDate": "2024-09-04",
            "patientMRN": 10004,
            "encounter": "encounter 4",
            "dob": "1990-12-10",
            "location": "Bangalore",
            "bill_amount": "567.90",
            "id": "4"
          },
          {
            "patientFirstname": "Charlie",
            "patientLastname": "Davis",
            "transactionDate": "2024-09-05",
            "patientMRN": 10005,
            "encounter": "encounter 5",
            "dob": "1955-03-25",
            "location": "Chennai",
            "bill_amount": "6728.01",
            "id": "5"
          },
          {
            "patientFirstname": "Diana",
            "patientLastname": "Miller",
            "transactionDate": "2024-09-02",
            "patientMRN": 10006,
            "encounter": "encounter 6",
            "dob": "1965-09-02",
            "location": "Delhi",
            "bill_amount": "789.12",
            "id": "6"
          },
          {
            "patientFirstname": "Edward",
            "patientLastname": "Wilson",
            "transactionDate": "2024-09-02",
            "patientMRN": 10007,
            "encounter": "encounter 7",
            "dob": "1975-09-02",
            "location": "Pune",
            "bill_amount": "2890.23",
            "id": "7"
          },
        {
            "patientFirstname": "Fiona",
            "patientLastname": "Moore",
            "transactionDate": "2024-09-08",
            "patientMRN": 10008,
            "encounter": "encounter 8",
            "dob": "1985-04-10",
            "location": "Mumbai",
            "bill_amount": "3901.34",
            "id": "8"
          },
          {
            "patientFirstname": "George",
            "patientLastname": "Taylor",
            "transactionDate": "2024-09-09",
            "patientMRN": 10009,
            "encounter": "encounter 9",
            "dob": "1995-06-12",
            "location": "Bangalore",
            "bill_amount": "4123.45",
            "id": "9"
          },
          {
            "patientFirstname": "Hannah",
            "patientLastname": "Anderson",
            "transactionDate": "2024-09-10",
            "patientMRN": 10010,
            "encounter": "encounter 10",
            "dob": "1967-08-01",
            "location": "Chennai",
            "bill_amount": "8234.56",
            "id": "10"
          },
          {
            "patientFirstname": "Ian",
            "patientLastname": "Thomas",
            "transactionDate": "2024-09-12",
            "patientMRN": 10011,
            "encounter": "encounter 11",
            "dob": "1978-09-15",
            "location": "Delhi",
            "bill_amount": "4345.67",
            "id": "11"
          },
          {
            "patientFirstname": "Julia",
            "patientLastname": "Jackson",
            "transactionDate": "2024-09-12",
            "patientMRN": 10012,
            "encounter": "encounter 12",
            "dob": "1988-10-25",
            "location": "Pune",
            "bill_amount": "7456.78",
            "id": "12"
          },
          {
            "patientFirstname": "Kevin",
            "patientLastname": "White",
            "transactionDate": "2024-09-13",
            "patientMRN": 10013,
            "encounter": "encounter 13",
            "dob": "1992-11-30",
            "location": "Mumbai",
            "bill_amount": "5567.89",
            "id": "13"
          },
          {
            "patientFirstname": "Laura",
            "patientLastname": "Harris",
            "transactionDate": "2024-09-14",
            "patientMRN": 10014,
            "encounter": "encounter 14",
            "dob": "1961-01-10",
            "location": "Bangalore",
            "bill_amount": "6678.90",
            "id": "14"
          },
          {
            "patientFirstname": "Mike",
            "patientLastname": "Martin",
            "transactionDate": "2024-09-15",
            "patientMRN": 10015,
            "encounter": "encounter 15",
            "dob": "1982-02-20",
            "location": "Chennai",
            "bill_amount": "2789.01",
            "id": "15"
          },
          {
            "patientFirstname": "Nina",
            "patientLastname": "Thompson",
            "transactionDate": "2024-09-17",
            "patientMRN": 10016,
            "encounter": "encounter 16",
            "dob": "1979-03-25",
            "location": "Delhi",
            "bill_amount": "2890.12",
            "id": "16"
          },
          {
            "patientFirstname": "Oscar",
            "patientLastname": "Garcia",
            "transactionDate": "2024-09-17",
            "patientMRN": 10017,
            "encounter": "encounter 17",
            "dob": "1966-04-05",
            "location": "Pune",
            "bill_amount": "3901.23",
            "id": "17"
          },
          {
            "patientFirstname": "Paula",
            "patientLastname": "Martinez",
            "transactionDate": "2024-09-18",
            "patientMRN": 10018,
            "encounter": "encounter 18",
            "dob": "1994-05-15",
            "location": "Mumbai",
            "bill_amount": "2123.34",
            "id": "18"
          },
          {
            "patientFirstname": "Quincy",
            "patientLastname": "Lee",
            "transactionDate": "2024-09-19",
            "patientMRN": 10019,
            "encounter": "encounter 19",
            "dob": "1974-06-20",
            "location": "Bangalore",
            "bill_amount": "4234.45",
            "id": "19"
          },
          {
            "patientFirstname": "Rachel",
            "patientLastname": "Lewis",
            "transactionDate": "2024-09-20",
            "patientMRN": 10020,
            "encounter": "encounter 20",
            "dob": "1983-07-10",
            "location": "Chennai",
            "bill_amount": "4345.56",
            "id": "20"
          },
          {
            "patientFirstname": "Steve",
            "patientLastname": "Walker",
            "transactionDate": "2024-09-22",
            "patientMRN": 10021,
            "encounter": "encounter 21",
            "dob": "1964-08-05",
            "location": "Delhi",
            "bill_amount": "6456.67",
            "id": "21"
          },
          {
            "patientFirstname": "Tina",
            "patientLastname": "Hall",
            "transactionDate": "2024-09-22",
            "patientMRN": 10022,
            "encounter": "encounter 22",
            "dob": "1972-09-12",
            "location": "Pune",
            "bill_amount": "7567.78",
            "id": "22"
          },
          {
            "patientFirstname": "Ulysses",
            "patientLastname": "Young",
            "transactionDate": "2024-09-23",
            "patientMRN": 10023,
            "encounter": "encounter 23",
            "dob": "1981-10-18",
            "location": "Mumbai",
            "bill_amount": "5678.89",
            "id": "23"
          },
          {
            "patientFirstname": "Vera",
            "patientLastname": "King",
            "transactionDate": "2024-09-24",
            "patientMRN": 10024,
            "encounter": "encounter 24",
            "dob": "1979-11-25",
            "location": "Bangalore",
            "bill_amount": "3789.90",
            "id": "24"
          },
          {
            "patientFirstname": "Walter",
            "patientLastname": "Scott",
            "transactionDate": "2024-09-25",
            "patientMRN": 10025,
            "encounter": "encounter 25",
            "dob": "1963-12-12",
            "location": "Chennai",
            "bill_amount": "6890.01",
            "id": "25"
          }
      
      // More mock data here
    ]);
  }
  // getBillingReports(): Observable<any[]> {
  //   // Fetch the data from MockAPI
  //   return this.http.get<any[]>(`${this.apiUrl}/billing-reports`);
  // }

  // Fetch filtered billing reports from the server
  getFilteredBillingReports(filters: any): Observable<any[]> {
    // You may need to implement this method if you decide to use API in the future
    return of([]); // Returning empty array as placeholder
  }
}
