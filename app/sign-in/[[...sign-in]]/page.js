"use client";
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <style jsx global>{`
        .cl-footerAction,
        .cl-footer__action,
        .cl-signIn-start .cl-footer,
        [data-localization-key="signIn.start.actionLink"],
        .cl-internal-b3fm6y {
          display: none !important;
        }
      `}</style>
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Portal</h1>
          <p className="text-gray-600">Sign in to access the admin dashboard</p>
        </div>
        <SignIn 
          appearance={{
            elements: {
              rootBox: "mx-auto",
              card: "shadow-xl",
              footer: { display: "none" }
            }
          }}
          routing="path"
          path="/sign-in"
          redirectUrl="/admin"
        />
      </div>
    </div>
  );
}
