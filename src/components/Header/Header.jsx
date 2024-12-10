import css from './Header.module.css';
import Navigation from './Navigation';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Header = () => {
  return (
      <div className={css.container_header}>
      <Navigation />
      <div className={css.parts}>
      <LeftPart />
      <RightPart />
      </div>
    </div>
  )
}

export default Header