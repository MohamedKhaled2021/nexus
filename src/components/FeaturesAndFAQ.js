import React, { useState } from 'react';
import topImage from '../assets/Home_UP.png';
import Footer from './Footer';
import footerImage from '../assets/img.png';

const features = [
  {
    title: "Automated Product Creation",
    description: "Utilize AI to effortlessly generate high-quality digital products tailored to your niche."
  },
  {
    title: "Real-Time Sales Analytics",
    description: "Monitor sales performance with detailed, real-time analytics and reporting tools."
  },
  {
    title: "Dynamic Pricing Optimization",
    description: "Automatically adjust prices based on market trends and customer behavior."
  },
  {
    title: "Personalized Marketing Campaigns",
    description: "Leverage AI-driven insights to create targeted marketing campaigns that boost engagement and conversions."
  },
  {
    title: "Seamless E-Commerce Integration",
    description: "Integrate with major e-commerce platforms to streamline the selling process."
  },
  {
    title: "Advanced Customer Insights",
    description: "Gain deep insights into customer behavior and preferences to refine your business strategies."
  }
];

const faqItems = [
  {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  }, {
    question: "How does billing work?",
    answer: "We offer flexible billing options tailored to your needs. You can choose between monthly or annual plans, with pricing based on the features and usage tier you select."
  },
  // Add more FAQ items as needed
];

const FeatureCard = ({ title, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg mb-6 card">
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold">{question}</span>
        <span className={`transform transition-transform duration-200 ${isOpen ? 'rotate-45' : ''}`}>
          {isOpen ? '×' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-400">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FeaturesAndFAQ = () => {
  return (
    <div
      className="bg-black text-white p-4 sm:p-6 md:p-8"
    >
      <section style={{ backgroundImage: `url(${topImage})`, backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh',marginTop:"10%" }} className="mb-16 text-white text-center animate__animated animate__fadeInUp">
        <p className="px-4 py-2 rounded-md text-sm mb-4 section-title-box text-center ">Features</p>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Discover our Top Features</h2>
        <p className="mb-8 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section style={{ backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh',marginTop:"10%" }} className="mb-16 animate__animated animate__fadeInLeft">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center text-whit">Frequently Asked Questions</h2>
        <p className="mb-8 text-gray-400 text-center text-whit">Find answers to frequently asked questions about NexFlow's services, including billing and what's included.</p>
        <div className="space-y-4 text-whit">
          {faqItems.map((item, index) => (
            <FAQItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Add spacing before the footer */}
      <div className="mb-16"></div>
      <Footer backgroundImage={footerImage} />
    </div>
  );
};

export default FeaturesAndFAQ;
