import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './button.style';

@customElement('sg-button')
export class SgButton extends LitElement {
  static styles = [styleForAll, styles];

  @property({reflect: true})
  href?: string;

  render() {
    return html` ${this.href
      ? html`<a href=${this.href}><slot></slot></a>`
      : html`<slot></slot>`}`;
  }
}
