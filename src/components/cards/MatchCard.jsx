import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { getMatchById } from '../../redux/matches';
import moment from 'moment';

export default function matchCard({match}) {
  const {navigate} = useNavigation()
  const dispatch = useDispatch()
  navigateToDetails = (matchId)=>{
    dispatch(getMatchById(matchId))
    navigate("Match Details")
  }
  const {item} = match
  return (
    <View style={styles.imageBackground}>
            <Pressable style={styles.pressable} onPress={()=>navigateToDetails(item.id)}>
              <View style={styles.leagueinfo}>
                <View style={styles.infoLeague}>
                  <Image
                    source={{
                      uri: `https://api.sofascore.app/api/v1/unique-tournament/${item.tournament.uniqueTournament.id}/image`,
                    }}
                    style={styles.imageTour}
                    />
                  <Text style={styles.leagueName}>{item.tournament.name}</Text>
                </View>
                <Foundation name="star" size={24} color="gray" />
              </View>
              <View style={styles.teams}>
                <View style={styles.match}>

                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/${item.homeTeam.id}/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>{item.homeTeam.name}</Text>
                  </View>
                </View>
                <Text style={styles.resultat}>
                  <Text>{item.homeScore.display}</Text> -
                  <Text> {item.awayScore.display}</Text>
                </Text>
                <View style={styles.match}>
                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/${item.awayTeam.id}/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>{item.awayTeam.name}</Text>
                  </View>
                </View>
              </View>

              <View style={styles.temp}>
                <Text style={styles.textTemp}>
                  {moment(item.startTimestamp*1000).format('LLL')}
                </Text>
              </View>
            </Pressable>
          </View>
  )
}

const styles = StyleSheet.create({
  imageBackground: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  pressable: {
    padding: 20,
  },
  infoLeague: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  temp: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  nameTeam: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
    width: 100,
    textAlign: "center",
  },
  textTemp: {
    fontSize: 15,
    color: "#bcbcbc",
  },
  image: {
    width: 40,
    height: 40,
  },
  team: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  teams: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
  },
  resultat: {
    color: "green",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },

  leagueName: {
    color: "#bcbcbc",
    fontSize: 15,
    textAlign: "center",
    marginBottom: 10,
    width: "80%"

  },
  leagueinfo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageTour: {
    width: 30,
    height: 30,
  },


});