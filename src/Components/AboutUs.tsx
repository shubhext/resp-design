import React, { Component } from "react";

export default class AboutUs extends Component {
  render() {
    return (
      <div className="bg-[#38133F] w-full pt-4 pb-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3  text-white mt-16 gap-6  md:gap-4  ">
            <section className="col-span-2">
              <div className="grid grid-cols-1">
                <div className="subheader mt-5">
                  <h3 className="text-md text-center md:text-left">
                    test goes here
                  </h3>
                </div>
                <div className="title mt-5 mb-5">
                  <h3 className="text-4xl text-yellow-500 text-center md:text-left capitalize">
                    About Use & our work
                  </h3>
                </div>
                <div className="para">
                  <p className="text-justify px-4 md:px-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Dolorem veniam laudantium possimus fuga quidem ipsam hic
                    provident porro ipsa quisquam perferendis, doloremque at
                    illo numquam, esse modi nemo commodi maiores. Lorem ipsum
                    dolor sit amet consectetur adipisicing elit. Necessitatibus
                    sit vitae voluptatibus sapiente corrupti reprehenderit,
                    adipisci facilis esse recusandae possimus eos placeat quam
                    saepe earum suscipit inventore. Vitae, porro voluptatem?
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-1 px-4 md:px-0 mx-auto  md:grid-cols-2 gap-4 mt-10">
                <article>
                  <div className="para">
                    <p className="text-justify">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Consectetur quam, perferendis omnis, saepe voluptatibus
                      labore repellat dolore, officia adipisci reprehenderit
                      minus consequuntur explicabo. Facilis tempora nulla
                      quisquam, officiis aliquam iure!
                    </p>
                  </div>
                  <div className="button mt-10 flex justify-center  mb-10">
                    <button className="bg-yellow-500 uppercase hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                      Read more
                    </button>
                  </div>
                </article>
                <article className="mx-auto ">
                  <div className="max-w-sm rounded min-h-[200px] text-center  overflow-hidden bg-white text-black shadow-lg">
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2 mt-10">
                        <p>Sep 15 2022</p>
                        <h2 className="text-3xl mt-5">26</h2>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </section>
            <section className="ml-12 md:ml-0">
              <div className="max-w-lg  md:max-w-sm rounded min-h-[300px]  text-center  overflow-hidden  shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2  mt-16">
                    <p>current</p>
                    <h2 className="text-4xl text-yellow-500 mt-5">156</h2>
                  </div>
                </div>
              </div>
              <div className="max-w-lg  md:max-w-sm rounded min-h-[200px] text-center overflow-hidden bg-yellow-500 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 mt-10">
                    <p>Cases</p>
                    <h2 className="text-5xl mt-5">879</h2>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}
