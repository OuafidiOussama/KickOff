import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMatches } from '../redux/matches';
import MatchCard from './cards/MatchCard';
import moment from 'moment'

export default function MatchesContainer({filterValue}) {
  const date = moment()
  let today = date.format('YYYY-MM-DD')
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getMatches(today));
  },[])
  const {status, matches} = useSelector(state=>state.Matches)
  if(status=== 'loading'){
    return(<View>
      <Text>Loading ...</Text>
    </View> )
  }else if(status==='success'){
    return (
      <FlatList
          style={styles.container}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
          data={
            filterValue === null
              ? matches
              : matches.filter(
                  (item) => item.tournament.uniqueTournament.id === filterValue
                )
          }
          keyExtractor={(match) => match.id.toString()}
          renderItem={(match) => (<MatchCard match={match}/>)}
        />
      )
  }else{
    return(<View>
      <Text>Failed</Text>
    </View> )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    width: "100%"
  },
});