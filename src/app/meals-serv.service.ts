import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MealsServService {

  constructor(private httpClient:HttpClient) { }
  getAllMeals():Observable<any>{
   return this.httpClient.get('https://www.themealdb.com/api/json/v1/1/list.php?c=list')
  }
 
getAllCateg(category:string):Observable<any>{
  if (category=='all') {
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/search.php?s`);
    
  }else{
    return this.httpClient.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  
 
  }
   
  
}

getMealDatails(mealId: string): Observable<any> {
  return this.httpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
}
}
