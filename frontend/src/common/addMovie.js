const http = require('axios')
const myBackEndURL = "http://localhost:4000/api";

//ide kellenek a cuccok a paramba, movie_id
const AddMovie = async (searchedMovie, rating, reviewText) => {
    try {
        //ide a filmnek a milyen id-ja kell tho?
        const response = await http.post(`${myBackEndURL}/movies/${searchedMovie.id}/reviews`, {
            title: searchedMovie.original_title,
            movie_id: searchedMovie.id,
            year: searchedMovie.release_date,
            description: searchedMovie.overview,
            reviews: [{
                title: searchedMovie.original_title,
                description: reviewText,
                // user_id: user_id,
                score: rating
            }],

        },
            {
                headers: {
                    authorization: localStorage.getItem("sessionId"),
                }
            });

        //ez?
        localStorage.setItem("token", response.data.token);
        console.log(response)
        return (response)

    } catch (error) {

        if (!error.response) return (error);
        return error.response;
    }
}

module.exports = {
    AddMovie
}

