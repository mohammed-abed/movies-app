import { MainContainer } from "./Global.Styles";
import Nav from "./Components/Nav/Nav";
import HomeScreen from "./Screen/HomeScreen/HomeScreen";
import MovieScreen from "./Screen/MovieScreen/MovieScreen";

function App() {
  return (
    <MainContainer>
      <Nav />
      {/*
      <HomeScreen />*/}
      <MovieScreen />
    </MainContainer>
  );
}

export default App;
