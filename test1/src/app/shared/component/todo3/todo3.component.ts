import { Component } from "@angular/core";





@Component({
    selector:'app-todo3',
    templateUrl:'./todo3.component.html',
    styleUrls:['./todo3.component.scss']
})
export class todo3component{
    todoarr:Array<string>=["JS","TS","NG","NODE"]
    newtodo:string=''
    ontodoadd(){
       if(this.newtodo){
           this.todoarr.push(this.newtodo)
           this.newtodo=''
       }
    }
}