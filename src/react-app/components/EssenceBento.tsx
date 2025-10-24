import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { 
  Network, 
  GitBranch, 
  Workflow, 
  Zap, 
  Sparkles,
  Target,
  GitMerge
} from 'lucide-react';

interface BentoCardProps {
  title: string;
  subtitle: string;
  description: string;
  animationType: 'roots' | 'movement';
  delay?: number;
}

// Animação de Raízes Orgânicas com estrutura de árvore organizada
function OrganicRootsAnimation({ isHovered, inView }: { isHovered: boolean; inView: boolean }) {
  // Estrutura de árvore hierárquica e simétrica - CENTRALIZADO
  const treeStructure = [
    // Raiz/Tronco (centro-baixo)
    { x: 0, y: 50, level: 0, icon: GitMerge, delay: 0, connections: [], size: 'large' },
    
    // Galhos principais (saem do tronco)
    { x: -80, y: -10, level: 1, icon: GitBranch, delay: 0.1, connections: [0], size: 'medium' },
    { x: 0, y: -30, level: 1, icon: GitBranch, delay: 0.15, connections: [0], size: 'medium' },
    { x: 80, y: -10, level: 1, icon: GitBranch, delay: 0.1, connections: [0], size: 'medium' },
    
    // Folhas/Frutos (pontas)
    { x: -110, y: -70, level: 2, icon: Sparkles, delay: 0.25, connections: [1], size: 'small' },
    { x: -50, y: -85, level: 2, icon: Sparkles, delay: 0.3, connections: [1, 2], size: 'small' },
    { x: 0, y: -95, level: 2, icon: Sparkles, delay: 0.35, connections: [2], size: 'small' },
    { x: 50, y: -85, level: 2, icon: Sparkles, delay: 0.3, connections: [2, 3], size: 'small' },
    { x: 110, y: -70, level: 2, icon: Sparkles, delay: 0.25, connections: [3], size: 'small' },
  ];

  const getSizeClasses = (size: string) => {
    switch(size) {
      case 'large':
        return { icon: 'w-14 h-14', padding: 'p-3', offset: 28 };
      case 'medium':
        return { icon: 'w-10 h-10', padding: 'p-2.5', offset: 22 };
      case 'small':
        return { icon: 'w-7 h-7', padding: 'p-2', offset: 17 };
      default:
        return { icon: 'w-10 h-10', padding: 'p-2.5', offset: 22 };
    }
  };

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Linhas de conexão SVG */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="treeGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#15803D" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#16A34A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#22C55E" stopOpacity="0.6" />
          </linearGradient>
          
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {treeStructure.map((node, idx) => 
          node.connections.map((connIdx, i) => {
            const parent = treeStructure[connIdx];
            const strokeWidth = node.level === 1 ? 3 : node.level === 2 ? 2 : 2.5;
            
            return (
              <motion.path
                key={`${idx}-${i}`}
                d={`M ${parent.x} ${parent.y} Q ${(parent.x + node.x) / 2} ${(parent.y + node.y) / 2 - 15} ${node.x} ${node.y}`}
                stroke="url(#treeGradient)"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                fill="none"
                filter={isHovered ? "url(#glow)" : undefined}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={inView ? {
                  pathLength: 1,
                  opacity: isHovered ? 0.9 : 0.7,
                } : {
                  pathLength: 0,
                  opacity: 0
                }}
                transition={{ 
                  duration: 0.8, 
                  delay: node.delay + 0.2,
                  ease: "easeOut"
                }}
                style={{
                  transform: 'translate(50%, 50%)'
                }}
              />
            );
          })
        )}
      </svg>

      {/* Nós da árvore */}
      {treeStructure.map((node, idx) => {
        const Icon = node.icon;
        const sizeClasses = getSizeClasses(node.size);
        const borderWidth = node.level === 0 ? 'border-2' : 'border';
        const bgOpacity = node.level === 0 ? 'from-green-500/25 to-green-600/25' : 
                          node.level === 1 ? 'from-green-500/20 to-green-600/20' : 
                          'from-green-500/15 to-green-600/15';
        
        return (
          <motion.div
            key={idx}
            className="absolute z-10"
            style={{
              left: '50%',
              top: '50%',
              x: node.x - sizeClasses.offset,
              y: node.y - sizeClasses.offset,
            }}
            initial={{ scale: 0, opacity: 0, y: node.y - sizeClasses.offset + 20 }}
            animate={inView ? { 
              scale: isHovered && node.level === 2 ? 1.15 : 1, 
              opacity: 1,
              y: node.y - sizeClasses.offset
            } : { 
              scale: 0, 
              opacity: 0,
              y: node.y - sizeClasses.offset + 20
            }}
            transition={{ 
              duration: 0.6, 
              delay: node.delay + 0.4,
              type: "spring",
              stiffness: 150,
              damping: 12
            }}
          >
            <div className={`relative bg-gradient-to-br ${bgOpacity} backdrop-blur-sm ${borderWidth} border-green-400/40 rounded-xl ${sizeClasses.padding}`}>
              <Icon 
                className={`${sizeClasses.icon} text-green-400`} 
                strokeWidth={node.level === 0 ? 2.5 : 2} 
              />
              
              {/* Glow effect no centro */}
              {node.level === 0 && (
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-xl blur-lg -z-10"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
              )}
              
              {/* Pulso suave nas folhas no hover */}
              {isHovered && node.level === 2 && (
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-xl -z-10"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    delay: idx * 0.2
                  }}
                />
              )}
            </div>
          </motion.div>
        );
      })}

      {/* Partículas de seiva subindo pela árvore */}
      {isHovered && [0, 1, 2].map((pathIdx) => {
        const leafNodes = treeStructure.filter(n => n.level === 2);
        const leaf = leafNodes[pathIdx * 2 % leafNodes.length];
        const branch = treeStructure[leaf.connections[0]];
        const root = treeStructure[0];
        
        return (
          <motion.div
            key={`sap-${pathIdx}`}
            className="absolute w-2.5 h-2.5 rounded-full z-30"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px #4ADE80',
              background: 'radial-gradient(circle, #4ADE80 0%, #22C55E 100%)'
            }}
            initial={{ 
              x: root.x,
              y: root.y,
              opacity: 0,
              scale: 0.5
            }}
            animate={{
              x: [root.x, branch.x, leaf.x],
              y: [root.y, branch.y, leaf.y],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.3]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: pathIdx * 0.8,
              ease: "easeInOut",
              times: [0, 0.5, 1]
            }}
          />
        );
      })}

      {/* Partículas de fotossíntese nas folhas */}
      {isHovered && [...Array(3)].map((_, i) => {
        const leafNodes = treeStructure.filter(n => n.level === 2);
        const leaf = leafNodes[i * 2];
        
        return (
          <motion.div
            key={`photo-${i}`}
            className="absolute w-1.5 h-1.5 bg-green-300 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              x: leaf.x,
              y: leaf.y,
              filter: 'blur(0.5px)'
            }}
            animate={{
              y: [leaf.y, leaf.y - 25, leaf.y],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: i * 0.7,
              ease: "easeOut"
            }}
          />
        );
      })}
    </div>
  );
}

