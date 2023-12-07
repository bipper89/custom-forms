import { Component, Input, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  FormsModule,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  template: ` <mat-form-field appearance="outline">
    <mat-label>{{ label }}</mat-label>
    <input
      [ngModel]="value"
      [disabled]="isDisabled"
      (ngModelChange)="onChange($event)"
      matInput
      [placeholder]="placeholder"
      [type]="type"
    />
  </mat-form-field>`,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  styles: `mat-form-field {width: 100%;}`,
})
export class InputComponent implements ControlValueAccessor {
  @Input() label = '';
  @Input() placeholder = '';
  @Input() type = 'text';

  value: string = '';
  isDisabled: boolean = false;
  onChange = (_: any) => {};
  onTouch = () => {};

  writeValue(obj: any): void {
    if (obj && obj !== '') {
      this.value = obj;
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
