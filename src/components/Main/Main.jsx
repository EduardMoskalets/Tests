import UsedByCreativeTeams from "./UsedByCreativeTeams/UsedByCreativeTeams";
import css from './Main.module.css';
import VideoTools from "../Main/VideoTools/VideoTools";
import StartCreating from "./StartCreating/StartCreating";

const main = () => {
  return (
      <div className={css.mainContainer}>
      <UsedByCreativeTeams />
      <VideoTools />
      <StartCreating/>
    </div>
  )
}

export default main