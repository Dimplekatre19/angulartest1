import { Component } from "@angular/core";
import { Istudent } from "../../models/student";




@Component({
    selector:'app-std2',
    templateUrl:'./std2.component.html',
    styleUrls:['./std2.component.scss']
})
export class std2component{

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
onstdadd(fname:HTMLInputElement,lname:HTMLInputElement,email:HTMLInputElement,contact:HTMLInputElement){
     let newstd:Istudent={
        fname:fname.value,
        lname:lname.value,
        email:email.value,
        contact:isNaN(+contact.value)?'-':+contact.value
     }
     this.stdarr.push(newstd);
     fname.value='',
     lname.value='',
     email.value='',
     contact.value=''
}

}