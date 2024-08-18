import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boddy',
  standalone: true,
  imports: [],
  templateUrl: './boddy.component.html',
  styleUrl: './boddy.component.css'
})
 export class BodDyComponent implements OnInit {
  slideIndex = 0; // Initialize slideIndex

  ngOnInit(): void {
    this.showSlide(this.slideIndex); // Show initial slide
    setInterval(() => this.autoNextSlide(), 3200); // Auto slide every 2 seconds
  }

  nextSlide() {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }

  previousSlide() {
    this.slideIndex--;
    this.showSlide(this.slideIndex);
  }

  autoNextSlide() {
    this.slideIndex++;
    this.showSlide(this.slideIndex);
  }

  showSlide(index: number) {
    const slides = document.querySelectorAll('.slideshow li') as NodeListOf<HTMLElement>;

    // Reset all slides
    slides.forEach(slide => {
      slide.classList.remove('active');
    });

    // Ensure slideIndex wraps around
    if (index >= slides.length) {
      this.slideIndex = 0;
    } else if (index < 0) {
      this.slideIndex = slides.length - 1;
    }

    // Set current slide to active
    slides[this.slideIndex].classList.add('active');
  }
}
 

