// import 'server-only';
import {
  ContactQuery,
  HeroQuery,
  ProjectPageQuery,
  ProjectsQuery,
  SkillsQuery,
} from '../types';
import { contentGqlFetcher } from './fetch';

export const getContentForContactSection = async () => {
  const query = `#graphql 
        query ContactSectiionCollection {
            contactSectiionCollection {
                items {
                title
                location
                subheading
                callToActionsCollection {
                    items {
                    label
                    link
                    }
                }
            }
        }
    }
    `;
  const data = await contentGqlFetcher<ContactQuery>({ query });

  if (!data) {
    throw new Error('Trouble fetching Contact Section');
  }
  return data;
};

export const getContentForProjectPage = async (slug: string) => {
  const query = `#graphql
        query ProjectPageCollection($where: ProjectPageFilter) {
            projectPageCollection(where: $where) {
                items {
                    title
                    slug
                    project {
                        title
                        description
                        image {
                            url
                        }
                    }
                    body {
                        json
                    }
                }
            }
        }
    `;

  const data = await contentGqlFetcher<ProjectPageQuery>({
    query,
    variables: { where: { slug } },
  });

  if (!data) {
    throw new Error('Could not fetch Project Page content');
  }
  return data;
};

export const getContentForProjectsSection = async () => {
  const query = `#graphql 
        query ProjectSectionCollection {
            projectSectionCollection {
                items {
                heading
                projectsCollection {
                    items {
                        title
                         slug
                        description
                        link
                        image {
                            url
                        }
                    }
                  }
                }
            }
        }
    `;
  const data = await contentGqlFetcher<ProjectsQuery>({ query });
  if (!data) {
    throw new Error('Problem fetching Projects');
  }
  return data;
};

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
    `;
  const data = await contentGqlFetcher<SkillsQuery>({ query });

  if (!data) {
    throw new Error('Problem getting Skills Data');
  }
  return data;
};

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
    `;
  const data = await contentGqlFetcher<HeroQuery>({ query });

  if (!data) {
    throw new Error('There is not Hero Data');
  }
  return data;
};
