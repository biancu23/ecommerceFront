import React, { useState } from "react"
import useGoals from "./useGoals"
import useCategories from "./useCategories"

const useFilter = () => {
  const [selectedIndex, setSelectedIndex] = useState("")
  const [category, setCategory] = useState("")
  const [goal, setGoal] = useState("")

  //GraphQl Categories
  const responseCategories = useCategories()
  const [categories] = useState(responseCategories)

  //GraphQL Goals
  const responseGoals = useGoals()
  const [goals] = useState(responseGoals)

  // console.log(categorias);

  const cleanState = () => {
    setSelectedIndex()
    setCategory()
    setGoal()
  }
  
  const handleCategoryClick = (event, value, index) => {
    cleanState()
    setSelectedIndex(index)
    setCategory(value)
  }

  const handleGoalClick = (event, value, index) => {
    cleanState()
    setGoal(value)
    setSelectedIndex(index)
  }

  return {
    category,
    goal,
    categories,
    goals,
    selectedIndex,
    handleGoalClick,
    handleCategoryClick,
    setGoal,
    setCategory,
    setSelectedIndex,
  }
}

export default useFilter
