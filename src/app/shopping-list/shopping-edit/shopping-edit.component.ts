import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('nameInput',{static:true}) nameInput:ElementRef;
  @ViewChild('amountInput',{static:true}) amountInput :ElementRef;
    constructor(private shoppingService: ShoppingService){}

  addIngredient(){
    const ingr =new Ingredient(this.nameInput.nativeElement.value,this.amountInput.nativeElement.value)
    this.shoppingService.addNewIngredient(ingr);
  }
}
