"use client";

import BgLayout from '@/components/layout/bgLayout';
import Link from 'next/link';
import { IconHome, IconArrowLeft } from '@tabler/icons-react';

export default function NotFound() {
  return (
    <BgLayout>
      <div className='min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8'>
        <div className='max-w-2xl w-full text-center'>
          <div className='mb-8'>
            <h1 className='text-9xl font-bold text-blue-600'>404</h1>
            <h2 className='text-4xl font-bold text-gray-900 mt-4 mb-4'>
              Page Not Found
            </h2>
            <p className='text-xl text-gray-600 mb-8'>
              Sorry, the page you are looking for does not exist or has been moved.
            </p>
          </div>

          <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
            <button
              onClick={() => window.history.back()}
              className='flex items-center gap-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-all'
            >
              <IconArrowLeft size={20} />
              Go Back
            </button>
            <Link href='/'>
              <button className='flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl'>
                <IconHome size={20} />
                Go Home
              </button>
            </Link>
          </div>

          <div className='mt-12'>
            <p className='text-gray-600 mb-4'>Looking for something specific?</p>
            <div className='flex flex-wrap justify-center gap-3'>
              <Link href='/services' className='text-blue-600 hover:text-blue-700 font-medium'>
                Our Services
              </Link>
              <span className='text-gray-400'>|</span>
              <Link href='/portfolio' className='text-blue-600 hover:text-blue-700 font-medium'>
                Portfolio
              </Link>
              <span className='text-gray-400'>|</span>
              <Link href='/market-we-serve' className='text-blue-600 hover:text-blue-700 font-medium'>
                Markets We Serve
              </Link>
              <span className='text-gray-400'>|</span>
              <Link href='/contact' className='text-blue-600 hover:text-blue-700 font-medium'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </BgLayout>
  );
}
