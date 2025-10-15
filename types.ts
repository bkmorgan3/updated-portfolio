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