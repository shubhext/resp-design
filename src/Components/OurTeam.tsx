import React, { Component } from "react";
interface Props {}
interface State {}
export default class OurTeam extends Component<Props, State> {
  render() {
    return (
      <div>
        <section className=" bg-white">
          <div className="container mx-auto my-10">
            <div className="grid grid-cols-1 md:grid-cols-3 ">
              <div className=" md:col-span-2">
                <div className="mt-10">
                  <div className="grid px-4 md:px-0 md:grid-cols-2  ">
                    <article>
                      <div className="grid grid-cols-1  gap-3 md:gap-0 ">
                        <article className="h-[300px] ">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJHiMo1tejVf0dTl5pCjWwkCzr4lM8AGu8A&usqp=CAU"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </article>
                        <article className="h-[200px]  w-full">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJHiMo1tejVf0dTl5pCjWwkCzr4lM8AGu8A&usqp=CAU"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </article>
                      </div>
                    </article>
                    <article>
                      <div className="grid grid-cols-1 gap-3 md:gap-0 mt-20">
                        <article className="h-60 ">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJHiMo1tejVf0dTl5pCjWwkCzr4lM8AGu8A&usqp=CAU"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </article>
                        <article className="h-60">
                          <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJHiMo1tejVf0dTl5pCjWwkCzr4lM8AGu8A&usqp=CAU"
                            alt=""
                            className="object-cover w-full h-full"
                          />
                        </article>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="card text-center md:text-right">
                <div className="grid grid-cols-1">
                  <div>
                    <div className="title my-5">
                      <h3 className="text-5xl uppercase text-center md:text-right">
                        Our Team
                      </h3>
                    </div>
                    <div className="para px-4 text-center md:text-right md:px-0">
                      <p className="text-center md:text-right ">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Tenetur sequi culpa quas ducimus veniam tempora
                        exercitationem fugit incidunt placeat accusamus fuga
                        modi dicta non reiciendis porro repudiandae aut,
                        similique cupiditate. Lorem ipsum dolor, sit amet
                        consectetur adipisicing elit. Distinctio corrupti
                        incidunt adipisci eligendi, repellat dolores fuga,
                        doloremque natus iusto facilis recusandae dolor minima
                        eos, ratione ut accusamus velit repudiandae quidem!
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="h-60 mt-10 px-4 md:px-0">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVJHiMo1tejVf0dTl5pCjWwkCzr4lM8AGu8A&usqp=CAU"
                        alt=""
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
