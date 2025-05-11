import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import TeamSection from './TeamSection';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle the form submission here
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Have a project in mind or want to learn more about our sustainable architecture approach?
            We'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex items-center justify-center p-0 lg:p-8">
            <iframe
              title="Dhaka Design Location"
              src="https://www.google.com/maps?q=Robana+Plaza+2nd+floor,+Dhamrai+Bazar,+Dhamrai,+Dhaka&output=embed"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '12px', minHeight: '300px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="mb-6 flex items-start">
                <Mail className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Email</h4>
                  <a href="mailto:dhakadesign2000@gmail.com" className="text-gray-900 hover:text-blue-700 transition-colors">
                    dhakadesign2000@gmail.com
                  </a>
                </div>
              </div>
              <div className="mb-6 flex items-start">
                <Phone className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Phone</h4>
                  <a href="tel:+880174167532" className="text-gray-900 hover:text-blue-700 transition-colors">
                    +880 1741 67532
                  </a>
                </div>
              </div>
              <div className="mb-6 flex items-start">
                <MapPin className="text-blue-600 mt-1 mr-4" size={20} />
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Address</h4>
                  <span className="text-gray-900">Robana Plaza 2nd floor, Dhamrai Bazar, Dhamrai, Dhaka, Bangladesh</span>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="text-[#1877F2] mt-1 mr-4" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Follow Us</h4>
                  <a href="https://www.facebook.com/profile.php?id=61561434903573" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-700 transition-colors">
                    facebook.com/Dhaka Design
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;