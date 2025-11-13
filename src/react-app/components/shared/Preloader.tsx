import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const logoRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const tl = gsap.timeline();

    // Animação sofisticada do SVG
    if (pathRef.current && logoRef.current) {
      // Calcula o comprimento do path para animação de desenho
      const pathLength = pathRef.current.getTotalLength();
      
      // Configura o stroke para animação de desenho
      gsap.set(pathRef.current, {
        strokeDasharray: pathLength,
        strokeDashoffset: pathLength,
        stroke: '#2BB32A',
        strokeWidth: 4,
        fill: 'none',
      });

      // Timeline de animação sincronizada
      tl.to(pathRef.current, {
        strokeDashoffset: 0,
        duration: 1.0,
        ease: 'power1.inOut',
      })
      .to(pathRef.current, {
        fill: '#2BB32A',
        stroke: '#2BB32A',
        strokeWidth: 4,
        duration: 0.5,
        ease: 'power2.inOut',
      }, '-=0.2')
      .to(logoRef.current, {
        scale: 1.08,
        duration: 0.3,
        ease: 'power2.out',
      }, '-=0.1')
      .to(logoRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.in',
      })
      // Pausa para garantir que a animação complete
      .to({}, { duration: 0.3 })
      // Zoom out e fade final
      .to(logoRef.current, {
        scale: 3,
        opacity: 0,
        duration: 0.6,
        ease: 'power2.in',
      })
      .to(containerRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.inOut',
        onComplete: () => {
          setIsLoading(false);
          document.body.style.overflow = 'unset';
        },
      }, '-=0.3');
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-900"
    >
      <svg
        ref={logoRef}
        width="120"
        height="120"
        viewBox="0 0 520 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          ref={pathRef}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M259.999 45L355.862 120.888L281.344 179.88V224.298L405.34 128.278V182.611L281.344 278.632V313.61L440 190.748V245.081L281.344 367.944V404.138L440 281.277V335.609L259.999 475L80 335.609V281.277L238.656 404.138V367.944L80 245.081V190.748L238.656 313.61V278.632L114.66 182.611V128.278L238.656 224.298V179.88L164.139 120.888L259.999 45Z"
        />
      </svg>
    </div>
  );
}
