import { Component } from '@angular/core';
import { RecipesModel } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css'],
})
export class RecipesListComponent {
  recipes: RecipesModel[] = [
    new RecipesModel(
      'first recipes',
      'good dish for people',
      '../../../assets/download.jpeg'
    ),
    new RecipesModel(
      'first recipes',
      'good dish for people',
      '../../../assets/download.jpeg'
    ),
    new RecipesModel(
      'first recipes',
      'good dish for people',
      '../../../assets/download.jpeg'
    ),
    new RecipesModel(
      'first recipes',
      'good dish for people',
      '../../../assets/download.jpeg'
    ),
  ];
}
