import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MatchCard from '../components/cards/MatchCard';
import React from 'react';

export default function MyFavorites() {
  const {status, matches} = useSelector(state=>state.Matches)
  const {favorites} = useSelector(state=>state.Favorites)
  const favs = matches.filter(({id})=>favorites.includes(id))
  if(status=== 'loading'){
    return(<View>
      <Text>Loading ...</Text>
    </View> )
  }else if(status==='success'){
    return favorites.length === 0 ? (
      <View style={styles.none}>
        <Text>You have No Favorites Yet</Text>
      </View> 
    ) : (
      <FlatList
        style={styles.container}
        ItemSeparatorComponent={() => <View style={{ marginBottom: 20 }} />}
        data={favs}
        keyExtractor={(match) => match.id}
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
  none:{
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});