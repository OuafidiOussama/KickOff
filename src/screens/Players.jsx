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
        <View style={styles.container}>
          <TextInput
            value={search}
            onChangeText={setSearch}
            placeholder="Search For Player.."
            style={styles.input}
          />
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

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 10,
    borderColor: 'gray'
  },
});
