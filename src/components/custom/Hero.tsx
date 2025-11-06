import {
  Comparison,
  ComparisonHandle,
  ComparisonItem,
} from "../ui/shadcn-io/comparison";
import DomSimulator from "./DomSimulator";

export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-start justify-start bg-neutral-800">
      <Comparison
        className="aspect-video min-h-screen"
        onDragEnd={() => console.log("drag end")}
        onDragStart={() => console.log("drag start")}
      >
        <ComparisonItem className="bg-dom-sim-gray-28" position="left">
          <section className="me w-full h-full">
            <img
              src="developing.png"
              alt=""
              className="h-screen absolute right-0 bottom-0"
            />
          </section>
        </ComparisonItem>

        <ComparisonItem position="right">
          <DomSimulator />
        </ComparisonItem>
        <ComparisonHandle />
      </Comparison>
    </section>
  );
}
