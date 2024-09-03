import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import {  OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  id:string|null=""
  message:string|null=""
  showSuccessMessage = false;
  constructor(public dataService:DataService,private route: ActivatedRoute,private router: Router) {
    
  }
  ngOnInit() {
    this.id= this.route.snapshot.paramMap.get('id');
  }
  firstName:string="";
  secondName:string = "";
  telephone:string="";
  age:string="";
  save(form: NgForm)
  {
    if(form.valid)
    {
      this.dataService.addColec(this.firstName,this.secondName,this.telephone,this.age,this.id ? this.id:"NULL"); 
      this.showSuccessMessage = true;

      setTimeout(() => {
        this.showSuccessMessage = false;
        this.router.navigate(['']); // Specify your desired path
      }, 5000); // 2 seconds delay
    }
  }
  getBackgroundImageUrl(id: string | null): string {
    const imageId = id ? id : 'DEFAULT';
    return `url('assets/images/${imageId}.jpg')`;;
  }
}
