import { Routes } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipesResolverService } from './recipes/recipes-resolver.service';

export const routes: Routes = [
    {path: '', redirectTo: 'recipes', pathMatch: 'full'},
    {path: 'recipes', component: RecipesComponent, children: [
        {path: 'new',component: RecipeEditComponent},
        {path: ':id',component: RecipeDetailComponent, resolve: [RecipesResolverService]},
        {path: ':id/edit',component: RecipeEditComponent, resolve: [RecipesResolverService]},
    ]},
    {path: 'shopping', component: ShoppingListComponent}

];
