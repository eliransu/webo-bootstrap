import React from 'react'
import { Statistics as WeboStatistics } from './Statistics.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'
function Statistics(props) {
  const { isDevice } = useMedia()
  return (
    <WeboStatistics size={!isDevice && LARGE} {...props} />
  )

}

export default Statistics