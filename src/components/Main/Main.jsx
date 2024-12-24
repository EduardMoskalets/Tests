import UsedByCreativeTeams from "./UsedByCreativeTeams/UsedByCreativeTeams";
import css from './Main.module.css';
import VideoTools from "../Main/VideoTools/VideoTools";
import StartCreating from "./StartCreating/StartCreating";
import GetStarted from "./GetStarted/GetStarted";

const main = () => {
  return (
      <div className={css.mainContainer}>
      <UsedByCreativeTeams />
      <VideoTools />
      <StartCreating />
      <GetStarted />
    </div>
  )
}

export default main