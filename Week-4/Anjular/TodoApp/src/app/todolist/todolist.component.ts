import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../Shared/ingredient.model';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
   name='';
   description='';
   count=0;

  ingredients: Ingredient[] = [];
  
  constructor() { }
  
  ngOnInit() {
  }
  onIngredientAdded(ingredient: Ingredient){
    this.count=this.count+1;
    this.ingredients.push(ingredient);
    
  }

}
