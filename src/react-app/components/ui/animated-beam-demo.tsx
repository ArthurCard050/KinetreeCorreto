import { forwardRef, useRef, useState, useEffect } from "react";
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
  // Estado para garantir que só renderiza após o CSS se estabilizar
  const [isClient, setIsClient] = useState(false);

  // Effect que só roda no navegador, após a montagem inicial
  // Espera a animação do Hero.tsx terminar (0.4s delay + 0.8s duration = 1.2s)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClient(true);
    }, 1300); // 1.3 segundos de margem de segurança

    // Limpa o timer se o componente desmontar
    return () => clearTimeout(timer);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  // Não renderiza nada no servidor ou na primeira pintura
  if (!isClient) {
    return null;
  }

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
        gradientStopColor="#2BB32A"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#2BB32A"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#2BB32A"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#2BB32A"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#2BB32A"
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
        gradientStartColor="#22c55e"
        gradientStopColor="#2BB32A"
      />
    </div>
  );
}
