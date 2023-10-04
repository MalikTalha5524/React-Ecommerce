import React from "react";

export default function Location() {
  return (
    <>
      <section className="location flex justify-between px-[80px] py-16 my-36">
        <div className="location-text">
          <span className="text-lg text-gray-600">GET IN TOUCH</span>
          <h2 className="text-xl font-semibold pb-2">
            Visit one of our agency locations or contact us today
          </h2>
          <h6 className="text-base pb-8">Head Office</h6>
          <p className="text-lg font-medium pb-16">
            <span className="mr-2">
              <i className="fa fa-map-o" aria-hidden="true"></i>
            </span>
            example, example
          </p>
          <p className="text-lg font-medium pb-16">
            <span className="mr-2">
              <i className="fa fa-envelope-o" aria-hidden="true"></i>
            </span>
            example@gmail.com
          </p>
          <p className="text-lg font-medium pb-16">
            <span className="mr-2">
              <i className="fa fa-phone" aria-hidden="true"></i>
            </span>
            +920000 example
          </p>
          <p className="text-lg font-medium">
            <span className="mr-2">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
            </span>
            Monday-Saturday 11pm-7pm
          </p>
        </div>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3399.6422639999646!2d74.41152054265228!3d31.561430931776908!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190f7c9435bbfd%3A0x7f2005e33ab317ba!2sDevelpify%20Studios!5e0!3m2!1sen!2s!4v1679049293565!5m2!1sen!2s"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
