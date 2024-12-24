import css from './GetStarted.module.css';
import { FaArrowRight } from "react-icons/fa6";

const GetStarted = () => {
  return (
      <div className={css.getStartedContainer}>
          
          <div className={css.iconContainer}><FaArrowRight className={css.icon} /></div>

          <div className={css.textPart}><h2 className={css.text}>GET STARTED  <br /> NOW</h2></div>
          
    </div>
  )
}

export default GetStarted