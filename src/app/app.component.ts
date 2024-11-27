import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isMobile: boolean = false;

  constructor() {
    this.checkDevice();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkDevice();
  }

  checkDevice() {
    this.isMobile = window.innerWidth <= 768; // Altere o valor conforme necessário
  }

  goContato(){

  }
}
