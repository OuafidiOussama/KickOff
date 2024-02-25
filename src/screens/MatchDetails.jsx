import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MDetailsCard from "../components/cards/MDetailsCard";

export default function MatchDetails() {
  const { status, match, players } = useSelector((state) => state.Matches);
  if (status === "loading") {
    return (
      <View>
        <Text>Loading ...</Text>
      </View>
    );
  } else if (status === "success") {
    return <MDetailsCard match={match} players={players} />;
  } else {
    return (
      <View>
        <Text>Failed</Text>
      </View>
    );
  }
}
