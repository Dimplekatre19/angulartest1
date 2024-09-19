import { Component } from "@angular/core";
import { Istudent } from "../../models/student";




@Component({
    selector:'app-std1',
    templateUrl:'./std1.component.html',
    styleUrls:['./std1.component.scss']
})
export class std1component{
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

      newstudent:Istudent={
         fname:'',
         lname:'',
         email:'',
         contact:''
      }
      onstdadd(){
         this.stdarr.push(this.newstudent)
        this.newstudent={
            fname:'',
            lname:'',
            email:'',
            contact:''
        
      }
}
}