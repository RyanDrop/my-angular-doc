import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularElementsComponent } from './components/angular-elements/angular-elements.component';
import { ComponentInteractionComponent } from './components/component-interaction/component-interaction.component';
import { InteractionEventEmitterComponent } from './components/component-interaction/interaction-event-emitter/interaction-event-emitter.component';
import { InteractionInputComponent } from './components/component-interaction/interaction-input/interaction-input.component';
import { InteractionViewChildComponent } from './components/component-interaction/interaction-view-child/interaction-view-child.component';
import { ComponentStylesComponent } from './components/component-styles/component-styles.component';
import { ContentProjectionExampleComponent } from './components/content-projection/content-projection-example/content-projection-example.component';
import { ContentProjectionComponent } from './components/content-projection/content-projection.component';
import { DynamicComponentComponent } from './components/dynamic-component/dynamic-component.component';
import { InputChildComponent } from './components/inputs-and-outputs/input-child/input-child.component';
import { InputsAndOutputsComponent } from './components/inputs-and-outputs/inputs-and-outputs.component';
import { OutputChildComponent } from './components/inputs-and-outputs/output-child/output-child.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { ViewEncapsulationComponent } from './components/view-encapsulation/view-encapsulation.component';
import { AttributeDirectivesComponent } from './directives/attribute-directives/attribute-directives.component';
import { BackgroundYellowDirective } from './directives/background-yellow.directive';
import { CustomDirectivesComponent } from './directives/custom-directives/custom-directives.component';
import { FinalHighlightDirective } from './directives/final-highlight.directive';
import { MouseHighlightDirective } from './directives/mouse-highlight.directive';
import { NgElseDirective } from './directives/ng-else.directive';
import { StructuralDirectivesComponent } from './directives/structural-directives/structural-directives.component';
import { StudyModule } from './module/study/study.module';
import { RoutesRoutingModule } from './routes/routes-routing.module';
import { InitRxjsComponent } from './rxjs/init-rxjs/init-rxjs.component';
import { AttributeClassAndStyleBindingsComponent } from './templates/attribute-class-and-style-bindings/attribute-class-and-style-bindings.component';
import { PipesComponent } from './templates/pipes/pipes.component';
import { PropertyBindingComponent } from './templates/property-binding/property-binding.component';
import { SvgAsTemplateComponent } from './templates/svg-as-template/svg-as-template.component';
import { TemplateReferenceVariablesComponent } from './templates/template-reference-variables/template-reference-variables.component';
import { TemplateStatementsComponent } from './templates/template-statements/template-statements.component';
import { TextInterpolationComponent } from './templates/text-interpolation/text-interpolation.component';
import { TwoWayBindingComponent } from './templates/two-way-binding/two-way-binding.component';
import { FirstTestComponent } from './test/first-test/first-test.component';
import { SecondTestComponent } from './test/second-test/second-test.component';
import { SubmitButtonComponent } from './test/second-test/submit-button/submit-button.component';
import { ThirdTestComponent } from './test/third-test/third-test.component';


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
    DynamicComponentComponent,
    AngularElementsComponent,
    TextInterpolationComponent,
    TemplateStatementsComponent,
    PipesComponent,
    PropertyBindingComponent,
    AttributeClassAndStyleBindingsComponent,
    TwoWayBindingComponent,
    TemplateReferenceVariablesComponent,
    SvgAsTemplateComponent,
    AttributeDirectivesComponent,
    StructuralDirectivesComponent,
    BackgroundYellowDirective,
    CustomDirectivesComponent,
    MouseHighlightDirective,
    FinalHighlightDirective,
    NgElseDirective,
    FirstTestComponent,
    SecondTestComponent,
    SubmitButtonComponent,
    ThirdTestComponent,
    InitRxjsComponent,
   
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StudyModule, RoutesRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
