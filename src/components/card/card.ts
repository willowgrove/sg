import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styles from './card.style';

@customElement('sg-card')
export class SgCard extends LitElement {
  static styles = [styles];

  @property({type: Boolean, reflect: true})
  button?: boolean;

  render() {
    return html`<slot></slot>`;
  }
}
