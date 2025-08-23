// src/components/ConsultationForm.tsx
import { Phone, User, Mail, MessageSquare } from 'lucide-react';

const ConsultationForm = () => {
  return (
    <section className="bg-gray-800 py-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Book a Free Consultation</h2>
          <p className="text-lg text-gray-300">
            Have a project in mind? Let's talk! Fill out the form below, and one of our experts will get back to you shortly.
          </p>
        </div>

        {/* 
          IMPORTANT: Replace 'YOUR_EMAIL_HERE' with your actual email address.
          This form uses FormSubmit.co, which is a free service that forwards form submissions to your email.
        */}
        <form 
          action="https://formsubmit.co/mbchintu812@gmail.com" 
          method="POST" 
          className="bg-gray-900 p-8 rounded-lg shadow-2xl"
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-brand-orange]"
              />
            </div>

            {/* Email Address */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-brand-orange]"
              />
            </div>

            {/* Phone Number */}
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-brand-orange]"
              />
            </div>
            
            {/* Type of Service */}
            <div className="relative">
               <select 
                 name="service_type"
                 required
                 className="w-full px-4 py-3 bg-gray-700 rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-[--color-brand-orange]"
               >
                 <option value="" disabled selected>Select a Service</option>
                 <option value="New Construction">New Construction</option>
                 <option value="Remodeling">Remodeling</option>
                 <option value="Interior Design">Interior Design</option>
                 <option value="Consultation">General Consultation</option>
               </select>
            </div>
          </div>

          {/* Message */}
          <div className="mt-6 relative">
            <MessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
            <textarea
              name="message"
              placeholder="Tell us about your project..."
              rows={5}
              required
              className="w-full pl-10 pr-4 py-3 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-[--color-brand-orange]"
            ></textarea>
          </div>
          
          {/* Hidden Fields for FormSubmit */}
          <input type="hidden" name="_subject" value="New Consultation Request from BVR Constructions Website!" />
          <input type="hidden" name="_next" value="https://your-domain.com/thank-you" /> {/* Optional: Thank you page URL */}
          <input type="hidden" name="_captcha" value="false" /> {/* Optional: Disable CAPTCHA */}

          {/* Submit Button */}
          <div className="text-center mt-8">
            <button
              type="submit"
              className="bg-[--color-brand-orange] text-black px-12 py-3 rounded-lg font-bold text-lg hover:bg-orange-500 transition-transform transform hover:scale-105"
            >
              Send Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ConsultationForm;

