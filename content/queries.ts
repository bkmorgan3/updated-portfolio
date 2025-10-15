import { contentGqlFetcher } from "./fetch";

export const getContentForHero = async () => {
    const query = `#graphql
        query PortfolioHeroCollection {
            portfolioHeroCollection {
                items {
                profileName
                profileBlurb
                profileTitle
                profilePhoto {
                    url
                }
            }
        }
    }
    `
    const data = await contentGqlFetcher({ query })

    if (!data) {
        throw new Error('There is not Hero Data')
    }
    return data
}