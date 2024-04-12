import { Component, Input, NgModule } from '@angular/core';
import { Recipe } from '../recipe.model';
import { DropdownDirective } from '../../shared/dropdown.directive';
import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  imports: [],
  templateUrl: './recipe-detail.component.html',
  styleUrl: './recipe-detail.component.css'
})
export class RecipeDetailComponent {
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute,private router: Router){}

  ngOnInit(): void {
    this.recipe = this.recipeService.getRecipe(+this.route.snapshot.params['id']);
    this.route.params
    .subscribe(
      (params: Params)=>{
        this.recipe = this.recipeService.getRecipe(+params['id']);
      }
    )
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditMode(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
}
