import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply test', 'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg'),
    new Recipe('A test Recipe', 'This is simply test', 'https://iwashyoudry.com/wp-content/uploads/2020/01/Goulash-Recipe-2.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
