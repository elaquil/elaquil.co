import React from "react";

interface EntryProps{
  title: string;
  subtitle: React.ReactNode;
  children?: React.ReactNode;
}

const Entry = ({title, subtitle, children}: EntryProps) => {

  return (
    <>
      <div className="entryHeader">
          <h2>{title}</h2>
          <br></br>
          {subtitle}
      </div>
      {children}
    </>
  )
}

export default Entry;