'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import TipTapEditor from '@/components/TipTapEditor';

export default function AdminCities() {
  const { user } = useUser();
  const router = useRouter();
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [editingCity, setEditingCity] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  // Add city variables
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalCities, setTotalCities] = useState(0);
  const [totalCount, settotalCount] = useState(0);

  const [searchTerm, setSearchTerm] = useState('');
  // Add state variables
const [showFAQModal, setShowFAQModal] = useState(false);
const [faqs, setFaqs] = useState([]);
const [loadingFAQs, setLoadingFAQs] = useState(false);
const [editingFAQ, setEditingFAQ] = useState(null);
const [faqFormData, setFaqFormData] = useState({
  city_id: '',
  question: '',
  answer: '',
  serial_no: 0
});

// Fetch FAQs for a city
const fetchFAQs = async (cityId) => {
  setLoadingFAQs(true);
  try {
    const res = await fetch(`/api/city-faqs?city_id=${cityId}`);
    const data = await res.json();
    setFaqs(data.data || []);
  } catch (error) {
    console.error('Error fetching FAQs:', error);
  } finally {
    setLoadingFAQs(false);
  }
};

// Open FAQ Modal
const openFAQModal = (city) => {
  setEditingCity(city);
  setFaqFormData({
    city_id: String(city.city_id),
    question: '',
    answer: '',
    serial_no: 0
  });
  fetchFAQs(city.city_id);
  setShowFAQModal(true);
};

// Close FAQ Modal
const closeFAQModal = () => {
  setShowFAQModal(false);
  setEditingFAQ(null);
  setFaqs([]);
  setFaqFormData({
    city_id: '',
    question: '',
    answer: '',
    serial_no: 0
  });
};

// Handle FAQ Form Input Change
const handleFAQInputChange = (e) => {
  const { name, value } = e.target;
  setFaqFormData(prev => ({
    ...prev,
    [name]: name === 'serial_no' ? parseInt(value) || 0 : value
  }));
};

// Submit FAQ
const handleFAQSubmit = async (e) => {
  e.preventDefault();
  try {
    const url = editingFAQ 
      ? `/api/city-faqs/${editingFAQ.id}`
      : '/api/city-faqs';
    
    const method = editingFAQ ? 'PUT' : 'POST';

    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(faqFormData)
    });

    if (res.ok) {
      alert(editingFAQ ? 'FAQ updated successfully!' : 'FAQ added successfully!');
      setEditingFAQ(null);
      setFaqFormData({
        city_id: faqFormData.city_id,
        question: '',
        answer: '',
        serial_no: 0
      });
      fetchFAQs(parseInt(faqFormData.city_id));
    } else {
      const error = await res.json();
      alert('Error: ' + (error.error || 'Something went wrong'));
    }
  } catch (error) {
    console.error('Error saving FAQ:', error);
    alert('Failed to save FAQ');
  }
};

// Edit FAQ
const openEditFAQ = (faq) => {
  setEditingFAQ(faq);
  setFaqFormData({
    city_id: String(faq.city_id),
    question: faq.question,
    answer: faq.answer,
    serial_no: faq.serial_no || 0
  });
};

