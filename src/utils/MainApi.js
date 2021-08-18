class MainApi {
    constructor({address}) {
        this._address = address;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(res.status);
    }

    getSavedMovies(){
        return fetch(`${this._address}/movies`, {
            method: "GET",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            }
        })
        .then(this._checkResponse)
    }

    addMovie(filmData){
        return fetch(`${this._address}/movies`, {
            method: "POST",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                country: filmData.country,
                director: filmData.director,
                duration: filmData.duration,
                year: filmData.year,
                description: filmData.description,
                image: filmData.image,
                trailer: filmData.trailer,
                thumbnail: filmData.thumbnail,
                movieId: filmData.movieId,
                nameRU: filmData.nameRU,
                nameEN:  filmData.nameEN
            })
        })
        .then(this._checkResponse)
    }

    deleteMovie(filmId){
        return fetch(`${this._address}/movies/${filmId}`, {
            method: "DELETE",
            headers: {
                authorization: 'Bearer ' + localStorage.getItem('jwt'),
            }
        })
        .then(this._checkResponse)
    }

    register(name, email, password) {
        console.log(name, email, password);
        return fetch(`${this._address}/signup`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name, email, password})
        })
        .then(this._checkResponse)
    }

    login(email, password) {
        return fetch(`${this._address}/signin`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: email, password: password})
        })
        .then(this._checkResponse)
    };

    checkToken (token) {
        return fetch(`${this._address}/users/me`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        })
          .then(this._checkResponse);
      };

    getUserInfo() {
        return fetch(`${this._address}/users/me`, {
            method: "GET",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                 Authorization: 'Bearer ' + localStorage.getItem('jwt'),
            },
        })
        .then(this._checkResponse)
    }

    updateUserInfo(userData) {
        return fetch(`${this._address}/users/me`, {
            method: "PATCH",
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('jwt'),
                'Content-Type': 'application/json',
                'Accept': "application/json",

            },
            body: JSON.stringify(userData)
        })
        .then(this._checkResponse)
    }
}

export const api = new MainApi({
    address: 'https://api.jt-movies.nomoredomains.club'
});
