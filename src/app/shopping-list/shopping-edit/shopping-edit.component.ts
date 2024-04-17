import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';
import { FormsModule, NgForm } from '@angular/forms';
import { ShoppingService } from '../shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css'
})
export class ShoppingEditComponent {
  @ViewChild('f',{static: false}) shoppingListForm: NgForm;
  subscription: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;

    constructor(private shoppingService: ShoppingService){}
  ngOnInit(){
    this.subscription = this.shoppingService.startedEditing.subscribe(
      (index: number)=>{
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.shoppingService.getIngredient(index);
        this.shoppingListForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subscription.unsubscribe();
  }

  addIngredient(form: NgForm){
    const ingr =new Ingredient(form.value.name,form.value.amount);
    if(this.editMode){
      this.shoppingService.updateIngredient(this.editedItemIndex, ingr);
    }else{
    this.shoppingService.addNewIngredient(ingr);}
    this.shoppingListForm.reset();
    this.editMode=false;
  }

  onClear(){
    this.shoppingListForm.reset();
    this.editMode=false;
  }

  onDelete(){
    this.shoppingService.deleteIngredient(this.editedItemIndex);
    this.onClear();
  }
}
