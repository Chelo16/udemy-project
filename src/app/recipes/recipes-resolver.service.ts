import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recipe } from "./recipe.model";
import { DataStorageServicie } from "../shared/data-storage.service";
import { RecipeService } from "./recipe.service";

@Injectable({
    providedIn: 'root'
})
export class RecipesResolverService implements Resolve<Recipe[]>{
    constructor(private dataStorageServicie: DataStorageServicie, private recipeService: RecipeService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Recipe[]> {
        const recipes = this.recipeService.getRecipies();
        if(recipes.length === 0){
            return this.dataStorageServicie.fetchData();
        }else{
            return recipes;
        }
    }
}