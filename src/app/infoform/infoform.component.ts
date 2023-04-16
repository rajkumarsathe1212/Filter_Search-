import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-infoform',
  templateUrl: './infoform.component.html',
  styleUrls: ['./infoform.component.css']
})
export class InfoformComponent implements OnInit{

  formdata:any;
  id:any;

  constructor(private api:ApiService,private route:ActivatedRoute,private router:Router) {
    this.id = this.route.snapshot.paramMap.get("id");
    this.api.get("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud/" + this.id).subscribe((result:any)=>{
      console.log(result);
      this.formdata.patchValue({
        name:result.name,
        sirname:result.sirname
      })
    })
   }

  ngOnInit(): void {
    this.load();
  }

  load(){
    this.formdata = new FormGroup({
      name:new FormControl(""),
      sirname:new FormControl("")
    })
    console.log(this.id);
  }

  submit(data:any){
    console.log(data);
    if(this.id == null){
        this.api.post("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud",data).subscribe((result:any)=>{
        this.load();
        this.router.navigate(['/table'])
      })
    }
    else{
      this.api.put("https://63c8db7a320a0c4c953be2f4.mockapi.io/api/v1/usersCrud/" + this.id,data).subscribe((result:any)=>{
        this.load();
        this.router.navigate(['/table'])
      })
    }
  }

}
