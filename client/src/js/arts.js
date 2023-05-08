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

export async function createArt(updates, artworks){
    const { data } = await graphQLRequest(`
    mutation MyMutation($title: String, $artwork: String) {
        save_artworks_default_Entry(
          authorId: "1"
          slug: "-"
          title: $title
          artwork: $artwork
        ){
          title
          artwork
          id
        }
      }
    `,
    updates
    );
    return data.save_arts_default_Entry;
};