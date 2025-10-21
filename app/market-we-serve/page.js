"use client";

import BgLayout from '@/components/layout/bgLayout';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { IconHome, IconChevronRight, IconMapPin, IconWorld } from '@tabler/icons-react';
import Link from 'next/link';

const services = [
  { id: 'google-my-business', name: 'Google My Business', color: 'blue' },
  { id: 'seo', name: 'SEO', color: 'green' },
  { id: 'website-development', name: 'Website Development', color: 'purple' },
  { id: 'digital-marketing', name: 'Digital Marketing', color: 'pink' },
  { id: 'content-writing', name: 'Content Writing', color: 'orange' }
];

function MarketWeServePage() {
  const [activeService, setActiveService] = useState('google-my-business');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [states, setStates] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch countries on mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Fetch states when country is selected
  useEffect(() => {
    if (selectedCountry) {
      fetchStates(selectedCountry.id);
      setSelectedState(null);
      setCities([]);
    }
  }, [selectedCountry]);

  // Fetch cities when state is selected
  useEffect(() => {
    if (selectedState) {
      fetchCities(selectedState.id);
    }
  }, [selectedState]);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/locations/countries');
      const data = await response.json();
      setCountries(data.countries || []);
      if (data.countries && data.countries.length > 0) {
        setSelectedCountry(data.countries[0]);
      }
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchStates = async (countryId) => {
    try {
      const response = await fetch(`/api/locations/states/${countryId}`);
      const data = await response.json();
      setStates(data.states || []);
      if (data.states && data.states.length > 0) {
        setSelectedState(data.states[0]);
      }
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  const fetchCities = async (stateId) => {
    try {
      const response = await fetch(`/api/locations/cities/${stateId}`);
      const data = await response.json();
      setCities(data.cities || []);
    } catch (error) {
      console.error('Error fetching cities:', error);
    }
  };

  return (
    <BgLayout>
      {/* Hero Section */}
      <section className='relative h-[50vh] mt-15 flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0'>
          <img
            src="/market/hero-image.webp"
            alt="Markets We Serve"
            className='w-full h-full object-cover'
          />
          <div className='absolute inset-0 bg-black/70'></div>
        </div>

        <div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className='flex items-center justify-center gap-2 text-sm mb-6'
          >
            <Link href='/' className='flex items-center gap-1 hover:text-blue-400 transition-colors'>
              <IconHome size={18} />
              <span>Home</span>
            </Link>
            <IconChevronRight size={16} className='text-blue-400' />
            <span className='text-blue-400'>Markets We Serve</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold mb-6'>
              Markets We <span className='text-transparent bg-clip-text bg-blue-500'>Serve</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed'>
              Delivering exceptional digital solutions across cities worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className='py-10 bg-white sticky top-0 z-40 shadow-md'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap justify-center gap-3'>
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveService(service.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all ${
                  activeService === service.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {service.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className='py-10'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          {loading ? (
            <div className='text-center py-20'>
              <div className='inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600'></div>
              <p className='mt-4 text-gray-600'>Loading locations...</p>
            </div>
          ) : (
            <>
              {/* Country Tabs */}
              <div className='mb-8'>
                <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                  <IconWorld size={28} className='text-blue-600' />
                  Select Country
                </h2>
                <div className='flex flex-wrap gap-3'>
                  {countries.map((country) => (
                    <button
                      key={country.id}
                      onClick={() => setSelectedCountry(country)}
                      className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                        selectedCountry?.id === country.id
                          ? 'bg-blue-600 text-white shadow-lg'
                          : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-blue-600'
                      }`}
                    >
                      {country.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* State Tabs */}
              {states.length > 0 && (
                <div className='mb-8'>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <IconMapPin size={28} className='text-green-600' />
                    Select State in {selectedCountry?.name}
                  </h2>
                  <div className='flex flex-wrap gap-3'>
                    {states.map((state) => (
                      <button
                        key={state.id}
                        onClick={() => setSelectedState(state)}
                        className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                          selectedState?.id === state.id
                            ? 'bg-green-600 text-white shadow-lg'
                            : 'bg-white text-gray-700 border-2 border-gray-200 hover:border-green-600'
                        }`}
                      >
                        {state.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Cities Grid */}
              {cities.length > 0 && (
                <div>
                  <h2 className='text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2'>
                    <IconMapPin size={28} className='text-purple-600' />
                    Cities in {selectedState?.name}
                  </h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {cities.map((city) => (
                      <Link
                        key={city.id}
                        href={`/market-we-serve/${activeService}/${city.slug}`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-600 cursor-pointer'
                        >
                          <div className='flex items-center gap-3 mb-2'>
                            <IconMapPin size={20} className='text-blue-600' />
                            <h3 className='font-bold text-gray-900'>{city.name}</h3>
                          </div>
                          <p className='text-sm text-gray-600'>{selectedState?.name}, {selectedCountry?.name}</p>
                          <div className='mt-3 text-blue-600 text-sm font-semibold'>
                            View Services →
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </section>
    </BgLayout>
  );
}

export default MarketWeServePage;
