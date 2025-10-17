import {
  getContentForContactSection,
  getLogoContent,
} from '../../../content/queries';
import Image from 'next/image';

export default async function ContactSection() {
  const data = await getContentForContactSection();
  const content = data.contactSectiionCollection.items[0];
  const contacts = content.callToActionsCollection.items;
  const logos = await getLogoContent();
  const icons = logos.assetCollection.items;

  return (
    <section className='border-t border-gray-800 px-4 py-16'>
      <div className='mx-auto max-w-2xl space-y-6 text-center'>
        <h2 className='text-2xl font-semibold text-white'>{content.title}</h2>
        <p className='text-gray-300'>{content.subheading}</p>

        {/* Location */}
        <div className='flex items-center justify-center gap-2 text-gray-300'>
          <svg
            className='h-5 w-5'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <span>{content.location}</span>
        </div>

        {/* Contact Buttons */}
        <div className='flex flex-col justify-center gap-4 sm:flex-row'>
          <a
            href='mailto:david@example.com'
            className='inline-flex items-center justify-center gap-2 rounded bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-700'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z' />
              <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z' />
            </svg>
            {contacts[0].label}
          </a>
          <a
            href='/resume.pdf'
            target='_blank'
            className='inline-flex items-center justify-center gap-2 rounded border border-gray-600 px-6 py-2 font-medium text-gray-300 transition-colors hover:bg-gray-800'
          >
            <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20'>
              <path
                fillRule='evenodd'
                d='M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z'
                clipRule='evenodd'
              />
              <path
                fillRule='evenodd'
                d='M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z'
                clipRule='evenodd'
              />
            </svg>
            {contacts[1].label}
          </a>
        </div>

        {/* Social Links */}
        <div className='flex justify-center gap-6'>
          {icons.map((logo) => (
            <a
              key={logo.title}
              href={`${logo.description}`}
              target='_blank'
              className='text-gray-400 transition-colors hover:text-white'
            >
              <Image
                src={`${logo.url}`}
                alt={`${logo.title}`}
                width={50}
                height={50}
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
