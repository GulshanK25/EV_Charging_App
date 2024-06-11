import { Component,HostListener } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  title = 'Electric Car Charging Stations';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.handleScrollAnimation();
  }

  handleScrollAnimation() {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element: Element) => {
      const position = element.getBoundingClientRect();
      if (position.top < window.innerHeight && position.bottom >= 0) {
        element.classList.add('visible');
      }
    });
  }

}
