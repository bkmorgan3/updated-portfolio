export type HeroQuery = {
        portfolioHeroCollection: {
            items: {
            profileName: string
            profileBlurb: string
            profileTitle: string
            profilePhoto: {
                url: string
            }
        }[]
    }
}

export type SkillsQuery = {
    skillsSectionCollection: {
        items: {
            skillsHeading: string
            skillsCollection: {
            items: {
                listItemName: string
            }[]
            }
        }[]
    }
}

export type ProjectsQuery = {
    projectSectionCollection: {
                items: {
                heading: string
                projectsCollection: {
                    items: {
                        title: string
                        description: string
                        link: string
                        image: {
                            url: string
                        }
                    }[]
                  }
                }[]
            }
}