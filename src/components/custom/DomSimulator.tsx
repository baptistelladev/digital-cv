import { PersonStanding } from "lucide-react";
import React, { useState } from "react";

export default function DomSimulator() {
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
                        bg-neutral-800
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
    </section>
  );
}
