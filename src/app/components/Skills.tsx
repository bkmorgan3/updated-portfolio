import { getContentForSkillsSection } from "../../../content/queries"

export default async function SkillsSection() {
    const data = await getContentForSkillsSection()
    const content = data.skillsSectionCollection.items[0]
    const skills = content.skillsCollection.items
   
    return (
        <section className="bg-gray-800 py-12 sm:py-20">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8 text-center">{content.skillsHeading}</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
					{skills.map((skill ) => (
						<div
							key={skill.listItemName}
							className="bg-gray-700 p-4 sm:p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow hover:shadow-gray-500 text-sm sm:text-base text-gray-200"
						>
							{skill.listItemName}
						</div>
					))}
				</div>
			</div>
		</section>
    )
}