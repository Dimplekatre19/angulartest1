import { Component } from "@angular/core";





@Component({
    selector:'app-todo2',
    templateUrl:'./todo2.component.html',
    styleUrls:['./todo2.component.scss']
})
export class todo2component{
    todoarr=["JS","TS","NG","NODE"]

    ontodoadd(ele :HTMLInputElement){
         this.todoarr.push(ele.value)
         ele.value=''
    }
}