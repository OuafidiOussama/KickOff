import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import MatchesContainer from "../components/MatchesContainer";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from '@expo/vector-icons';

export default function FilterInput({ leagues }) {
  const [value, setValue] = useState(null);
  return (
    <View style={styles.background}>
      <View style={styles.filter}>
        <View style={styles.buttonGradient}>
          <Dropdown
            style={styles.dropdown}
            placeholderStyle={styles.placeholderStyle}
            selectedTextStyle={styles.selectedTextStyle}
            inputSearchStyle={styles.inputSearchStyle}
            iconStyle={styles.iconStyle}
            data={leagues.uniqueTournaments?.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
            search
            maxHeight={300}
            labelField="label"
            valueField="value"
            placeholder="Search ... "
            value={value}
            onChange={(item) => {
              setValue(item.value);
            }}
            renderLeftIcon={() => (
                <MaterialIcons name="category" size={24} color="black" />
            )}
          />
        </View>
        <TouchableOpacity onPress={() => setValue(null)} style={styles.reset}>
          <Text style={styles.resetText}>All Leagues</Text>
        </TouchableOpacity>
      </View>
      <MatchesContainer filterValue={value} />
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
  filter: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 10,
  },
  buttonGradient: {
    borderRadius: 10,
    padding: 10,
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 0.5,
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
    width: "70%",
  },
  dropdown: {
    color: "white",
  },
  placeholderStyle: {
    fontSize: 16,
    color: "black",
    marginLeft: 20,
  },
  selectedTextStyle: {
    fontSize: 16,
    color: "black",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  icon: {
    marginRight: 5,
  },
  reset: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: "green",
  },
  resetText: {
    color: "white",
    fontWeight: "bold",
  },
});
