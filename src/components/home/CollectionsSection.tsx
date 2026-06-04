import { ScrollReveal } from '../ui/ScrollReveal';
import { CollectionCard } from '../ui/CollectionCard';
import { collectionsData } from '../../data/collections';

export function CollectionsSection() {
  return (
    <section id="collections" className="py-12 md:py-20 bg-[#fafafa] px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-eductome-marine mb-4">
              Nos Collections
            </h2>
            <p className="text-lg text-gray-600 italic font-medium">
              "Chaque collection a sa mission. Trouve celle qui te manque."
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {collectionsData.map((collection, index) => (
            <ScrollReveal key={collection.id} delay={index * 0.05}>
              <CollectionCard collection={collection} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
