import { View, Text, Pressable, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function PlayerCard({player}) {
  return (
    <View style={styles.container}>
        <View>
          <Pressable
            style={styles.pressable}
          >
            <Image
              source={{
                uri: `${player.player_picture}`,
              }}
              style={styles.image}
            />
            <Text style={styles.namePlayer}>{player.player_name}</Text>
          </Pressable>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      margin: 20,
      backgroundColor: "white",
      borderRadius: 10,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
      position: 'relative'
    },
    pressable: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      padding: 15,
    },
    namePlayer: {
      fontWeight: "bold",
      fontSize: 20,
      color: "black",
      padding: 10,
    },
  
    image: {
      width: 100,
      height: 110,
      position: 'absolute',
      right: 10,
      top: -22,
    },
  });