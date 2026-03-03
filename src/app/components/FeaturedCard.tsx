import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowUpRight } from 'lucide-react';

interface FeaturedCardProps {
  title: string;
  url: string;
  description: string;
  imageUrl: string;
  size?: 'large' | 'medium';
}

export function FeaturedCard({ title, url, description, imageUrl, size = 'medium' }: FeaturedCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group block border-2 border-black overflow-hidden hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-200 ${
        size === 'large' ? 'row-span-2' : ''
      }`}
    >
      <div className={`relative overflow-hidden bg-gray-100 ${size === 'large' ? 'h-80' : 'h-48'}`}>
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4 bg-black text-white p-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className={`font-bold uppercase tracking-tight mb-2 ${size === 'large' ? 'text-2xl' : 'text-xl'}`}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed opacity-70">{description}</p>
      </div>
    </a>
  );
}
