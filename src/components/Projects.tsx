import React from 'react';

const ProjectCard = ({ image, title }: { image: string, title: string }) => (
    <div className="group rounded-lg border border-gray-700/50 overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
        <div className="overflow-hidden">
             <img src={image} alt={title} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
        </div>
        <div className="p-6 bg-gray-900">
            <h3 className="text-xl font-semibold text-white group-hover:text-brand-orange transition-colors duration-300">{title}</h3>
        </div>
    </div>
);

const Projects = () => {
    const projectData = [
        { image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c', title: 'MODERN LIVING ROOM' },
        { image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45', title: 'ELEGANT RESIDENCE' },
        { image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', title: 'CONTEMPORARY KITCHEN' },
        { image: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed', title: 'LUXURY INTERIOR' },
    ];

    return (
        <section className="bg-black py-24">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-brand-orange uppercase tracking-wider">Our Projects</h2>
                <div className="w-24 h-1 bg-brand-orange mx-auto mt-4"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    {projectData.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
