const urlSlug = require("url-slug")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const resultProducts = await graphql(`
    query {
      allStrapiProducts {
        nodes {
          id
          name
        }
      }
    }
  `)

  const resultCategories = await graphql(`
  query {
    allStrapiCategories {
      nodes {
        id
        name
      }
    }
  }
  `)

  const resultGoals = await graphql(`
  query {
    allStrapiGoals {
      nodes {
        id
        name
      }
    }
  }
  
  `)

  if (resultProducts.errors) {
    reporter.panic("No results", resultProducts.errors)
  }

  if (resultCategories.errors) {
    reporter.panic("No results", resultCategories.errors)
  }

  if (resultGoals.errors) {
    reporter.panic("No results", resultGoals.errors)
  }

  const products = resultProducts.data.allStrapiProducts.nodes

  const categories = resultCategories.data.allStrapiCategories.nodes

  const goals = resultGoals.data.allStrapiGoals.nodes

  

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

  categories.forEach(category => {
    actions.createPage({
        
      path: `products/categories/${urlSlug(category.name, {
        separator: "_",
      })}`,
      component: require.resolve("./src/components/Categories.jsx"),
      context: {
        id: category.name,
      },
    })
  })

  goals.forEach(goal => {
    actions.createPage({
        
      path: `products/goals/${urlSlug(goal.name, {
        separator: "_",
      })}`,
      component: require.resolve("./src/components/Goals.jsx"),
      context: {
        id: goal.name,
      },
    })
  })

  exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html") {
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /Snipcart/,
              use: loaders.null(),
            },
          ],
        },
      })
    }
  }

}
