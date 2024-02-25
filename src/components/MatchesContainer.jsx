import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMatches } from '../redux/matches';
import MatchCard from './cards/MatchCard';

export default function MatchesContainer() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMatches("2024-02-22"));
  },[])
  const {status} = useSelector(state=>state.Matches)
  return (
    status === 'loading' ?
    <View>
      <Text>Loading ...</Text>
    </View> 
    :
    <MatchCard />
    )

}