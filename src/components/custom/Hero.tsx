import { useState } from "react";
import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "../ui/shadcn-io/comparison";
import DomSimulator from "./DomSimulator";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { scrollTo } from "@/utils/functons";
import { Code } from "lucide-react";

export default function Hero() {
  const [currentPosition, setCurrentPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  return (
    <section className="flex min-h-screen flex-col items-start justify-start">
      <div className="h-screen relative w-full ">
        <Comparison
          className="aspect-video h-screen"
          onDragEnd={() => setIsDragging(false)}
          onDragStart={() => console.log("drag start")}
          onMove={(position) =>
            console.log("percent:", setCurrentPosition(position))
          }
          onDragging={(dragging) => setIsDragging(dragging)}
        >
          <ComparisonItem className="bg-dom-sim-gray-28" position="right">
            <section className="me w-full h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-linear-to-l from-transparent  to-main z-50" />

              <img
                src="fbv-developer.png"
                alt="background"
                className="w-screen md:w-[50vw] md:max-w-[1000px] absolute top-0 md:top-1/2 md:transform md:-translate-y-1/2 left-0 z-10 flex-none object-cover"
              />

              <div className="w-full relative z-15 grid md:grid-cols-2 h-full ">
                <div className="flex items-center justify-center flex-col h-full w-full ">
                  <img src="logo.png" alt="logo" className="w-[250px]" />

                  <div className="max-w-[200px] text-center bg-html-inspect">
                    <p className="text-neutral-200 font-thin text-sm">
                      Desenvolvedor <span>Front-end</span> com mais{" "}
                      <span>
                        de <span className="text-main font-bold">7 anos</span>{" "}
                        de experiência.
                      </span>
                    </p>
                  </div>

                  <div className="text-center mt-6 md:hidden leading-0">
                    <p className="text-neutral-200 font-thin text-sm">
                      Mais do que criar código.
                    </p>
                    <p className="text-white font-thin text-sm ">
                      Eu crio{" "}
                      <b className="font-bold text-main">experiências</b>.
                    </p>
                  </div>
                </div>

                <div className="w-full relative z-15 h-full hidden md:grid">
                  <div className="flex items-center justify-center flex-col h-full w-full ">
                    <div className="text-center leading-[3vw]">
                      <p className="text-neutral-200 font-thin text-[2vw]">
                        mais do que criar código,
                      </p>
                      <p className="text-white font-thin text-[4vw] nunito">
                        crio <b className="font-bold text-main">experiências</b>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ComparisonItem>

          <ComparisonItem position="left">
            <DomSimulator
              currentPosition={currentPosition}
              isDragging={isDragging}
            />
          </ComparisonItem>
          <ComparisonHandle />
        </Comparison>

        <div className="w-full absolute bottom-0 left-0 z-40 h-[20vh] bg-linear-to-b from-transparent to-dom-sim-gray-28 flex justify-center items-center">
          <div>
            <Tooltip open={true}>
              <TooltipTrigger asChild>
                <Button
                  onClick={() => scrollTo("let-me-introduce-myself")}
                  className="rounded-full text-xs font-normal bg-main hover:bg-main-dark cursor-pointer"
                  size="lg"
                >
                  Saiba mais <b className="-ml-1">sobre meu trabalho</b>{" "}
                  <Code />
                </Button>
              </TooltipTrigger>
              <TooltipContent
                sideOffset={0}
                side="bottom"
                className="rounded-full "
              >
                <p>...e por que não, sobre mim?</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </div>
      </div>
    </section>
  );
}
