import {Goals} from './goals.model';

export interface UserAccount{

      firstname: String;
      lastname: String;
      userid: String;
      password: String;
      email: String;
      goals: [Goals];
      admin: Boolean;

}
