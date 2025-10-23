import Image from 'next/image';
import { getContentForProjectsSection } from '../../../content/queries';

export default async function ProjectsSection() {
  const data = await getContentForProjectsSection();
  const content = data.projectSectionCollection.items[0];
  const projects = content.projectsCollection.items;

  return (
    <section className='py-12 sm:py-20'>
      <div className='mx-auto max-w-4xl px-4 sm:px-6 lg:px-8'>
        <h2 className='mb-6 text-center text-xl font-bold text-white sm:mb-8 sm:text-2xl'>
          {content.heading}
        </h2>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8'>
          {projects.map((project) => (
            <div
              key={project.title}
              className='overflow-hidden rounded-lg bg-gray-800 shadow-md transition-shadow hover:shadow-lg'
            >
              <div className='relative aspect-video bg-gray-700'>
                <Image
                  src={`${project.image.url}`}
                  alt={`Project ${project.title}`}
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-4 sm:p-6'>
                <h3 className='mb-2 text-base font-semibold text-white sm:text-lg'>
                  {' '}
                  {project.title}
                </h3>
                <p className='mb-4 text-sm text-gray-300 sm:text-base'>
                  {project.description}
                </p>
                <div className='flex gap-2'>
                  <a
                    target='_blank'
                    href={`${project.link}`}
                    className='text-sm font-medium text-blue-400 hover:text-blue-300 sm:text-base'
                  >
                    View Project →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
