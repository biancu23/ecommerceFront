import React, { useState } from "react"
import Autocomplete from "@material-ui/lab/Autocomplete"
import useProducts from "../hooks/useProducts"
import { Link } from "gatsby"
import urlSlug from "url-slug"
import { Typography, TextField} from "@material-ui/core"

const Search = () => {
  const response = useProducts()
  const [products] = useState(response)

  return (
    <Autocomplete
      id="productSelect"
      style={{ width: 300 }}
      options={products}
      freeSolo
      autoHighlight
      getOptionLabel={option => option.name}
      renderOption={option => (
        <Link
          to={`/products/${urlSlug(option.name, {
            separator: "_",
          })}`}
          style={{ textDecoration: "none", width: "100%" }}
        >
          <Typography variant="p" color="primary">
            {option.brand} {option.name}
          </Typography>
        </Link>
      )}
      renderInput={params => (
        <TextField
          {...params}
          variant="outlined"

          inputProps={{
            ...params.inputProps,
            autoComplete: 'search-product', // disable autocomplete and autofill

          }}
          size="small"
        />
      )}
    />
  )
}

export default Search
