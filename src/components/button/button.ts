import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './button.style';

@customElement('sg-button')
export class SgButton extends LitElement {
  static styles = [styles];

  @property({reflect: true})
  href?: string;

  render() {
    return html` ${this.href
      ? html`<a href=${this.href}><slot></slot></a>`
      : html`<slot></slot>`}`;
  }
}
