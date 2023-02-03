import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';
import styles from './card.style';

@customElement('sg-card')
export class SgCard extends LitElement {
  static styles = [styles];

  render() {
    return html`<slot></slot>`;
  }
}
