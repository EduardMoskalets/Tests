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
              <h3>Introducing Green Screen</h3>
              <p>A professional grade tool for cutting objects out of videos with just one click.
                  All from inside your browser.
              </p>
              <p>Say goodbye to clumsy plug-ins and expensive software suites.</p>
              <button type='button'>Try Green Screen</button>
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