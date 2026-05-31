import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, Eye, Clock, Users, CheckCircle } from 'lucide-react';

export default function ReservationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    area: 'Main Dining Hall',
    requests: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [bookingCode, setBookingCode] = useState('');

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSubmitted(false);
      setErrors({});
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,20}$/.test(formData.phone)) {
      tempErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.date) tempErrors.date = 'Reservation date is required';
    if (!formData.time) tempErrors.time = 'Reservation time is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Generate a random luxury booking code
      const code = 'TH-' + Math.floor(1000 + Math.random() * 9000);
      setBookingCode(code);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-darkDark bg-opacity-80 backdrop-blur-md transition-opacity duration-300">
      {/* Modal Card */}
      <div 
        className="relative w-full max-w-2xl bg-white border border-neutral-200 overflow-hidden shadow-2xl rounded-sm transition-all duration-300 animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Gold Border Bar */}
        <div className="h-1.5 bg-brand-gold w-full"></div>

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-neutral-400 hover:text-brand-dark hover:bg-neutral-100 rounded-full transition-colors duration-300 z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {!isSubmitted ? (
          <div className="p-6 md:p-10 max-h-[85vh] overflow-y-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <span className="text-brand-gold text-xs uppercase tracking-widest font-semibold font-montserrat">
                Fine Dining Experience
              </span>
              <h3 className="text-3xl font-playfair text-brand-dark mt-1 font-bold">
                Book A Table
              </h3>
              <p className="text-sm text-neutral-500 mt-2 font-montserrat">
                Secure your dining table at Taste Haven. We look forward to serving you.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Personal Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Full Name <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={`w-full px-4 py-3 bg-neutral-50 border ${
                      errors.name ? 'border-red-500' : 'border-neutral-200'
                    } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all`}
                  />
                  {errors.name && <span className="text-red-500 text-xs mt-1 block">{errors.name}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Email Address <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-3 bg-neutral-50 border ${
                      errors.email ? 'border-red-500' : 'border-neutral-200'
                    } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all`}
                  />
                  {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                </div>
              </div>

              {/* Row 2: Phone & Guests */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Phone Number <span className="text-brand-gold">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    className={`w-full px-4 py-3 bg-neutral-50 border ${
                      errors.phone ? 'border-red-500' : 'border-neutral-200'
                    } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all`}
                  />
                  {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Number of Guests
                  </label>
                  <div className="relative">
                    <Users className="absolute left-4 top-3.5 w-4 h-4 text-brand-gold pointer-events-none" />
                    <select
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      className="w-full pl-12 pr-4 py-3 bg-neutral-50 border border-neutral-200 text-brand-dark text-sm rounded-none appearance-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                    >
                      <option value="1">1 Guest</option>
                      <option value="2">2 Guests</option>
                      <option value="3">3 Guests</option>
                      <option value="4">4 Guests</option>
                      <option value="5">5 Guests</option>
                      <option value="6">6 Guests</option>
                      <option value="7">7 Guests</option>
                      <option value="8">8 Guests</option>
                      <option value="9">9 Guests</option>
                      <option value="10">10+ Guests</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Row 3: Date, Time & Area */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Date <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-50 border ${
                        errors.date ? 'border-red-500' : 'border-neutral-200'
                      } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.date && <span className="text-red-500 text-xs mt-1 block">{errors.date}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Time <span className="text-brand-gold">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-50 border ${
                        errors.time ? 'border-red-500' : 'border-neutral-200'
                      } text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all`}
                    />
                  </div>
                  {errors.time && <span className="text-red-500 text-xs mt-1 block">{errors.time}</span>}
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                    Seating Area
                  </label>
                  <div className="relative">
                    <select
                      name="area"
                      value={formData.area}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-brand-dark text-sm rounded-none appearance-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all"
                    >
                      <option value="Main Dining Hall">Main Hall</option>
                      <option value="Garden Terrace">Terrace</option>
                      <option value="Private VIP Suite">VIP Room</option>
                      <option value="Bar Lounge">Bar Lounge</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-brand-dark mb-2">
                  Special Requests / Dietary Notes
                </label>
                <textarea
                  name="requests"
                  rows="3"
                  value={formData.requests}
                  onChange={handleChange}
                  placeholder="E.g., High chair needed, anniversary dinner, gluten allergy..."
                  className="w-full px-4 py-3 bg-neutral-50 border border-neutral-200 text-brand-dark text-sm rounded-none focus:outline-none focus:border-brand-gold focus:bg-white transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit button */}
              <div>
                <button
                  type="submit"
                  className="w-full bg-brand-dark text-brand-gold hover:bg-brand-gold hover:text-brand-dark text-sm font-semibold uppercase tracking-widest py-4 px-6 border border-brand-gold transition-luxury"
                >
                  Confirm Table Reservation
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Screen */
          <div className="p-8 md:p-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="p-3 bg-neutral-100 rounded-full border border-brand-gold border-opacity-30">
                <CheckCircle className="w-16 h-16 text-brand-gold animate-bounce" />
              </div>
            </div>
            
            <h3 className="text-3xl font-playfair font-bold text-brand-dark mb-2">
              Reservation Confirmed!
            </h3>
            <p className="text-sm font-montserrat text-neutral-500 max-w-md mx-auto mb-8">
              Thank you, <strong className="text-brand-dark font-semibold">{formData.name}</strong>. Your luxury dining table has been reserved at <strong className="text-brand-dark font-semibold">Taste Haven</strong>.
            </p>

            {/* Booking Details Card */}
            <div className="bg-neutral-50 border border-neutral-200 p-6 max-w-md mx-auto mb-8 text-left space-y-4 rounded-none">
              <div className="flex justify-between items-center pb-3 border-b border-neutral-200">
                <span className="text-xs uppercase tracking-wider font-semibold text-neutral-400">
                  Booking Reference
                </span>
                <span className="text-sm font-bold text-brand-gold font-montserrat">
                  {bookingCode}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm font-montserrat">
                <div>
                  <span className="text-neutral-400 text-xs block uppercase">Date</span>
                  <span className="text-brand-dark font-medium mt-0.5 block">{formData.date}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block uppercase">Time</span>
                  <span className="text-brand-dark font-medium mt-0.5 block">{formData.time}</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block uppercase">Guests</span>
                  <span className="text-brand-dark font-medium mt-0.5 block">{formData.guests} Guests</span>
                </div>
                <div>
                  <span className="text-neutral-400 text-xs block uppercase">Seating Area</span>
                  <span className="text-brand-dark font-medium mt-0.5 block">{formData.area}</span>
                </div>
              </div>

              {formData.requests && (
                <div className="pt-3 border-t border-neutral-200 text-xs font-montserrat">
                  <span className="text-neutral-400 block uppercase mb-1">Dietary / Requests</span>
                  <p className="text-brand-dark italic">"{formData.requests}"</p>
                </div>
              )}
            </div>

            <p className="text-xs font-montserrat text-neutral-400 mb-8">
              A luxury confirmation e-ticket has been sent to <strong className="text-brand-dark">{formData.email}</strong>.
            </p>

            <button
              onClick={onClose}
              className="bg-brand-dark text-white hover:bg-brand-gold hover:text-brand-dark font-semibold text-xs uppercase tracking-widest px-8 py-3.5 border border-brand-dark hover:border-brand-gold transition-luxury rounded-none"
            >
              Done & Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
