"use client";

import Script from 'next/script';

export default function LocationStructuredData({ locationData, locationType, serviceType }) {
  if (!locationData) return null;

  // Get the appropriate ID based on location type
  let locationId = 0;
  if (locationType === 'city') {
    locationId = locationData.city_id || locationData.id || 0;
  } else if (locationType === 'state') {
    locationId = locationData.state_id || locationData.id || 0;
  } else if (locationType === 'country') {
    locationId = locationData.id || 0;
  }

  // Calculate review count: ID + 1000
  const reviewCount = locationId + 1000;

  // Get location name
  let locationName = '';
  if (locationType === 'city') {
    locationName = locationData.city || locationData.name;
  } else if (locationType === 'state') {
    locationName = locationData.name || locationData.state;
  } else if (locationType === 'country') {
    locationName = locationData.name || locationData.country;
  }

  // Service name mapping
  const serviceNames = {
    'website-development': 'Website Development',
    'seo-service': 'SEO Services',
    'google-my-business-listing': 'Google My Business',
  };

  const serviceName = serviceNames[serviceType] || 'Digital Services';

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `Digital Solution 360`,
    "image": "https://www.digitalsolution360.com/logo.png",
    "description": `Digital Solution 360 offers professional ${serviceName.toLowerCase()} services in ${locationName}. Get world-class quality at affordable prices. Contact us at +919990556217 for custom solutions tailored to your business needs.`,
    "brand": {
      "@type": "Brand",
      "name": "Digital Solution 360"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.5",
      "reviewCount": reviewCount
    }
  };

  return (
    <Script
      id="location-structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
