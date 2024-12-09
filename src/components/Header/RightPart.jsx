import css from './RightPart.module.css';

const RightPart = () => {
  return (
      <div className={css.container}>
          <div>
              <img
              src="../../assets/images/8870b683-e6c5-4940-8f38-f5469690b2bdBase64.JPG"
              alt="Photo"
              width= "672"
              className={css.styles_photo} />
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