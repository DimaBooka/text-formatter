import {Component, ChangeDetectionStrategy, Input, ViewChild, ElementRef, OnInit, OnChanges} from '@angular/core';
import { TextStyles } from '../models/text-styles';
import {generateKey, splitText} from './utils/text-manager.utils';

@Component({
  selector: 'app-text-manager',
  templateUrl: './text-manager.component.html',
  styleUrls: ['./text-manager.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextManagerComponent {
  @Input() text = '';

  @ViewChild('controls') controls: ElementRef;

  selectedIndexes = null;
  setStyles: {[key: string]: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean
  }} = {};

  constructor() { }

  resetSelectedIndexes() {
    this.selectedIndexes = null;
  }

  showSelectedText(e) {
    let text = '';
    let startIndex, endIndex;

    if (window.getSelection) {
      const selection = window.getSelection();
      text = selection.toString();
      startIndex = selection.anchorOffset;
      endIndex = selection.focusOffset;
    }

    if (text && text !== this.selectedIndexes) {
      this.controls.nativeElement.style.top = `${e.pageY}px`;
      this.controls.nativeElement.style.left = `${e.pageX}px`;
      this.selectedIndexes = [startIndex, endIndex];
    } else {
      this.selectedIndexes = null;
    }
  }

  onSetStyleHandler(style: TextStyles) {
    if (!style) {
      this.resetSelectedIndexes();
    }

    if (!this.selectedIndexes) {
      return;
    }

    const key = generateKey(this.selectedIndexes);
    if (!this.setStyles[key]) {
      this.setStyles[key] = {};
    }

    // TODO: have to be changed to innerText of div.text-manager to have correct substrings after added tags
    const parts = splitText(this.text, this.selectedIndexes);
    let changedPart;
    switch (style) {
      case TextStyles.bold:
        changedPart = this.setBold(key, parts[1]);
        break;
      case TextStyles.italic:
        changedPart = this.setItalic(key, parts[1]);
        break;
      case TextStyles.underline:
        changedPart = this.setUnderline(key, parts[1]);
    }

    parts[1] = changedPart;
    this.text = parts.join('');
    this.resetSelectedIndexes();
  }

  setBold(key: string, changeText: string) {
    this.setStyles[key].bold = !this.setStyles[key].bold;

    if (this.setStyles[key].bold) {
      return `<b>${changeText}</b>`;
    } else {
      // TODO: parse this.text to check that already was bold and remove b-tag for this phrase
    }
  }

  setItalic(key: string, changeText: string) {
    this.setStyles[key].italic = !this.setStyles[key].italic;

    if (this.setStyles[key].italic) {
      return `<i>${changeText}</i>`;
    } else {
      // TODO: parse this.text to check that already was italic and remove i-tag for this phrase
    }
  }

  setUnderline(key: string, changeText: string) {
    this.setStyles[key].underline = !this.setStyles[key].underline;

    if (this.setStyles[key].underline) {
      return `<u>${changeText}</u>`;
    } else {
      // TODO: parse this.text to check that already was underline and remove u-tag for this phrase
    }
  }
}
