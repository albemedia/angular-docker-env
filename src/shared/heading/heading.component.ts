import { Component, ViewChild, ContentChild, AfterContentInit } from "@angular/core";
import { HeadingContentDirective } from './heading-content.directive';

@Component({
    selector: 'app-heading',
    templateUrl: './heading.component.html',
    styleUrls: ['./heading.component.scss']
})

export class HeadingComponent implements AfterContentInit {
    @ViewChild('root', {static: true}) rootTemplate;
    @ContentChild(HeadingContentDirective, {static: true}) content: HeadingContentDirective;

    constructor() { }

    ngAfterContentInit() {
        console.log(this.content.template.elementRef.nativeElement);
    }

}
