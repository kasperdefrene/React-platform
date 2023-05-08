import { graphQLRequest } from "./utils/graphql";

export const getArts = async () => {
    const { data } = await graphQLRequest(`
    query MyQuery {
        entries {
          ... on artworks_default_Entry {
            id
            title
            artwork
          }
        }
      }
    `);
    console.log(data.entries);
    return data.entries;
};

export const CreateArt = async (updates) => {
    const { data } = await graphQLRequest(`
    
    `,
    updates
    );
    return data.save_arts_default_Entry;
};