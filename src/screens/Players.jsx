import { View, Text, ScrollView, TextInput, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import PlayerCard from "../components/cards/PlayerCard";
import { useDispatch, useSelector } from "react-redux";
import { getPlayers } from "../redux/players";

export default function Players() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPlayers());
  }, []);
  const { status, players: statePlayers } = useSelector(
    (state) => state.Players
  );
  const players = statePlayers.filter((player) =>
    player.player_name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  if (status === "loading") {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  } else if (status === "success") {
    return (
      <ScrollView>
        <View>
          
          {players?.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </View>
      </ScrollView>
    );
  } else {
    return (
      <View>
        <Text>Failed</Text>
      </View>
    );
  }
}


