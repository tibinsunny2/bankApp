import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data:any = {
    1000:{account:1000,password:1000,username:'vyom'},
    1001:{account:1001,password:1001,username:'max'},
    1002:{account:1002,password:1002,username:'ronaldo'},
    1003:{account:1003,password:1003,username:'messi'}
  }
  account=''
  password=''

  constructor() { }

  ngOnInit(): void {
  }
  acnoChange(event:any){

    this.account =event.target.value
    console.log(this.account);
    
  }
  passwordChange(event:any){
    this.password= event.target.value
    console.log(this.password);
    
  }
  // login(){
  //   var account=this.account
  //   var password=this.password
  //   let data=this.data
  //   if(account in data){
  //     if(password== data[account]['password']){
  //       alert('the login succesful')
  //     }
  //     else{
  //       alert('one of your account number or password incorrect')
  //     }

  //   }
  //   else{
  //     alert('the user doesnt exist')
  //   }
  // }
  login(a:any,p:any){
    var account=a.value
    var password=p.value
    let data=this.data
    if(account in data){
      if(password== data[account]['password']){
        alert('the login succesful')
        console.log("the password is : "+password);
        console.log("the account number is : "+account);
        
        
      }
      else{
        alert('one of your account number or password incorrect')
      }

    }
    else{
      alert('the user doesnt exist')
    }
  }

}
