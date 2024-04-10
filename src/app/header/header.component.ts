import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() recipes= new EventEmitter<boolean>();

  onRecipes(){
    this.recipes.emit(true);
  }
  onShopping(){
    this.recipes.emit(false);
  }
}
