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