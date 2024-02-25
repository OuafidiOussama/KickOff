import React from "react";
import renderer from "react-test-renderer";
import { ScrollView, View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import PlayerDetailsContainer from "../components/PlayerDetailsContainer";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

describe("<PlayerDetailsContainer />", () => {

  it("renders correctly when player data is available", () => {
    const mockPlayer = {
      id: "1",
      player_picture: "https://static.footballtransfers.com/resources/players/506100.png",
      player_name: "Messi",
      team_picture: "https://static.footballtransfers.com/resources/teams/48.png",
      position_short_name: "FW",
      age: 25,
      country_name: "Morroco",
      team_name: "Team",
      sci_skill_smg: "Excellent",
      estimated_value: "$10M",
    };

    useSelector.mockImplementation((selector) =>
      selector({
        Players: { players: [mockPlayer] },
      })
    );

    const tree = renderer
      .create(<PlayerDetailsContainer playerId="1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders loading text when player data is not available", () => {
    useSelector.mockReturnValueOnce({
      Players: { players: [] },
    });

    const tree = renderer
      .create(<PlayerDetailsContainer playerId="1" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
