import React from 'react'
import { Bar as WeboBar, StatsWrapper } from './Charts.styled'
import useMedia from '../../customHooks/UseMedia'
import { LARGE } from '../types'

function Col(props) {
  const { isDevice } = useMedia()
  return (
    <StatsWrapper>
      <WeboBar size={!isDevice && LARGE} {...props} />
    </StatsWrapper>
  )
}

export default Col