import { Directive, TemplateRef } from "@angular/core";

@Directive({
    selector: '[appHeadingContent]'
})

export class HeadingContentDirective {
    constructor(public template: TemplateRef<any>) { }
}
