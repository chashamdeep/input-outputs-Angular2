import { Component } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
    selector: 'my-tutorial',
    template: `<h2>Child Tutorial</h2>
            <label>Enter Child Tutorials Component value</label>
            <input type="text" #childText (keyup.enter)="onChange(childText.value)"/>
            <p>Value from Parent AppComponent is: <span>{{parentData}}</span></p>
            <h5>press enter to update parent componenet</h5>`,
    inputs: [`parentData`],
    outputs: [`ChildEvent`]
})

export class tutorialComponent{
    parentData: string;

    ChildEvent = new EventEmitter<string>();

    onChange(value:string){
        this.ChildEvent.emit(value);
    }
 
}