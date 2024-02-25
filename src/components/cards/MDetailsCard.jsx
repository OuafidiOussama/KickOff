import { View, Text, ScrollView, StyleSheet, Image, ImageBackground } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import moment from 'moment';

export default function MDetailsCard({match}) {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.cont} >
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
          {moment(match.startTimestamp*1000).format('LLL')}
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
      <View style={styles.detailButteur}>
        <View style={styles.butteurs}>
        <View style={styles.separator}>
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
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    scroll:{
        backgroundColor: "white"
    },
    cont:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: "#B2C3FD"
    },
    season:{
        padding: 8,
        backgroundColor: "#E7EDFE",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
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
      backgroundColor: "#B2C3FD"
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
      textAlign: 'center'
    },
    textTemp: {
      fontSize: 15,
      color: "#000000",
      paddingRight: 10
    },
    image: {
      width: 40,
      height: 40,
    },
    team: {
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      width:'50%',
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
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 20,
      paddingHorizontal: 20,
    },
    butteur: {
      fontSize: 12,
      fontWeight: "bold",
      color: "#7a7a7a",
      marginBottom: 15,
    },
    stade: {
      width: "100%",
      height: 300,
      justifyContent: "center",
      alignItems: "center",
    },
    round: {
      color: "white",
      fontSize: 15,
      textAlign: "center",
      marginVertical: 15,
    },
  
    imageTour: {
      width: 30,
      height: 30,
    },
    butteurContianer: {
      display: "flex",
      flexDirection: "row",
      gap: 10,
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
  