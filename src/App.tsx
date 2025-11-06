import Hero from "./components/custom/Hero";
import { Avatar, AvatarFallback, AvatarImage } from "./components/ui/avatar";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./components/ui/tooltip";

function App() {
  return (
    <section className="min-h-screen">
      <Hero />

      <section className="w-full py-10 bg-dom-sim-gray-28 pb-[150px]">
        <div className="w-full flex justify-center m-auto gap-6">
          <div className="text-left">
            <h1 className="text-4xl text-white nunito font-thin">
              Permita-me <b className="font-bold ">apresentar</b>.
            </h1>

            <p className="text-neutral-400 font-thin text-sm">
              mas se você estiver com pressa{" "}
              <Tooltip>
                <TooltipTrigger asChild>
                  <a href="#" className="text-main underline font-normal">
                    faça download do meu currículo
                  </a>
                </TooltipTrigger>
                <TooltipContent sideOffset={0} side="bottom">
                  <p>
                    Clique para baixar <b>cv-felipe-b-vieira.pdf</b>
                  </p>
                </TooltipContent>
              </Tooltip>
            </p>
          </div>
        </div>
      </section>

      <section className="w-full pb-10 relative ">
        <div className="w-full max-w-4xl m-auto relative flex items-start justify-start px-6">
          <div className="absolute -top-[3px] left-6 w-full h-[5px] bg-linear-to-r from-main  to-transparent z-10" />

          <div className=" -mt-[100px] bg-white rounded-full shadow-md p-1.5 border relative z-20">
            <Avatar className="size-[200px]">
              <AvatarImage src="fbv-professional.jpg" />
              <AvatarFallback>FB</AvatarFallback>
            </Avatar>
          </div>

          <div className=" -mt-[100px] pl-6 h-[200px] grid grid-rows-2 grid-cols-1">
            <div className="flex items-end justify-start pb-3">
              <h2 className="text-white nunito text-3xl">
                Felipe Baptistella Vieira
              </h2>
            </div>
            <div className="pt-3">
              <ul>
                <li>
                  <p className="text-neutral-700 font-light uppercase text-sm">
                    Desenvolvedor Front-end.
                  </p>
                </li>
                <li>
                  <p className="text-neutral-700 font-light uppercase text-sm">
                    Solteiro, 32 anos - São Vicente/SP.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default App;
