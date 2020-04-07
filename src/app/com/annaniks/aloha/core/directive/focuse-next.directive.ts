import { Directive, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[app-focus-next-input]'
})
export class FocusNextInputDriective {
    @Input('max-count') private _maxCount: number = undefined;

    constructor() { }

    @HostListener('input', ['$event']) onKeyDown(event) {
        if (!!(this._maxCount === event.target.value.length)) {
            this._focusNextElement(event);
        }
    }

    private _focusNextElement(event): void {
        let element = event.srcElement.nextElementSibling;

        if (element == null)
            return;
        else
            element.focus();
    }

}