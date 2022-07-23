import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  public formClass = "form";
  //public todoTitle = "todoTitle";
  public twoWayBind = "";
  //public displayToDo = true;
  public todos:any = JSON.parse(localStorage.getItem('todos')||'[]');
  public todo:any;
  /*public myTodo = {
    title:"",
    desc:""
  }*/
  public savedTodos:any;

  constructor() { }

  ngOnInit(): void {
  }
  addTodo(todoTitle:any, todoDesc:any){
    let title = todoTitle.value;
    let desc = todoDesc.value;
    if(title && desc){
      //this.myTodo.title = title;
      //this.myTodo.desc = desc;
      let myTodo = {
        "title":title,
        "desc":desc
      }
      //myTodo.title = todoTitle.value;
      //myTodo.desc = todoDesc.value;
      this.todos.push(myTodo);
      localStorage.setItem('todos',JSON.stringify(this.todos));
      console.log(this.todos);

    }
    else {
      alert("Please fill up the field!");
    }

  }
  
  

}
