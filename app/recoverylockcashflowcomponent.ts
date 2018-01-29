import { Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'recovery-cashflow',
    templateUrl: `recoverycashflow.html`
})

export class RecoveryCashflowComponent{
   @Output() oninstrument = new EventEmitter();   
   @Output() onCashflow = new EventEmitter();
   
   cashflow() {
    console.log("RecoveryCashflowInstrumentComponent added");
    this.onCashflow.emit(null);
  }
   instrument() {
    console.log("RecoveryInstrumentComponent added");
    this.oninstrument.emit(null);
  }

}



