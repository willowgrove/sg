import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import styleForAll from '../style-for-all';
import styles from './header-footer.style';

type PositionType = 'absolute' | 'fixed' | 'relative' | 'sticky';

export abstract class SgHeaderFooter extends LitElement {
  static styles = [styleForAll, styles];

  @property({attribute: 'position-type', reflect: true})
  positionType: PositionType = 'sticky';

  render() {
    return html`<sg-bar orientation="horizontal">
      <slot name="before" slot="before"></slot>
      <slot></slot>
      <slot name="after" slot="after"></slot>
    </sg-bar>`;
  }
}
