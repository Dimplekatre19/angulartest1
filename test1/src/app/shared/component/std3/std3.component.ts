import { Component, ElementRef, ViewChild } from "@angular/core";
import { Istudent } from "../../models/student";





@Component({
    selector:'app-std3',
    templateUrl:'./std3.component.html',
    styleUrls:['./std3.component.scss']
})
export class std3component{
    stdarr:Array<Istudent>=[
        {
            fname:"jhon",
            lname:'doe',
            email:'jhon@gmail.com',
            contact:6435535633
        },
        {
            fname:"jen",
            lname:'deo',
            email:'jen03@gmail.com',
            contact:8908635633
        },
        {
            fname:"may",
            lname:'doe',
            email:'may99@gmail.com',
            contact:6435894567
        }
      ]
      @ViewChild('fname')fnamecontrol!:ElementRef;
      @ViewChild('lname')lnamecontrol!:ElementRef;
      @ViewChild('email')emailcontrol!:ElementRef;
      @ViewChild('contact')contactcontrol!:ElementRef;
      onstdadd(){
        let newstd:Istudent={
             fname:this.fnamecontrol.nativeElement.value,
             lname:this.lnamecontrol.nativeElement.value,
             email:this.emailcontrol.nativeElement.value,
             contact:isNaN(+this.contactcontrol.nativeElement.value)?'-':+this.contactcontrol.nativeElement.value
        }
        this.stdarr.push(newstd)
        this.fnamecontrol.nativeElement.value='',
        this.lnamecontrol.nativeElement.value='',
        this.emailcontrol.nativeElement.value='',
        this.contactcontrol.nativeElement.value=''
      }
}