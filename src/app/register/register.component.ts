import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { BankServiceService } from '../service/bank-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  account =""
  password=""
  username=""

  constructor(private ds:BankServiceService) { }

  ngOnInit(): void {
  }
   
register(account:any,password:any,username:any){
 const result= this.ds.register(account,password,username)
}
if(result:any){

}
}
