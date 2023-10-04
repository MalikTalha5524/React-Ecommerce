import React from "react";

export default function Downloadapp() {
  return (
    <>
      <section className="text-center download">
        <h2 className="text-[40px]  font-semibold mb-4">
          Download our{" "}
          <span>
            <a
              href="https://play.google.com/store/apps/details?id=com.clicky.pk&hl=en&gl=US"
              onClick={() => alert("leaving this site ?")}
              target="_blank"
              className="text-blue-500 underline"
            >
              App
            </a>
          </span>
        </h2>
        <div className="video d-flex justify-center">
          <video
            src="./assets/images/about/1.mp4"
            autoPlay
            muted
            loop
            className="w-[40%] h-80vh d-flex justify-center inline"
          ></video>
        </div>
      </section>
    </>
  );
}
