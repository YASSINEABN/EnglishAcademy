import { Component } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {

  constructor(private dataService: DataService, private router: Router) {}

  onButtonClick(a: string) {
    this.dataService.setData(a);
    this.router.navigate(['/new-page']);
  }
  go(b:string)
  {
    this.router.navigate(['/register',b]);
  }
}
