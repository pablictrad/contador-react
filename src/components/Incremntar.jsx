import propTypes from "prop-types"
import React from "react"
export const Incremntar = React.memo(({ increment }) => {

  console.log('me estoy redibujando')

  return (
    <button className="btn btn-primary" onClick={() => increment(100)}>+1</button>
  )
}
)

Incremntar.displayName = 'Incremntar';

Incremntar.propTypes = {
  increment: propTypes.func.isRequired,
}