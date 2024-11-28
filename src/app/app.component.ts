import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  isMobile: boolean = false;

  constructor(private router: Router,private menuController: MenuController) {
    this.checkDevice();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkDevice();
  }

  checkDevice() {
    this.isMobile = window.innerWidth <= 768; // Altere o valor conforme necessário
  }

  closeMenu() {
    this.menuController.close(); // Fecha o menu
  }

  goContato(){
    this.closeMenu(); 
    this.router.navigate(['/contato'])
  }

  goHome(){
    this.closeMenu(); 
    this.router.navigate(['/home'])
  }

  goServicos(){
    this.closeMenu(); 
    this.router.navigate(['/servicos'])
  }
}
