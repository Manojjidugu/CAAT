import { Component, OnInit,EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'caat-app',
    templateUrl: `cat.template.html`
})

export class AppComponent{
	
  currentView = 'instrument';
 
  navigateTo(view: string) {
	console.log("AppComponent navigateTo() "+ view);
    this.currentView = view;
  }
  
}



