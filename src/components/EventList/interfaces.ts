export interface PaidEvent {
  emailId: string;
  city: string;
  twitter_handle: string;
  keywordSupport: string;
  country: string;
  imageURL: string;
  venue: string;
  searchTerms: string;
  confName: string;
  state: string;
  long: string;
  confEndDate: string;
  conference_id: number;
  lat: string;
  user_id: string;
  confUrl: string;
  confStartDate: string;
  entryType: string;
  confRegUrl: string;
}

export interface FreeEvent {
  emailId: string;
  city: string;
  twitter_handle: string;
  keywordSupport: string;
  country: string;
  imageURL: string;
  venue: string;
  searchTerms: string;
  confName: string;
  state: string;
  long: string;
  confEndDate: string;
  conference_id?: number;
  lat: string;
  user_id: string;
  confUrl: string;
  confStartDate: string;
  entryType: string;
  confRegUrl: string;
}

export interface EventsEntity {
  display_paid: number;
  paid: PaidEvent[];
  free: FreeEvent[];
  display_free: number;
}
