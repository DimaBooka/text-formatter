import {ChangeDetectionStrategy, Component, EventEmitter, Output} from '@angular/core';
import {TextStyles} from '../models/text-styles';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ControlPanelComponent {
  @Output() onSetStyle: EventEmitter<TextStyles> = new EventEmitter();

  styles = TextStyles;

  preventEvent(event: Event, withEmit = false) {
    event.cancelBubble = true;
    event.stopPropagation();
    event.preventDefault();

    if (withEmit) {
      this.onSetStyle.emit();
    }
  }

  emit(event: Event, style: TextStyles) {
    this.preventEvent(event);
    this.onSetStyle.emit(style);
  }
}
