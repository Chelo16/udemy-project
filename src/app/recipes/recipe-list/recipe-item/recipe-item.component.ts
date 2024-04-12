import { Component, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './recipe-item.component.html',
  styleUrl: './recipe-item.component.css'
})
export class RecipeItemComponent {
   @Input() item: Recipe;
   @Input() index: number;
  constructor(private recipeService: RecipeService,private route: ActivatedRoute){}
  ngOnInit(): void {

  }
  recipeChose(){
    this.recipeService.recipeSelected.next(this.item);
  }
}
