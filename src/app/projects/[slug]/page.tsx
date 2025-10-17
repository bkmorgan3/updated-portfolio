import { getContentForProjectPage } from '../../../../content/queries';

type PageProps = {
  params: { slug: string };
};

export default async function SingleProject({ params }: PageProps) {
  const { slug } = await params;
  const data = await getContentForProjectPage(slug);
  console.log(data);

  return (
    <main className='min-h-screen bg-gray-900 pt-12'>Single Project Page</main>
  );
}
