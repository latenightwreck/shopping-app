import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Banana Bread', 'This is some banana bread.',
    // tslint:disable-next-line:max-line-length
    'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2010/4/13/0/GC_banana-bread_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371592847747.jpeg',
    [
      new Ingredient('Banana', 3),
      new Ingredient('Bread', 1)
    ]),
    new Recipe('Hamburger', 'This is a hamburger.',
    // tslint:disable-next-line:max-line-length
    'https://www.tasteofhome.com/wp-content/uploads/2017/10/All-American-Hamburgers_EXPS_THJJ17_29321_D02_03_5b-1-696x696.jpg',
    [
      new Ingredient('Burger', 1),
      new Ingredient('Bread', 1)
    ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(index: number): Recipe {
    return this.recipes[index];
  }

  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
