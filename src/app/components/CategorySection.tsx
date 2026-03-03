import { NavigationCard } from './NavigationCard';

interface Link {
  title: string;
  url: string;
  description?: string;
}

interface CategorySectionProps {
  category: string;
  links: Link[];
}

export function CategorySection({ category, links }: CategorySectionProps) {
  return (
    <section className="mb-12">
      <div className="border-t-4 border-black mb-4 pt-2">
        <h2 className="text-2xl uppercase tracking-wider font-bold">{category}</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {links.map((link, index) => (
          <NavigationCard
            key={index}
            title={link.title}
            url={link.url}
            description={link.description}
          />
        ))}
      </div>
    </section>
  );
}
