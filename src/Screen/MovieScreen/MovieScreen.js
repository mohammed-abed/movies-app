import {FlexColumn, InnerSection, SpinnerContainer} from "../../Global.Styles";
import {CardsContainer, HeroSection, InnerHeroSection, MoviesTitle,} from "../HomeScreen/HomeScreen.Styles";
import {
    InfoText,
    MovieDetailsBox,
    MovieImage,
    MovieInfoBox,
    NavigatorContainer,
    NavigatorInnerContainer,
    NavigatorSpan,
    ProgressBar,
    ProgressBarContainer,
    ProgressBarPercentage,
} from "./MovieScreen.Styles";
import ActorCard from "../../Components/ActorCard/ActorCard";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router";
import {useEffect} from "react";
import {getMoviesById} from "../../Components/Redux/Movie/movieActions";

function MovieScreen(props) {
    const dispatch = useDispatch()
    const params = useParams();
    const state = useSelector(state => state)
    useEffect(() => {
        dispatch(getMoviesById(params.id))
    }, [dispatch, params.id])
    const Movie = state.moviesState.movie
    console.log(Movie)
    return (state.moviesState.isLoading ? (
        <SpinnerContainer/>
    ) : (

        <FlexColumn>
            <NavigatorContainer>
                <NavigatorInnerContainer>
                    <NavigatorSpan>Back</NavigatorSpan>
                    <NavigatorSpan>/{Movie?.title}</NavigatorSpan>
                </NavigatorInnerContainer>
            </NavigatorContainer>
            <HeroSection
                img={"http://image.tmdb.org/t/p/w1280/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg" + Movie?.poster_path}
            >
                <InnerHeroSection>
                    <MovieInfoBox>
                        <MovieImage
                            src={
                                "http://image.tmdb.org/t/p/w1280//jTswp6KyDYKtvC52GbHagrZbGvD.jpg" + Movie?.poster_path
                            }
                            alt={"movie name"}
                        />
                        <MovieDetailsBox>
                            <InfoText margin={"0 0 25px"} fontSize={30} fontWeight={700}>
                                {Movie?.title}
                            </InfoText>
                            <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                                Polt
                            </InfoText>
                            <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                                {Movie?.overview}
                            </InfoText>
                            <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                                IMDB RATING
                            </InfoText>
                            <ProgressBarContainer>
                                <ProgressBar>
                                    <ProgressBarPercentage width={Movie?.vote_average * 10}/>
                                </ProgressBar>
                                <InfoText margin={"0 20px"} fontSize={16} fontWeight={500}>
                                    {Movie?.vote_average}
                                </InfoText>
                            </ProgressBarContainer>{" "}
                            <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={700}>
                                DIRECTOR
                            </InfoText>
                            <InfoText margin={"0 0 20px"} fontSize={16} fontWeight={500}>
                                Enrico Casarosa
                            </InfoText>
                        </MovieDetailsBox>
                    </MovieInfoBox>
                </InnerHeroSection>
            </HeroSection>
            <InnerSection>
                <MoviesTitle>Actors</MoviesTitle>
                <CardsContainer>
                    {Movie?.production_companies.map((item) => <ActorCard
                            key={item.id}
                            id={""}
                            name={item.name}
                            img={
                                `https://image.tmdb.org/t/p/w500${item.logo_path}`
                            }
                        />
                    )}

                </CardsContainer>
            </InnerSection>
        </FlexColumn>
    ));
}

export default MovieScreen;
