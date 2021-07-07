import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";
import {Route, Switch} from "react-router";

function App() {
  return (
    <MainContainer>
      <Nav />
      {/*
      <HomeScreen />*/}
        <Switch>
            <Route  exact={true} path={"/"} component={HomeScreen}/>
            <Route  exact={true} path={"/movie/:id"} component={MovieScreen}/>
        </Switch>
      <MovieScreen />
    </MainContainer>
  );
}

export default App;
