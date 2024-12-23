import css from './VideoTools.module.css';

const VideoTools = () => {
  return (
      <div className={css.videoToolsContainer}>
          <div className={css.title}>
              <p>Video Tools</p>
          </div>

          <div className={css.bodyPart}>
              <div className={css.textPart}>
          <div>
            <div><h3 className={css.leftText}>Introducing Green Screen</h3></div>

            <div>     
            <div className={css.textContainerOne}>
                <p className={css.aboutTextOne}>A professional grade tool for cutting objects out of videos with just one click.
                  All from inside your browser.
              </p></div>

            <div className={css.textContainerTwo}>         
            <p className={css.aboutTextTwo}>
                Say goodbye to clumsy plug-ins and expensive software suites.
            </p>
            </div> 
                          
                <button type='button' className={css.btn}>Try Green Screen</button>
            </div>
          </div>
          </div>

          <div className={css.videoPart}>
              <iframe
                  src="https://youtu.be/4bNTq-LRXnY?si=EWCDpILTp69GXOKE" frameborder="0"
                  width='872'
                  height='496'
              >
              </iframe>
          </div>
          </div>

      </div>
  )
}

export default VideoTools