import Entry from "../Entry";

const EverythingThatYouWantEntry = () => {
  return(
    <Entry title={"Everything (That You Want) (2022-) [After Effects, Mocha, Premiere, FFMPEG]"} subtitle={<h2><a href="https://open.spotify.com/artist/2KX08AwhdUadg1S4yurmce" target="blank">for @aloevittoria</a></h2>} >
      <div className="IFrameWrapper">
        <iframe src="https://player.vimeo.com/video/846363554?h=9e3508080b&autoplay=1&loop=1&muted=1" width="960" height="540" frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
      </div>
      <p>Music video for Aloe Vittoria's track "Everything (That You Want)", current WIP. Composited, rotoscoped, and post-processed in After Effects. Used FFMPEG to go in and break video data, leading to datamoshing and other digital garbage</p>
    </Entry>
  )
}

export default EverythingThatYouWantEntry;