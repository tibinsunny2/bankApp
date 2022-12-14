import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { BankServiceService } from '../service/bank-service.service';

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
  username=''

  constructor(public router:Router,private ds:BankServiceService) { }

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
  login(){
    var account=this.account
    var password=this.password
    let data=this.data
    const result= this.ds.login(account,password)
    if(result){
alert('Login successful')
this.router.navigateByUrl('dashbord')

    }
   
}

}