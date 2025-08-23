import {  Users, Award, Clock, CheckCircle2, Building, HardHat, Target } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About BVR Constructions</h1>
          <p className="text-xl md:text-2xl text-gray-300">
            Building dreams into reality with precision, passion, and unmatched expertise
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-8">Our Story</h2>
              <div className="space-y-6 text-lg text-gray-300">
                <p>
                  Founded with a vision to transform the construction industry, BVR Constructions has been at the forefront 
                  of innovative building solutions for over two decades. What started as a small family business has evolved 
                  into a leading construction firm renowned for its commitment to excellence and client satisfaction.
                </p>
                <p>
                  We believe that every structure tells a story, and we're passionate about helping our clients write theirs. 
                  From residential homes that families cherish to commercial spaces that drive businesses forward, we bring 
                  dreams to life with meticulous attention to detail and unwavering quality standards.
                </p>
                <p>
                  Our journey has been marked by countless successful projects, satisfied clients, and a team that treats 
                  every construction challenge as an opportunity to innovate and exceed expectations.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" 
                alt="Construction team at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-brand-orange text-black p-6 rounded-lg">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm font-semibold">Years of Excellence</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-300">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* Mission */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-300">
                To deliver exceptional construction services that exceed client expectations while maintaining the highest 
                standards of quality, safety, and environmental responsibility.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the most trusted and innovative construction company, recognized for transforming communities through 
                sustainable building practices and cutting-edge solutions.
              </p>
            </div>

            {/* Values */}
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <p className="text-gray-300">
                Integrity, innovation, and excellence form the cornerstone of our work. We believe in transparent communication, 
                sustainable practices, and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300">Numbers that speak to our commitment and expertise</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-orange mb-4">500+</div>
              <div className="text-lg text-gray-300">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-orange mb-4">25+</div>
              <div className="text-lg text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-orange mb-4">98%</div>
              <div className="text-lg text-gray-300">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-brand-orange mb-4">150+</div>
              <div className="text-lg text-gray-300">Expert Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Choose BVR Constructions</h2>
            <p className="text-xl text-gray-300">What sets us apart in the construction industry</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Quality Assurance</h3>
                    <p className="text-gray-300">
                      Every project undergoes rigorous quality checks to ensure the highest standards of construction and finish.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Timely Delivery</h3>
                    <p className="text-gray-300">
                      We understand the importance of deadlines and consistently deliver projects on time without compromising quality.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <HardHat className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Our skilled professionals bring decades of experience and innovative solutions to every construction challenge.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-orange rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <Users className="w-6 h-6 text-black" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Client-Centric Approach</h3>
                    <p className="text-gray-300">
                      We prioritize clear communication and collaboration, ensuring our clients are involved every step of the way.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076" 
                alt="Modern construction site"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Leadership</h2>
            <p className="text-xl text-gray-300">Meet the visionaries behind BVR Constructions</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {/* CEO */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2069" 
                  alt="CEO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Rajesh Varma</h3>
              <p className="text-brand-orange font-semibold mb-4">Chief Executive Officer</p>
              <p className="text-gray-300">
                With over 25 years in construction, Rajesh leads our company with a vision for innovation and sustainable building practices.
              </p>
            </div>

            {/* CTO */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070" 
                  alt="CTO"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Priya Sharma</h3>
              <p className="text-brand-orange font-semibold mb-4">Chief Technical Officer</p>
              <p className="text-gray-300">
                Priya brings cutting-edge technology and engineering excellence to every project, ensuring innovation meets practicality.
              </p>
            </div>

            {/* Head of Operations */}
            <div className="text-center">
              <div className="w-48 h-48 bg-gray-700 rounded-full mx-auto mb-6 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2070" 
                  alt="Head of Operations"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Amit Patel</h3>
              <p className="text-brand-orange font-semibold mb-4">Head of Operations</p>
              <p className="text-gray-300">
                Amit ensures smooth project execution and maintains our reputation for delivering exceptional results on time and within budget.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Your Vision?</h2>
          <p className="text-xl text-gray-300 mb-10">
            Let's discuss how we can bring your construction project to life. Our team is ready to turn your dreams into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-brand-orange text-black px-8 py-4 rounded-lg font-semibold hover:bg-orange-500 transition-colors">
              Get Free Quote
            </button>
            <button className="border-2 border-brand-orange text-brand-orange px-8 py-4 rounded-lg font-semibold hover:bg-brand-orange hover:text-black transition-colors">
              View Our Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;