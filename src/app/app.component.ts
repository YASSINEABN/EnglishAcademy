import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { BodDyComponent } from "./boddy/boddy.component";
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { FormsComponent } from "./forms/forms.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    RouterModule,  // Import RouterModule here
    NavbarComponent,
    BodDyComponent,
    CardsComponent,
    FooterComponent,
    ReservationComponent,
    ContactComponent,
    FormsComponent,
    CommonModule
  ]
})
export class AppComponent implements OnInit {
  isRegisterPage = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const urlPattern = /^\/register(\/.*)?$/;
      this.isRegisterPage = urlPattern.test(event.urlAfterRedirects);
      }
    });
  }
}
