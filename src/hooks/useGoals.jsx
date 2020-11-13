import { graphql, useStaticQuery } from "gatsby"

const useGoals = () => {
  const datos = useStaticQuery(graphql`
    query {
      allStrapiGoals {
        nodes {
          id
          name

          image {
            sharp: childImageSharp {
              fluid(maxWidth: 400, maxHeight: 600) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  //console.log(datos);

  return datos.allStrapiGoals.nodes.map(goal => ({
    name: goal.name,
    id: goal.id,
    image: goal.image,
  }))
}

export default useGoals
