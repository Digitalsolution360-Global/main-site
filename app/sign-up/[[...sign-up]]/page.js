import Link from 'next/link';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-xl p-8">
          <div className="text-center mb-6">
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Sign Up Disabled</h1>
            <p className="text-gray-600 mb-6">
              Public registration is not available. Admin accounts are created by authorized personnel only.
            </p>
            <p className="text-sm text-gray-500 mb-6">
              If you need admin access, please contact the system administrator.
            </p>
          </div>
          
          <div className="border-t pt-6">
            <p className="text-sm text-gray-600 text-center mb-4">
              Already have an account?
            </p>
            <Link 
              href="/sign-in"
              className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Sign In to Admin Panel
            </Link>
            <Link 
              href="/"
              className="block w-full px-4 py-3 bg-gray-100 text-gray-700 text-center rounded-lg hover:bg-gray-200 transition-colors font-medium mt-3"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
