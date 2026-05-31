import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSuccess(true);
      // Reset form after short delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
        });
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white font-montserrat overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-20">
          <ScrollReveal animation="slide-down" delay={100}>
            <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold">
              Get In Touch
            </span>
          </ScrollReveal>
          <ScrollReveal animation="zoom-in" delay={200}>
            <h2 className="text-3xl sm:text-4xl font-bold font-playfair text-brand-dark mt-2 leading-tight">
              Contact & Opening Hours
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="slide-up" delay={300}>
            <div className="h-0.5 bg-brand-gold w-24 mx-auto my-4"></div>
            <p className="text-xs sm:text-sm text-neutral-500 max-w-lg mx-auto leading-relaxed">
              Have questions, inquiries, or feedback? Drop us a note or call us directly.
            </p>
          </ScrollReveal>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact info with luxury dark box */}
          <ScrollReveal 
            animation="slide-right" 
            delay={200}
            className="lg:col-span-5 bg-brand-darkDark p-8 sm:p-12 text-white border border-neutral-800 flex flex-col justify-between rounded-none shadow-xl"
          >
            <div className="space-y-10">
              {/* Header inside card */}
              <div>
                <h3 className="font-playfair font-bold text-2xl text-white mb-2">
                  Taste Haven
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed">
                  Fine Dining & International Cuisine. Located in the heart of the luxury dining district.
                </p>
              </div>

              {/* Info Items List */}
              <div className="space-y-6">
                
                {/* Item 1: Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-900 border border-brand-gold border-opacity-30 shrink-0">
                    <MapPin className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider font-bold block mb-1">
                      Our Location
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      104 Culinary Boulevard, Suite 500,<br />
                      Gourmet Plaza, NY 10012
                    </p>
                  </div>
                </div>

                {/* Item 2: Phone */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-900 border border-brand-gold border-opacity-30 shrink-0">
                    <Phone className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider font-bold block mb-1">
                      Phone Number
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      Main Desk: +1 (555) 123-4567<br />
                      Direct Booking: +1 (555) 987-6543
                    </p>
                  </div>
                </div>

                {/* Item 3: Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-2.5 bg-neutral-900 border border-brand-gold border-opacity-30 shrink-0">
                    <Mail className="w-5 h-5 text-brand-gold" />
                  </div>
                  <div>
                    <span className="text-[10px] text-brand-gold uppercase tracking-wider font-bold block mb-1">
                      Email Address
                    </span>
                    <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed">
                      inquire@tastehaven.com<br />
                      events@tastehaven.com
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <div className="flex items-center space-x-2 text-brand-gold mb-4">
                <Clock className="w-5 h-5" />
                <h4 className="font-playfair font-bold text-lg text-white">
                  Opening Hours
                </h4>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-xs font-montserrat font-light text-neutral-300">
                <div>
                  <span className="text-neutral-500 font-bold block mb-0.5">Monday - Friday</span>
                  <span>5:00 PM - 11:00 PM</span>
                </div>
                <div>
                  <span className="text-neutral-500 font-bold block mb-0.5">Saturday - Sunday</span>
                  <span>4:00 PM - Midnight</span>
                </div>
              </div>
            </div>

          </ScrollReveal>

          {/* Right Column: Contact form box */}
          <ScrollReveal 
            animation="slide-left" 
            delay={300}
            className="lg:col-span-7 bg-brand-gray p-8 sm:p-12 border border-neutral-100 shadow-lg flex flex-col justify-center rounded-none"
          >
            <h3 className="font-playfair font-bold text-2xl text-brand-dark mb-6">
              Send Us A Message
            </h3>

            {isSuccess ? (
              <div className="bg-white border border-brand-gold p-8 text-center space-y-4 rounded-none animate-zoom-in">
                <div className="flex justify-center">
                  <CheckCircle2 className="w-12 h-12 text-brand-gold animate-bounce" />
                </div>
                <h4 className="font-playfair text-xl font-bold text-brand-dark">
                  Message Sent!
                </h4>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out to **Taste Haven**. Our hospitality managers will review your message and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark mb-2">
                      Your Name <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.name ? 'border-red-500' : 'border-neutral-200'
                      } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold transition-all`}
                    />
                    {errors.name && <span className="text-red-500 text-[10px] mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark mb-2">
                      Email Address <span className="text-brand-gold">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 bg-white border ${
                        errors.email ? 'border-red-500' : 'border-neutral-200'
                      } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold transition-all`}
                    />
                    {errors.email && <span className="text-red-500 text-[10px] mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                {/* Phone number */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-4 py-3 bg-white border border-neutral-200 text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold transition-all"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-brand-dark mb-2">
                    Your Message <span className="text-brand-gold">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your event, feedback, or inquiries..."
                    className={`w-full px-4 py-3 bg-white border ${
                      errors.message ? 'border-red-500' : 'border-neutral-200'
                    } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold transition-all resize-none`}
                  ></textarea>
                  {errors.message && <span className="text-red-500 text-[10px] mt-1 block">{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full bg-brand-dark text-brand-gold hover:bg-brand-gold hover:text-brand-dark font-bold text-xs uppercase tracking-widest py-4 border border-brand-gold transition-luxury flex items-center justify-center space-x-2 rounded-none"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>

              </form>
            )}
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
