import Entry from "../Entry";

const TwoHundredEntry = () => {
  return(
    <Entry title="200! (2022) [After Effects, Mocha, Premiere]" subtitle={<h2><a href="https://open.spotify.com/artist/2KX08AwhdUadg1S4yurmce" target="blank">for @aloevittoria</a></h2>}>
      <div className="IFrameWrapper">
        <iframe src="https://player.vimeo.com/video/736738261?h=f2f364b180&autoplay=1&loop=1&muted=1" width="960" height="540" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </div>
      <p>Demo of a music video for Aloe Vittoria's track "200!"</p>
    </Entry>
  )
}

export default TwoHundredEntry;