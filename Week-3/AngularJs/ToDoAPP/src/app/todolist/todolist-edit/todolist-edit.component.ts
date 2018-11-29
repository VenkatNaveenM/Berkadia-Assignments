import { Component, OnInit, ElementRef, ViewChild,EventEmitter, Output  } from '@angular/core';
import { Ingredient } from '../../Shared/ingredient.model';

@Component({
  selector: 'app-todolist-edit',
  templateUrl: './todolist-edit.component.html',
  styleUrls: ['./todolist-edit.component.css']
})
export class TodolistEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;
  @Output() ingredientAdded= new EventEmitter<Ingredient>(); 

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName=this.nameInputRef.nativeElement.value;
    const ingDescription=this.descriptionInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName,ingDescription);
    this.ingredientAdded.emit(newIngredient);
  }

  onEditItem(index: number){
      
  }

}
