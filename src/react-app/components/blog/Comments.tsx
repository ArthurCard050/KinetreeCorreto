import { useEffect, useRef } from 'react';

export default function Comments() {
  const commentsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!commentsRef.current) return;

    // Limpar comentários anteriores
    commentsRef.current.innerHTML = '';

    // Criar script do Giscus
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'SEU_USUARIO/SEU_REPOSITORIO'); // ⚠️ SUBSTITUIR
    script.setAttribute('data-repo-id', 'SEU_REPO_ID'); // ⚠️ SUBSTITUIR
    script.setAttribute('data-category', 'Blog Comments');
    script.setAttribute('data-category-id', 'SEU_CATEGORY_ID'); // ⚠️ SUBSTITUIR
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'pt');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    commentsRef.current.appendChild(script);
  }, []);

  return (
    <div className="mt-16 pt-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Comentários</h3>
      <div ref={commentsRef} className="giscus" />
      
      {/* Instruções caso não esteja configurado */}
      <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>💡 Para ativar os comentários:</strong>
        </p>
        <ol className="text-sm text-blue-700 mt-2 space-y-1 list-decimal list-inside">
          <li>Acesse <a href="https://giscus.app/pt" target="_blank" rel="noopener noreferrer" className="underline">giscus.app</a></li>
          <li>Siga as instruções para configurar</li>
          <li>Substitua os valores em <code className="bg-blue-100 px-1 rounded">src/react-app/components/blog/Comments.tsx</code></li>
        </ol>
      </div>
    </div>
  );
}
