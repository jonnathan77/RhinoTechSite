import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.page.html',
  styleUrls: ['./servicos.page.scss'],
})
export class ServicosPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  learnMore(service: string) {
    if (service === 'dev') {
      this.router.navigate(['/desenvolvimento-software']);
    } else if (service === 'support') {
      this.router.navigate(['/suporte-24h']);
    }
  }
  
}
