import UsedByCreativeTeams from "./UsedByCreativeTeams/UsedByCreativeTeams";
import css from './Main.module.css';
import VideoTools from "../Main/VideoTools/VideoTools";

const main = () => {
  return (
      <div className={css.mainContainer}>
      <UsedByCreativeTeams />
      <VideoTools />
    </div>
  )
}

export default main