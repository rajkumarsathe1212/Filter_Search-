import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit{

  keyword = "name"
  getusers: any;

  constructor(private api:ApiService){ }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.api.get("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud").subscribe((result:any)=>{
      this.getusers = result;
      console.log(this.getusers);
    })
  }

  users = [
    {id:1,name:"Rajkumar"},
    {id:2,name:"Aniket"},
    {id:3,name:"Vivek"},
    {id:4,name:"Omkar"},
    {id:5,name:"Pradip"},
    {id:6,name:"Aditya"},
    {id:7,name:"Sagar"},
    {id:8,name:"Jaydip"}
  ]

  selectevent(event:any){

  }

  onchangesearch(event:any){

  }

  onfocusedevent(event:any){

  }

}
