import css from './RightPart.module.css';
import Photo from '../../assets/images/hero_min.jpg'

const RightPart = () => {
  return (
      <div className={css.rightPart}>
      <div className={css.image_rightPart}>
        <img src={Photo} alt="Photo" />
          </div>
          
          <button
              type='button'
              className={css.btn_rightPart}
          >
              Sign up
          </button>
    </div>
  )
}

export default RightPart