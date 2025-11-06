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
  { id: 'digital-marketing', name: 'Digital Marketing', color: 'orange' }
];

function MarketWeServePage() {
  const [activeService, setActiveService] = useState('google-my-business');
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [statesWithCities, setStatesWithCities] = useState([]);
  const [loading, setLoading] = useState(true);

  // Get the appropriate slug based on the active service
  const getCitySlug = (city) => {
    switch (activeService) {
      case 'google-my-business':
        return city.gmb_slug;
      case 'seo':
        return city.seo_slug;
      case 'website-development':
        return city.web_slug;
      case 'content-writing':
        return city.content_slug;
      case 'digital-marketing':
        return city.digital_slug;
      default:
        return city.web_slug;
    }
  };

  // Get the appropriate state slug based on the active service
  const getStateSlug = (state) => {
    switch (activeService) {
      case 'google-my-business':
        return state.gmb_slug;
      case 'seo':
        return state.seo_slug;
      case 'website-development':
        return state.web_slug;
      case 'content-writing':
        return state.content_slug;
         case 'digital-marketing':
        return city.digital_slug;
      default:
        return state.web_slug;
    }
  };

  // Fetch countries on mount
  useEffect(() => {
    fetchCountries();
  }, []);

  // Fetch states and cities when country is selected
  useEffect(() => {
    if (selectedCountry) {
      fetchStatesAndCities(selectedCountry.id);
    }
  }, [selectedCountry]);

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

  const fetchStatesAndCities = async (countryId) => {
    try {
      setLoading(true);
      const statesResponse = await fetch(`/api/locations/states/${countryId}`);
      const statesData = await statesResponse.json();
      const states = statesData.states || [];

      // Fetch cities for all states
      const statesWithCitiesData = await Promise.all(
        states.map(async (state) => {
          try {
            const citiesResponse = await fetch(`/api/locations/cities/${state.id}`);
            const citiesData = await citiesResponse.json();
            return {
              ...state,
              cities: citiesData.cities || []
            };
          } catch (error) {
            console.error(`Error fetching cities for state ${state.name}:`, error);
            return {
              ...state,
              cities: []
            };
          }
        })
      );

      setStatesWithCities(statesWithCitiesData);
    } catch (error) {
      console.error('Error fetching states and cities:', error);
    } finally {
      setLoading(false);
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
              Markets Wee <span className='text-transparent bg-clip-text bg-blue-500'>Serve</span>
            </h1>
            <p className='text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed'>
              Delivering exceptional digital solutions across cities worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Tabs */}
      <section className='py-10 bg-white sticky top-18 z-40 shadow-md'>
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

              {/* States with Cities */}
              {statesWithCities.length > 0 && (
                <div className='space-y-12'>
                  {statesWithCities.map((state, idx) => (
                    <div key={idx}>
                      <Link href={`/${getStateSlug(state)}`}>
                        <h2 className='text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2 hover:text-blue-600 transition-colors cursor-pointer w-fit'>
                          <IconMapPin size={28} className='text-green-600' />
                          {state.name}
                        </h2>
                      </Link>
                      
                      {state.cities.length > 0 ? (
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                          {state.cities.map((city) => (
                            <Link
                              key={city.id}
                              href={`/${getCitySlug(city)}`}
                            >
                              <motion.div
                                whileHover={{ scale: 1.05, y: -5 }}
                                className='bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all border-2 border-gray-100 hover:border-blue-600 cursor-pointer'
                              >
                                <div className='flex items-center gap-3 mb-2'>
                                  <IconMapPin size={20} className='text-blue-600' />
                                  <h3 className='font-bold text-gray-900'>{city.name}</h3>
                                </div>
                                <p className='text-sm text-gray-600'>{state.name}, {selectedCountry?.name}</p>
                                <div className='mt-3 text-blue-600 text-sm font-semibold'>
                                  View Services →
                                </div>
                              </motion.div>
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <p className='text-gray-500 italic'>No cities available for this state.</p>
                      )}
                    </div>
                  ))}
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
