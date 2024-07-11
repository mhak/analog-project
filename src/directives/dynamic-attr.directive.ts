import { Directive, OnChanges, Input, Renderer2, ElementRef, SimpleChanges } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[dynamicAttr]'
})
export class DynamicAttrDirective implements OnChanges {

  @Input()
  public dynamicAttr?: { [key: string]: any; };

  constructor(
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (!this.dynamicAttr) { return; }

    if (changes['dynamicAttr']) {
      for (let attributeName in this.dynamicAttr) {
        const attributeValue = this.dynamicAttr[attributeName];
        if (attributeValue) {
          this.renderer.setAttribute(this.elementRef.nativeElement, attributeName, attributeValue);
        } else {
          this.renderer.removeAttribute(this.elementRef.nativeElement, attributeName);
        }
      }
    }
  }

}
