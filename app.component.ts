

import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  hoveredOptionIndex: number = -1;
  textInput: string = '';
  options: string[] = [
    'Gina Williams',
    'Jake Williams',
    'Jamie John',
    'John Doe',
    'Jeff Stewart',
    'Paula M. Keith',
  ];
  showDropdown: boolean = false;
  selectedOptionIndex: number = -1;

  onKeyDown(event: KeyboardEvent) {
    if (event.key === '@') {
      this.showDropdown = true;
      this.selectedOptionIndex = -1;
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      this.selectedOptionIndex = Math.max(this.selectedOptionIndex - 1, 0);
    } else if (event.key === 'ArrowDown') {
      event.preventDefault();
      this.selectedOptionIndex = Math.min(
        this.selectedOptionIndex + 1,
        this.options.length - 1
      );
    } else if (event.key === 'Enter' && this.selectedOptionIndex >= 0) {
      this.textInput += this.options[this.selectedOptionIndex].slice(
        this.textInput.lastIndexOf('@') + 1
      );
      this.showDropdown = false;
    } else {
      this.showDropdown = false;
    }
  }

  onMouseEnter(index: number) {
    this.hoveredOptionIndex = index;
  }

  onMouseLeave() {
    this.hoveredOptionIndex = -1;
  }

 

 selectOption(index: number) {
    const selectedOption = this.options[index];
    this.textInput += selectedOption;
    this.selectedOptionIndex = -1; // Clear selected index after selecting an option
    this.showDropdown = false;
  }


  @HostListener('document:click', ['$event'])
  clickOutside(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.dropdown') && !target.closest('.option')) {
      this.showDropdown = false;
    }
  }
}