import css from './StartCreating.module.css';
import Creating from '../../../assets/images/Creating.png';

const StartCreating = () => {
  return (
      <div className={css.startCreatingContainer}>
          <div className={css.title}>
              <h3>START CREATING</h3>
          </div>

          <div className={css.bodyPart}>
              <h2 className={css.text}>Generate Automate Transform Analyze Create</h2>
              <img className={css.img} src={Creating} alt="img" />
          </div>
    </div>
  )
}

export default StartCreating