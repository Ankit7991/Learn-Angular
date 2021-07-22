import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { routingComponents } from './app-routing.module';
import { BindingsComponent } from './component/basic/bindings/bindings.component';
import { PropertyBindingComponent } from './component/basic/bindings/property-binding/property-binding.component';
import { ClassBindingComponent } from './component/basic/bindings/class-binding/class-binding.component';
import { StyleBindingComponent } from './component/basic/bindings/style-binding/style-binding.component';
import { EventBindingComponent } from './component/basic/bindings/event-binding/event-binding.component';

@NgModule({
	declarations: [
		AppComponent,
		routingComponents,
		BindingsComponent,
		PropertyBindingComponent,
		ClassBindingComponent,
		StyleBindingComponent,
		EventBindingComponent,
	],
	imports: [
		FormsModule,
		BrowserModule,
		AppRoutingModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
