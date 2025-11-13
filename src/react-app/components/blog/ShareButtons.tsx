import { Facebook, Twitter, Linkedin, Link2, MessageCircle } from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : url;
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(shareUrl);

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };

  const handleShare = (platform: string) => {
    window.open(shareLinks[platform as keyof typeof shareLinks], '_blank', 'width=600,height=400');
  };

  return (
    <div className="sticky top-32 flex flex-col gap-3">
      {/* Facebook */}
      <button
        onClick={() => handleShare('facebook')}
        className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-blue-500 hover:bg-blue-50 transition-all group"
        aria-label="Compartilhar no Facebook"
        title="Compartilhar no Facebook"
      >
        <Facebook className="w-5 h-5 text-gray-600 group-hover:text-blue-600" />
      </button>

      {/* Twitter */}
      <button
        onClick={() => handleShare('twitter')}
        className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-sky-500 hover:bg-sky-50 transition-all group"
        aria-label="Compartilhar no Twitter"
        title="Compartilhar no Twitter"
      >
        <Twitter className="w-5 h-5 text-gray-600 group-hover:text-sky-500" />
      </button>

      {/* LinkedIn */}
      <button
        onClick={() => handleShare('linkedin')}
        className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-blue-700 hover:bg-blue-50 transition-all group"
        aria-label="Compartilhar no LinkedIn"
        title="Compartilhar no LinkedIn"
      >
        <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-blue-700" />
      </button>

      {/* WhatsApp */}
      <button
        onClick={() => handleShare('whatsapp')}
        className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-green-600 hover:bg-green-50 transition-all group"
        aria-label="Compartilhar no WhatsApp"
        title="Compartilhar no WhatsApp"
      >
        <MessageCircle className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
      </button>

      {/* Copiar Link */}
      <button
        onClick={handleCopyLink}
        className="w-12 h-12 flex items-center justify-center bg-white border border-gray-200 rounded-full hover:border-green-500 hover:bg-green-50 transition-all group relative"
        aria-label="Copiar link"
        title={copied ? 'Link copiado!' : 'Copiar link'}
      >
        <Link2 className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
        {copied && (
          <span className="absolute -right-20 bg-green-600 text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Copiado!
          </span>
        )}
      </button>
    </div>
  );
}
