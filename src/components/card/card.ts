import {html, LitElement} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import styleForAll from '../../utils/style-for-all';
import styles from './card.style';

@customElement('sg-card')
export class SgCard extends LitElement {
  static styles = [styleForAll, styles];

  @property({type: Boolean, reflect: true})
  button?: boolean;

  render() {
    return html`<slot></slot>`;
  }
}