// Delete FAQ
const handleDeleteFAQ = async (id) => {
  if (!confirm('Are you sure you want to delete this FAQ?')) return;

  try {
    const res = await fetch(`/api/city-faqs?id=${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      alert('FAQ deleted successfully!');
      fetchFAQs(parseInt(faqFormData.city_id));
    } else {
      alert('Failed to delete FAQ');
    }
  } catch (error) {
    console.error('Error deleting FAQ:', error);
    alert('Failed to delete FAQ');
  }
};

  const [formData, setFormData] = useState({
    country_id: '',
    state_id: '',
    city: '',
    category_name: '',
    slug: '',
    h1_title: '',
    description: '',
    image: '',
    meta_title: '',
    meta_description: '',
    meta_keyword: '',
    status: 1
  });

  // Fetch countries
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await fetch("/api/countries");
        const data = await res.json();
        setCountries(data.data || []);
      } catch (error) {
        console.error("Error fetching countries:", error);
      }
    };
    fetchCountries();
  }, []);

  // Fetch states based on selected country
  useEffect(() => {
    const fetchStates = async () => {
      if (!formData.country_id) {
        setStates([]);
        return;
      }
      try {
        const res = await fetch(`/api/states?country_id=${formData.country_id}`);
        const data = await res.json();
        setStates(data.data || []);
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };
    fetchStates();
  }, [formData.country_id]);

  useEffect(() => {
    if (user?.username?.toLowerCase() === 'leads') {
      router.push('/admin/leads');
      return;
    }
    fetchCities(currentPage, searchTerm);
  }, [user, currentPage, searchTerm]);

  // Fetch cities
  const fetchCities = async (page = 1, search = '') => {
    try {
      const res = await fetch(`/api/cities?page=${page}&limit=10&search=${encodeURIComponent(search)}`);
      const data = await res.json();
      setCities(data.data || []);
      setTotalPages(Math.ceil(data.total / 10));
      setTotalCities(data.total);
      settotalCount(data.totalCities || 0);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Auto-generate slug from city name
    if (name === 'city' && !editingCity) {
      const slug = value
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = editingCity 
        ? `/api/cities/${editingCity.city_id}`
        : '/api/cities';
      
      const method = editingCity ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        alert(editingCity ? 'City updated successfully!' : 'City created successfully!');
        setShowModal(false);
        setEditingCity(null);
        resetForm();
        fetchCities();
      } else {
        const error = await res.json();
        alert('Error: ' + (error.error || 'Something went wrong'));
      }
    } catch (error) {
      console.error('Error saving city:', error);
      alert('Failed to save city');
    }
  };

  const handleEdit = (city) => {
    setEditingCity(city);
    setFormData({
      country_id: city.country_id || '',
      state_id: city.state_id || '',
      city: city.city || '',
      category_name: city.category_name || '',
      slug: city.slug || '',
      h1_title: city.h1_title || '',
      description: city.description || '',
      image: city.image || '',
      meta_title: city.meta_title || '',
      meta_description: city.meta_description || '',
      meta_keyword: city.meta_keyword || '',
      status: city.status ?? 1
    });
    setShowModal(true);
  };

  const handleDelete = async (city_id) => {
    if (!confirm('Are you sure you want to delete this city?')) return;

    try {
      const res = await fetch(`/api/cities?city_id=${city_id}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        alert('City deleted successfully!');
        fetchCities();
      } else {
        alert('Failed to delete city');
      }
    } catch (error) {
      console.error('Error deleting city:', error);
      alert('Failed to delete city');
    }
  };

  const resetForm = () => {
    setFormData({
      country_id: '',
      state_id: '',
      city: '',
      category_name: '',
      slug: '',
      h1_title: '',
      description: '',
      image: '',
      meta_title: '',
      meta_description: '',
      meta_keyword: '',
      status: 1
    });
  };

  const closeModal = () => {
    setShowModal(false);
    setEditingCity(null);
    resetForm();
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </Link>
              <h1 className="text-2xl font-bold text-gray-900">City Management</h1>
            </div>
            <UserButton afterSignOutUrl="/" />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-6">
  <p className="text-gray-600">
    Total Cities: <span className="font-semibold">{totalCount}</span>
  </p>
  
  <div className="flex items-center gap-3 w-full sm:w-auto">
    <div className="relative flex-1 sm:w-64">
      <input
        type="text"
        placeholder="Search cities..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
          setCurrentPage(1);
        }}
        className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <svg
        className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </div>
    {searchTerm && (
      <button
        onClick={() => {
          setSearchTerm('');
          setCurrentPage(1);
        }}
        className="text-gray-400 hover:text-gray-600"
      >
        ✕
      </button>
    )}
    <button
      onClick={() => setShowModal(true)}
      className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium whitespace-nowrap"
    >
      + Add New City
    </button>
  </div>
