const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allStrapiProducts {
        nodes {
          id
          name
        }
      }
    }
  `)

  //console.log("products:", JSON.stringify(result.data.allStrapiProducts ) );

  if (result.errors) {
    reporter.panic("No results", result.errors)
  }

  const products = result.data.allStrapiProducts.nodes

  // Crear los templates de propiedades
  products.forEach(product => {
    actions.createPage({
        
      path: `products/${urlSlug(product.name, {
        separator: "_",
      })}`,
      component: require.resolve("./src/components/ProductInfo.jsx"),
      context: {
        id: product.id,
      },
    })
  })
}
