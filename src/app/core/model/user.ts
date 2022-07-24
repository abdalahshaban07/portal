export interface User {
  preferred_username: string;
  password: string;
  userid: string;
  clientid: string;
  role: string;
  UserInfo: UserInfo;
}

export interface UserInfo {
  Id: number;
  ClientId: number;
  Name: string;
  Email: string;
  Username: string;
  Password: string;
  Phone: string;
  GenderId: number;
  CityId: number;
  CountryId: number;
  RoleId: number;
  City: string;
  Country: string;
  Gender: string;
  Role: string;
}
