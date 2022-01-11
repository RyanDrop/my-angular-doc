import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { InteractionEventEmitterComponent } from './components/component-interaction/interaction-event-emitter/interaction-event-emitter.component';
import { InteractionInputComponent } from './components/component-interaction/interaction-input/interaction-input.component';
import { InteractionViewChildComponent } from './components/component-interaction/interaction-view-child/interaction-view-child.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { ComponentStylesComponent } from './components/component-styles/component-styles.component';
import { InputsAndOutputsComponent } from './components/inputs-and-outputs/inputs-and-outputs.component';
import { InputChildComponent } from './components/inputs-and-outputs/input-child/input-child.component';
import { OutputChildComponent } from './components/inputs-and-outputs/output-child/output-child.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { ContentProjectionExampleComponent } from './components/content-projection/content-projection-example/content-projection-example.component';


@NgModule({
  declarations: [
    AppComponent,
    LifecycleHooksComponent,
    ViewEncapsulationComponent,
    ComponentInteractionComponent,
    InteractionInputComponent,
    InteractionEventEmitterComponent,
    InteractionViewChildComponent,
    ComponentStylesComponent,
    InputsAndOutputsComponent,
    InputChildComponent,
    OutputChildComponent,
    ContentProjectionComponent,
    ContentProjectionExampleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
