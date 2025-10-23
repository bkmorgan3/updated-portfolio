export const contentGqlFetcher = async <T>({
  query,
  variables = {},
  preview = false,
}: {
  query: string;
  variables?: any;
  preview?: boolean;
}): Promise<T | undefined> => {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  const { data, errors } = await res.json();

  if (errors) {
    console.log(errors);
    throw new Error('Could not get content');
  }
  return data as T;
};

export const fetchWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${'los angeles'}&appid=${process.env.WEATHER_KEY}&units=imperial`
  );
  const data = await res.json();
  return data;
};
