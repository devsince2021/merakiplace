export interface Filter {
  headline: string;
  date: string; // yyyy-mm-dd
  countries: Country[];
}

export interface Country {
  name: string;
  id: string;
  order: number;
}
