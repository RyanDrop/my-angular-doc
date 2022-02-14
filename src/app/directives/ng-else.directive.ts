import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[madNgElse]',
})
export class NgElseDirective {
  private _hasView = false;

  @Input() set madNgElse(condition: boolean) {
    if (!condition && !this._hasView) {
      this._hasView = true;
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this._hasView = false;
      this.viewContainer.clear();
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}
}
