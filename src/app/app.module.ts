import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { InteractionInputComponent } from './components/component-interaction/interaction-input/interaction-input.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ViewEncapsulationComponent,
    ComponentInteractionComponent,
    InteractionInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
