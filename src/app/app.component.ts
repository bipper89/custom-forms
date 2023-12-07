import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    InputComponent,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  protected fb = inject(FormBuilder);
  protected loginForm: FormGroup = this.fb.group({
    user: [''],
    password: [''],
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}
