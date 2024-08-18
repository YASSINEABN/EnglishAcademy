import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isNavbarActive: boolean = false;

  toggleNavbar() {
    this.isNavbarActive = !this.isNavbarActive;
  }
}
