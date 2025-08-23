
import { Building, Paintbrush, Star, House, BrickWall } from 'lucide-react';

const StatCard = ({ icon, title, value, description, rating }: any) => (
  <div className="bg-white text-gray-800 rounded-xl shadow-2xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition-transform duration-300">
    {value ? (
      <p className="text-7xl font-bold text-gray-900">{value}</p>
    ) : (
      <div className="bg-gray-800 text-brand-orange p-4 rounded-full mb-4">
        {icon}
      </div>
    )}
    <h3 className="text-lg font-bold uppercase mt-4">{title}</h3>
    <p className="text-gray-600 mt-2 text-sm leading-relaxed">{description}</p>
    <div className="flex space-x-1 mt-4 text-brand-orange">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={20} fill="currentColor" />
      ))}
    </div>
    <button className="mt-6 bg-brand-orange text-black font-semibold px-8 py-2 rounded-md hover:bg-orange-400 transition-colors duration-300">
      DETAILS
    </button>
  </div>
);

const Stats = () => {
  const statsData = [
    {
      icon: <House size={32} />,
      title: 'Residential Construction',
      description: 'Premium construction services with attention to every detail and exceptional craftsmanship.',
      rating: 5,
    },
    {
      icon: <Building size={32} />,
      title: 'Industrial Construction',
      description: 'Sophisticated construction solutions that transform concepts into reality.',
      rating: 5,
    },
    {
      icon: <Paintbrush size={32} />,
      title: 'Interior Design',
      description: 'Sophisticated interior design solutions that create luxurious environments.',
      rating: 5,
    },
    {
      icon: <BrickWall />,
      title: 'Architecture and Structure',
      description: 'Seamless integration of construction and design for cohesive results.',
      rating: 5,
    },
  ];

  return (
    <section id='services' className="bg-gray-100 py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
