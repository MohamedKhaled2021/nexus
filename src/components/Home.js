import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import topImage from '../assets/Home_UP.png';
import middleImage from '../assets/Home_Mid.png';
import Footer from './Footer';
import footerImage from '../assets/imger.png';

function Home() {
  useEffect(() => {
    // Ensure the page starts from the top on reload
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animationClass = entry.target.dataset.animation;
          entry.target.classList.add('animate__animated', animationClass);
        }
      });
    });

    const serviceElements = document.querySelectorAll('.service-card');
    const aiProductElements = document.querySelectorAll('.ai-product-card');
    const footerElement = document.querySelector('.footer');

    serviceElements.forEach(element => {
      element.dataset.animation = 'animate__fadeInRight';
      observer.observe(element);
    });

    aiProductElements.forEach(element => {
      element.dataset.animation = 'animate__fadeInLeft';
      observer.observe(element);
    });

    if (footerElement) {
      footerElement.dataset.animation = 'animate__fadeInUp';
      observer.observe(footerElement);
    }

    return () => {
      serviceElements.forEach(element => {
        observer.unobserve(element);
      });
      aiProductElements.forEach(element => {
        observer.unobserve(element);
      });
      if (footerElement) {
        observer.unobserve(footerElement);
      }
    };
  }, []);

  return (
    <div>
      <div className="pt-16" style={{ backgroundImage: `url(${topImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100vh' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="text-center text-white animate__animated animate__fadeInUp">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              Transforming Businesses
              <br />
              with Intuitive AI Solutions
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              NEXUS's AI product empowers businesses to create and simplify business analysis tasks with digital products more effectively, driving growth and innovation.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link to="/signup" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Get Started
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link to="/learn-more" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md md:py-4 md:text-lg md:px-10 h_learn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundImage: `url(${middleImage})`, backgroundSize: 'cover', backgroundPosition: 'center', padding: '50px 0' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-title-box">
            <h2 className="section-title">Services</h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            <div className="card service-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="get-started-button">
                    Get Started <span className="arrow">➔</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card service-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="get-started-button">
                    Get Started <span className="arrow">➔</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card service-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4">
                  <Link to="/contact" className="get-started-button">
                    Get Started <span className="arrow">➔</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="section-title-box mt-16">
            <h2 className="section-title">AI Products</h2>
          </div>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1">
            <div className="card ai-product-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="coming-soon">Coming soon</span>
                </div>
              </div>
            </div>
            <div className="card ai-product-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="coming-soon">Coming soon</span>
                </div>
              </div>
            </div>
            <div className="card ai-product-card">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-white">Automated Product Creation</h3>
                <p className="mt-2 text-base text-white">
                  Utilize AI to effortlessly generate high-quality digital products tailored to your niche.
                </p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="coming-soon">Coming soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer backgroundImage={footerImage} />
    </div>
  );
}

export default Home;
