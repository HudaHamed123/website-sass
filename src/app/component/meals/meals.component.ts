import { Component } from '@angular/core';
import { MealsServService } from '../../meals-serv.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-meals',
  imports: [ RouterLink],
  templateUrl: './meals.component.html',
  styleUrl: './meals.component.scss'
})
export class MealsComponent {

  constructor(private mealsServService:MealsServService  , private activatedRoute:ActivatedRoute){}
  categories:any;
  meals:any;

  ngOnInit(): void {
    if (typeof document!= 'undefined'){
      this.mealsServService.getAllMeals().subscribe({
        next:(res)=>{
          console.log(res);
          this.categories =res.meals
        },
        error:(err)=>{
  console.log(err);
        }
      });

      // this.mealsServService.getAllCatego().subscribe({
      //   next:(res)=>{
      //     console.log(res);
      //     this.meals=res.meals   
      //   }
      

      this.activatedRoute.paramMap.subscribe((params)=>{
        console.log(params.get('categoryName'));
        
        const categoryName = params.get('categoryName')
        if (categoryName) {
          this.mealsServService
          .getAllCateg(categoryName).subscribe({
            next:(res)=>{
              this.meals= res.meals
            }
          })
          
        }
      })
  
    


    }



    //   this.getDataMeals()  
    // this.getDataCategers()
    

  }
}

