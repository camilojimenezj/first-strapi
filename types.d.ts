export interface Post {
  id:          number;
  title:       string;
  content:     string;
  createdAt:   string;
  updatedAt:   string;
  publishedAt: string;
  media:       any[];
  user:        User;
  createdBy:   User;
  updatedBy:   User;
}

export interface User {
  id:                 number;
  firstname:          string;
  lastname:           string;
  username:           string;
  email:              string;
  password:           string;
  resetPasswordToken: any;
  registrationToken:  any;
  isActive:           boolean;
  blocked:            boolean;
  preferedLanguage:   any;
  createdAt:          string;
  updatedAt:          string;
}

export interface Response {
  id:          number;
  title:       string;
  content:     string;
  publishedAt: string;
  media:       string;
  user:        string;
}
