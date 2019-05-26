import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { TodoFormComponent } from './homepage/todo-form/todo-form.component';
import { SidebarComponent } from './homepage/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, TodoFormComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [HomepageComponent, TodoFormComponent],
})
export class TodoModule { }
