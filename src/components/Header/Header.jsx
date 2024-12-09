// import css from './Header.module.css';
import Navigation from './Navigation';
import LeftPart from './LeftPart';
import RightPart from './RightPart';

const Header = () => {
  return (
      <div>
      <Navigation />
      <LeftPart />
      <RightPart />
    </div>
  )
}

export default Header