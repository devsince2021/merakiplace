export interface Filter extends UserModalInput {
  page: number;
}

export interface UserModalInput {
  headline: string;
  date: string; // yyyy-mm-dd
  countries: Country[];
}

export interface Country {
  name: string;
  id: string;
  order: number;
}
