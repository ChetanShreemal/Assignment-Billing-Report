export interface BillingReport {
    patientFirstname: string;
    patientLastname: string;
    transactionDate: string; // or Date, if you handle Date objects
    patientMRN: number;
    encounter: string;
    dob: string; // or Date
    location: string;
    bill_amount: string; // or number, if you prefer to handle amounts as numbers
    id: string;
  }
  