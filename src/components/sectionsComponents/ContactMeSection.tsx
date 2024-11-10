import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailIcon from '../../assets/icons/tlfIcon.png';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    mail: '',
    message: '',
  });
  const [showToast, setShowToast] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const serviceID = 'service_nr6awfb';
    const templateID = 'template_6iob6oe';
    const publicKey = '0FUfdz3BU1015IPyX';

    emailjs.sendForm(serviceID, templateID, e.currentTarget as HTMLFormElement, publicKey)
      .then(() => {
        setLoading(false);
        setShowToast(true);
        setFormData({ name: '', mail: '', message: '' });

        setTimeout(() => setShowToast(false), 3000);
      })
      .catch((error) => {
        setLoading(false);
        alert('Error al enviar el mensaje. Intenta de nuevo.');
        console.error('EmailJS error:', error);
      });
  };

  return (
    <section id="contactme">
      <div className="flex items-center mb-4 mt-10">
        <img
          className="custom-img w-5 h-5 mr-1"
          src={EmailIcon.src}
          alt="Icono de usuario"
        />
        <h4 className="font-bold text-lg">Contact me</h4>
      </div>

      <form id="form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          Your name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="mail" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Your email
        </label>
        <input
          type="email"
          id="mail"
          name="mail"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="your@email.com"
          value={formData.mail}
          onChange={handleChange}
          required
        />

        <label htmlFor="message" className="block mb-2 mt-4 text-sm font-medium text-gray-900 dark:text-white">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          placeholder="Leave your comment..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          className={`mt-4 py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-sec-color sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center transition-opacity duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={loading}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8 8 8 0 110 16 8 8 0 01-8-8z"></path>
            </svg>
          ) : '✉️ Send message'}
        </button>
      </form>

      {showToast && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-md shadow-lg transition-opacity duration-500">
          Message sent successfully!
        </div>
      )}
    </section>
  );
}
