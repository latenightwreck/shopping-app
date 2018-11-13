import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Banana Bread', 'This is some banana bread.',
    // tslint:disable-next-line:max-line-length
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/13/0/GC_banana-bread_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371592847747.jpeg',
    [
      new Ingredient('Banana', 3),
      new Ingredient('Bread', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
