import { Building2, Wrench, HardHat, Star, Award, Facebook, Twitter, Linkedin } from 'lucide-react';

const FeatureGridItem = ({ icon, title, subtitle }: any) => (
    <div className="bg-gray-800 p-6 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
        <div className="flex justify-center mb-3 text-brand-orange">{icon}</div>
        <h4 className="font-bold">{title}</h4>
        <p className="text-sm text-gray-400">{subtitle}</p>
    </div>
);

const Features = () => {
    const featureItems = [
        { icon: <Building2 size={28} />, title: "CONSTRUCTION", subtitle: "Premium Quality" },
        { icon: <Wrench size={28} />, title: "DESIGN", subtitle: "Modern Style" },
        { icon: <HardHat size={28} />, title: "MATERIALS", subtitle: "High Quality" },
        { icon: <Star size={28} />, title: "PLANNING", subtitle: "Expert Team" },
        { icon: <Award size={28} />, title: "PROJECTS", subtitle: "500+ Done" },
        { icon: <Star size={28} />, title: "GUARANTEE", subtitle: "5 Year Warranty" },
    ];

    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-12 items-center">
                {/* Left Column: Social & Packages */}
                <div className="flex flex-col items-center lg:items-start space-y-8">
                    <div className="flex lg:flex-col space-x-4 lg:space-x-0 lg:space-y-4">
                        <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors"><Facebook size={20}/></a>
                        <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors"><Twitter size={20}/></a>
                        <a href="#" className="p-2 border border-gray-600 rounded-full hover:border-brand-orange hover:text-brand-orange transition-colors"><Linkedin size={20}/></a>
                    </div>
                    <div className="bg-white text-gray-900 p-8 rounded-xl w-full max-w-sm">
                        <h3 className="text-xl font-bold mb-6">PACKAGES</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center text-sm">
                                <span>BASIC</span>
                                <span className="font-semibold">$2,500</span>
                            </div>
                            <div className="flex justify-between items-center text-sm">
                                <span>STANDARD</span>
                                <span className="font-semibold">$5,000</span>
                            </div>
                             <div className="flex justify-between items-center text-sm">
                                <span>PREMIUM</span>
                                <span className="font-semibold">$10,000</span>
                            </div>
                        </div>
                        <div className="mt-6 w-full bg-gray-200 rounded-full h-2">
                           <div className="bg-brand-orange h-2 rounded-full" style={{width: '75%'}}></div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Image & Feature Grid */}
                <div className="lg:col-span-2 grid grid-cols-3 grid-rows-3 gap-4 h-[500px]">
                    <div className="col-start-1 row-start-1"><FeatureGridItem {...featureItems[0]} /></div>
                    <div className="col-start-3 row-start-1"><FeatureGridItem {...featureItems[1]} /></div>
                    <div className="col-start-1 row-start-2"><FeatureGridItem {...featureItems[2]} /></div>
                    
                    {/* Central Image */}
                    <div className="col-start-2 row-start-2 col-span-1 row-span-1 rounded-lg overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2" alt="Modern Kitchen" className="w-full h-full object-cover"/>
                    </div>
                    
                    <div className="col-start-3 row-start-2"><FeatureGridItem {...featureItems[3]} /></div>
                    <div className="col-start-1 row-start-3"><FeatureGridItem {...featureItems[4]} /></div>
                    <div className="col-start-3 row-start-3"><FeatureGridItem {...featureItems[5]} /></div>
                </div>
            </div>
        </section>
    );
};

export default Features;
