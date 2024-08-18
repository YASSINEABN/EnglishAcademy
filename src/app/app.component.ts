import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BodDyComponent } from "./boddy/boddy.component";
import { CardsComponent } from "./cards/cards.component";
import { FooterComponent } from "./footer/footer.component";
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { NavbarComponent } from './navbar/navbar.component';


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
  styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, BodDyComponent, CardsComponent, FooterComponent, ReservationComponent, ContactComponent]
})
export class AppComponent {
  title = 'EnglishAcademy';
}
