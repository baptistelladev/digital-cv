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
          <ComparisonItem className="bg-dom-sim-gray-28" position="left">
            <section className="me w-full h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-[5px] bg-linear-to-r from-transparent  to-main z-50" />

              <img
                src="fbv-both.png"
                alt="background"
                className="h-[90vh] absolute top-1/2 transform -translate-y-1/2 right-0 z-10 flex-none object-cover"
              />

              <div className="w-full max-w-xl m-auto relative z-15 flex items-center justify-center h-full flex-col">
                <img src="logo.png" alt="logo" className="w-[250px]" />

                <div className="max-w-[200px] text-center bg-html-inspect">
                  <p className="text-neutral-200 font-thin text-sm">
                    Desenvolvedor <span>Front-end</span> com mais{" "}
                    <span>
                      de <span className="text-main font-bold">7 anos</span> de
                      experiência.
                    </span>
                  </p>
                </div>
              </div>
            </section>
          </ComparisonItem>

          <ComparisonItem position="right">
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
                  Saiba mais <b className="-ml-1">sobre meu trabalho</b>
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
