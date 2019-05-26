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
    console.log(this.addedItemNames);
    console.log(this.addedItemNames.length);
  }

  ngOnChanges() {

  }

  submit(event) {
    event.preventDefault();
    console.log(this.addItemForm.controls['itemName'].value);
    let addedItemName: string;
    this.noItems = false;
    addedItemName = this.addItemForm.get('itemName').value;
    this.addedItemNames.push(addedItemName);
    console.log(addedItemName);
    console.log(this.addedItemNames);
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

  // openEdit(item) {
  //   console.log(item);
  //   this.editForm.controls['editName'].setValue(item);
  // }

  // saveEditedName() {
  //   console.log(this.editForm.controls['editName'].value);
  // }

  deleteItem(index) {
    console.log(index);
    this.addedItemNames.splice(index, 1);
    if (this.addedItemNames.length < 1) {
      this.noItems = true;
    }
    this.noItems = false;

  }

}
