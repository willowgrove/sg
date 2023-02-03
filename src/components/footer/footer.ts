import {customElement} from 'lit/decorators.js';
import {SgHeaderFooter} from '../../utils/header-footer/header-footer';
import styles from './footer.style';

@customElement('sg-footer')
export class SgFooter extends SgHeaderFooter {
  static styles = styles;
}
