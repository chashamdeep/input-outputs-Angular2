import { Component, Directive } from '@angular/core';
import { tutorialComponent } from './tutorial.component'; 

@Component({
  selector: 'my-app',
  template: `<h2>Parent AppComponent Tutorial</h2>
            <label>Enter Parent AppComponent Value</label>
            <input type="text"  #ptext (keyup.enter)="values=ptext.value"/>
            <p>Value from Child  Tutorial Component is: <span>{{childData}}</span> </p>
            <h5>press enter to update parent componenet</h5>
            <my-tutorial (ChildEvent)="childData=$event" [parentData]="values" ></my-tutorial>`, //[] property binding
  directives: [tutorialComponent]
})
export class AppComponent { 
  public values:string;
  childData:string;
}
