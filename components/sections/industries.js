'use client';

const industries = [
  { name: 'Healthcare', image: '/market/gmb/images/industries/healthcare.jpg' },
  { name: 'Retail & Ecommerce', image: '/market/gmb/images/industries/retail.png' },
  { name: 'Travel & Hospitality', image: '/market/gmb/images/industries/travel.jpg' },
  { name: 'Finance & Legal', image: '/market/gmb/images/industries/finance.jpg' },
  { name: 'Startups & SaaS', image: '/market/gmb/images/industries/startups.jpg' },
  { name: 'Real Estate', image: '/market/gmb/images/industries/real-estate.png' },
  { name: 'Education & Edtech', image: '/market/gmb/images/industries/education.jpg' }
];

export default function Industries() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-14">
          Industries We Serve
        </h2>

        {/* Industry Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((item, index) => (
            <div
              key={index}
              className="group relative h-[280px] rounded-3xl overflow-hidden shadow-xl cursor-pointer"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Dark Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-2xl font-semibold tracking-wide">
                  {item.name}
                </h3>
              </div>

              {/* Hover Border Glow */}
              <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 group-hover:ring-2 group-hover:ring-orange-500 transition-all duration-500" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
