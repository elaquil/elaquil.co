import Entry from "../Entry";
import ImageModal from "../ImageModal";

const DepartedFacilityEntry = () => {
  return(
    <Entry title={"Departed Facility (2020-) [Multimedia]"} subtitle={<h2><a href="https://instagram.com/departedfacility" target="blank">@departedfacility</a></h2>}>
      <div className='gridContainer'>
        <div className='grid gridDF'>
          <ImageModal src='showcase/df/DFLadyBug.jpg' className='gridItem gridItemDF1'></ImageModal>
          <video autoPlay muted loop webkit-playsinline playsInline className='gridItem gridItemDF2'>
              <source src="showcase/df/DFOTR.mp4"></source>
          </video>
        </div>
        <div className='grid gridDF2'>
          <ImageModal src='showcase/df/DFLogo2.png' className='gridItem gridItemDF3'></ImageModal>
          <video autoPlay muted loop webkit-playsinline playsInline className='gridItem gridItemDF4'>
              <source src="showcase/df/DFRendering.mp4"></source>
          </video>
          <ImageModal src='showcase/df/DFBox.png' className='gridItem gridItemDF5'></ImageModal>
        </div>
      </div>
      <p>WIP Project</p>
    </Entry>
  );
};

export default DepartedFacilityEntry;