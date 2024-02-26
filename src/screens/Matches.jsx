import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMatch } from "../redux/matches";
import { getLeagues } from "../redux/leagues";
import FilterInput from "../components/FilterInput";

export default function Matches() {
  const dispatch = useDispatch();
  const {status,leagues} = useSelector((state) => state.Leagues);
  useEffect(() => {
    dispatch(getLeagues())
    return () => {
      dispatch(clearMatch());
    };
  }, []);
  if(status === 'loading' ){
    return(<View>
      <Text>Loading ...</Text>
    </View>)
  }else if(status === 'success'){
    return <FilterInput leagues={leagues} />;
  }else{
    return(<View>
      <Text>Failed</Text>
    </View>)
  }
}


