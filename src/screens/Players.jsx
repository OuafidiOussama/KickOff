import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import PlayerCard from "../components/cards/PlayerCard";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../redux/players";

export default function Players() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getPlayers())
  },[])
  const {status, players} = useSelector(state=>state.Players)

  if(status === 'loading'){
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  }else if( status === "success"){
    return (
      <ScrollView>
        {players?.map((player) => <PlayerCard key={player.id} player={player} />)}
      </ScrollView>
    );
  }else{
    return (
      <View>
        <Text>Failed</Text>
      </View>
    );
  }
}
