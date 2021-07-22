import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InterpolationComponent } from './component/basic/interpolation/interpolation.component';
import { RoutingComponent } from './component/basic/routing/routing.component';
import { IndexComponent } from './component/other/index/index.component';
import { NoPageFoundComponent } from './component/other/no-page-found/no-page-found.component';


const routes: Routes = [
	// { path: '', component: RoutingComponent },
	{ path: '', component: NoPageFoundComponent },
	{ path: 'index', component: IndexComponent },
	{ path: 'learn/basic/interpolation', component: InterpolationComponent },
	{ path: 'learn/basic/routing', component: RoutingComponent },
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