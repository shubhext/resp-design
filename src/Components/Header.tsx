import React, { Component } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
interface Props {}
interface State {
  oepnNav: boolean;
}

const arrLinks = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  { id: 2, title: "about", link: "/about" },
  { id: 3, title: "contact", link: "/contact" },
  { id: 4, title: "blog", link: "/blog" },
];
export default class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      oepnNav: false,
    };
  }
  render() {
    return (
      <div>
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
          <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                LOGO
              </span>
            </a>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
              onClick={() =>
                this.setState({
                  oepnNav: !this.state.oepnNav,
                })
              }
            >
              {!this.state.oepnNav ? <AiOutlineMenu /> : <AiOutlineClose />}
            </button>
            <div
              className={`${
                this.state.oepnNav ? "flex" : "hidden"
              }  w-full md:block md:w-auto`}
              id="navbar-default"
            >
              <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                {arrLinks.map((item, index) => {
                  return (
                    <li>
                      <a
                        href={item.link}
                        className="block capitalize py-2 pr-4 pl-3 text-white hover:bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                      >
                        {item.title}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
