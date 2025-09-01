'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiCalendar, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create a mailto link with the form data
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    const mailtoLink = `mailto:mngautriz@gmail.com?subject=${subject}&body=${body}`;
    
    // Open the email client
    window.location.href = mailtoLink;
    
    // Show success message after a short delay
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="lets-connect" className="py-12 md:py-16 lg:py-20 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-blue-400/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-primary/15 to-blue-400/10 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="section-subtitle">Contact Me</div>
          <h2 className="section-title">Let's Connect</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary/5 to-primary/5 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="sr-only">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="sr-only">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="sr-only">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="sr-only">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  rows={8}
                  className="w-full bg-white/5 border border-white/10 rounded-md py-3 px-4 text-white placeholder-gray-400 focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3.5 px-6 rounded-md font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-blue-400 hover:from-blue-600 hover:to-blue-500 shadow-lg shadow-primary/20 hover:shadow-primary/30 transform hover:translate-y-[-2px]'
                  } text-white`}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                
                {submitStatus === 'success' && (
                  <p className="mt-3 text-green-500 text-sm">Message sent successfully!</p>
                )}
                
                {submitStatus === 'error' && (
                  <p className="mt-3 text-red-500 text-sm">There was an error sending your message. Please try again.</p>
                )}
              </div>
            </form>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/5 backdrop-blur-md rounded-lg p-8 mb-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-blue-400/20 p-3 rounded-full text-primary border border-primary/20 shadow-sm shadow-primary/10">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:mngautriz@gmail.com" className="text-white hover:text-primary transition-colors">
                      mngautriz@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-red-500/20 to-red-400/20 p-3 rounded-full text-red-500 border border-red-500/20 shadow-sm shadow-red-500/10">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="text-white">Manila, Philippines</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-green-500/20 to-green-400/20 p-3 rounded-full text-green-500 border border-green-500/20 shadow-sm shadow-green-500/10">
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Availability</p>
                    <p className="text-white">Open for new projects and collaborations</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary/5 to-primary/5 backdrop-blur-md rounded-lg p-8 border border-white/10 shadow-xl">
              <h3 className="text-2xl font-semibold text-white mb-6">Connect on Social</h3>
              
              <p className="text-gray-300 mb-6">Let's connect and discuss how we can work together on your next project.</p>
              
              <div className="grid grid-cols-2 gap-4">
                <a
                  href="https://github.com/NeilAutriz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-lg text-white transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <div className="bg-gradient-to-br from-gray-700 to-gray-600 p-2 rounded-full group-hover:from-gray-600 group-hover:to-gray-500 transition-all duration-300">
                    <FiGithub className="w-5 h-5" />
                  </div>
                  <span className="font-medium">GitHub</span>
                </a>
                
                <a
                  href="https://www.linkedin.com/in/markneil-autriz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-lg text-white transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <div className="bg-gradient-to-br from-blue-700 to-blue-600 p-2 rounded-full group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-300">
                    <FiLinkedin className="w-5 h-5" />
                  </div>
                  <span className="font-medium">LinkedIn</span>
                </a>
                
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-lg text-white transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-blue-400 p-2 rounded-full group-hover:from-blue-400 group-hover:to-blue-300 transition-all duration-300">
                    <FiTwitter className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Twitter</span>
                </a>
                
                <a
                  href="mailto:autriz.markneil@gmail.com"
                  className="flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 p-4 rounded-lg text-white transition-all duration-300 hover:translate-y-[-2px] group"
                >
                  <div className="bg-gradient-to-br from-purple-500 to-pink-400 p-2 rounded-full group-hover:from-purple-400 group-hover:to-pink-300 transition-all duration-300">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <span className="font-medium">Email</span>
                </a>
              </div>
              
              {/* Removed the "Let's Create Something Amazing Together" section as requested */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
