export type HeroQuery = {
  portfolioHeroCollection: {
    items: {
      profileName: string;
      profileBlurb: string;
      profileTitle: string;
      profilePhoto: {
        url: string;
      };
    }[];
  };
};

export type SkillsQuery = {
  skillsSectionCollection: {
    items: {
      skillsHeading: string;
      skillsCollection: {
        items: {
          listItemName: string;
        }[];
      };
    }[];
  };
};

export type ProjectsQuery = {
  projectSectionCollection: {
    items: {
      heading: string;
      projectsCollection: {
        items: {
          title: string;
          slug: string;
          description: string;
          link: string;
          image: {
            url: string;
          };
        }[];
      };
    }[];
  };
};

export type ProjectPageQuery = {
  projectPageCollection: {
    items: {
      title: string;
      slug: string;
      project: {
        title: string;
        description: string;
        image: {
          url: string;
        };
      };
      body: {
        json: JSON;
      };
    }[];
  };
};

export type ContactQuery = {
  contactSectiionCollection: {
    items: {
      title: string;
      subheading: string;
      location: string;
      callToActionsCollection: {
        items: {
          label: string;
          link: string;
        }[];
      };
    }[];
  };
};

export type LogoQuery = {
  assetCollection: {
    items: {
      title: string;
      url: string;
    }[];
  };
};
