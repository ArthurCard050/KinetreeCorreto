import { forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/react-app/components/ui/animated-beam";
import { Code2, Database, Globe, Smartphone, Zap, Rocket, TreePine } from "lucide-react";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 border-green-500 bg-green-500 p-3",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Rocket className="text-white" size={20} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-16">
            <TreePine className="text-white" size={28} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Code2 className="text-white" size={20} />
          </Circle>
          <Circle ref={div2Ref}>
            <Database className="text-white" size={20} />
          </Circle>
          <Circle ref={div3Ref}>
            <Zap className="text-white" size={20} />
          </Circle>
          <Circle ref={div4Ref}>
            <Globe className="text-white" size={20} />
          </Circle>
          <Circle ref={div5Ref}>
            <Smartphone className="text-white" size={20} />
          </Circle>
        </div>
      </div>

      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#16a34a"
      />
    </div>
  );
}
