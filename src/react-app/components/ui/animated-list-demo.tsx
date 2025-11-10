import { cn } from "@/lib/utils";
import { AnimatedList } from "@/react-app/components/ui/animated-list";
import { Rocket, Zap, Target, CheckCircle, FlaskConical } from "lucide-react";
import React from "react";

interface Item {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  time: string;
}

let notifications = [
  {
    name: "Deploy Concluído",
    description: "Seu site está no ar!",
    time: "Agora",
    icon: <Rocket className="text-white" size={20} />,
    color: "#22c55e",
  },
  {
    name: "Performance Otimizada",
    description: "100/100 no Lighthouse",
    time: "5m atrás",
    icon: <Zap className="text-white" size={20} />,
    color: "#4ade80",
  },
  {
    name: "SEO Configurado",
    description: "Meta tags prontos",
    time: "10m atrás",
    icon: <Target className="text-white" size={20} />,
    color: "#86efac",
  },
  {
    name: "Código Revisado",
    description: "Zero bugs",
    time: "15m atrás",
    icon: <CheckCircle className="text-white" size={20} />,
    color: "#22c55e",
  },
  {
    name: "Testes Passaram",
    description: "100% cobertura",
    time: "20m atrás",
    icon: <FlaskConical className="text-white" size={20} />,
    color: "#4ade80",
  },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/5 backdrop-blur-sm border border-white/10",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          {icon}
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs text-white/60">{time}</span>
          </figcaption>
          <p className="text-sm font-normal text-white/70">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[400px] w-full flex-col p-6 overflow-hidden",
        className,
      )}
    >
      <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
