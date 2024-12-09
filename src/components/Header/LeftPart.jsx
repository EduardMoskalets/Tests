import css from './LeftPart.module.css';

const LeftPart = () => {
  return (
      <div>
          <h1 className={css.title}>Make the Impossible</h1>
          <p className={css.text}>Create and edit content like never before.</p>
          <p className={css.text}>Your next generation creative toolkit —
              powered by machine learning.
          </p>
          <button type='button'>Try Runway for free</button>
    </div>
  )
}

export default LeftPart