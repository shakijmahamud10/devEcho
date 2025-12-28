import React from 'react';
import { ArrowRight, Lightbulb, ChevronRight, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ServiceCard } from '../components/ServiceCard';
import { ProjectCard } from '../components/ProjectCard';
import { TestimonialCard } from '../components/TestimonialCard';
import { services, projects, processSteps, industries, testimonials, competitiveAdvantages, teamStats, stats } from '../data/homeData';
import mainLogo from '../assets/main-logo.png';


const Home: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary-200 selection:text-secondary-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white dark:bg-secondary-900">

        {/* Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-0 w-72 h-72 bg-secondary-100/40 dark:bg-gray-800/30 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white dark:bg-gray-800 border border-secondary-100 dark:border-gray-700 text-secondary-700 dark:text-gray-300 mb-8 animate-fade-in shadow-sm hover:shadow-md transition-all cursor-default relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              <span className="relative flex h-2.5 w-2.5 mr-1">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
              </span>
              <span className="font-medium text-sm tracking-wide">Now Accepting New Projects for Q1 2026</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-secondary-900 dark:text-white leading-[1.1]">
              We build digital products <br className="hidden md:block" /> that <span className="devecho-gradient-text">drive real impact.</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Full-cycle software agency transforming ambitious ideas into exceptional digital experiences. From rapid prototyping to enterprise-scale deployment.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
              <Link to="/estimator" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-xl transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 group">
                Estimate Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#work" className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-lg font-medium bg-gradient-to-r from-secondary-900 to-secondary-800 rounded-xl transition-all shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5 group">
                View Our Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Clients */}
      <section className="py-12 border-y border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-200/50 dark:divide-gray-700/50">
            {stats.map((stat, idx) => (
              <div key={idx} className="px-4">
                <div className="text-3xl md:text-4xl font-extrabold text-secondary-900 dark:text-white mb-1 tracking-tight">{stat.value}</div>
                <div className="text-xs md:text-sm text-gray-500 font-semibold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white dark:bg-secondary-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-primary-600 dark:text-primary-500 font-bold tracking-widest uppercase mb-4 text-sm">Our Expertise</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-secondary-900 dark:text-white tracking-tight">Comprehensive Engineering</h3>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="work" className="py-24 bg-white dark:bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">Selected Work</h2>
              <h3 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">We build things that matter</h3>
            </div>
            <a href="#" className="hidden md:flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mt-4 md:mt-0">
              View all projects <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <a href="#" className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              View all projects <ChevronRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* How We Work - Process Section */}
      <section className="py-10 lg:py-24 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8 items-start">
            {/* Left Column */}
            <div className="md:col-span-2 md:sticky md:top-20">
              <div className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">How We Work</div>
              <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white mb-6 leading-tight">
                From concept to code, we've got you covered.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our agile methodology ensures transparency, rapid delivery, and a final product that exceeds expectations.
              </p>
              <Link to="/estimator" className="inline-flex items-center text-primary-600 dark:text-primary-500 font-semibold hover:text-primary-700 dark:hover:text-primary-400 transition-colors">
                Start your journey <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            {/* Right Column - Process Steps */}
            <div className="md:col-span-3 space-y-8">
              {processSteps.map((item, idx) => (
                <div key={idx} className="flex gap-6 relative">
                  {/* Connector Line */}
                  {idx < 3 && (
                    <div className="absolute left-4 top-20 w-0.5 h-20 bg-gradient-to-b from-primary-600 to-primary-400 opacity-30"></div>
                  )}

                  {/* Icon Circle */}
                  <div className="flex-shrink-0 relative z-10">
                    <div className="w-10 h-10 p-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border-2 border-black/20 flex items-center justify-center text-primary-600 dark:text-primary-400">
                      {item.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="text-primary-600 dark:text-primary-500 font-bold text-sm mb-1">STEP {item.step}</div>
                    <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-24 bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">Industries</div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">Serving businesses across sectors</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{industry.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200">{industry.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-900 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-24 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">Success Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">Loved by clients worldwide</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <TestimonialCard key={idx} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-secondary-50 dark:bg-secondary-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">Competitive Advantage</div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">Why companies choose devEcho</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {competitiveAdvantages.map((item, idx) => (
              <div key={idx} className="glass-panel p-8 rounded-2xl border border-gray-100 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-transparent dark:from-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-10">
                  <div className="w-14 h-14 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:shadow-md group-hover:scale-110 transition-all duration-300 border border-secondary-100 dark:border-gray-700">
                    <div className="text-secondary-900 dark:text-primary-400 group-hover:text-primary-600 transition-colors">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-700 dark:group-hover:text-primary-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm group-hover:text-gray-700 dark:group-hover:text-gray-200">{item.desc}</p>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-secondary-900 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team & Culture */}
      <section className="py-24 bg-white dark:bg-secondary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-primary-600 dark:text-primary-500 font-semibold tracking-wide uppercase mb-3">Our Team</div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 dark:text-white">Meet the experts behind your success</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {teamStats.map((team, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-primary-600 dark:text-primary-500 mb-2">{team.count}</div>
                <h3 className="text-xl font-bold text-secondary-900 dark:text-white mb-2">{team.role}</h3>
                <p className="text-gray-600 dark:text-gray-400">{team.expertise}</p>
              </div>
            ))}
          </div>
          <div className="bg-secondary-50 dark:bg-gray-800 p-12 rounded-2xl border border-gray-200 dark:border-gray-700 text-center">
            <Lightbulb className="w-12 h-12 text-primary-600 dark:text-primary-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 dark:text-white mb-3">Our Culture</h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              We believe in continuous learning, collaboration, and delivering exceptional value. Our team is passionate about technology and solving real-world problems.
            </p>
          </div>
        </div>
      </section>

      {/* CTA / Contact Teaser */}
      <section className="py-24  dark:bg-secondary-900 border-y border-primary-100 dark:border-gray-700">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-8">Ready to start your next project?</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Not sure where to begin? Use our AI-powered estimation tool to get a preliminary breakdown of your project scope and timeline in seconds.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/estimator" className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-lg transition-all shadow-lg shadow-primary-500/30">
              <Rocket className="w-5 h-5 mr-2" />
              Use AI Estimator
            </Link>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800/50 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-700 hover:devecho-gradient-border shadow-sm dark:shadow-none">
              Contact
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;