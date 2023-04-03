import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>;

    private recipes: Recipe[] = [
        new Recipe('A test Recipe', 
            'This is simply test', 
            'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg',
            [ 
                new Ingredient('Meat', 1),
                new Ingredient('French Fries', 20),
            ]),
        new Recipe('Another test Recipe', 
            'This is simply test', 
            'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg', 
            [ 
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ]),
    ];

    constructor(private slService: ShoppingListService) {
    }

    getRecipes(){
        return this.recipes.slice();  
    }

    addIngridientsToSHoppingList(ingredients: Ingredient[]){
        this.slService.addIngridients(ingredients);
    }
}