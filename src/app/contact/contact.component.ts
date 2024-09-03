import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule,HttpClientModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = '';
  message: string = '';
  test:boolean = false;
  constructor(private http: HttpClient) {}
  sendEmail() {
  
    const templateParams = {
      email: this.email,
      messagee: this.message,
    };

    emailjs.send('service_w7umlyf', 'template_0bopmky', templateParams, 'IdETnJQgtF1vgUoIx')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
        this.test=true;
      }, (error) => {
        console.error('FAILED...', error);
      });
  }
  closeSuccessMessage() {
    this.test = false;
  }
}
