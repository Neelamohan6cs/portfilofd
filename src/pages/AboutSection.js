// src/AboutSection.js
import React from "react";

const AboutSection = () => {
  return (
    <div className="container bg-white py-5 ">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">About Me</h2>
        </div>

        <div className="col-12">
          <p>
            Sea et gubergren justo invidunt at amet clita. Justo sit justo tempor et
            invidunt voluptua, lorem voluptua ipsum gubergren et est nonumy magna et
            vero, sit eos dolor sea sed et dolor erat et. Accusam accusam magna
            aliquyam eirmod amet est kasd dolore sanctus. Lorem ea vero lorem eos eos
            sanctus labore. Aliquyam vero ipsum dolor duo clita consetetur stet,
            aliquyam ipsum sea sed et magna amet dolor.
          </p>

          <div className="row">
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Name:</h5> John Doe
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Birthday:</h5> 1 April 1990
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Degree:</h5> Master
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Experience:</h5> 10 Years
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Phone:</h5> +012 345 6789
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Email:</h5> info@example.com
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Address:</h5> 123 Street, New York, USA
            </div>
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Freelance:</h5> Available
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