</div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading cities...</p>
          </div>
        ) : cities.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <p className="text-gray-500 text-lg">No cities found. Create your first city!</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      City
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      State
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {cities.map((city) => (
                    <tr key={city.city_id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {city.image && (
                            <img 
                              src={`/${city.image}`}
                              alt={city.city}
                              className="w-12 h-12 rounded object-cover"
                            />
                          )}
                          <div>
                            <p className="text-sm font-medium text-gray-900">{city.city}</p>
                            <p className="text-xs text-gray-500">{city.slug}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {city.state_name || '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {city.category_name || '—'}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          city.status === 1
                            ? 'bg-green-100 text-green-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          {city.status === 1 ? 'Active' : 'Inactive'}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {formatDate(city.created_at)}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(city)}
                          className="text-blue-600 hover:text-blue-900 mr-4"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => openFAQModal(city)}
                          className="text-emerald-600 hover:text-emerald-900 mr-2"
                          title="Manage FAQs"
                        >
                          FAQs
                        </button>
                        <button
                          onClick={() => handleDelete(city.city_id)}
                          className="text-red-600 hover:text-red-900"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mt-6">
          <p className="text-sm text-gray-600">
            Showing {(currentPage - 1) * 10 + 1} - {Math.min(currentPage * 10, totalCities)} of {totalCities} cities
          </p>
          <div className="flex gap-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Previous
            </button>
            <span className="px-4 py-2">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-900">
                {editingCity ? 'Edit City' : 'Add New City'}
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Country */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country *
                  </label>
                  <select
                    name="country_id"
                    value={formData.country_id || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country.id} value={country.id}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* State */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State *
                  </label>
                  <select
                    name="state_id"
                    value={formData.state_id || ''}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select State</option>
                    {states.map((state) => (
                      <option key={state.id} value={state.id}>
                        {state.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* City Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City Name *
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter city name"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    name="category_name"
                    value={formData.category_name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Category</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="Google My Business">Google My Business</option>
                    <option value="Seo">SEO</option>
                    <option value="Social Media">Social Media</option>
                    <option value="Web Development">Web Development</option>
                  </select>
                </div>

                {/* Slug */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Slug *
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="city-slug"
                  />
                </div>

                {/* H1 Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    H1 Title
                  </label>
                  <input
                    type="text"
                    name="h1_title"
                    value={formData.h1_title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="H1 title for page"
                  />
                </div>

                {/* Image Path */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Image Path
                  </label>
                  <input
                    type="text"
                    name="image"
                    value={formData.image}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="/images/city-img.jpg"
                  />
                </div>

                {/* Description */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Description
                  </label>
                 <TipTapEditor
                    value={formData.description}
                    onChange={(content) => setFormData(prev => ({ ...prev, description: content }))}
                  />
                </div>

                {/* SEO Section */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Title
                  </label>
                  <input
                    type="text"
                    name="meta_title"
                    value={formData.meta_title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="SEO meta title"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Description
                  </label>
                  <textarea
                    name="meta_description"
                    value={formData.meta_description}
                    onChange={handleInputChange}
                    rows="2"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="SEO meta description"
                  ></textarea>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meta Keywords
                  </label>
                  <input
                    type="text"
                    name="meta_keyword"
                    value={formData.meta_keyword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="keyword1, keyword2, keyword3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={formData.status === 1}
                      onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.checked ? 1 : 0 }))}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="text-sm font-medium text-gray-700">
                      Active (uncheck for inactive)
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t">
                <button
                  type="button"
                  onClick={closeModal}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
                >
                  {editingCity ? 'Update City' : 'Create City'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
      {/* FAQ Modal */}
{showFAQModal && editingCity && (
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
      <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-gray-900">Manage FAQs</h2>
          <p className="text-sm text-gray-500">For: {editingCity.city}</p>
        </div>
        <button
          onClick={closeFAQModal}
          className="text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
      </div>

      <div className="p-6">
        {/* FAQ Form */}
        <form onSubmit={handleFAQSubmit} className="mb-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            {editingFAQ ? 'Edit FAQ' : 'Add New FAQ'}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question *
              </label>
              <input
                type="text"
                name="question"
                value={faqFormData.question}
                onChange={handleFAQInputChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter FAQ question"
              />
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer *
              </label>
              <textarea
                name="answer"
                value={faqFormData.answer}
                onChange={handleFAQInputChange}
                required
                rows="3"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter FAQ answer"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Serial Number
              </label>
              <input
                type="number"
                name="serial_no"
                value={faqFormData.serial_no}
                onChange={handleFAQInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="0"
                min="0"
              />
            </div>

            <div className="flex items-end gap-3">
              <button
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {editingFAQ ? 'Update FAQ' : 'Add FAQ'}
              </button>
              {editingFAQ && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingFAQ(null);
                    setFaqFormData({
                      city_id: String(editingCity.city_id),
                      question: '',
                      answer: '',
                      serial_no: 0
                    });
                  }}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel Edit
                </button>
              )}
            </div>
          </div>
        </form>

        {/* FAQ List */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4">
            Existing FAQs ({faqs.length})
          </h3>
          
          {loadingFAQs ? (
            <div className="text-center py-8 text-gray-500">Loading FAQs...</div>
          ) : faqs.length === 0 ? (
            <div className="text-center py-8 text-gray-500">No FAQs added yet.</div>
          ) : (
            <div className="space-y-3">
              {faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs text-gray-500">
                          #{faq.serial_no || '0'}
                        </span>
                        <h4 className="font-semibold text-gray-900">
                          {faq.question}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600">{faq.answer}</p>
                    </div>
                    <div className="flex gap-2 flex-shrink-0">
                      <button
                        onClick={() => openEditFAQ(faq)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteFAQ(faq.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <polyline points="3 6 5 6 21 6" />
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="sticky bottom-0 bg-white border-t px-6 py-4 flex justify-end">
        <button
          onClick={closeFAQModal}
          className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
        >
          Close
        </button>
      </div>
    </div>
  </div>
)}
    </div>
  );
}