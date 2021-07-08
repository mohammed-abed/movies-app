import {FlexColumn, InnerSection, SpinnerContainer} from "../../Global.Styles";
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
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovies} from "../../Components/Redux/Movie/movieActions";

function HomeScreen(props) {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const [page, setPage] = useState(1)
    const Movies = state.moviesState.movies
    // let movies = [];

    useEffect(() => {
        dispatch(getMovies(page))
    }, [dispatch, page])

    console.log(Movies)

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
                {state.moviesState?.isLoading ? (<SpinnerContainer/>) : (
                    <CardsContainer>
                        {Movies?.map((item) => <Card
                                key={item.id}
                                id={item.id}
                                to={'/movie/' + item.id + "/" + item.title}
                                name={"img"}
                                img={
                                    "https://image.tmdb.org/t/p/w500/" + item.poster_path}


                            />
                        )}

                    < /CardsContainer>
                )}
                <LoadMore
                    onClick={() => {
                        setPage(page + 1);
                        // dispatch(getMovies(page, Movies))
                    }}
                    isLoading={false}>Load more...</LoadMore>
                {/*isLoading={state.moviesState?.isLoading}*/}
            </InnerSection>
        </FlexColumn>
    );
}

export default HomeScreen;
