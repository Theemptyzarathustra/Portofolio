'use client';

import { motion } from 'framer-motion';
import { ArrowDownIcon } from '@heroicons/react/24/outline';
import AsciiParticles from './components/AsciiParticles';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-primary text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-primary">
        <AsciiParticles />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-100 dark:from-secondary to-white dark:to-primary opacity-50" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient">
            Cloud Engineer
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Transforming ideas into scalable cloud solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ArrowDownIcon className="h-8 w-8 text-gray-400 animate-bounce" />
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-secondary transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 dark:text-gray-300 text-lg">
                I'm a passionate Cloud Engineer with expertise in designing and implementing scalable cloud solutions.
                My focus is on creating efficient, secure, and cost-effective cloud architectures that drive business growth.
              </p>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes', 'Docker', 'CI/CD', 'Python'].map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-accent/10 text-accent rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src="/images/profil.JPG"
                alt="Foto Profil"
                width={400}
                height={400}
                className="rounded-lg object-cover w-full h-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-4 bg-white dark:bg-primary transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Experience</h2>
          <div className="space-y-8">
            {[{
              role: 'Cloud Engineer',
              company: 'PT. Cloud Nusantara',
              period: '2022 - Sekarang',
              description: 'Mendesain, mengimplementasikan, dan mengelola solusi cloud untuk klien enterprise di berbagai industri. Fokus pada automasi, keamanan, dan efisiensi biaya.'
            }, {
              role: 'DevOps Engineer',
              company: 'PT. Digital Solusi',
              period: '2020 - 2022',
              description: 'Membangun pipeline CI/CD, mengelola infrastruktur berbasis cloud, dan melakukan monitoring serta troubleshooting aplikasi.'
            }].map((exp, idx) => (
              <div key={idx} className="bg-gray-100 dark:bg-secondary rounded-lg p-8 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{exp.role}</h3>
                  <p className="text-accent font-medium">{exp.company}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{exp.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-secondary transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-white">Education</h2>
          <div className="space-y-8">
            {[{
              degree: 'S1 Teknik Informatika',
              institution: 'Universitas Teknologi Indonesia',
              period: '2016 - 2020',
              description: 'Fokus pada cloud computing, jaringan komputer, dan pengembangan perangkat lunak.'
            }].map((edu, idx) => (
              <div key={idx} className="bg-white dark:bg-primary rounded-lg p-8 shadow-md flex flex-col md:flex-row md:items-center md:justify-between gap-4 transition-colors duration-300">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{edu.degree}</h3>
                  <p className="text-accent font-medium">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">{edu.period}</p>
                  <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 px-4 bg-white dark:bg-primary transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">Certifications</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {[{
              name: 'AWS Certified Solutions Architect',
              logo: '/images/aws.png',
              year: '2023'
            }, {
              name: 'Google Cloud Professional Architect',
              logo: '/images/gcp.png',
              year: '2022'
            }].map((cert, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <img src={cert.logo} alt={cert.name} className="h-16 w-16 mb-2" />
                <span className="font-mono text-base text-gray-900 dark:text-gray-200">{cert.name}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">{cert.year}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Achievements Section */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-secondary transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">Awards & Achievements</h2>
          <ul className="space-y-4 list-disc list-inside">
            <li className="text-gray-900 dark:text-gray-200">Juara 1 Hackathon Cloud Indonesia 2022</li>
            <li className="text-gray-900 dark:text-gray-200">Top 10 Finalist DevOps Challenge Asia 2021</li>
            <li className="text-gray-900 dark:text-gray-200">AWS Community Builder 2023</li>
          </ul>
        </div>
      </section>

      {/* Blog/Writing Section */}
      <section className="py-20 px-4 bg-white dark:bg-primary transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">Blog & Writing</h2>
          <div className="space-y-6">
            {[{
              title: 'Optimizing Cloud Cost with Terraform',
              platform: 'Medium',
              url: '#',
              date: 'Jan 2024'
            }, {
              title: 'CI/CD Best Practices for Cloud Engineers',
              platform: 'Dev.to',
              url: '#',
              date: 'Dec 2023'
            }].map((post, idx) => (
              <a key={idx} href={post.url} target="_blank" rel="noopener noreferrer" className="block p-4 rounded transition hover:bg-accent/10 dark:hover:bg-accent/20">
                <div className="flex justify-between items-center">
                  <span className="font-mono text-lg text-gray-900 dark:text-gray-200">{post.title}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.platform} • {post.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Form) */}
      <section className="py-20 px-4 bg-gray-100 dark:bg-secondary transition-colors duration-300">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-accent">Contact</h2>
          <form className="space-y-6" onSubmit={e => {e.preventDefault(); alert('Pesan terkirim! (dummy)')}}>
            <input type="text" placeholder="Nama" className="w-full p-3 rounded bg-white dark:bg-primary text-gray-900 dark:text-white border border-accent/30 focus:outline-none focus:border-accent transition-colors duration-300" required />
            <input type="email" placeholder="Email" className="w-full p-3 rounded bg-white dark:bg-primary text-gray-900 dark:text-white border border-accent/30 focus:outline-none focus:border-accent transition-colors duration-300" required />
            <textarea placeholder="Pesan" className="w-full p-3 rounded bg-white dark:bg-primary text-gray-900 dark:text-white border border-accent/30 focus:outline-none focus:border-accent transition-colors duration-300" rows={4} required />
            <button type="submit" className="w-full py-3 rounded bg-accent text-white font-bold transition hover:scale-105">Kirim Pesan</button>
          </form>
        </div>
      </section>

      {/* Footer Minimalis */}
      <footer className="py-8 bg-white dark:bg-primary border-t border-accent/10 text-center text-gray-500 dark:text-gray-400 text-sm flex flex-col items-center gap-2 transition-colors duration-300">
        <div className="flex gap-4 justify-center mb-2">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z"/></svg></a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.084-.729.084-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.553 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576 4.765-1.588 8.199-6.084 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg></a>
          <a href="mailto:email@domain.com" className="hover:text-accent transition"><svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12.713l-11.985-8.713h23.97l-11.985 8.713zm-12-7.568v13.855l8.276-6.362-8.276-7.493zm13.803 6.493l8.197 6.362v-13.855l-8.197 7.493zm-1.803 1.212l-11.803 9.087h23.606l-11.803-9.087z"/></svg></a>
        </div>
        <div>
          Copyright © Nama Anda {new Date().getFullYear()}
        </div>
      </footer>

      {/* Projects Section */}
      <section className="py-20 px-4 bg-primary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <motion.div
                key={project}
                whileHover={{ y: -10 }}
                className="bg-secondary rounded-lg overflow-hidden"
              >
                <div className="h-48 bg-accent/10" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Project {project}</h3>
                  <p className="text-gray-400">
                    A cloud infrastructure project showcasing best practices in scalability and security.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Let's Connect</h2>
          <p className="text-gray-300 text-lg mb-8">
            Interested in working together? Feel free to reach out!
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-white rounded-full text-lg font-semibold"
          >
            Get in Touch
          </motion.button>
        </div>
      </section>
    </main>
  );
} 