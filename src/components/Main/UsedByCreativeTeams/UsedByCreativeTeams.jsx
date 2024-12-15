import css from './UsedByCreativeTeams.module.css';
import facebook from '../../../assets/images/facebook.jpg';
import Google from '../../../assets/images/Google.jpg';
import IBM from '../../../assets/images/IBM.jpg';
import NewBalance from '../../../assets/images/NewBalance.jpg';
import Pentagram from '../../../assets/images/Pentagram.jpg';
import RGA from '../../../assets/images/RGA.jpg';

const UsedByCreativeTeams = () => {
  return (
      <div className={css.usedByContainer}>
          <div className={css.container_text}>
              <p className={css.text_usedBy}>USED BY CREATIVE TEAMS AT:</p>
          </div>

          <div className={css.containerImg}>
              <img src={facebook} alt="fb"/>
              <img src={Google} alt="Google" />
              <img src={IBM} alt="IBM" />
              <img src={NewBalance} alt="NB" />
              <img src={Pentagram} alt="Pentagram" />
              <img src={RGA} alt="RGA" />
          </div>
    </div>
  )
}

export default UsedByCreativeTeams