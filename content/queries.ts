import { HeroQuery, SkillsQuery } from "../types";
import { contentGqlFetcher } from "./fetch";

export const getContentForSkillsSection = async () => {
    const query = `#graphql
        query SkillsSectionCollection {
            skillsSectionCollection {
                items {
                skillsHeading
                skillsCollection {
                    items {
                    listItemName
                    }
                }
            }
        }
    }
    `
    const data = await contentGqlFetcher<SkillsQuery>({ query })

    if (!data) {
        throw new Error('Problem getting Skills Data')
    }
    return data
}

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
    const data = await contentGqlFetcher<HeroQuery>({ query })

    if (!data) {
        throw new Error('There is not Hero Data')
    }
    return data
}