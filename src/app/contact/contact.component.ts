import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ FormsModule,HttpClientModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  email: string = '';
  message: string = '';
  constructor(private http: HttpClient) {}
  sendEmail() {
  
    const templateParams = {
      email: this.email,
      messagee: this.message + "from" + this.email,
    };

    emailjs.send('service_w7umlyf', 'template_0bopmky', templateParams, 'IdETnJQgtF1vgUoIx')
      .then((response: EmailJSResponseStatus) => {
        console.log('SUCCESS!', response.status, response.text);
      }, (error) => {
        console.error('FAILED...', error);
      });
  }
}
