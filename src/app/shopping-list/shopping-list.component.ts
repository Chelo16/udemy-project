import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { Ingredient } from '../shared/ingredient.model';
import { FormsModule } from '@angular/forms';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  standalone: true,
  imports: [ShoppingEditComponent,FormsModule],
  templateUrl: './shopping-list.component.html',
  styleUrl: './shopping-list.component.css'
})
export class ShoppingListComponent {
  ingredients: Ingredient[];
  private igCahngeSub: Subscription;
  constructor(private shoppingService: ShoppingService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.ingredients=this.shoppingService.getIngredients();
    this.igCahngeSub = this.shoppingService.ingredientChanged.subscribe((ingredient: Ingredient[])=>{
      this.ingredients=ingredient
    })
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.igCahngeSub.unsubscribe();
  }
}
