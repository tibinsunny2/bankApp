import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankServiceService {
  data:any = {
    1000:{account:1000,password:1000,username:'vyom'},
    1001:{account:1001,password:1001,username:'max'},
    1002:{account:1002,password:1002,username:'ronaldo'},
    1003:{account:1003,password:1003,username:'messi'}
  }

  constructor() { }
  register(account:any,password:any,username:any){
           
    let userData= this.data
    if(account in userData){
      alert('the user is already exist in the bank')
      return false
    }
    else{
      userData[account]={
        account:account,
        password:password,
        username:username,
      }
      console.log(userData);
      return true
    }
  }
  // login
  login(account:any,password:any){
    let userData=this.data
    if(account in userData){
      if(password== userData[account]['password']){
        alert('Login successful')
        return true
      }
      else{
        alert('one of your account number or password incorrect')
        return false
      }

    }
    else{
      alert('the user doesnt exist')
      return false
    }
  }
}
