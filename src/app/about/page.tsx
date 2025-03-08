'use client';

import { PageContainer } from '@/components/PageContainer';
import { SiteFooter } from '@/components/site-footer';
import { Brain, Target, Users, Rocket } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <PageContainer>
        <div className="py-16 md:py-24">
          {/* Mission Section */}
          <div className="mb-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-8">Our Mission</h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12">
                Helping businesses easily find and manage strategic partnerships with AI-powered tools.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#4A9EFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI-Powered Matching</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Using AI to identify the most compatible business partners.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#4A9EFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Strategic Alignment</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Ensuring partnerships align with your business goals and values.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#4A9EFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Warm Introduction</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Facilitating warm introduction through mutual connections.
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-[#4A9EFF] to-[#FF6B6B] rounded-lg flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Growth</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                  Accelerating business growth through strategic partnerships.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-24">
            <h2 className="text-3xl font-bold mb-8">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-zinc-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Jaein Seo</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">Co-Founder</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  With over 10 years of experience in BD and partnerships at companies like Google, Verizon, and Lemonade, Jaein brings a wealth of knowledge in fostering growth through meaningful, long-term relationships. A graduate of Harvard, Jaein lives in NYC.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-800/50 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-2">Tatsu Ikeda</h3>
                <p className="text-zinc-600 dark:text-zinc-400 mb-3">Co-Founder</p>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  As the technical mastermind behind Refership's intelligent algorithms, Tatsu drives the development of the cutting-edge intelligence and algorithms that power our platform. Tatsu graduated from Carnegie Mellon and lives in Boston.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageContainer>
      <SiteFooter />
    </>
  );
} 