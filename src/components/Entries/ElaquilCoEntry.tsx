import Entry from "../Entry";
import ImageModal from "../ImageModal";

const ElaquilCoEntry = () => {
  return(
    <Entry title="elaquil.co (2022-2023) [React, TS, Vite, SWC]" 
    subtitle={<h2><a href='https://github.com/elaquil/elaquil.co' target='blank'>Github Repository</a></h2>}>
      <div className='gridContainer'>
        <div className='grid'>
          <ImageModal src='https://opengraph.githubassets.com/5b4c47a2b33a7cb5ad6c1b0bac10e79de4aab8ee82b52ceb790eed822a55426b/elaquil/elaquil.co'></ImageModal>
        </div>
      </div>
      <p>
        The site you are on right now, built to maintain my portfolio. A clean and striking static web page built from the ground up in React and fully custom UI components.
        No CSS preprocessors. The source is hosted on Github, and can be viewed at the link above.
      </p>
    </Entry>
  );
}

export default ElaquilCoEntry;