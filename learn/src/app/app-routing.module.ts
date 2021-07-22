import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './component/other/index/index.component';
import { InterpolationComponent } from './component/basic/interpolation/interpolation.component';
import { RoutingComponent } from './component/basic/routing/routing.component';
import { BindingsComponent } from './component/basic/bindings/bindings.component';
import { ClassBindingComponent } from './component/basic/bindings/class-binding/class-binding.component';
import { NoPageFoundComponent } from './component/other/no-page-found/no-page-found.component';
import { PropertyBindingComponent } from './component/basic/bindings/property-binding/property-binding.component';
import { StyleBindingComponent } from './component/basic/bindings/style-binding/style-binding.component';
import { EventBindingComponent } from './component/basic/bindings/event-binding/event-binding.component';


const routes: Routes = [
	// { path: '', component: RoutingComponent },
	{ path: '', component: NoPageFoundComponent },
	{ path: 'index', component: IndexComponent },
	{ path: 'learn/basic/interpolation', component: InterpolationComponent },
	{ path: 'learn/basic/routing', component: RoutingComponent },
	{ path: 'learn/basic/binding', component: BindingsComponent },
	{ path: 'learn/basic/binding/property-binding', component: PropertyBindingComponent },
	{ path: 'learn/basic/binding/class-binding', component: ClassBindingComponent },
	{ path: 'learn/basic/binding/style-binding', component: StyleBindingComponent },
	{ path: 'learn/basic/binding/event-binding', component: EventBindingComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
	IndexComponent,
	InterpolationComponent,
	RoutingComponent,
]