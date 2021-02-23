import gql from "graphql-tag";

export const GET_ALL_PRODUCTS = gql`
  query GetAllProducts {
    productos {
      id
      published_at
      nombre
      categoria {
        id
        nombre
      }
      fotos {
        id
        name
        caption
        alternativeText
        url
      }
    }
  }
`;
