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

    // Simulate form submission
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
    <section id="lets-connect" className="py-20 md:py-32 relative">
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-r from-primary/20 to-accent/10 rounded-full filter blur-[150px]"></div>
        <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-r from-secondary/15 to-rose-400/10 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
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
            className="bg-dark-100/50 backdrop-blur-md rounded-lg p-8 border border-white/5 shadow-xl"
          >
            <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-8">Send a Message</h3>
            
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
                  className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  rows={5}
                  className="w-full bg-dark-200 border border-dark-300 rounded-md py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>
              
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-md font-medium transition-all duration-300 ${
                    isSubmitting 
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-primary to-blue-400 hover:from-blue-600 hover:to-blue-500 shadow-lg shadow-primary/20'
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
            <div className="bg-dark-100/50 backdrop-blur-md rounded-lg p-8 mb-8 border border-white/5 shadow-xl">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-secondary to-rose-400 bg-clip-text text-transparent mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-secondary/20 to-rose-400/20 p-3 rounded-full text-secondary border border-secondary/20 shadow-sm shadow-secondary/10">
                    <FiMail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Email</p>
                    <a href="mailto:sandemoses2019@gmail.com" className="text-white hover:text-primary transition-colors">
                      sandemoses2019@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-primary/20 to-blue-400/20 p-3 rounded-full text-primary border border-primary/20 shadow-sm shadow-primary/10">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Location</p>
                    <p className="text-white">Kisumu, Kenya</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-500/20 to-violet-400/20 p-3 rounded-full text-purple-400 border border-purple-500/20 shadow-sm shadow-purple-500/10">
                    <FiCalendar className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-gray-400 mb-1">Availability</p>
                    <p className="text-white">Available for new projects</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-dark-100/50 backdrop-blur-md rounded-lg p-8 border border-white/5 shadow-xl">
              <h3 className="text-2xl font-semibold bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent mb-6">Connect on Social</h3>
              
              <div className="flex gap-4">
                <a
                  href="https://github.com/sundaymoses"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-4 rounded-full text-white hover:text-primary transition-colors"
                >
                  <FiGithub className="w-6 h-6" />
                </a>
                
                <a
                  href="https://www.linkedin.com/in/sunday-moses-24572a241/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-4 rounded-full text-white hover:text-primary transition-colors"
                >
                  <FiLinkedin className="w-6 h-6" />
                </a>
                
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-200 p-4 rounded-full text-white hover:text-primary transition-colors"
                >
                  <FiTwitter className="w-6 h-6" />
                </a>
                
                <a
                  href="mailto:sandemoses2019@gmail.com"
                  className="bg-dark-200 p-4 rounded-full text-white hover:text-primary transition-colors"
                >
                  <FiMail className="w-6 h-6" />
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-dark-200 rounded-lg border border-dark-300">
                <p className="text-gray-400 text-center italic">💬 Drag me around!<br />Find the secret spot</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
