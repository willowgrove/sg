import {html, LitElement} from 'lit';
import {property} from 'lit/decorators.js';
import styles from './header-footer.style';

type PositionType = 'absolute' | 'fixed' | 'sticky';

export abstract class SgHeaderFooter extends LitElement {
  static styles = styles;

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
