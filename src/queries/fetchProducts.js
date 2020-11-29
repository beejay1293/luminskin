import gql from "graphql-tag";

export default gql`
  query Products($currency: Currency) {
    products{
      id,
      title,
      price(currency: $currency),
      image_url,
      product_options {
        title,
        prefix
      }
    }
  }
`;