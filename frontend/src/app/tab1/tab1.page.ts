import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  constructor(private authService: AuthService) {}

  onRegister(form: NgForm) {
    this.authService.register(form.value.name, form.value.email, form.value.password);
  }
}
