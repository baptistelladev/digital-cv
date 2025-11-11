import { Ellipsis } from "lucide-react";
import React, { useState } from "react";

interface IDomSimProps {
  currentPosition: number;
  isDragging: boolean;
}

export default function DomSimulator({
  currentPosition,
  isDragging,
}: IDomSimProps) {
  const list = [
    "Elements",
    "Console",
    "Sources",
    "Network",
    "Performance",
    "Memory",
    "Application",
    "Privacy and Security",
    "Lighthouse",
    "Recorder",
  ];

  const rightList = ["Styles", "Computed", "Layout", "Event Listeners"];

  const footerSelected = [
    {
      tag: "div",
      aux: ".flex.items-center.justify-center.flex-col.h-full.w-full",
    },
    {
      tag: "div",
      aux: ".max-w-[200px].text-center.bg-html-inspect",
    },
    {
      tag: "p",
      aux: ".text-neutral-200.font-thin.text.sm",
      is_selected: true,
    },
  ];

  const [selectedItemFromList] = useState<string>("Elements");

  const TagStyle = () => (
    <p className="text-html-attr absolute top-0 right-0 text-[11px] w-auto">
      {"<style>"}
    </p>
  );

  return (
    <section className="what-you-see w-full h-screen bg-dom-sim-gray-28 flex flex-col">
      <header className="h-[27px] w-full border-b border-b-dom-sim-gray-5e bg-dom-sim-gray-3c flex items-center justify-start">
        <div className="pl-3 pr-1">
          <img src="left-buttons-toolbar.png" alt="" className="h-[18px]" />
        </div>

        <span className="w-[.7px] bg-dom-sim-gray-5e mx-1 h-[60%]"></span>

        <div className="flex-1 flex items-end justify-start h-full">
          <ul className="flex items-end justify-start h-full">
            {list.map((item) => (
              <React.Fragment key={item}>
                <li
                  className={`relative text-dom-sim-gray-c7 font-normal text-[12px] px-2 h-full flex items-center justify-start whitespace-nowrap before:content[" "] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2.1px] before:rounded-t-lg before:bg-none ${
                    selectedItemFromList === item &&
                    "text-dom-sim-purple-light before:bg-dom-sim-purple-light"
                  } is-active:text-red-100`}
                >
                  {item}
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>

        <span className="w-[.7px] bg-dom-sim-gray-5e mx-1 h-[60%]"></span>

        <div className="pl-1 pr-3">
          <img src="right-buttons-toolbar.png" alt="" className="h-[23px]" />
        </div>
      </header>

      <div className="flex items-start justify-start w-full flex-1 min-h-screen">
        <div className="flex-1 h-[calc(100vh-25px)] flex items-start justify-start flex-col relative">
          <code className="content w-full flex-1 p-4 py-1 font-mono text-[10px] relative">
            <div className="absolute top-4 right-4 rounded-full shadow  opacity-70 p-1.5 shadow-slate-950">
              <img src="accessibility.png" className="w-3.5 invert" alt="" />
            </div>

            <p className="text-[11px] text-html-gray">&lt;!DOCTYPE html&gt;</p>

            <p>
              <span className="text-html-tag">&lt;html</span>
              <span className="text-html-attr"> lang</span>
              <span className="text-html-tag">="</span>
              <span className="text-html-orange">pt-br</span>
              <span className="text-html-tag">"&gt;</span>
              <span className="border border-blue-light rounded-xl ml-1 inline-block w-11 h-3.3 text-center text-html-attr font-normal text-[8px]">
                scroll
              </span>
            </p>

            <div className="pl-2">
              <p>
                <img
                  src="arrow-right.png"
                  alt=""
                  className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                />
                <span className="text-html-tag">&lt;</span>
                <span className="text-html-tag">head</span>
                <span className="text-html-tag">&gt;</span>
              </p>

              <div className="pl-2">
                <p className="pl-1">
                  <img
                    src="arrow-right.png"
                    alt=""
                    className="inline h-3 mr-1 -mt-[1.5px]"
                  />
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">script</span>
                  <span className="text-html-attr"> type</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">module</span>
                  <span className="text-html-tag">"&gt;</span>
                  <span className="border border-blue-light rounded-xl mx-[.9px] inline w-4 h-3 text-white font-bold text-[7px]">
                    ...
                  </span>
                  <span className="text-html-tag">&lt;/script&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">script</span>
                  <span className="text-html-attr"> type</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">module</span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-attr"> src</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    /@vite/client
                  </span>
                  <span className="text-html-tag">"&gt;&lt;/script&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">meta</span>
                  <span className="text-html-attr"> charset</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">UTF-8</span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>

                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">icon</span>
                  <span className="text-html-tag">"</span>

                  <span className="text-html-attr"> type</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">image/svg+xml</span>
                  <span className="text-html-tag">"</span>

                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    /favicon.png
                  </span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">meta</span>
                  <span className="text-html-attr"> name</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">viewport</span>
                  <span className="text-html-tag">" </span>
                  <span className="text-html-attr">content</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">
                    width=device-width, initial-scale=1.0
                  </span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">title</span>
                  <span className="text-html-tag">&gt;</span>
                  <span className="text-white">
                    Felipe Baptistella Vieira - Desenvolvedor Front-end.
                  </span>
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">/title</span>
                  <span className="text-html-tag">&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>
                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    /src/style.css
                  </span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">stylesheet</span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-tag">"&gt;&lt;/script&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>

                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">preconnect</span>
                  <span className="text-html-tag">"</span>

                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    https://fonts.gstatic.com
                  </span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>

                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">preconnect</span>
                  <span className="text-html-tag">"</span>

                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    https://fonts.googleapis.com
                  </span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-attr"> crossorigin</span>
                  <span className="text-html-tag">&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>
                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap
                  </span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">stylesheet</span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">link</span>

                  <span className="text-html-attr"> rel</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">stylesheet</span>
                  <span className="text-html-tag">"</span>
                  <span className="text-html-attr"> href</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-attr underline underline-offset-1">
                    https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css
                  </span>
                  <span className="text-html-tag">"&gt;</span>
                </p>
              </div>

              <p className="pl-2">
                <span className="text-html-tag">&lt;/</span>
                <span className="text-html-tag">head</span>
                <span className="text-html-tag">&gt;</span>
              </p>

              <p>
                <img
                  src="arrow-right.png"
                  alt=""
                  className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                />
                <span className="text-html-tag">&lt;</span>
                <span className="text-html-tag">body</span>
                <span className="text-html-tag">&gt;</span>
              </p>

              <div className="pl-3.5">
                <p>
                  <img
                    src="arrow-right.png"
                    alt=""
                    className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                  />
                  <span className="text-html-tag">&lt;</span>
                  <span className="text-html-tag">div</span>
                  <span className="text-html-attr"> id</span>
                  <span className="text-html-tag">="</span>
                  <span className="text-html-orange">root</span>
                  <span className="text-html-tag">"&gt;</span>
                </p>

                <div className="pl-3.5">
                  <p>
                    <img
                      src="arrow-right.png"
                      alt=""
                      className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                    />
                    <span className="text-html-tag">&lt;</span>
                    <span className="text-html-tag">section</span>
                    <span className="text-html-attr"> class</span>
                    <span className="text-html-tag">="</span>
                    <span className="text-html-orange">min-h-screen</span>
                    <span className="text-html-tag">"&gt;</span>
                  </p>

                  <div className="pl-3.5">
                    <p>
                      <img
                        src="arrow-right.png"
                        alt=""
                        className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                      />
                      <span className="text-html-tag">&lt;</span>
                      <span className="text-html-tag">section</span>
                      <span className="text-html-attr"> class</span>
                      <span className="text-html-tag">="</span>
                      <span className="text-html-orange">
                        flex min-h-screen flex-col items-start justify-start
                      </span>
                      <span className="text-html-tag">"&gt;</span>
                    </p>

                    <div className="pl-3">
                      <p>
                        <img
                          src="arrow-right.png"
                          alt=""
                          className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                        />
                        <span className="text-html-tag">&lt;</span>
                        <span className="text-html-tag">div</span>
                        <span className="text-html-attr"> class</span>
                        <span className="text-html-tag">="</span>
                        <span className="text-html-orange">
                          h-screen relative w-full
                        </span>
                        <span className="text-html-tag">"&gt;</span>
                      </p>

                      <div className="pl-3.5">
                        <p>
                          <img
                            src="arrow-right.png"
                            alt=""
                            className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                          />
                          <span className="text-html-tag">&lt;</span>
                          <span className="text-html-tag">div</span>

                          <span className="text-html-attr"> aria-label</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">
                            Comparison slider
                          </span>
                          <span className="text-html-tag">"</span>

                          <span className="text-html-attr"> aria-valuemax</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">100</span>
                          <span className="text-html-tag">"</span>

                          <span className="text-html-attr"> aria-valuemin</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">0</span>
                          <span className="text-html-tag">"</span>

                          <span className="text-html-attr"> aria-valuenow</span>
                          <span className="text-html-tag">="</span>
                          <span
                            className={` ${
                              isDragging
                                ? " text-black bg-html-event transition-all ease-out duration-500 "
                                : "bg-transparent text-html-orange transition-all ease-out duration-500"
                            }`}
                          >
                            {currentPosition}
                          </span>
                          <span className="text-html-tag">"</span>

                          <span className="text-html-attr"> class</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">
                            relative isolate w-full select-none overflow-hidden
                            aspect-video min-h-screen
                          </span>

                          <span className="text-html-attr"> role</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">slider</span>
                          <span className="text-html-tag">"</span>

                          <span className="text-html-attr"> tabindex</span>
                          <span className="text-html-tag">="</span>
                          <span className="text-html-orange">0</span>

                          <span className="text-html-tag">"&gt;</span>
                        </p>

                        <div className="pl-3.5">
                          <p>
                            <img
                              src="arrow-right.png"
                              alt=""
                              className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                            />

                            <span className="text-html-tag">&lt;</span>
                            <span className="text-html-tag">div</span>

                            <span className="text-html-attr"> aria-hidden</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">true</span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> class</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">
                              absolute inset-0 h-full w-full object-cover
                              bg-dom-sim-gray-28
                            </span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> role</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">img</span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> style</span>
                            <span className="text-html-tag">="</span>
                            <span
                              className={` ${
                                isDragging
                                  ? " text-black bg-html-event transition-all ease-out duration-500 "
                                  : "bg-transparent text-html-orange transition-all ease-out duration-500"
                              }`}
                            >
                              {`inset(0px 0px 0px ${currentPosition}%)`}
                            </span>

                            <span className="text-html-tag">"&gt;</span>
                          </p>

                          <div className="pl-3">
                            <p>
                              <img
                                src="arrow-right.png"
                                alt=""
                                className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                              />
                              <span className="text-html-tag">&lt;</span>
                              <span className="text-html-tag">div</span>

                              <span className="text-html-attr"> class</span>
                              <span className="text-html-tag">="</span>
                              <span className="text-html-orange">
                                me w-full h-full relative overflow-hidden
                              </span>

                              <span className="text-html-tag">"&gt;</span>
                            </p>

                            <div className="pl-5">
                              <p>
                                <span className="text-html-tag">&lt;</span>
                                <span className="text-html-tag">div</span>

                                <span className="text-html-attr"> class</span>
                                <span className="text-html-tag">="</span>
                                <span className="text-html-orange">
                                  absolute top-0 left-0 w-full h-[3px]
                                  bg-linear-to-r from-transparent to-main z-50
                                </span>

                                <span className="text-html-tag">
                                  "&gt;&lt;/div&gt;
                                </span>
                              </p>
                            </div>

                            <div className="pl-5">
                              <p>
                                <span className="text-html-tag">&lt;</span>
                                <span className="text-html-tag">img</span>

                                <span className="text-html-attr"> alt</span>
                                <span className="text-html-tag">="</span>
                                <span className="text-html-orange">
                                  background
                                </span>

                                <span className="text-html-attr"> class</span>
                                <span className="text-html-tag">="</span>
                                <span className="text-html-orange">
                                  h-[90vh] absolute top-1/2 transform
                                  -translate-y-1/2 right-0 z-10 flex-none
                                  object-cover
                                </span>

                                <span className="text-html-attr"> src</span>
                                <span className="text-html-tag">="</span>
                                <span className="text-html-attr underline underline-offset-1">
                                  fbv-both.png
                                </span>

                                <span className="text-html-tag">"&gt;</span>
                              </p>
                            </div>

                            <div className="pl-2.5">
                              <p>
                                <img
                                  src="arrow-right.png"
                                  alt=""
                                  className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                                />
                                <span className="text-html-tag">&lt;</span>
                                <span className="text-html-tag">div</span>

                                <span className="text-html-attr"> class</span>
                                <span className="text-html-tag">="</span>
                                <span className="text-html-orange">
                                  w-full max-w-xl m-auto relative z-15 flex
                                  items-center justify-center h-full flex-col
                                </span>

                                <span className="text-html-tag">"&gt;</span>
                              </p>

                              <div className="pl-5">
                                <p>
                                  <span className="text-html-tag">&lt;</span>
                                  <span className="text-html-tag">img</span>

                                  <span className="text-html-attr"> alt</span>
                                  <span className="text-html-tag">="</span>
                                  <span className="text-html-orange">logo</span>

                                  <span className="text-html-attr"> class</span>
                                  <span className="text-html-tag">="</span>
                                  <span className="text-html-orange">
                                    w-[250px]
                                  </span>

                                  <span className="text-html-attr"> src</span>
                                  <span className="text-html-tag">="</span>
                                  <span className="text-html-attr underline underline-offset-1">
                                    logo.png
                                  </span>

                                  <span className="text-html-tag">"&gt;</span>
                                </p>
                              </div>

                              <div className="pl-2.5">
                                <p>
                                  <img
                                    src="arrow-right.png"
                                    alt=""
                                    className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90"
                                  />
                                  <span className="text-html-tag">&lt;</span>
                                  <span className="text-html-tag">div</span>

                                  <span className="text-html-attr"> class</span>
                                  <span className="text-html-tag">="</span>
                                  <span className="text-html-orange">
                                    max-w-[200px] text-center bg-html-inspect
                                  </span>

                                  <span className="text-html-tag">"&gt;</span>
                                </p>

                                <div className="pl-2.5">
                                  <p className="before:bg-html-selected before:absolute before:left-0 before:w-full before:h-3.5 before:z-10">
                                    <Ellipsis className="absolute left-0 text-white size-3 ml-1 z-30" />

                                    <img
                                      src="arrow-right.png"
                                      alt=""
                                      className="inline h-3 mr-1 -mt-[1.5px] transform rotate-90 "
                                    />
                                    <span className="text-html-tag relative z-20">
                                      &lt;
                                    </span>
                                    <span className="text-html-tag relative z-20">
                                      p
                                    </span>

                                    <span className="text-html-attr relative z-20">
                                      {" "}
                                      class
                                    </span>
                                    <span className="text-html-tag relative z-20">
                                      ="
                                    </span>
                                    <span className="text-html-orange relative z-20">
                                      text-neutral-200 font-thin text-sm
                                    </span>

                                    <span className="text-html-tag relative z-20">
                                      "&gt;
                                    </span>
                                  </p>

                                  <div className="pl-5">
                                    <p>
                                      <span className="text-white">
                                        "Desenvolvedor "
                                      </span>
                                    </p>
                                    <p>
                                      <span className="text-html-tag">
                                        &lt;span&gt;
                                      </span>

                                      <span className="text-white">
                                        Front-end
                                      </span>

                                      <span className="text-html-tag">
                                        &lt;span&gt;
                                      </span>
                                    </p>
                                    <p>
                                      <span className="text-white">
                                        " com mais"
                                      </span>
                                    </p>
                                    <p>
                                      <span className="text-html-tag">
                                        &lt;span&gt;
                                      </span>
                                    </p>
                                    <p>
                                      <span className="text-white">"de "</span>
                                    </p>
                                    <p>
                                      <span className="text-html-tag">
                                        &lt;span
                                      </span>
                                      <span className="text-html-attr">
                                        {" "}
                                        class
                                      </span>
                                      <span className="text-html-tag">="</span>
                                      <span className="text-html-orange">
                                        text-main font-bold
                                      </span>
                                      <span className="text-html-tag">
                                        "&gt;
                                      </span>
                                      <span className="text-white">7 anos</span>

                                      <span className="text-html-tag">
                                        &lt;span&gt;
                                      </span>
                                    </p>
                                    <p>
                                      <span className="text-white">
                                        "de experiência."
                                      </span>
                                    </p>
                                  </div>

                                  <p className="pl-3">
                                    <span className="text-html-tag">&lt;/</span>
                                    <span className="text-html-tag">p</span>
                                    <span className="text-html-tag">&gt;</span>
                                  </p>
                                </div>

                                <p className="pl-3">
                                  <span className="text-html-tag">&lt;/</span>
                                  <span className="text-html-tag">div</span>
                                  <span className="text-html-tag">&gt;</span>
                                </p>
                              </div>

                              <p className="pl-3">
                                <span className="text-html-tag">&lt;/</span>
                                <span className="text-html-tag">div</span>
                                <span className="text-html-tag">&gt;</span>
                              </p>
                            </div>

                            <p className="pl-3">
                              <span className="text-html-tag">&lt;/</span>
                              <span className="text-html-tag">div</span>
                              <span className="text-html-tag">&gt;</span>
                            </p>
                          </div>

                          <p className="pl-3">
                            <span className="text-html-tag">&lt;/</span>
                            <span className="text-html-tag">div</span>
                            <span className="text-html-tag">&gt;</span>
                          </p>
                        </div>

                        <div className="pl-3.5">
                          <p>
                            <img
                              src="arrow-right.png"
                              alt=""
                              className="inline h-3 mr-1 -mt-[1.5px]"
                            />

                            <span className="text-html-tag">&lt;</span>
                            <span className="text-html-tag">div</span>

                            <span className="text-html-attr"> aria-hidden</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">true</span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> class</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">
                              absolute inset-0 h-full w-full object-cover
                            </span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> role</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">img</span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> style</span>
                            <span className="text-html-tag">="</span>
                            <span
                              className={` ${
                                isDragging
                                  ? " text-black bg-html-event transition-all ease-out duration-500 "
                                  : "bg-transparent text-html-orange transition-all ease-out duration-500"
                              }`}
                            >
                              {`clip-path: inset(0px ${
                                100 - currentPosition
                              } 0px 0px;`}
                            </span>

                            <span className="text-html-tag">"&gt;</span>
                            <span className="border border-blue-light rounded-xl mx-[.9px] inline w-4 h-3 text-white font-bold text-[7px]">
                              ...
                            </span>
                            <span className="text-html-tag">&lt;/</span>
                            <span className="text-html-tag">div</span>
                            <span className="text-html-tag">&gt;</span>
                          </p>
                        </div>

                        <div className="pl-3.5">
                          <p>
                            <img
                              src="arrow-right.png"
                              alt=""
                              className="inline h-3 mr-1 -mt-[1.5px]"
                            />

                            <span className="text-html-tag">&lt;</span>
                            <span className="text-html-tag">div</span>

                            <span className="text-html-attr"> aria-hidden</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">true</span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> class</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">
                              -translate-x-1/2 absolute top-0 z-50 flex h-full
                              w-10 items-center justify-center cursor-grab
                              active:cursor-grabbing
                            </span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> role</span>
                            <span className="text-html-tag">="</span>
                            <span className="text-html-orange">
                              presentation
                            </span>
                            <span className="text-html-tag">"</span>

                            <span className="text-html-attr"> style</span>
                            <span className="text-html-tag">="</span>
                            <span
                              className={` ${
                                isDragging
                                  ? " text-black bg-html-event transition-all ease-out duration-500 "
                                  : "bg-transparent text-html-orange transition-all ease-out duration-500"
                              }`}
                            >
                              left: {currentPosition.toPrecision(6)}%
                            </span>

                            <span className="text-html-tag">"&gt;</span>
                            <span className="border border-blue-light rounded-xl mx-[.9px] inline w-4 h-3 text-white font-bold text-[7px]">
                              ...
                            </span>
                            <span className="text-html-tag">&lt;/</span>
                            <span className="text-html-tag">div</span>
                            <span className="text-html-tag">&gt;</span>
                            <span className="border border-blue-light rounded-xl ml-1 inline-block w-8.5 h-3.3 text-center text-html-attr font-normal text-[8px]">
                              flex
                            </span>
                          </p>
                        </div>

                        <p className="pl-3">
                          <span className="text-html-tag">&lt;/</span>
                          <span className="text-html-tag">div</span>
                          <span className="text-html-tag">&gt;</span>
                        </p>
                      </div>

                      <p className="pl-3">
                        <span className="text-html-tag">&lt;/</span>
                        <span className="text-html-tag">div</span>
                        <span className="text-html-tag">&gt;</span>
                      </p>
                    </div>

                    <p className="pl-3">
                      <span className="text-html-tag">&lt;/</span>
                      <span className="text-html-tag">section</span>
                      <span className="text-html-tag">&gt;</span>
                    </p>
                  </div>

                  <p className="pl-3">
                    <span className="text-html-tag">&lt;/</span>
                    <span className="text-html-tag">section</span>
                    <span className="text-html-tag">&gt;</span>
                  </p>
                </div>

                <p className="pl-3">
                  <span className="text-html-tag">&lt;/</span>
                  <span className="text-html-tag">div</span>
                  <span className="text-html-tag">&gt;</span>
                </p>
              </div>

              <p className="pl-6">
                <span className="text-html-tag">&lt;</span>
                <span className="text-html-tag">script</span>
                <span className="text-html-attr"> type</span>
                <span className="text-html-tag">="</span>
                <span className="text-html-orange">module</span>
                <span className="text-html-tag">"&gt;</span>
                <span className="text-html-attr underline underline-offset-1">
                  /src/main.tsx?t=1762445338728
                </span>
                <span className="text-html-tag">&lt;/script&gt;</span>
              </p>

              <p className="pl-6">
                <span className="text-html-tag">&lt;</span>
                <span className="text-html-tag">div</span>
                <span className="text-html-attr">
                  {" "}
                  data-radix-popper-content-wrapper
                </span>
                <span className="text-html-tag">="</span>
                <span className="text-html-orange">
                  position: fixed; left: 0px; top: 0px; transform:
                  translate(445.5px, 1137px); min-width: max-content;
                  --radix-popper-transform-origin: 86.50000000000001px -10px;
                  will-change: transform; z-index: 50;
                  --radix-popper-available-width: 1064px;
                  --radix-popper-available-height: 93px;
                  --radix-popper-anchor-width: 229.9609375px;
                  --radix-popper-anchor-height: 40px;
                </span>

                <span className="text-html-tag">"&gt;</span>
                <span className="border border-blue-light rounded-xl mx-[.9px] inline w-4 h-3 text-white font-bold text-[7px]">
                  ...
                </span>
                <span className="text-html-tag">&lt;/script&gt;</span>
              </p>

              <p className="pl-3">
                <span className="text-html-tag">&lt;/</span>
                <span className="text-html-tag">body</span>
                <span className="text-html-tag">&gt;</span>
              </p>
            </div>

            <p>
              <span className="text-html-tag">&lt;/</span>
              <span className="text-html-tag">html</span>
              <span className="text-html-tag">&gt;</span>
            </p>
          </code>

          <footer className="h-[22px] w-full border-t border-t-dom-sim-gray-5e bg-dom-sim-gray-28 flex items-center justify-start">
            <div className="flex items-center justify-center w-[24px] border border-dom-sim-gray-5e h-[22px]">
              <img
                src="arrow-console.png"
                alt=""
                className="size-1.5 opacity-50"
              />
            </div>
            <div className="flex-1 flex items-end justify-start h-full">
              <ul className="flex items-end justify-start h-full">
                {footerSelected.map((item, index) => (
                  <React.Fragment key={item.tag + index}>
                    <li
                      className={`relative  font-normal text-[12px] px-2 h-full flex items-center justify-start whitespace-nowrap before:content[" "] before:absolute before:left-0 before:right-0  before:w-full before:h-full before:bg-none before:z-10 before:rounded-none ${
                        item.is_selected && "before:bg-html-selected"
                      } `}
                    >
                      {item.tag && (
                        <span className="relative z-20 text-html-tag">
                          {item.tag}
                        </span>
                      )}
                      {item.aux && (
                        <span className="relative z-20 text-html-attr">
                          {item.aux}
                        </span>
                      )}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center w-[24px] border border-dom-sim-gray-5e h-[22px]">
              <img
                src="arrow-console.png"
                alt=""
                className="size-1.5 opacity-50"
              />
            </div>
          </footer>
        </div>

        <div className="w-[300px] h-full border-l border-l-dom-sim-gray-5e ">
          <header className="h-[27px] w-full border-b border-b-dom-sim-gray-5e bg-dom-sim-gray-3c flex items-center justify-start">
            <div className="flex-1 flex items-end justify-start h-full">
              <ul className="flex items-end justify-start h-full">
                {rightList.map((item) => (
                  <React.Fragment key={item}>
                    <li
                      className={`relative text-dom-sim-gray-c7 font-normal text-[12px] px-2 h-full flex items-center justify-start whitespace-nowrap before:content[" "] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2.1px] before:rounded-t-lg before:bg-none ${
                        selectedItemFromList === item &&
                        "text-dom-sim-purple-light before:bg-dom-sim-purple-light"
                      } is-active:text-red-100`}
                    >
                      {item}
                    </li>
                  </React.Fragment>
                ))}
              </ul>
            </div>
          </header>

          <div className="w-full flex flex-col justify-start items-start">
            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <div className="flex-1">
                  <div className="input-sim text-dom-sim-gray-c7 text-[12px] bg-dom-sim-gray-3c flex items-center gap-1.5 rounded-full pl-2.5 min-h-[21px]">
                    <img src="funil.png" className="h-[11.5px]"></img> Filter
                  </div>
                </div>

                <img src="labels.png" className="h-[19px] ml-1.5"></img>

                <code className="flex gap-2 ml-1 tracking-tighter">
                  <p className="text-[10px] text-dom-sim-gray-c7">:hov</p>
                  <p className="text-[10px] text-dom-sim-gray-c7">.cls</p>
                </code>

                <img src="right-buttons.png" className="h-[21px] ml-2.5"></img>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code>
                  <p className="text-[10.5px]">
                    <span className="text-html-gray">
                      element.style <span className=" text-white">{"{"}</span>
                    </span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    utilities
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.text-neutral-200 {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">color</span>
                    <span className="text-white">:</span>
                    <span className="bg-neutral-200 size-[9px] aspect-square inline-block border border-html-gray ml-2 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--color-neutral-200</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    utilities
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.font-thin {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">--tw-font-weight</span>
                    <span className="text-white">:</span>
                    <span className="text-white underline decoration-dotted ml-2">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--font-weight-thin</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">font-weight</span>
                    <span className="text-white">:</span>
                    <span className="text-white underline decoration-dotted ml-2">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--font-weight-thin</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    utilities
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.text-sm {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">font-size</span>
                    <span className="text-white">:</span>
                    <span className="text-white underline decoration-dotted ml-2">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--text-sm</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">line-height</span>
                    <span className="text-white">:</span>
                    <span className="text-white underline decoration-dotted ml-2">
                      var(
                    </span>
                    <span className="text-html-gray">--tw,leading</span>
                    <span className="text-white">, var(</span>
                    <span className="text-html-attr">
                      --text-sm--line-height
                    </span>
                    <span className="text-white">)</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    base
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-html-gray">* {"{"}</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-html-gray pl-1">
                      @supports{" "}
                      <span className="text-white pl-1">
                        (color: color-mix(in lab, red, red))
                      </span>{" "}
                      {"{"}
                    </span>
                  </p>

                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">outline-color</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">
                      color-mix(in oaklab,
                    </span>
                    <span className="bg-ring size-[9px] aspect-square inline-block border border-html-gray ml-2 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--ring</span>
                    <span className="text-white">) 50%, transparent);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-html-gray pl-1">{"}"}</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-html-gray">{"}"}</span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    base
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">* {"{"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">border-color</span>
                    <span className="text-white">:</span>
                    <span>
                      <img
                        src="arrow-console.png"
                        alt=""
                        className="inline-block w-[9px] ml-1"
                      />
                    </span>
                    <span className="bg-border size-[9px] aspect-square inline-block border border-html-gray ml-1 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--border</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px] pl-5 line-through text-white">
                    <span className="text-css-prop">outline-color</span>
                    <span className="text-white">:</span>
                    <span className="bg-ring size-[9px] aspect-square inline-block border border-html-gray ml-2 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--ring</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-white">{"}"}</span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    base
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px] pr-10">
                    <span className="text-white">
                      *,{" "}
                      <span className="text-html-gray">
                        , ::after, ::before, ::backdrop, ::file-selector-button{" "}
                      </span>{" "}
                      {"{"}
                    </span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">box-sizing</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">border-box;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">margin</span>
                    <span className="text-white">:</span>
                    <span>
                      <img
                        src="arrow-console.png"
                        alt=""
                        className="inline-block w-[9px] ml-1"
                      />
                    </span>
                    <span className="text-white ml-1">0;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">padding</span>
                    <span className="text-white">:</span>
                    <span>
                      <img
                        src="arrow-console.png"
                        alt=""
                        className="inline-block w-[9px] ml-1"
                      />
                    </span>
                    <span className="text-white ml-1">0;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">border</span>
                    <span className="text-white">:</span>
                    <span>
                      <img
                        src="arrow-console.png"
                        alt=""
                        className="inline-block w-[9px] ml-1"
                      />
                    </span>
                    <span className="text-white ml-1">0 solid;</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-white">{"}"}</span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer user agent stylesheet
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="italic relative w-full">
                  <p className="text-dom-sim-gray-c7 absolute top-0 right-0 text-[11px] w-auto">
                    {"user agent stylesheet"}
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-white">p {"{"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">display</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">block;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">margin-block-start</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">1em;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">margin-block-end</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">1em;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">margin-inline-start</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">0px;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">margin-inline-end</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">0px;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">unicode-bidi</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">isolate;</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span className="text-white">{"}"}</span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Inherited from ...
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    utilities
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.text-center {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">text-align</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">center;</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Inherited from ...
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    utilities
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.select-none {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5 text-white line-through">
                    <span className="text-css-prop">-webkit-user-select</span>
                    <span className="text-white">:</span>
                    <span className="text-white pl-2">none;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-html-gray">-moz-user-selected</span>
                    <span className="text-html-gray">:</span>
                    <span className="text-html-gray ml-2 line-through">
                      none
                    </span>
                    <span className="text-html-gray line-through">;</span>
                  </p>
                  <p className="text-[10.5px] pl-5">
                    <span className="text-css-prop">user-select</span>
                    <span className="text-white">:</span>
                    <span className="text-white ml-2">none;</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Inherited from <span className=" text-html-tag">body</span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full bg-css-bar">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <p className="text-dom-sim-gray-c7 font-normal text-[12px]">
                  Layer{" "}
                  <span className="underline text-dom-sim-purple-light">
                    base
                  </span>
                </p>
              </div>
            </div>

            <div className="border-b border-b-dom-sim-gray-5e w-full">
              <div className="w-full flex pt-[3px] pb-[3px] pl-1.5 pr-3 items-center">
                <code className="relative w-full">
                  <TagStyle />
                  <p className="text-[10.5px]">
                    <span className="text-white">.body {" {"}</span>
                  </p>
                  <p className="text-[10.5px] pl-5 opacity-50">
                    <span className="text-css-prop">background-color</span>
                    <span className="text-white">:</span>
                    <span className="bg-background size-[9px] aspect-square inline-block border border-html-gray ml-2 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--background</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px] pl-5 text-white line-through">
                    <span className="text-css-prop">color</span>
                    <span className="text-white">:</span>
                    <span className="bg-foreground size-[9px] aspect-square inline-block border border-html-gray ml-2 mr-1"></span>
                    <span className="text-white underline decoration-dotted">
                      var
                    </span>
                    <span className="text-white ">(</span>
                    <span className="text-html-attr">--foreground</span>
                    <span className="text-white">);</span>
                  </p>
                  <p className="text-[10.5px]">
                    <span>
                      <span className=" text-white">{"}"}</span>
                    </span>
                  </p>
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
