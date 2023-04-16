import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tablesearch',
  templateUrl: './tablesearch.component.html',
  styleUrls: ['./tablesearch.component.css']
})
export class TablesearchComponent implements OnInit{

  formdata:any;
  getusers:any = [];
  id:any;
  search:any;

  constructor(private api:ApiService,private router:Router) { }

  ngOnInit(): void {
    this.load();
  }

  users = [
    {id:1,name:"Rajkumar",sirname:"Sathe"},
    {id:2,name:"Aniket",sirname:"Kamble"},
    {id:3,name:"Vivek",sirname:"Sutar"},
    {id:4,name:"Omkar",sirname:"Farakate"},
    {id:5,name:"Pradip",sirname:"Chafekande"},
    {id:6,name:"Aditya",sirname:"Patil"},
    {id:7,name:"Sagar",sirname:"Sathe"},
    {id:8,name:"Jaydip",sirname:"Khade"}
  ]

  load(){
    this.api.get("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud").subscribe((result:any)=>{
      this.getusers = result;
    })
  }

  edit(id:any){
    this.id = id;
    console.log(this.id);
    this.router.navigate(['/infoform/',this.id])
  }

  delete(id:any){
    this.id = id;
    this.api.delete("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud/"  + this.id).subscribe((result:any)=>{
        this.load();
    })
  }

}
