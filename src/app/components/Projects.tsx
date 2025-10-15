import Image from 'next/image';
import { getContentForProjectsSection } from "../../../content/queries"


export default async function ProjectsSection() {
    const data = await getContentForProjectsSection()
    const content = data.projectSectionCollection.items[0]
    const projects = content.projectsCollection.items
    
    return (
        <section className="py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">{content.heading}</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
					{projects.map((project) => (
						<div key={project.title} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
							<div className="aspect-video bg-gray-700 relative">
								<Image src={`${project.image.url}`} alt={`Project ${project.title}`} fill className="object-cover" />
							</div>
							<div className="p-4 sm:p-6">
								<h3 className="text-base sm:text-lg font-semibold text-white mb-2"> {project.title}</h3>
								<p className="text-sm sm:text-base text-gray-300 mb-4">{project.description}</p>
								<div className="flex gap-2">
									<a href="#" className="text-blue-400 hover:text-blue-300 font-medium text-sm sm:text-base">
										View Project →
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
    )
}