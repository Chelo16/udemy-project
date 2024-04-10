import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe','This is simple a test','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToIFGDRaZ7aWRr2HVgJj5bpND63Q2qlTRXsw&s'),
    new Recipe('The Second One','This is simple a test','https://www.foodandwine.com/thmb/tAS-x_IC4ss1cb9EdDpsr0UExdM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bucatini-with-mushroom-ragu-dandelion-greens-and-tarragon-FT-RECIPE0421-3a5f0d29f7264f5e9952d4a3a51f5f58.jpg')
  ];
  @Output() recipe2 =  new EventEmitter<Recipe>();

  constructor(){

  }

  recipeChose(recipe: Recipe){
    this.recipe2.emit(recipe);
  }
}
