import { View } from 'react-native'
import React from 'react'
import PlayerDetailsContainer from '../components/PlayerDetailsContainer';

export default function PlayerDetails(id) {
  const playerId = id.route.params.playerId
  return (
    <View>
        <PlayerDetailsContainer playerId = {playerId}/>
    </View>
  )
}