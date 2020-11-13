import { graphql, useStaticQuery } from "gatsby"

const useProducts = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiProducts {
        nodes {
          brand
          id
          name
          price
          description
          category {
            name
          }
          goal {
            name
          }
          image {
            sharp: childImageSharp {
              fluid(maxWidth: 250, maxHeight: 250) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  //console.log(datos);

  return datos.allStrapiProducts.nodes.map(product => ({
    name: product.name,
    description: product.description,
    image: product.image,
    id: product.id,
    price: product.price,
    category: product.category,
    goal: product.goal,
    brand: product.brand
  }))
}

export default useProducts
