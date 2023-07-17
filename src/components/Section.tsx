import './Section.css'

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Section = ({id, title, children}: SectionProps) =>{
  return (
    <section>
      <div id={id} className="secTitleContainer">
        <div className='secScrollContainer'>
            <h1 className="secTitle secTitle1">{title}</h1>
            <h1 className="secTitle secTitle2">{title}</h1>
            <h1 className="secTitle secTitle3">{title}</h1>
            <h1 className="secTitle secTitle4">{title}</h1>
            <h1 className="secTitle secTitle5">{title}</h1>
            <h1 className="secTitle secTitle1">{title}</h1>
            <h1 className="secTitle secTitle2">{title}</h1>
            <h1 className="secTitle secTitle3">{title}</h1>
            <h1 className="secTitle secTitle4">{title}</h1>
            <h1 className="secTitle secTitle5">{title}</h1>
        </div>
      </div>
      <br></br>
      {children}
    </section>
  )
};

export default Section;