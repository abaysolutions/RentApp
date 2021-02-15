export interface FormFields {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  price: number;
  rooms: number;
  description: string;
  imageFiles: File[];
}
export interface PreparedForm {
  fullName: string;
  address: string;
  phoneNumber: string;
  email: string;
  price: number;
  rooms: number;
  description: string;
  imageFiles: String[];
}
