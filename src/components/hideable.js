import React from 'react'

export const hideable = (Component) => ({ hidden, ...props }) => (hidden ? null : <Component { ...props } />)
