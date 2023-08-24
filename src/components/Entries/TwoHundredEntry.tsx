import Entry from "../Entry";

const TwoHundredEntry = () => {
  return(
    <Entry title="200! (2022) [After Effects, Mocha, Premiere]" subtitle={<h2><a href="https://open.spotify.com/artist/2KX08AwhdUadg1S4yurmce" target="blank">for @aloevittoria</a></h2>}>
    <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} className="IFrameWrapper">
      <iframe
        src="https://player.vimeo.com/video/736738261?&autoplay=1&loop=1&muted=1"
        frameBorder={0}
        allow="autoplay; fullscreen; picture-in-picture"
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
        title="200! Demo"
      ></iframe>
    </div>
      <p>Demo of a music video for Aloe Vittoria's track "200!"</p>
    </Entry>
  )
}

export default TwoHundredEntry;