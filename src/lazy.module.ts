import {NgModule, Component} from '@angular/core';
import {RouterModule} from '@angular/router';
import {HttpModule, Http} from '@angular/http';

@Component({
  selector: 'lazy-comp',
  template: `
  <div>lazy</div>
  `
})
export class LazyComponent {}

@NgModule({
  imports: [
    RouterModule.forChild([
     {path: '', component: LazyComponent, pathMatch: 'full'},
     {path: 'feature', loadChildren: 'app/feature/feature.module#FeatureModule'},
     {path: 'lazy-feature', loadChildren: 'app/feature/lazy-feature.module#LazyFeatureModule'}
    ]),
    HttpModule
  ],
  declarations: [LazyComponent]
})
export class LazyModule {
  constructor(http: Http) {}
}

export class SecondModule {}
