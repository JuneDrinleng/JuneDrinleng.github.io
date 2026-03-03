import { ExternalLink } from 'lucide-react';

interface NavigationCardProps {
  title: string;
  url: string;
  description?: string;
}

export function NavigationCard({ title, url, description }: NavigationCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-black p-4 hover:bg-black hover:text-white transition-colors duration-200"
    >
      <div className="flex items-start justify-between gap-2">
        <div className="flex-1 min-w-0">
          <h3 className="font-medium mb-1 truncate">{title}</h3>
          {description && (
            <p className="text-sm opacity-60 line-clamp-2">{description}</p>
          )}
        </div>
        <ExternalLink className="w-4 h-4 flex-shrink-0 mt-1 opacity-40 group-hover:opacity-100" />
      </div>
    </a>
  );
}
