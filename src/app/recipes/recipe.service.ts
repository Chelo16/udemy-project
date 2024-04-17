import { EventEmitter, Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingService } from "../shopping-list/shopping.service";
import { Subject } from "rxjs";

@Injectable({providedIn:'root'})
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();

    recipeSelected = new Subject<Recipe>();
    private recipes: Recipe[] = [
        // new Recipe('Tasty Schnitzel','A super-tasty Schnitzel - just awesome',
        // 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Wiener_Schnitzel.jpg/640px-Wiener_Schnitzel.jpg',
        // [
        //     new Ingredient('Meat',1),
        //     new Ingredient('French Fries',20)
        // ]),
        // new Recipe('big Fat Burger','What else you need to say?',
        // 'https://bigfatburgers.com/wp-content/uploads/2019/07/DoubleBaconCheeseBurger.jpg',
        // [
        //     new Ingredient('Buns',2),
        //     new Ingredient('Meat',2),
        //     new Ingredient('Cheese',2),
        //     new Ingredient('Bacon',2),
        //     new Ingredient('Tomatoe',1),
        //     new Ingredient('Lettuce',1),
        //     new Ingredient('Onions',1)
        // ])
      ];

    constructor(private slService: ShoppingService){}
    getRecipies(){
        return this.recipes.slice();
    }
    getRecipe(id: number){
        return this.recipes[id];
    }
    addIngredientsToShoppingList(ingredient: Ingredient[]){
        this.slService.addIngredients(ingredient);
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, recipe: Recipe){
        this.recipes[index]= recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index, 1);
        this.recipeChanged.next(this.recipes.slice());
      }

    setRecipes(recipes: Recipe[]){
        this.recipes = recipes;
        this.recipeChanged.next(this.recipes.slice());
    }
}