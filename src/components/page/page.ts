import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './page.style';

type PositionType = 'absolute' | 'fixed' | 'sticky';

@customElement('sg-page')
export class SgPage extends LitElement {
  static styles = styles;

  @property({attribute: 'header-position-type', reflect: true})
  headerPositionType: PositionType = 'sticky';

  @property({attribute: 'footer-position-type', reflect: true})
  footerPositionType: PositionType = 'sticky';

  shouldUpdate(changedProperties: Map<string, unknown>) {
    if (changedProperties?.size <= 1 && changedProperties?.has('fullHeight')) {
      return false;
    }
    return true;
  }

  render() {
    return html`
      <div part="header" class=${'position-' + this.headerPositionType}>
        <slot name="header"></slot>
      </div>
      <div part="content">
        <slot></slot>
      </div>
      <div part="footer" class=${'position-' + this.footerPositionType}>
        <slot name="footer"></slot>
      </div>
    `;
  }
}
