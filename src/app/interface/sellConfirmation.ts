import { Invoice } from "./invoice";
import { InvoiceDetail } from "./invoiceDetail";

export interface SellConfirmation{
    invoice: Invoice;
    invoiceDetail: InvoiceDetail[]; 
}