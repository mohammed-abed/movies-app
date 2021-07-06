import { FlexColumn, InnerSection } from "../../Global.Styles";
import {
  CardsContainer,
  Description,
  HeroSection,
  InnerHeroSection,
  LoadMore,
  MoviesTitle,
  Title,
} from "./HomeScreen.Styles";
import Card from "../../Components/Card/Card";

function HomeScreen(props) {
  return (
    <FlexColumn>
      <HeroSection
        img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg"}
      >
        <InnerHeroSection>
          <Title>Title</Title>
          <Description>
            This is just a film description to get from the api
          </Description>
        </InnerHeroSection>
      </HeroSection>
      <InnerSection>
        <MoviesTitle>Popular Movies</MoviesTitle>
        <CardsContainer>
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
          <Card
            key={1}
            id={""}
            name={"img"}
            img={
              "https://image.tmdb.org/t/p/w500//udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"
            }
          />
        </CardsContainer>
        <LoadMore isLoading={false}>Load more...</LoadMore>
      </InnerSection>
    </FlexColumn>
  );
}

export default HomeScreen;
