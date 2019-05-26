import { Component, OnInit, OnChanges } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Observable, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit, OnChanges {
  addItemForm: any;
  public addedItemNames: string[] = [];
  retrievedData: string;
  todoItems: any;
  noItems = true;
  todoList: any;
  editForm: any;

  constructor(
    private fb: FormBuilder,
  ) {
    this.addedItemNames = [];
    this.addItemForm = this.fb.group({
      itemName: ['', [Validators.required, Validators.minLength(3)]]
    });

    this.editForm = this.fb.group({
      editName: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  submit(event) {
    event.preventDefault();
    let addedItemName: string;
    this.noItems = false;
    addedItemName = this.addItemForm.get('itemName').value;
    this.addedItemNames.push(addedItemName);
    // localStorage.setItem('itemNames', JSON.stringify(this.addedItemNames));
    this.addItemForm.reset();
  }

  checkIfEmpty() {
    if (this.addedItemNames.length === 0) {
      this.noItems = true;
    } else {
      this.noItems = false;
    }
  }

  deleteItem(index) {
    this.addedItemNames.splice(index, 1);
    if (this.addedItemNames.length < 1) {
      this.noItems = true;
    } else {
      this.noItems = false;
    }
  }

}
