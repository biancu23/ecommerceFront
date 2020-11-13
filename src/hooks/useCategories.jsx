import { graphql, useStaticQuery } from "gatsby"

const useCategories = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiCategories {
        nodes {
          name
          id
        }
      }
    }
  `)

  //console.log(datos);

  return datos.allStrapiCategories.nodes.map(category => ({
    name: category.name,
    id: category.id,
  }))
}

export default useCategories
