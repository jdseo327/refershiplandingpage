# Refership Web Project TODO List

## High Priority Tasks

1. **EmailJS Integration**

   - Implement EmailJS for both hero and waitlist forms
   - Add proper error handling and success messages
   - Set up email templates in EmailJS dashboard
   - Add tracking for form submissions

2. **About Page**

   - Create `/about` page with company information
   - Add team section with photos and bios
   - Include mission statement and company values
   - Add contact information

3. **Blog Functionality with Headless CMS**

   - Select and integrate a headless CMS (options: Contentful, Sanity, Strapi)
   - Create blog post templates and components
   - Implement blog listing page
   - Add pagination and filtering
   - Set up categories and tags

4. **SEO Optimization**

   - Implement proper meta tags
   - Add Open Graph and Twitter card support
   - Create sitemap.xml
   - Implement structured data (JSON-LD)
   - Set up robots.txt
   - Optimize image loading and alt tags

5. **Mobile Responsive Testing**

   - Test `/about` page on various mobile devices
   - Test blog pages on various mobile devices
   - Fix any responsive issues identified

6. **Deployment**
   - Set up EC2 instance
   - Configure Nginx or Apache
   - Set up CI/CD pipeline
   - Configure SSL certificates
   - Implement monitoring and logging

## UI Bug Fixes

1. **Hero Form Mobile Button Width**

   - Fix UI bug where the button in the hero form doesn't display full width on mobile
   - Current issue: Despite having identical structure to the waitlist form, the button doesn't render the same
   - Possible causes: Parent container differences or CSS inheritance issues

2. **Hero Subtitle Line Breaks**
   - Improve line breaks on small screens
   - Current breaks:
     ```
     "What if finding strategic partners was"
     "as simple as"
     "knowing who already wants to work"
     "with you?"
     ```
   - Desired breaks:
     ```
     "What if finding strategic partners"
     "was as simple as knowing who already"
     "wants to work with you?"
     ```

## Future Enhancements

1. **User Authentication**

   - Implement sign up/login functionality
   - Add user profiles
   - Create dashboard for users

2. **Analytics Integration**

   - Set up Google Analytics or Plausible
   - Create custom events for important user actions
   - Set up conversion tracking

3. **Performance Optimization**

   - Implement code splitting
   - Optimize image loading with next/image
   - Add service worker for offline support
   - Improve Core Web Vitals metrics

4. **Accessibility Improvements**
   - Conduct WCAG compliance audit
   - Fix any accessibility issues
   - Add keyboard navigation support
   - Improve screen reader compatibility

## Documentation

1. **Code Documentation**

   - Continue adding JSDoc comments to components
   - Document key architectural decisions
   - Create API documentation

2. **User Documentation**
   - Create user guides
   - Add FAQ section
   - Create help center content
