import React, { Component } from "react";
interface Props {}
interface State {}
export default class Banner extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className=" mt-0 md:mt-28  ">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2  mt-16 gap-6  md:gap-4  ">
            <article>
              <img
                src="https://inovapayroll-production.s3.amazonaws.com/wp-content/uploads/2019/11/15072252/banner-foreground-placeholder.png "
                alt="img"
                className="object-contain w-full  h-full  "
              />
            </article>
            <article>
              <div className="title">
                <h3 className=" text-3xl md:text-7xl  font-bold text-center md:text-left  ">
                  We&apos;re a global consultancy
                </h3>
              </div>
              <div className="para mt-10">
                <p className="text-md text-justify px-10 md:p-0 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
                  doloribus, aperiam ipsum, inventore cum consectetur illum
                  magni quasi, nemo sequi minus exercitationem? Dignissimos
                  porro similique nulla enim, voluptas accusamus mollitia. Lorem
                  ipsum dolor sit, amet consectetur adipisicing elit. Non
                  suscipit quia at aliquid ex blanditiis dolores ipsa fugit
                  porro ea facere ab expedita in explicabo officiis modi, eius,
                  nobis maiores!
                </p>
              </div>
              <div className="button mt-10 flex justify-center  mb-10">
                <button className="bg-yellow-500 uppercase hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
                  Read more
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>
    );
  }
}
