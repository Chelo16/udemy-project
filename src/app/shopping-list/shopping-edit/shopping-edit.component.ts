import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @Output() ingredient= new EventEmitter<Ingredient>;
  @ViewChild('nameInput',{static:true}) nameInput:ElementRef;
  @ViewChild('amountInput',{static:true}) amountInput :ElementRef;
  addIngredient(){
    const ingr =new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.ingredient.emit(ingr);
  }
}
