import Entry from "../Entry";
import ImageModal from "../ImageModal";

const myAccountEntry = () => {
  return(
    <Entry title="My Account (2022-2023) [Next.JS, React, Auth0]" 
    subtitle={<h2><a href='https://raa.com.au/' target='blank'>RAA</a></h2>}>
      <div className='gridContainer'>
        <div className='grid gridMyAccount'>
          <ImageModal src='showcase/myAccount/MyAccount1.png' className='gridItem gridItemMyAccount1'></ImageModal>
          <ImageModal src='showcase/myAccount/MyAccount2.png' className='gridItem gridItemMyAccount2'></ImageModal>
          <ImageModal src='showcase/myAccount/MyAccount3.png' className='gridItem gridItemMyAccount3'></ImageModal>
        </div>
      </div>
      <p>
        a from the ground up rebuild of RAA's previous personal account page, created in Next.JS, using Auth0 for identity management,
        responsibilities included, maintaining WCAG 2.1 AA compliance, insuring cross-browser & cross-platform parity, production of minor/major components,
        and maintenance, including bug fixes and optimisations.
      </p>
    </Entry>
  );
}

export default myAccountEntry;