// Animação de Rede Cinética com Lucide Icons (SEM quadrados centrais)
function KineticNetworkAnimation({ isHovered, inView }: { isHovered: boolean; inView: boolean }) {
  const nodes = [
    { x: 0, y: -80, icon: Target, delay: 0 },
    { x: 70, y: -40, icon: Workflow, delay: 0.1 },
    { x: 70, y: 40, icon: Network, delay: 0.2 },
    { x: 0, y: 80, icon: Zap, delay: 0.15 },
    { x: -70, y: 40, icon: Sparkles, delay: 0.25 },
    { x: -70, y: -40, icon: GitBranch, delay: 0.3 },
  ];

  const connections = [
    [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0], // Anel externo
    [0, 3], [1, 4], [2, 5] // Conexões cruzadas
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Linhas de conexão */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#2BB32A" stopOpacity="0.2" />
            <stop offset="50%" stopColor="#4ADE80" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#2BB32A" stopOpacity="0.2" />
          </linearGradient>
        </defs>
        {connections.map((conn, idx) => {
          const [start, end] = conn;
          const startNode = nodes[start];
          const endNode = nodes[end];
          
          return (
            <motion.line
              key={idx}
              x1="50%"
              y1="50%"
              x2="50%"
              y2="50%"
              stroke="url(#lineGradient)"
              strokeWidth={isHovered ? "2" : "1.5"}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={inView ? {
                x1: `calc(50% + ${startNode.x}px)`,
                y1: `calc(50% + ${startNode.y}px)`,
                x2: `calc(50% + ${endNode.x}px)`,
                y2: `calc(50% + ${endNode.y}px)`,
                opacity: isHovered ? 1 : 0.6,
                pathLength: 1
              } : {
                pathLength: 0,
                opacity: 0
              }}
              transition={{ 
                duration: 0.8, 
                delay: 0.5 + idx * 0.05,
                opacity: { duration: 0.3 }
              }}
            />
          );
        })}
      </svg>

      {/* Nós da rede */}
      {nodes.map((node, idx) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={idx}
            className="absolute z-10"
            style={{
              left: '50%',
              top: '50%',
              x: node.x - 20,
              y: node.y - 20,
            }}
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={inView ? { 
              scale: isHovered ? 1.2 : 1, 
              opacity: 1,
              rotate: 0
            } : { 
              scale: 0, 
              opacity: 0,
              rotate: -180
            }}
            transition={{ 
              duration: 0.6, 
              delay: node.delay + 0.7,
              type: "spring",
              stiffness: 200
            }}
          >
            <motion.div
              className="relative"
              animate={isHovered ? {
                rotate: [0, 360],
              } : {}}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
                delay: idx * 0.5
              }}
            >
              <div className="relative bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl p-2">
                <Icon className="w-8 h-8 text-green-400" strokeWidth={2} />
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 bg-green-400/20 rounded-xl blur-md -z-10"
                  animate={isHovered ? {
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.5, 0.2]
                  } : {}}
                  transition={{ 
                    duration: 2, 
                    repeat: Infinity,
                    delay: idx * 0.3
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        );
      })}

      {/* Pulsos de dados viajando */}
      {isHovered && connections.slice(0, 3).map((conn, idx) => {
        const [start, end] = conn;
        const startNode = nodes[start];
        const endNode = nodes[end];
        
        return (
          <motion.div
            key={`pulse-${idx}`}
            className="absolute w-3 h-3 bg-green-400 rounded-full z-30"
            style={{
              left: '50%',
              top: '50%',
              boxShadow: '0 0 10px #4ADE80'
            }}
            initial={{ 
              x: startNode.x,
              y: startNode.y,
              opacity: 0
            }}
            animate={{
              x: [startNode.x, endNode.x, startNode.x],
              y: [startNode.y, endNode.y, startNode.y],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: idx * 1,
              ease: "easeInOut"
            }}
          />
        );
      })}

      {/* Partículas orbitais */}
      {isHovered && [...Array(6)].map((_, i) => (
        <motion.div
          key={`orbital-${i}`}
          className="absolute w-2 h-2 bg-green-400/60 rounded-full"
          style={{
            left: '50%',
            top: '50%',
          }}
          animate={{
            x: Math.cos((i / 6) * Math.PI * 2 + Date.now() / 1000) * 100,
            y: Math.sin((i / 6) * Math.PI * 2 + Date.now() / 1000) * 100,
            opacity: [0.3, 0.8, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
}

function BentoCard({ title, subtitle, description, animationType, delay = 0 }: BentoCardProps) {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: false });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 rounded-3xl p-8 hover:from-white/10 hover:to-white/15 transition-all duration-500 group relative overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 20px 60px rgba(34, 197, 94, 0.15)" 
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Background energy effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-transparent to-green-500/10 animate-pulse" />
      </div>
      
      <div className="relative z-10">
        {/* Title */}
        <motion.div
          className="text-5xl font-bold text-green-400 mb-3"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.2 }}
        >
          {title}
        </motion.div>
        
        {/* Subtitle */}
        <motion.h3
          className="text-2xl font-bold text-white mb-4"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
        >
          {subtitle}
        </motion.h3>
        
        {/* Description */}
        <motion.p
          className="text-white/70 leading-relaxed mb-8 text-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: delay + 0.4 }}
        >
          {description}
        </motion.p>

        {/* Animation Container - CENTRALIZADO VERTICALMENTE */}
        <div className="relative h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-black/40 to-green-900/20 border border-green-400/10 flex items-center justify-center">
          {animationType === 'roots' ? (
            <OrganicRootsAnimation isHovered={isHovered} inView={inView} />
          ) : (
            <KineticNetworkAnimation isHovered={isHovered} inView={inView} />
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function EssenceBento() {
  return (
    <section className="py-20 bg-gradient-to-b from-green-900 via-black to-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            A essência está no{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">
              equilíbrio
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <BentoCard
            title="Kinetic"
            subtitle="representa o movimento"
            description="Inovação, energia e adaptação constante. É o impulso que faz marcas florescerem no ambiente digital."
            animationType="movement"
            delay={0}
          />
          
          <BentoCard
            title="Tree"
            subtitle="representa as raízes"
            description="Estratégia, estrutura e base sólida. É a confiança de que tudo o que construímos precisa resistir ao tempo."
            animationType="roots"
            delay={0.2}
          />
        </div>

        <motion.div
          className="text-center mt-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-400/10 to-green-600/10 backdrop-blur-sm border border-green-400/20 rounded-2xl p-8">
            <motion.p
              className="text-xl text-white/90 leading-relaxed"
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              A Kinetree existe para unir esses dois mundos: <strong className="text-green-400">o estável e o dinâmico</strong>.
              <br />
              Somos o elo entre o que é firme e o que se move.
              <br />
              <strong className="text-green-400">Entre o hoje e o futuro.</strong>
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}