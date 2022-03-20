import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {CommonModule} from "@angular/common";
import {CoreShellMainModule} from "@core-shell";

const ANGULAR_MODULES = [
  BrowserModule,
  CommonModule
];

const MODULES = [
  CoreShellMainModule
];

const COMPONENTS = [
  AppComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...ANGULAR_MODULES,
    ...MODULES
  ],
  providers: [],
  bootstrap: [
    ...COMPONENTS
  ]
})
export class AppModule {}
