import { useState } from "react";
import { episodeList } from "./data";

export default function App() {
  const [episodes] = useState(episodeList);
  const [selectedEpisode, setSelectedEpisode] = useState();

  /** Detailed information about the selected episode */
  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episode Details</h2>
          <p>Select an episode to decide what to watch.</p>
        </section>
      );
    }
    return (
      <section className="details">
        <h2>{selectedEpisode.title}</h2>
        <p>
          {selectedEpisode.title} is number {selectedEpisode.id} in the series.
        </p>
        <p>Description: {selectedEpisode.description}.</p>
        <button>Watch Now!</button>
      </section>
    );
  }
  /** List of episodes that a user can select from */
  function EpisodeList() {
    return (
      <section className="episodes">
        <h2>Season</h2>
        <ul className="episodes">
          {episodes.map((episode) => (
            <li
              key={episode.id}
              onClick={() => setSelectedEpisode(episode)}
              className={selectedEpisode?.id === episode.id ? "selected" : ""}
            >
              {episode.title}
            </li>
          ))}
        </ul>
      </section>
    );
  }

  return (
    <>
      <header>
        <h1>Dark Echoes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  );
}
