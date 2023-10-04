import React from "react";

export default function Contactform() {
  return (
    <>
      <section className="form-section flex justify-between px-[80px] w-[100%]">
        <div className="form-text w-3/5 border-gray-500">
          <h4 className="text-sm font-semibold mb-2">LEAVE A MESSAGE</h4>
          <h2 className="text-2xl font-bold mb-4">We love to hear from you</h2>
          <form
            action=""
            className="flex flex-col justify-center border border-gray-250 p-5"
          >
            <input
              type="text"
              placeholder="Your Name"
              required
              className="px-4 py-2 mb-4 outline-none border border-gray-250"
            />
            <input
              type="email"
              placeholder="E-mail"
              required
              className="px-4 py-2 mb-4 outline-none border border-gray-250"
            />
            <input
              type="text"
              placeholder="Subject"
              required
              className="px-4 py-2 mb-4 outline-none border border-gray-250"
            />
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Your message"
              required
              className="px-4 py-2 mb-4 outline-none border border-gray-250"
            ></textarea>
            <button className="p-2 ml-[13rem] w-[300px] bg-green-700 text-white text-lg font-semibold border-none outline-none">
              Submit
            </button>
          </form>
        </div>
        <div className="pf w-[37%] ">
          <div className="form-person flex items-start w-full pt-8 pb-4 mt-9">
            <div className="p-img">
              <img
                src="/assets/images/people/1.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="p-text pl-5">
              <h3 className="text-xl font-semibold">King</h3>
              <p className="text-sm">Senior Manager</p>
              <p className="text-sm">+9213456789</p>
              <p className="text-sm">Email: example@gmail.com</p>
            </div>
          </div>
          <div className="form-person flex items-start w-full pt-8 pb-4">
            <div className="p-img">
              <img
                src="/assets/images/people/2.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="p-text pl-5">
              <h3 className="text-xl font-semibold">King</h3>
              <p className="text-sm">Senior Manager</p>
              <p className="text-sm">+9213456789</p>
              <p className="text-sm">Email: example@gmail.com</p>
            </div>
          </div>
          <div className="form-person flex items-start w-full pt-8 pb-4">
            <div className="p-img">
              <img
                src="/assets/images/people/3.png"
                alt=""
                className="w-16 h-16"
              />
            </div>
            <div className="p-text pl-5">
              <h3 className="text-xl font-semibold">King</h3>
              <p className="text-sm">Senior Manager</p>
              <p className="text-sm">+9213456789</p>
              <p className="text-sm">Email: example@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
