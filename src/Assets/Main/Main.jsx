import React, { Component } from 'react'
import axios from "axios";
import Navbarr from '../Navv/Navbarr';
export default class Main extends Component {
    state = {
        allMovies: [],
      };
      async getAllMovies() {
        const { data } = await axios.get(
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYmZkYjFhYjE1NWI4ZmE0MGI2M2ViYzc1YTYyYWI0NCIsIm5iZiI6MTcwOTU5NTA3NS4yMDg5OTk5LCJzdWIiOiI2NWU2NTljM2RiOTUyZDAxNjNiNzZhYzUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.dqN5yecSe-zSxhvvqRexxlSkzdeuUHoz3JdBMLe50nM",
            },
          }
        );
    
        console.log(data);
        let commingArray = data.results;
        console.log(commingArray);
        this.setState({ allMovies: commingArray });
        console.log(this.state.allMovies);
      }
      componentDidMount() {
        this.getAllMovies();
      }
      render() {
        return (
          <>
            {this.state.allMovies.length > 0 ? (
              <>
                <Navbarr />
                <div className="container p-4">
                  <div className="row">
                    <h4>Explore</h4>
                    <p className="text-grey">What are you gonna watch today?</p>
    
                    <div className="bigImg">
                      <img
                        src={
                          "https://image.tmdb.org/t/p/original/" +
                          this.state.allMovies[1].poster_path
                        }
                        className=" first-img"
                        alt="girl wearing a dress"
                      />
                    </div>
                    <h3 className="mb-3">New Release</h3>
                    <div className="container">
                      <div className="row g-4">
                        {this.state.allMovies.map((movie) => {
                          return (
                            <div
                              key={movie.id}
                              className="  col-sm-12 col-md-6 col-lg-4"
                            >
                              <div className=" card " style={{ width: "21rem" }}>
                                {" "}
                                <img
                                  src={
                                    "https://image.tmdb.org/t/p/original/" +
                                    movie.poster_path
                                  }
                                  className="card-img-top "
                                  alt={movie.title}
                                />
                                <div className="card-body">
                                  <h6 className="card-title text-center">
                                    {movie.title}
                                  </h6>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="loading w-100 layer vh-100 d-flex justify-content-center align-items-center">
                <div class="spinner-border text-info" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </>
        );
      }
}
