import React from "react";
import Header from "../frame/Header";

function Contact() {
  return (
    <div className="container-fluid px-0">
      <Header contact="active"/>

      <div className="container">
        <h2 className="pt-4">Contact Holmes</h2>

        <p className="text-justify">
          &emsp; 221B Baker Street is the London address of the fictional detective Sherlock Holmes,
          created by author Sir Arthur Conan Doyle. In the United Kingdom, postal addresses
          with a number followed by a letter may indicate a separate address within a larger,
          often residential building. Baker Street in the late 19th century was a high-class
          residential district, and Holmes' apartment would probably have been part of a
          Georgian terrace.
          <br/>
          &emsp; At the time the Holmes stories were published, addresses in Baker Street did not
          go
          as high as 221. Baker Street was later extended, and in 1932 the Abbey National
          Building Society moved into premises at 219–229 Baker Street. For many years, Abbey
          National employed a full-time secretary to answer mail addressed to Sherlock Holmes.
          In 1990, a blue plaque signifying 221B Baker Street was installed at the Sherlock
          Holmes Museum, situated elsewhere on the same block, and there followed a 15-year
          dispute between Abbey National and the Holmes Museum for the right to receive mail
          addressed to 221B Baker Street. Since the closure of Abbey House in 2005, ownership
          of the address by the Holmes Museum has not been challenged, despite its location
          between 237 and 241 Baker Street.

        </p>
      </div>
      
    </div>

  );
}

export default Contact;