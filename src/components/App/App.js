import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router-dom';
import './App.css';
import { api } from '../../utils/MainApi';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { 
  DUPLICATED_USER_ERROR, IMAGE_NOT_FOUND, INVALID_DATA_ERROR,
  INVALID_INPUT_DATA_ERROR,
  SERVER_ERROR, SUCCESS_MESSAGE 
} from '../../utils/statusMessages';
import getBeatMovies from '../../utils/MoviesApi';
import { BASE_URL, SHORT_MOVIE_DURATION } from '../../utils/constants';

function App() {
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: '',
  });

  const [ isLoading, setIsLoading ] = useState(false); 
  const [ loggedIn, setLoggedIn ] = useState(false);
  const [ statusMessage, setStatusMessage ] = useState('');
  const [ searchStatusOk, setSearchStatusOk ] = useState(false);
  const [ searchShortFilmStatusOk, setSearchShortFilmStatusOk ] = useState(false);
  const [ moviesSearchList, setMoviesSearchList ] = useState([]);
  const [ savedMoviesList, setSavedMoviesList ] = useState([]);
  const [ isShortMovies, setIsShortMovies ] = useState(false);

  const history = useHistory();
  let location = useLocation().pathname;

  useEffect(() => {
    checkToken();
  }, [])


  useEffect(() => {
    if (loggedIn) {
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
      .then(([userData, savedMovieData]) => {
        setIsLoading(true);
        setCurrentUser(userData.data);
        setSavedMoviesList(savedMovieData.data);
        setSearchStatusOk(true);
       
      })
      .catch((error) => console.log(error))
      .finally(() => {
        setIsLoading(false);
      });
    }
  }, [loggedIn]);

  useEffect(() => {
    const movies = JSON.parse(localStorage.getItem("movies"));
    if (movies) {
        const searchResult = JSON.parse(
            localStorage.getItem("searchResult")
        );
        if (searchResult) {
          setMoviesSearchList(searchResult);
          setSearchStatusOk(true);
        } else {
          setSearchStatusOk(false);
        }
    } else {
      getMoviesFromBeat();
    }
  }, [loggedIn]);

  useEffect(() => {
    setSearchStatusOk(true);
    setMoviesSearchList(JSON.parse(localStorage.getItem("searchResult")));
    getSavedMovies();
  }, [location]);

  useEffect(() => {
    setTimeout(() => {
       setStatusMessage('');
     }, 3000);
   },[statusMessage]);

  function handleRegister(name, email, password) {
    api.register(name, email, password)
      .then(res => {
        if (res){
          handleLogin(email, password);
        }
      })
      .catch(error => {
        if (error === 400) {
          return setStatusMessage(INVALID_DATA_ERROR);
        }
        if (error === 401) {
          return setStatusMessage(INVALID_INPUT_DATA_ERROR);
        }
        if (error === 409) {
          return setStatusMessage(DUPLICATED_USER_ERROR);
        }
        if (error === 500) {
          return setStatusMessage(SERVER_ERROR);
        }
        console.log(error);
      })
  }

  function handleLogin(email, password){
    api.login(email, password)
      .then(data => {
        if (data.token) {
          const jwt = data.token;
          localStorage.setItem('jwt', jwt);
          setLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch((error) => {
        if (error === 400) {
          return setStatusMessage(INVALID_DATA_ERROR);
        }
        if (error === 401) {
          return setStatusMessage(INVALID_INPUT_DATA_ERROR);
        }
        if (error === 500) {
          return setStatusMessage(SERVER_ERROR);
        }
      });  
  }

  function handleLogout() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('searchResult');
    setCurrentUser({name:"", email:""});
    setLoggedIn(false);
    history.push('/');
  }

  function checkToken () {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      api.checkToken(jwt)
        .then((res) => {
          if (res) {
            setCurrentUser({...res.data});
            setLoggedIn(true);
            history.push(location);

            if (history.location.pathname === '/signin' || history.location.pathname === '/signup') {
              history.push('./');
            }
          }
        })
        .catch((error) => {
          localStorage.removeItem("jwt");
          console.log(error);
          history.push("/");
        });
    } else {
      setLoggedIn(false);
    }
  }

  
  function handleUpdateUser (formData) {
    api.updateUserInfo(formData)
      .then((userData) => {
        setCurrentUser(userData.user);
        setStatusMessage(SUCCESS_MESSAGE);
       })
      .catch( (error) => {
        if (error === 400) {
          return setStatusMessage(INVALID_DATA_ERROR);
        }
        if (error === 401) {
          return setStatusMessage(INVALID_INPUT_DATA_ERROR);
        }
        if (error === 500) {
          return setStatusMessage(SERVER_ERROR);
        }
        console.log(error);
      });
  }
  
  function getSavedMovies() {
    api.getSavedMovies()
      .then((res) => {
        setSavedMoviesList(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  function handleAddMovie (movie) {
    api.addMovie(movie)
      .then((newMovie) => {
        getSavedMovies();
       })
      .catch((error) => {
          console.log(error);
      });
  }

  function handleDeleteMovie(movie) {
    const _id = savedMoviesList.find(
      (item) => item.movieId === movie.movieId)._id;

    api.deleteMovie(_id)
        .then(() => {
            checkSavedMovie(movie);
            getSavedMovies();
        })
        .catch((error) => {
          console.log(error);
      });
  }

  function getMoviesFromBeat() {
    setIsLoading(true);
    getBeatMovies()
        .then((data) => {
            const moviesDict = data.map((movie) => {
                const imageURL = movie.image ? `${BASE_URL}${movie.image.url}` : IMAGE_NOT_FOUND;
                const thumbnailURL = movie.image ? `${BASE_URL}${movie.image.formats.thumbnail.url}` : IMAGE_NOT_FOUND;
                const originalName = movie.nameEN ? movie.nameEN : movie.nameRU;
                const countryValue = movie.country ? movie.country : "Не указана";

                return {
                    country: countryValue,
                    director: movie.director,
                    duration: movie.duration,
                    year: movie.year,
                    description: movie.description,
                    image: imageURL,
                    trailer: movie.trailerLink,
                    thumbnail: thumbnailURL,
                    movieId: movie.id,
                    nameRU: movie.nameRU,
                    nameEN:  originalName,
                  }
            });
            localStorage.setItem("movies", JSON.stringify(moviesDict));
        })
        .catch((err) => {
            setSearchStatusOk(false);
            console.log(err);
        })
        .finally(() => {
            setIsLoading(false);
        });
  }

  function searchMovie(data, keyword) {
    return data.filter((movie) => 
        movie.nameRU.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.nameEN.toLowerCase().includes(keyword.toLowerCase()) ||
        movie.description.toLowerCase().includes(keyword.toLowerCase())
    )
  }

  function handleSearch(keyword){
    getMoviesFromBeat();
    setIsLoading(true);
    if (location === '/movies') {
      const moviesList = JSON.parse(localStorage.getItem("movies"));
      const filteredList = searchMovie(moviesList, keyword);
      if (filteredList.length === 0) {
        setSearchStatusOk(false);
      } else {
        setSearchStatusOk(true);
      }
      localStorage.setItem("searchResult", JSON.stringify(filteredList));
      setMoviesSearchList(filteredList);
      setTimeout(() => setIsLoading(false), 1000);
    }
    if (location === '/saved-movies') {
      return api.getSavedMovies()
        .then((res) => {
          const filteredList = searchMovie(res, keyword);
          if (filteredList.length === 0) {
            setSearchStatusOk(false);
          } else {
            setSearchStatusOk(true);
          }
          setSavedMoviesList(filteredList)
        })
        .catch((err) => {
          console.log(err)
        })
        .finally(() => {
          setTimeout(() => setIsLoading(false), 1000);
        })
    }
  }

  function handleCheckShortMovie(e) {
    setIsShortMovies(e.target.checked);
  }

  function filterShortMovies(moviesList) {
    const shortMoviesList = moviesList.filter(
        (item) => item.duration <= SHORT_MOVIE_DURATION
    );

    if (shortMoviesList.length >0) {
      setSearchShortFilmStatusOk(true);
    } else {
      setSearchShortFilmStatusOk(false);
    }
    return shortMoviesList; 
  }

  const checkSavedMovie = (movie) => {
    return savedMoviesList.some(savedMovie => savedMovie.movieId === movie.movieId);
  }

  function handleMovieLike(movie, isLiked) {
    isLiked ? handleDeleteMovie(movie) : handleAddMovie(movie);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}/>
          </Route>

          <Route path="/signup">
              <Register statusMessage={statusMessage}
                        handleRegister={handleRegister}/>
          </Route>

          <Route path="/signin">
              <Login statusMessage={statusMessage}
                     handleLogin={handleLogin}/>
          </Route>

          <ProtectedRoute path="/movies"
                loggedIn={loggedIn}
                isLoading={isLoading}
                moviesDict={moviesSearchList}
                moviesSearchStatus={searchStatusOk}
                searchShortFilmStatusOk={searchShortFilmStatusOk}
                isShortMovies={isShortMovies}
                filterShortMovies={filterShortMovies}
                handleShortMovie={handleCheckShortMovie}
                handleSearch={handleSearch}
                checkSavedMovie={checkSavedMovie}
                handleMovieLike={handleMovieLike}
                component={Movies}/>

          <ProtectedRoute path="/saved-movies"
                loggedIn={loggedIn}
                isLoading={isLoading}
                moviesDict={savedMoviesList}
                moviesSearchStatus={searchStatusOk}
                searchShortFilmStatusOk={searchShortFilmStatusOk}
                isShortMovies={isShortMovies}
                filterShortMovies={filterShortMovies}
                handleShortMovie={handleCheckShortMovie}
                handleSearch={handleSearch}
                checkSavedMovie={checkSavedMovie}
                handleMovieLike={handleMovieLike}
                component={SavedMovies}/>

            <ProtectedRoute path="/profile"
                loggedIn={loggedIn}
                statusMessage={statusMessage}
                handleUpdateProfile={handleUpdateUser}
                handleLogout={handleLogout}
                component={Profile}/>
            
          <Route>
            <NotFound/>
          </Route> 
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
