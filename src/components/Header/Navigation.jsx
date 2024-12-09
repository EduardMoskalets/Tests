import css from './Navigation.module.css';

const Navogation = () => {
  return (
      <div>
          <div>
              <ul className={css.listNav}>
                  <li className={css.navItem}>Features</li>
                  <li className={css.navItem}>Pricing</li>
                  <li className={css.navItem}>Recources</li>
              </ul>
      </div>
      <div>
        <button type='button' className={css.btn_log}>Log in</button>
        <button type='button' className={css.btn_sign}>Sign up</button>
      </div>
    </div>
  )
}

export default Navogation