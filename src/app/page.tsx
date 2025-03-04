'use client';

import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Building2,
  Rocket,
  Network,
  Users,
  Brain,
  Cloud,
  Target,
  CheckCircle,
  Layers,
  Building,
} from 'lucide-react';
import Link from 'next/link';
import { PageContainer } from '@/components/PageContainer';
import HeroBackground from '@/components/HeroBackground';
import WaitlistBackground from '@/components/WaitlistBackground';
import { SiteFooter } from '@/components/site-footer';
import { useState, useEffect } from 'react';
import Head from 'next/head';

// This would be imported when you integrate EmailJS
// import emailjs from '@emailjs/browser';

/**
 * Home page component for the Refership application.
 * Contains hero section, features, benefits, and waitlist signup forms.
 *
 * @returns {JSX.Element} The complete home page
 */
export default function Home() {
  // Add state to track theme
  const [isDark, setIsDark] = useState(false);

  // Form state for waitlist (used by both hero and waitlist sections)
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  /**
   * Validates if a string is in email format.
   *
   * @param {string} email - The email string to validate
   * @returns {boolean} True if the email format is valid, false otherwise
   */
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  /**
   * Handles form submission for both hero and waitlist sections.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistError('');

    // Validate fields
    if (!waitlistName.trim()) {
      setWaitlistError('Please enter your name');
      return;
    }

    if (!isValidEmail(waitlistEmail)) {
      setWaitlistError('Please enter a valid work email');
      return;
    }

    setWaitlistSubmitting(true);

    // Here you would integrate with EmailJS
    // Example EmailJS integration:
    /*
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { 
        name: waitlistName, 
        email: waitlistEmail,
        source: 'Waitlist Section'
      },
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      setWaitlistSubmitting(false);
      setWaitlistName('');
      setWaitlistEmail('');
      alert('Thanks for joining our waitlist! We\'ll be in touch soon.');
    }, (error) => {
      setWaitlistSubmitting(false);
      setWaitlistError('Something went wrong. Please try again.');
      console.log(error.text);
    });
    */

    // Simulate submission for now
    setTimeout(() => {
      setWaitlistSubmitting(false);
      setWaitlistName('');
      setWaitlistEmail('');
      alert("Thanks for joining our waitlist! We'll be in touch soon.");
    }, 1000);
  };

  // Check if dark mode is enabled
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const isDarkMode = document.documentElement.classList.contains('dark');
          setIsDark(isDarkMode);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  // Function to determine which section to scroll to
  const scrollToClosestWaitlist = () => {
    const heroSection = document.querySelector('.hero-container');
    const waitlistSection = document.getElementById('join-waitlist');

    if (!heroSection || !waitlistSection) return;

    const heroRect = heroSection.getBoundingClientRect();
    const waitlistRect = waitlistSection.getBoundingClientRect();

    const heroDistance = Math.abs(heroRect.top);
    const waitlistDistance = Math.abs(waitlistRect.top);

    if (heroDistance <= waitlistDistance) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      scrollToSection('join-waitlist');
    }
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageContainer>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Hero Section */}
      <div className="relative isolate bg-white dark:bg-transparent px-4 sm:px-6">
        {/* Animated background */}
        <HeroBackground />

        <div className="hero-container py-12 sm:py-16 md:py-20">
          <div className="hero-content">
            <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 sm:mb-8">
              <span className="hero-title-line1 block">Refership</span>
              <span className="hero-title-line2 block mt-2">Your AI Chief BD Officer</span>
            </h1>
            <div className="hero-subtitle-container mx-auto max-w-3xl px-4 py-3 mb-8 sm:mb-10 text-center bg-gray-50/50 dark:bg-transparent backdrop-blur-sm rounded-lg">
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed inline">
                What if <span className="gradient-text font-bold">finding strategic partners</span>{' '}
                was as simple as
              </p>
              <br className="md:hidden" />
              <p className="hero-subtitle text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed inline md:ml-2">
                knowing who already{' '}
                <span className="gradient-text font-bold">wants to work with you</span>?
              </p>
            </div>
            {/* 
              TODO: Fix UI bug - The button in this form doesn't display full width on mobile 
              despite having identical structure to the waitlist form below.
              Possible causes: parent container differences or CSS inheritance issues.
              
              Note: This form now uses the same handler and state variables as the waitlist form below.
            */}
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={waitlistName}
                  onChange={(e) => setWaitlistName(e.target.value)}
                  required
                  className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Work Email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white w-full"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={waitlistSubmitting}
                    className="w-full sm:w-auto bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                  >
                    {waitlistSubmitting ? 'Submitting...' : 'Join the waitlist'}
                    {!waitlistSubmitting && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                  </Button>
                </div>
              </div>
              {waitlistError && <p className="text-red-500 text-sm mt-2">{waitlistError}</p>}
            </form>
            <Button
              variant="outline"
              size="sm"
              className="mb-8 sm:mb-12 border-zinc-400 text-zinc-600 dark:text-zinc-400 dark:border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/20"
              onClick={() => scrollToSection('learn-more')}
            >
              Learn More
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <p className="transform-text max-w-3xl mx-auto text-zinc-600 dark:text-zinc-300 text-sm sm:text-base md:text-lg px-4">
              Our AI matches you with companies that perfectly align with your vision and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Refership Section */}
      <section
        id="learn-more"
        className="feature-section bg-gray-50 dark:bg-transparent px-4 sm:px-6 py-16 sm:py-20"
      >
        <div className="transform-content-wrapper">
          <div className="transform-heading-container">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6 text-center">
              Why Refership
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg mb-8 sm:mb-12 max-w-3xl mx-auto text-center">
              Skip the cold outreach. We analyze communiques, market alignment, and technical fit to
              match you with partners who complement your strengths.
            </p>
          </div>
        </div>

        <div className="feature-cards-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#4A9EFF] flex items-center justify-center">
                    <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white text-lg sm:text-xl mb-2 sm:mb-3">
                  Find the Right Partners
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                  Get matched with companies that align on values, product fit, and business goals
                  instantly.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-coral group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#9181FF] flex items-center justify-center">
                    <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white text-lg sm:text-xl mb-2 sm:mb-3">
                  Predict Partnership Success{' '}
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                  Gain insights into upcoming trends and discover opportunities that help your
                  business grow.{' '}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                    <Users className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white text-lg sm:text-xl mb-2 sm:mb-3">
                  Connect with Decision-Makers{' '}
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400 text-sm sm:text-base">
                  Skip the cold emails. Leverage your network to get warm introductions to real
                  decision makers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8 sm:mt-12">
          <Button
            size="lg"
            className="bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
            onClick={scrollToClosestWaitlist}
          >
            Get Early Access
            <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-white dark:bg-dark-gradient">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
              How It Works
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg">
              Our streamlined process makes finding the right partners effortless
            </p>
          </div>

          {/* YouTube Video */}
          <div className="mx-auto max-w-3xl mb-10 sm:mb-16">
            <div
              className="relative w-full rounded-xl overflow-hidden shadow-lg"
              style={{ paddingBottom: '56.25%' }}
            >
              <iframe
                src="https://www.youtube.com/embed/7RWo6qH2Gjg"
                title="Refership: How It Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute top-0 left-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 max-w-4xl mx-auto">
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold text-sm sm:text-base">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-zinc-900 dark:text-white">
                  Data Collection
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  When a company joins Refership, we collect publicly available data from sources
                  like the company website, LinkedIn, Crunchbase, and news articles.
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold text-sm sm:text-base">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-zinc-900 dark:text-white">
                  Cultural Analysis
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  Our AI analyzes the company&apos;s communication style, decision-making process,
                  and growth strategy to create a profile.
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold text-sm sm:text-base">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-zinc-900 dark:text-white">
                  AI Matchmaking
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  We compare company profiles and assign compatibility scores with potential
                  partners based on cultural, operational, and strategic alignment.
                </p>
              </div>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold text-sm sm:text-base">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-1 sm:mb-2 text-zinc-900 dark:text-white">
                  Connect & Grow
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300">
                  With permission, we scan your professional and social network to identify mutual
                  connections who can facilitate a warm introduction to the decision makers.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 sm:mt-16 text-center">
            <Button
              size="lg"
              className="bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base"
              onClick={scrollToClosestWaitlist}
            >
              Find Your Partners Now
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who Is Refership For Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gray-50 dark:bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
              Who Is Refership For
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg">
              Our platform serves a variety of business needs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-coral group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Rocket className="h-10 w-10 sm:h-12 sm:w-12 text-[#FF6B6B] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-900 dark:text-white text-center">
                  Startup Founders
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 text-center">
                  Scale faster with strategic partners who can help you reach new markets and
                  customers.
                </p>
              </div>
            </div>
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Layers className="h-10 w-10 sm:h-12 sm:w-12 text-[#4A9EFF] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-900 dark:text-white text-center">
                  SaaS & Tech Companies
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 text-center">
                  Grow your ecosystem with integration or channel partners that complement your
                  offerings.{' '}
                </p>
              </div>
            </div>
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 p-4 sm:p-6">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Building className="h-10 w-10 sm:h-12 sm:w-12 text-[#6C63FF] mb-3 sm:mb-4" />
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-zinc-900 dark:text-white text-center">
                  Enterprise BD Teams
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 text-center">
                  Streamline partnership discovery & relationship management with AI-powered
                  insights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section
        id="join-waitlist"
        className="py-16 sm:py-20 md:py-24 bg-white dark:bg-transparent relative isolate"
      >
        <WaitlistBackground />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4 sm:mb-6">
              Join Waitlist
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-base sm:text-lg mb-6 sm:mb-10">
              Be the first to access our AI-powered matchmaking platform
            </p>
            <form onSubmit={handleWaitlistSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col gap-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={waitlistName}
                  onChange={(e) => setWaitlistName(e.target.value)}
                  required
                  className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Work Email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white w-full"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={waitlistSubmitting}
                    className="w-full sm:w-auto bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg"
                  >
                    {waitlistSubmitting ? 'Submitting...' : 'Join the waitlist'}
                    {!waitlistSubmitting && <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />}
                  </Button>
                </div>
              </div>
              {waitlistError && <p className="text-red-500 text-sm mt-2">{waitlistError}</p>}
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <SiteFooter />
    </PageContainer>
  );
}
