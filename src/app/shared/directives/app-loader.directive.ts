import {
  Directive,
  Input,
  OnInit,
  Type,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[appLoader]',
})
export class AppLoaderDirective implements OnInit {
  // @Input() appLoader!: Type<any>;

  constructor(public viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    // this.viewContainerRef.createComponent(this.appLoader);
  }
}
