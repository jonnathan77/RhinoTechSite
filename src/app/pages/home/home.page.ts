import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isMobile: boolean = false;

  constructor() {
    this.checkDevice();
  }

  checkDevice() {
    this.isMobile = window.innerWidth <= 768; // Altere o valor conforme necessário
  }

}
