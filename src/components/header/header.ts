import {customElement} from 'lit/decorators.js';
import {SgHeaderFooter} from '../../utils/header-footer/header-footer';
import styles from './header.style';

@customElement('sg-header')
export class SgHeader extends SgHeaderFooter {
  static styles = [...SgHeaderFooter.styles, styles];
}
