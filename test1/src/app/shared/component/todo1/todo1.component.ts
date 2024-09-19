import { Component, ElementRef, ViewChild } from "@angular/core";




@Component({
    selector:'app-todo1',
    templateUrl:'./todo1.component.html',
    styleUrls:['./todo1.component.scss']
})
export class todo1component{
     todoarr=["JS","TS","NG","NODE"]
     @ViewChild('todoItem')todoItem!:ElementRef
     ontodoadd(){
         this.todoarr.push(this.todoItem.nativeElement.value) 
         this.todoItem.nativeElement.value=''
     }
}