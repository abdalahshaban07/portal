import {
  ChangeDetectorRef,
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

  constructor(
    public viewContainerRef: ViewContainerRef,
    public changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // this.viewContainerRef.createComponent(this.appLoader);
    this.changeDetectorRef.detectChanges();
  }
}
