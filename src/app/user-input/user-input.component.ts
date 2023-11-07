import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-input',
  templateUrl: './user-input.component.html'
})
export class UserInputComponent {
  username: string = '';

  constructor(private router: Router) {}

  onSubmit(): void {
    if (this.username.trim() !== '') {
      this.router.navigate(['/repos', this.username]);
    }
  }
}
