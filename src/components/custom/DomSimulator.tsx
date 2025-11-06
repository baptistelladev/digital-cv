import { DotSquare, Ellipsis } from "lucide-react";
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

  const [selectedItemFromList, setSelectedItemFromList] =
    useState<string>("Elements");

  return (
    <section className="what-you-see w-full h-full bg-dom-sim-gray-28 flex flex-col">
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

      <div className="flex items-start justify-start w-full flex-1 h-full">
        <div className="flex-1 h-full flex items-center justify-start">
          <code className="content w-full h-full p-4 py-1 font-mono text-[10px] relative">
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
        </div>

        <div className="w-[300px] h-full border-l border-l-dom-sim-gray-5e ">
          dada
        </div>
      </div>

      <footer className="h-[22px] w-full border-t border-t-dom-sim-gray-5e bg-dom-sim-gray-28 flex items-center justify-start">
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
      </footer>
    </section>
  );
}
