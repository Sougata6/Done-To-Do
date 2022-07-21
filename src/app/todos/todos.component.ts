import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  @Input('formData') public todos:any;
  @Output() public deleteEvent = new EventEmitter();

  public todosClass = "todos";
  public containerClass = "todoContainer";
  public deleteButton = "deleteButton";
  public saveButton = "saveButton";
  public savedTodos:any;

  constructor() { }

  ngOnInit(): void {
  }

  deleteTodo(i: any){
    //this.deleteEvent.emit(todo);
    //console.log(i);
    this.todos.splice(i,1);
    console.log(this.todos);
  }
  saveTodos(){
    localStorage.setItem("myTodos",JSON.stringify(this.todos));
    this.savedTodos = JSON.parse(localStorage.getItem("myTodos")||"{}");
  }
}
