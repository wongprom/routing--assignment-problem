import React, { Component } from 'react';
import { BrowserRouter, Route, NavLink, Switch, Redirect } from 'react-router-dom';
import Users from './containers/Users/Users'
import Courses from './containers/Courses/Courses'
import Course from './containers/Course/Course'




class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <ul style={{ listStyleType: 'none' }}>
              <li>
                <NavLink
                  to="/Users"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "orange",
                    textDecoration: "underline"
                  }}
                >Users</NavLink>
              </li>
              <li>
                <NavLink
                  to="/Courses"
                  exact
                  activeClassName="active"
                  activeStyle={{
                    color: "orange",
                    textDecoration: "underline"
                  }}
                >Courses</NavLink>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/users" component={Users} />
            <Route path="/courses" component={Courses} />
            <Redirect from="/all-courses" to="/courses" />
            <Route render={() => {
              return (
                <h1>Page not Found</h1>
              )
            }} />
          </Switch>

          {/* <Route path="/courses/:id" component={Course} /> */}

          <h3>
            <ol style={{ textAlign: 'left' }}>
              <li style={{ textDecoration: 'line-through' }}>Add Routes to load "Users" and "Courses" on different pages (by entering a URL, without Links)</li>
              <li style={{ textDecoration: 'line-through' }}>Add a simple navigation with two links => One leading to "Users", one leading to "Courses"</li>
              <li style={{ textDecoration: 'line-through' }}>Make the courses in "Courses" clickable by adding a link and load the "Course" component in the place of "Courses" (without passing any data for now)</li>
              <li style={{ textDecoration: 'line-through' }}>Pass the course ID to the "Course" page and output it there</li>
              <li style={{ textDecoration: 'line-through' }}>Pass the course title to the "Course" page - pass it as a param or score bonus points by passing it as query params (you need to manually parse them though!)</li>
              <li style={{ textDecoration: 'line-through' }}>Load the "Course" component as a nested component of "Courses"</li>
              <li style={{ textDecoration: 'line-through' }}>Add a 404 error page and render it for any unknown routes</li>
              <li style={{ textDecoration: 'line-through' }}>Redirect requests to /all-courses to /courses (=> Your "Courses" page)</li>
            </ol>
          </h3>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
