import css from './Navigation.module.css';
import Icon from '../../assets/images/Frame.png';

const Navogation = () => {
  return (
    <div className={css.section_nav}>
      <div className={css.icon}>
        <img src={Icon} alt="" width="40" height="36"/>
      </div>
          <div className={css.list_nav}>
              <ul className={css.listNav}>
                  <li className={css.navItem}>Features</li>
                  <li className={css.navItem}>Pricing</li>
                  <li className={css.navItem}>Recources</li>
              </ul>
      </div>
      <div className={css.buttons}>
        <button type='button' className={css.btn_log}>Log in</button>
        <button type='button' className={css.btn_sign}>Sign up</button>
      </div>
    </div>
  )
}

export default Navogation