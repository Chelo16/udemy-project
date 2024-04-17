import { Component, EventEmitter, Output } from '@angular/core';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [RecipeItemComponent,RouterLink,RouterLinkActive],
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  subcription: Subscription;
  recipes: Recipe[];
  constructor(private recipeService: RecipeService){

  }

  ngOnInit(): void {
    this.subcription=this.recipeService.recipeChanged.subscribe(
      (recipe: Recipe[])=>{
        this.recipes = recipe;
      }
    )
    this.recipes = this.recipeService.getRecipies();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subcription.unsubscribe();
  }

}
