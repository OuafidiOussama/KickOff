import { View, Pressable, Image, Text, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearMatch } from "../redux/matches";
import MatchesContainer from "../components/MatchesContainer";

export default function Matches() {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearMatch());
    };
  }, []);
  return (
    <View style={styles.background}>
      <MatchesContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#fff",
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});
