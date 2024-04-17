import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recipe } from "../recipes/recipe.model";
import { RecipeService } from "../recipes/recipe.service";
import { map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class DataStorageServicie{
    constructor(private http: HttpClient,private recipesService: RecipeService){}

     storeRecipies(){
        const recipes = this.recipesService.getRecipies();
        this.http.put('https://ng-course-recipie-book-d49da-default-rtdb.europe-west1.firebasedatabase.app/recipes.json',recipes).subscribe(response=>{
            console.log(response);
        })
    }

    fetchData(){
      return  this.http.get<Recipe[]>('https://ng-course-recipie-book-d49da-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(map(recipes =>{
            return recipes.map(recipe=>{
                return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients: []};
            });
        }),
    tap(recipes=>{
        this.recipesService.setRecipes(recipes);
    }))
    }
}