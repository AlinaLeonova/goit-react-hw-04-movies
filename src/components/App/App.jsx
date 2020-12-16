import React from "react"
import { Switch, Route } from "react-router-dom"
import HomePage from "../../pages/HomePage"
import MoviesPage from "../../pages/MoviesPage"
import NotFoundPage from "../../pages/NotFoundPage"
import MovieDetailsPage from "../../pages/MovieDetailsPage"
import Layout from "../Layout"


const App = () => (
  <Layout>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/movies" exact component={MoviesPage} />
      <Route path="/movies/:movieId" component={MovieDetailsPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </Layout>
)


export default App

