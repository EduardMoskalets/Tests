import css from './RightPart.module.css';

const RightPart = () => {
  return (
      <div className={css.rightPart}>
          <div className={css.image_rightPart}></div>
          
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