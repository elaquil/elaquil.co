import Entry from "../Entry";
import ImageModal from "../ImageModal";

const QuoteToBuyEntry = () => {
  return(
    <Entry title="Quote To Buy (2022-2023) [Angular, RxJS, Custom Insurance API]" 
    subtitle={<h2><a href='https://raa.com.au/' target='blank'>RAA</a></h2>}>
      <div className='gridContainer'>
        <div className='grid gridQtb'>
          <ImageModal src='showcase/qtb/qtb1.png' className='gridItem gridItemQtb1'></ImageModal>
          <ImageModal src='showcase/qtb/qtb3.png' className='gridItem gridItemQtb2'></ImageModal>
          <ImageModal src='showcase/qtb/qtb2.png' className='gridItem gridItemQtb3'></ImageModal>
        </div>
      </div>
      <p>
        Completed a variety of work on RAA's flagship online insurance quoting and purchasing platform. 
        Responsibilities included, major component contributions towards an unreleased insurance product,
        completion of tech-debt to improve performance and eliminate memory leaks, major cross browser optimisation 
        (specifically for Webkit browsers), as well as frequent code reviews and bugfixes.
      </p>
    </Entry>
  );
}

export default QuoteToBuyEntry;