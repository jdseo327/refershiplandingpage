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

// This would be imported when you integrate EmailJS
// import emailjs from '@emailjs/browser';

export default function Home() {
  // Add state to track theme
  const [isDark, setIsDark] = useState(false);

  // Form state for hero section
  const [heroName, setHeroName] = useState('');
  const [heroEmail, setHeroEmail] = useState('');
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [heroError, setHeroError] = useState('');

  // Form state for waitlist section
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSubmitting, setWaitlistSubmitting] = useState(false);
  const [waitlistError, setWaitlistError] = useState('');

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Handle hero form submission
  const handleHeroSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setHeroError('');

    // Validate fields
    if (!heroName.trim()) {
      setHeroError('Please enter your name');
      return;
    }

    if (!isValidEmail(heroEmail)) {
      setHeroError('Please enter a valid email address');
      return;
    }

    setHeroSubmitting(true);

    // Here you would integrate with EmailJS
    // Example EmailJS integration:
    /*
    emailjs.send(
      'YOUR_SERVICE_ID',
      'YOUR_TEMPLATE_ID',
      { 
        name: heroName, 
        email: heroEmail,
        source: 'Hero Section'
      },
      'YOUR_PUBLIC_KEY'
    )
    .then((result) => {
      setHeroSubmitting(false);
      setHeroName('');
      setHeroEmail('');
      alert('Thanks for joining our waitlist! We\'ll be in touch soon.');
    }, (error) => {
      setHeroSubmitting(false);
      setHeroError('Something went wrong. Please try again.');
      console.log(error.text);
    });
    */

    // Simulate submission for now
    setTimeout(() => {
      setHeroSubmitting(false);
      setHeroName('');
      setHeroEmail('');
      alert("Thanks for joining our waitlist! We'll be in touch soon.");
    }, 1000);
  };

  // Handle waitlist form submission
  const handleWaitlistSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWaitlistError('');

    // Validate fields
    if (!waitlistName.trim()) {
      setWaitlistError('Please enter your name');
      return;
    }

    if (!isValidEmail(waitlistEmail)) {
      setWaitlistError('Please enter a valid email address');
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
      alert('You\'ve been added to our waitlist! We\'ll notify you when we launch.');
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
      alert("You've been added to our waitlist! We'll notify you when we launch.");
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
      {/* Hero Section */}
      <div className="relative isolate bg-white dark:bg-transparent">
        {/* Animated background */}
        <HeroBackground />

        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-title-line1">Refership</span>
              <span className="hero-title-line2">Your AI Chief BD Officer</span>
            </h1>
            <p className="hero-subtitle dark:text-white text-zinc-900">
              What if finding strategic partners was as simple as knowing who already wants to work
              with you?
            </p>
            <form onSubmit={handleHeroSubmit} className="max-w-md mx-auto mb-8">
              <div className="flex flex-col gap-4 mb-4">
                <Input
                  type="text"
                  placeholder="Full Name"
                  value={heroName}
                  onChange={(e) => setHeroName(e.target.value)}
                  required
                  className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white"
                />
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Email Address"
                    value={heroEmail}
                    onChange={(e) => setHeroEmail(e.target.value)}
                    required
                    className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white w-full"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={heroSubmitting}
                    className="w-full sm:w-auto bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white px-8 py-6 text-lg"
                  >
                    {heroSubmitting ? 'Submitting...' : 'Join the waitlist'}
                    {!heroSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
                  </Button>
                </div>
              </div>
              {heroError && <p className="text-red-500 text-sm mt-2">{heroError}</p>}
            </form>
            <Button
              variant="outline"
              size="sm"
              className="mb-12 border-zinc-400 text-zinc-600 dark:text-zinc-400 dark:border-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800/20"
              onClick={() => scrollToSection('learn-more')}
            >
              Learn More
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>
            <p className="transform-text max-w-3xl mx-auto text-zinc-600 dark:text-zinc-300 text-center text-base sm:text-lg">
              Our AI matches you with companies that perfectly align with your vision and goals.
            </p>
          </div>
        </div>
      </div>

      {/* Why Refership Section */}
      <section id="learn-more" className="feature-section bg-gray-50 dark:bg-transparent">
        <div className="transform-content-wrapper">
          <div className="transform-heading-container">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Why Refership
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-12">
              Skip the cold outreach. We analyze communiques, market alignment, and technical fit to
              match you with partners who complement your strengths.
            </p>
          </div>
        </div>

        <div className="feature-cards-container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Card 1 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#4A9EFF] flex items-center justify-center">
                    <Cloud className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white">
                  Find the Right Partners
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400">
                  Get matched with companies that align on values, product fit, and business goals
                  instantly.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-coral group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#9181FF] flex items-center justify-center">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white">
                  Predict Partnership Success{' '}
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400">
                  Gain insights into upcoming trends and discover opportunities that help your
                  business grow.{' '}
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="feature-card-content">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="feature-card-title text-center text-zinc-900 dark:text-white">
                  Connect with Decision-Makers{' '}
                </h3>
                <p className="feature-card-text text-center text-zinc-600 dark:text-zinc-400">
                  Skip the cold emails. Leverage your network to get warm introductions to real
                  decision makers.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            size="lg"
            className="bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105"
            onClick={scrollToClosestWaitlist}
          >
            Get Early Access
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-white dark:bg-dark-gradient">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              How It Works
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg">
              Our streamlined process makes finding the right partners effortless
            </p>
          </div>

          {/* YouTube Video */}
          <div className="mx-auto max-w-3xl mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold">1</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                  Data Collection
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  When a company joins Refership, we collect publicly available data from sources
                  like the company website, LinkedIn, Crunchbase, and news articles.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold">2</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                  Cultural Analysis
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  Our AI analyzes the company&apos;s communication style, decision-making process,
                  and growth strategy to create a profile.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold">3</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                  AI Matchmaking
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  We compare company profiles and assign compatibility scores with potential
                  partners based on cultural, operational, and strategic alignment.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4A9EFF] dark:bg-[#FF6B6B]">
                  <span className="text-white font-bold">4</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-zinc-900 dark:text-white">
                  Connect & Grow
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300">
                  With permission, we scan your professional and social network to identify mutual
                  connections who can facilitate a warm introduction to the decision makers.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105"
              onClick={scrollToClosestWaitlist}
            >
              Find Your Partners Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Who Is Refership For Section */}
      <section className="py-24 bg-gray-50 dark:bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Who Is Refership For
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg">
              Our platform serves a variety of business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-coral group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Rocket className="h-12 w-12 text-[#FF6B6B] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white text-center">
                  Startup Founders
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-center">
                  Scale faster with strategic partners who can help you reach new markets and
                  customers.
                </p>
              </div>
            </div>
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Layers className="h-12 w-12 text-[#4A9EFF] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white text-center">
                  SaaS & Tech Companies
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-center">
                  Grow your ecosystem with integration or channel partners that complement your
                  offerings.{' '}
                </p>
              </div>
            </div>
            <div className="group feature-card bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800">
              <div className="feature-card-border" />
              <div className="feature-card-gradient feature-card-gradient-blue group-hover:opacity-100" />
              <div className="flex flex-col items-center feature-card-content">
                <Building className="h-12 w-12 text-[#6C63FF] mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-zinc-900 dark:text-white text-center">
                  Enterprise BD Teams
                </h3>
                <p className="text-zinc-600 dark:text-zinc-300 text-center">
                  Streamline partnership discovery & relationship management with AI-powered
                  insights.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button
              size="lg"
              className="bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white transition-all duration-300 transform hover:scale-105"
              onClick={scrollToClosestWaitlist}
            >
              Find Your Partners Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Join Waitlist Section */}
      <section id="join-waitlist" className="py-24 bg-white dark:bg-transparent relative isolate">
        <WaitlistBackground />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              Join Waitlist
            </h2>
            <p className="text-zinc-600 dark:text-zinc-300 text-lg mb-10">
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
                    placeholder="Email Address"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    required
                    className="h-12 bg-white dark:bg-zinc-900/70 border-zinc-300 dark:border-zinc-800 text-zinc-900 dark:text-white w-full"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    disabled={waitlistSubmitting}
                    className="w-full sm:w-auto bg-[#4A9EFF] dark:bg-[#FF6B6B] hover:bg-[#3A8EEF] dark:hover:bg-[#FF5252] text-white"
                  >
                    {waitlistSubmitting ? 'Submitting...' : 'Join the waitlist'}
                    {!waitlistSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
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
