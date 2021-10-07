import {CustomerType} from "./customer-type";

export interface Customer {
  customerId: number;
  customerCode: string;
  customerType: CustomerType;
  customerName: string;
  customerBirthday: string;
  customerGender: string;
  customerIdCard: string;
  customerPhone: string;
  customerEmail: string;
  customerAddress: string
}
