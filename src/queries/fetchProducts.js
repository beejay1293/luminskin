import gql from "graphql-tag";

export default gql`
{
    products {
      id,
      title,
      price(currency: USD),
      image_url,
      product_options {
        title,
        prefix
      }
    }
  }
  
`;
