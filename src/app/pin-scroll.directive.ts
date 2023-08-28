import { Directive, OnInit, OnDestroy, ElementRef } from "@angular/core";

@Directive({
  selector: '[pinScroll]',
})
export class PinScrollDirective implements OnInit, OnDestroy {
  private observer = new MutationObserver(() => {
    this.scrollToPin();
  });

  constructor(private el: ElementRef) { }

  ngOnInit() {
    this.observer.observe(this.el.nativeElement, {
      childList: true,
    });
  }

  ngOnDestroy() {
    this.observer.disconnect();
  }

  private scrollToPin() {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }
}
