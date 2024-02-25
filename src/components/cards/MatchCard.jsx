import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import React from 'react'
import { Foundation } from '@expo/vector-icons';

export default function matchCard() {
  return (
    <View style={styles.imageBackground}>
            <Pressable onPress={() => handlClick(item.id)} style={styles.pressable}>
              <View style={styles.leagueinfo}>
                <View style={styles.infoLeague}>
                <Image
                  source={{
                    uri: `https://api.sofascore.app/api/v1/unique-tournament/1/image`,
                  }}
                  style={styles.imageTour}
                  />
                <Text style={styles.leagueName}>Tournament Name</Text>
                  </View>
                <Foundation name="star" size={24} color="gray" />
              </View>
              <View style={styles.teams}>
                <View style={styles.match}>

                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/2/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>Team Name</Text>
                  </View>
                </View>
                <Text style={styles.resultat}>
                  <Text>0</Text> -
                  <Text> 0</Text>
                </Text>
                <View style={styles.match}>
                  <View style={styles.team}>
                    <Image
                      source={{
                        uri: `https://api.sofascore.app/api/v1/team/3/image`,
                      }}
                      style={styles.image}
                    />
                    <Text style={styles.nameTeam}>Team Name</Text>
                  </View>
                </View>
              </View>

              <View style={styles.temp}>
                <Text style={styles.textTemp}>
                  Date
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
    justifyItems: "center",
    gap: 10,
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
    borderRadius: 25,
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