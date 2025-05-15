import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: 'Please fill out all fields.'
      });
      return;
    }

    setIsSubmitting(true);

    emailjs
      .send(
        'service_6nu45i7',         
        'template_ujte3y7',        
        {
          from_name: formData.name,
          from_email: formData.email,
          from_message: formData.message,
          from_time: new Date().toLocaleString('pt-BR', { dateStyle: 'short', timeStyle: 'short' })
        },
        'o5XqmEfjCceEu_RVA' 
      )
      .then(() => {
        setIsSubmitting(false);
        setSubmitStatus({
          success: true,
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: '', email: '', message: '' });

        setTimeout(() => setSubmitStatus(null), 5000);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        setIsSubmitting(false);
        setSubmitStatus({
          success: false,
          message: 'Something went wrong. Please try again later.'
        });
      });
  }
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to chat? Feel free to reach out. I'm always open to discussing new projects and opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-blue-400">Contact Information</h3>
              <p className="text-gray-300 mb-6">
                Let's turn your ideas into reality. Drop me a message, and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:contact@rafael.dev" className="text-gray-300 hover:text-blue-400 transition-colors">
                    rafaelcristino022@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Location</h4>
                  <p className="text-gray-300">Itaquaquecetuba, São Paulo</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="p-3 bg-blue-500/20 rounded-lg text-blue-400 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a href="tel:+11234567890" className="text-gray-300 hover:text-blue-400 transition-colors">
                    +55 (11) 93585-2487
                  </a>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <a href="https://github.com/RegulusRK" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/rafael-cristino022" target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-gray-800/30 p-8 rounded-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-700/50 text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`flex items-center justify-center w-full py-3 px-4 rounded-lg text-white font-medium transition-colors ${isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 hover:bg-blue-700'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={18} className="mr-2" />
                    Send Message
                  </>
                )}
              </button>

              {submitStatus && (
                <div className={`mt-4 p-3 rounded-lg ${submitStatus.success ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'
                  }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;