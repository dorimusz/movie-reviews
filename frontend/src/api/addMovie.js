// const http = require('axios')
// const myBackEndURL = "http://localhost:4000/api";

// //ide kellenek a cuccok a paramba, movie_id
// const AddMovie = async () => {
//   try {
//     const response = await http.post(`${myBackEndUrl}/movies/[movie_id]/reviews`, {
//             title: title,
//             movie_id: movieId,
//             year: year,
//             description: index,
//             reviews: [{
//                 title: title,
//                 description: description}],
//                 user_id: year,
//                 score: score
//         });

//         //ez?
//         localStorage.setItem("token", response.data.token);
//         return(response)
//       } catch (error) {
//     if (!error.response) return (error);
//     return error.response;
//   }
// }

// module.exports = {
//   AddMovie,
// }

// // {
// //   headers: {
// //     authorization: localStorage.getItem("sessionId"),
// //   },