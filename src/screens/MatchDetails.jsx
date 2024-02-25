import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import MDetailsCard from "../components/cards/MDetailsCard";

export default function MatchDetails() {
  const { match, players } = useSelector((state) => state.Matches);
  return <MDetailsCard match={match} players={players} />;
}
