import React from 'react'
import { AutoComplete as WeboAutoComplete } from './AutoComplete.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
function AutoComplete(props) {
  const { isDevice } = useMedia()
  return (
    <WeboAutoComplete size={!isDevice && LARGE} {...props} />
  )

}

export default AutoComplete