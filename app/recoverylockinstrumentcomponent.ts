import {Component,OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'recovery-instrument',
    templateUrl: `recoverylockinstrument.html`
})

export class RecoveryLockInstrumentComponent{
  @Output() oninstrument = new EventEmitter();
  @Output() onCashflow = new EventEmitter();
  
   instrument(){
	console.log("RecoveryLockInstrumentComponent added");
    this.oninstrument.emit(null);
  }
  cashflow(){
	console.log("RecoveryLockCashflowComponent added");
    this.onCashflow.emit(null);
  }
  


}



