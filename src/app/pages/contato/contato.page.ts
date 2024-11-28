import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.page.html',
  styleUrls: ['./contato.page.scss'],
})
export class ContatoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  formData = {
    name: '',
    email: '',
    message: ''
  };

  ngOnInit() {
  }

  async onSubmit() {
    // Aqui você pode integrar com sua API de envio de e-mail (Ex: Node.js, EmailJS, etc)
    
    // Simulação de envio bem-sucedido
    const alert = await this.alertController.create({
      header: 'Sucesso!',
      message: 'Sua mensagem foi enviada com sucesso. Em breve entraremos em contato.',
      buttons: ['OK'],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

}
