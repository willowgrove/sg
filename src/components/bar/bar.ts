import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './bar.style';

type BarOrientation = 'horizontal' | 'vertical';

@customElement('sg-bar')
export class SgBar extends LitElement {
  static styles = [styleForAll, styles];

  @property({reflect: true})
  orientation: BarOrientation = 'horizontal';

  render() {
    return html`
      <slot part="before" name="before"></slot>
      <slot part="main"></slot>
      <slot part="after" name="after"></slot>
    `;
  }
}
