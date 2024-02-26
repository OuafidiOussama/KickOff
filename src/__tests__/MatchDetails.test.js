import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import MatchDetails from "../screens/MatchDetails";

const mockStore = configureStore([]);

describe("<MatchDetails />", () => {
  it("renders loading text when status is loading", () => {
    const initialState = {
      Matches: { status: 'loading', match: null, players: [] }
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <MatchDetails />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });


  it("renders failed text when status is not loading, not success", () => {
    const initialState = {
      Matches: { status: 'failed', match: null, players: [] }
    };
    const store = mockStore(initialState);
    const tree = renderer
      .create(
        <Provider store={store}>
          <MatchDetails />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
