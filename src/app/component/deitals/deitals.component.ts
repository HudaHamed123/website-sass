
import { Component, OnInit } from '@angular/core';
import { MealsServService } from '../../meals-serv.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-deitals',
  templateUrl: './deitals.component.html',
  styleUrls: ['./deitals.component.scss']
})
export class DeitalsComponent implements OnInit {
  mealDetails: any;

  constructor(
    private mealsServService: MealsServService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      this.activatedRoute.paramMap.subscribe((params) => {
        const mealId = params.get('mealId');
        if (mealId) {
          this.mealsServService.getMealDatails(mealId).subscribe((res) => {
            this.mealDetails = res.meals[0];
          });
        }
      });
    }
  }

  getIngredients(mealDetails: any): any[] {
    const ingredients = [];
    if (mealDetails) {
      for (let i = 1; i <= 20; i++) {
        const ingredient = mealDetails[`strIngredient${i}`];
        const measure = mealDetails[`strMeasure${i}`];
        if (ingredient) {
          ingredients.push({ ingredient, measure });
        } else {
          break;
        }
      }
    }
    return ingredients;
  }
}
