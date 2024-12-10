import css from './LeftPart.module.css';

const LeftPart = () => {
  return (
      <div className={css.leftPart}>
      <h1 className={css.title}>Make the Impossible</h1>
      <div className={css.container_text}>
        <p className={css.text_one}>Create and edit content like never before.<br/>
          Your next generation creative toolkit —
          powered by machine learning.
        </p>
          <button type='button' className={css.btn_leftPart}>Try Runway for free</button>
      </div>
    </div>
  )
}

export default LeftPart