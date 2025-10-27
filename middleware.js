import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

const isProtectedRoute = createRouteMatcher([
  '/admin(.*)',
]);

const isLeadsOnlyRoute = createRouteMatcher([
  '/admin/leads(.*)',
]);

const isRestrictedForLeadsUser = createRouteMatcher([
  '/admin',
  '/admin/contacts(.*)',
  '/admin/careers(.*)',
  '/admin/blogs(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
    
    // Get the current user
    const { userId } = await auth();
    if (userId) {
      const { user } = await auth();
      const username = user?.username?.toLowerCase();
      
      // Check if user is "leads" user
      if (username === 'leads') {
        // If leads user tries to access restricted routes, redirect to leads page
        if (isRestrictedForLeadsUser(req)) {
          return Response.redirect(new URL('/admin/leads', req.url));
        }
      }
    }
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
