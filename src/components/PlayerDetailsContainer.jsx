import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import React from "react";
import { useSelector } from "react-redux";

export default function PlayerDetailsContainer({ playerId }) {
  const player = useSelector((state) =>
    state.Players.players.find((player) => player.id === playerId)
  );
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageBack}>
          <Image
            source={{
              uri: `${player.player_picture}`,
            }}
            style={styles.image}
          />
          <Text style={styles.playerName}>{player.player_name}</Text>
        </View>

        <View style={styles.detail}>
          <Image
            source={{ uri: `${player.team_picture}` }}
            style={styles.teamPicture}
          />
          <View style={styles.info}>
            <Text style={styles.position}>Position</Text>
            <Text style={styles.infoText}> {player.position_short_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Age</Text>
            <Text style={styles.infoText}> {player.age}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>National Team</Text>
            <Text style={styles.infoText}> {player.country_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Team</Text>
            <Text style={styles.infoText}> {player.team_name}</Text>
          </View>

          <View style={styles.info}>
            <Text style={styles.position}>Skill</Text>
            <Text style={styles.infoText}>{player.sci_skill_smg}</Text>
          </View>
          <View style={styles.info}>
            <Text style={styles.position}>Value</Text>
            <Text style={styles.infoText}>{player.estimated_value}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    gap: 40,
  },
  imageBack: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#5b8db0",
    padding: 30,
    width: "100%",
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.5,
  },
  teamPicture: {
    width: "100%",
    height: "120%",
    position: "absolute",
    opacity: 0.2,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  playerName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  position: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 10,
  },

  infoText: {
    textAlign: "center",
    color: "black",
  },

  detail: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  info: {
    width: "40%",
    marginTop: 20,
    backgroundColor: "#5b8db0",
    padding: 20,
    borderRadius: 40,
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 12,
    },
    shadowOpacity: 0.6,
  },
});
