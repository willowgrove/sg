import {html, css, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';

type PositionType = 'absolute' | 'fixed' | 'sticky';

@customElement('sg-page')
export class SgPage extends LitElement {
  static styles = css`
    :host {
      position: relative;
      display: block;
      height: auto;
      width: 100%;
    }

    [part='header'],
    [part='footer'] {
      position: relative;
      left: 0;
      height: fit-content;
      width: 100%;
    }

    [part='header'] {
      top: 0;
    }

    [part='footer'] {
      bottom: 0;
    }

    .position-absolute {
      position: absolute;
    }

    .position-fixed {
      position: fixed;
    }

    .position-sticky {
      position: sticky;
    }
  `;

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
