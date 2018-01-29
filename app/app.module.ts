import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.caatcomponent';
import {RecoveryCashflowComponent} from './recoverylockcashflowcomponent';
import {RecoveryLockInstrumentComponent} from './recoverylockinstrumentcomponent';


@NgModule({
    imports: [BrowserModule,FormsModule,CommonModule],
    declarations: [AppComponent,RecoveryCashflowComponent,RecoveryLockInstrumentComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
