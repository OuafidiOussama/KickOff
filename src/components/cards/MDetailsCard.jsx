import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from "moment";
import { FontAwesome } from "@expo/vector-icons";

export default function MDetailsCard({ match, players }) {
  const homeTeam = players?.filter(
    (player) => player.incidentType === "goal" && player.isHome === true
  );
  const awayTeam = players?.filter(
    (player) => player.incidentType === "goal" && player.isHome === false
  );
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.cont}>
        <View style={styles.league}>
          <Image
            source={{
              uri: `https://api.sofascore.app/api/v1/unique-tournament/${match.tournament.uniqueTournament.id}/image`,
            }}
            style={styles.imageTour}
          />
          <Text>{match.tournament.name}</Text>
        </View>
        <Text style={styles.textTemp}>
          {moment(match.startTimestamp * 1000).format("LLL")}
        </Text>
      </View>
      <View style={styles.detail}>
        <View style={styles.teams}>
          <View style={styles.match}>
            <View style={styles.team}>
              <Image
                source={{
                  uri: `https://api.sofascore.app/api/v1/team/${match.homeTeam.id}/image`,
                }}
                style={styles.image}
              />
              <Text style={styles.nameMatch}>{match.homeTeam.name}</Text>
            </View>
          </View>
          <Text style={styles.resultat}>
            <Text>{match.homeScore.display}</Text> -
            <Text> {match.awayScore.display}</Text>
          </Text>
          <View style={styles.match}>
            <View style={styles.team}>
              <Image
                source={{
                  uri: `https://api.sofascore.app/api/v1/team/${match.awayTeam.id}/image`,
                }}
                style={styles.image}
              />
              <Text style={styles.nameMatch}>{match.awayTeam.name}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.league}>
        <Text>Season</Text>
      </View>
      <View style={styles.season}>
        <Text style={styles.seasonName}>{match.season.name}</Text>
      </View>
      <View style={styles.league}>
        <Text>Goals</Text>
      </View>
      <View>
        <View style={styles.butteurs}>
          <View style={styles.separator}>
            {homeTeam?.map((item) => (
              <View style={styles.homeContainer} key={item.id}>
                <FontAwesome name="soccer-ball-o" size={15} color="black" />
                <Text style={styles.butteur}>{item.player.name}</Text>
                <Text style={styles.butteur}>{item.time}'</Text>
              </View>
            ))}
          </View>
          <View>
            {awayTeam?.map((item) => (
              <View style={styles.awayContainer} key={item.id}>
                <FontAwesome name="soccer-ball-o" size={15} color="black" />
                <Text style={styles.butteur}>{item.player.name}</Text>
                <Text style={styles.butteur}>{item.time}'</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
      <View style={styles.league}>
        <Text>Trainers</Text>
      </View>

      <View style={styles.entraineurs}>
        <View style={styles.coach}>
          <MaterialCommunityIcons name="human-edit" size={26} color="green" />
          <Text style={styles.coachName}>{match.homeTeam.manager.name}</Text>
        </View>

        <View style={styles.coach}>
          <MaterialCommunityIcons name="human-edit" size={26} color="green" />
          <Text style={styles.coachName}>{match.awayTeam.manager.name}</Text>
        </View>
      </View>
      <View style={styles.league}>
        <Text>Stade</Text>
      </View>
      <View style={styles.stade}>
        <Text style={styles.stadiumName}>
          Name: {match.homeTeam.venue.stadium.name}
        </Text>
        <Text style={styles.stadiumName}>
          City: {match.homeTeam.venue.city.name}
        </Text>
        <Text style={styles.stadiumName}>
          Capacity: {match.homeTeam.venue.stadium.capacity}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
  },
  cont: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#B2C3FD",
  },
  season: {
    padding: 8,
    backgroundColor: "#E7EDFE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  league: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    fontWeight: "bold",
    fontSize: 15,
    gap: 10,
    backgroundColor: "#B2C3FD",
  },
  seasonName: {
    fontSize: 15,
    color: "black",
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  detail: {
    padding: 8,
    backgroundColor: "#E7EDFE",
  },
  match: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 50,
    margin: 5,
  },
  temp: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 5,
  },
  nameMatch: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    textAlign: "center",
  },
  textTemp: {
    fontSize: 15,
    color: "#000000",
    paddingRight: 10,
  },
  image: {
    width: 40,
    height: 40,
  },
  team: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
    width: "50%",
  },
  teams: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  resultat: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
  },
  butteurs: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingTop: 15,
  },
  homeContainer: {
    display: "flex",
    flexDirection: "row-reverse",
    gap: 10,
    width: "100%",
  },
  awayContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    width: "100%",
  },
  butteur: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#7a7a7a",
    marginBottom: 10,
  },
  stade: {
    width: "100%",
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageTour: {
    width: 30,
    height: 30,
  },
  entraineurs: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  coach: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  coachName: {
    fontSize: 15,
    color: "gray",
    fontWeight: "bold",
  },
});
