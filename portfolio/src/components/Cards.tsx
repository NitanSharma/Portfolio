'use client';
import { ProjectProps } from '@/lib/types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { IoLogoGithub, IoLogoLinkedin } from 'react-icons/io5';

// Data Array for Projects
const projectData: ProjectProps[] = [
  {
    title: 'Ticket Management System',
    tech: 'Next.js · Prisma · Sentry · TypeScript',
    description:
      'QuickTicket is a learning project built with Next.js, Prisma, and TypeScript to implement a custom authentication system and enhance backend reliability. It integrates Sentry for real-time error monitoring and bug tracking across the application.',
    image: '/quickticket.png',
    url: 'https://quick-ticket-phi.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-cse/',
    github: 'https://github.com/NitanSharma/Quick-ticket',
  },
  {
    title: 'Chat Ai Bot',
    tech: 'Nodejs · Stream Chat · TypeScript · NeonDB ',
    description:
      'Developed an intelligent Chat AI Bot using Node.js, Stream Chat, TypeScript, NeonDB, and Vue.js for seamless real-time conversational experiences.',
    image: '/chatai.png',
    url: 'https://chat-ai-ui-nine.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-cse/',
    github: 'https://github.com/NitanSharma/chat-ai-api',
  },
  {
    title: 'S.S Solar',
    tech: 'Nodejs · MongoDB · EJS · JavaScript',
    description:
      'Built a responsive solar installation company website with Node.js, MongoDB, EJS, and JavaScript, featuring service details, contact forms, and an admin dashboard for managing client leads.',
    image: '/sssolar.png',
    url: 'https://www.sssolar.in/',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-cse/',
    github: 'https://github.com/NitanSharma/ShriShyamSolar/',
  },
  {
    title: 'URL Shortener',
    tech: 'React.js · Node.js · MongoDB · Express',
    description:
      'Developed a full-stack URL Shortener using React.js, Node.js, Express, and MongoDB, allowing users to create, manage, and track shortened links with a clean, responsive interface.',
    image: '/url-shortner.png',
    url: 'https://url-shortner-ui-self.vercel.app/',
    linkedin: 'https://www.linkedin.com/in/nitin-sharma-cse/',
    github: 'https://github.com/NitanSharma/url-shortner-api',
  },
];

const Cards = ({
  title,
  tech,
  description,
  linkedin,
  url,
  image,
  github,
}: ProjectProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Slide in from left
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="p-4 w-full sm:w-[480px]"
    >
      <section className="container px-4 max-h-[600px] backdrop-blur-md rounded-md flex items-center justify-center overflow-hidden">
        <Image
          src={image}
          alt="title"
          width={1600}
          height={900}
          className="rounded-md object-cover transition-transform duration-500 ease-in-out hover:scale-105 w-full h-full"
        />
      </section>

      <div className="text-white font-bold text-2xl mt-4 flex items-center justify-between">
        <h1 className="md:text-nowrap lg:text-nowrap">{title}</h1>
        <div className="flex-1 mx-4 h-[1px] bg-white"></div>
        <div className="flex items-center gap-4">
          <Link
            href={linkedin}
            target="_blank"
            className="text-[#EBECF3] hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoLinkedin />
          </Link>
          <Link
            href={github}
            target="_blank"
            className="text-[#EBECF3] hover:text-[#0AFF9D] text-3xl"
          >
            <IoLogoGithub />
          </Link>
        </div>
      </div>
      <h1 className="font-semibold text-1xl text-[#0AFF9D] mt-2">{tech}</h1>
      <h5 className="text-white mt-4 font-semibold text-1xl">
        {description}{' '}
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center text-[#0AFF9D] underline-offset-4 transition-all duration-300 ease-in-out hover:text-[#06e4a3]"
        >
          Try it Out
          <span className="ml-1 inline-block transition-transform duration-300 transform group-hover:translate-x-1">
            →
          </span>
        </Link>
      </h5>
    </motion.div>
  );
};

const CardsContainer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projectData.map((project, index) => (
        <Cards key={index} {...project} />
      ))}
    </div>
  );
};

export default CardsContainer;
