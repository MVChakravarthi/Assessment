<textarea id="textArea" [(ngModel)]="textInput" (keydown)="onKeyDown($event)"></textarea>
<div class="dropdown" *ngIf="showDropdown">
  <div class="option" *ngFor="let option of options; let i = index" 
       [class.selected]="i === selectedOptionIndex" 
       (click)="selectOption(i)">
    {{ option }}
  </div>
</div>

<div class="selected-option" *ngIf="selectedOptionIndex !== -1">
  <span class="selected-text">{{ options[selectedOptionIndex] }}</span>
</div>
