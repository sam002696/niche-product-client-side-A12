import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Paths/Home/Home';
import Products from './Components/Paths/Products/Products';
import Dashboard from './Components/Paths/Dashboard/Dashboard';
import Login from './Components/Paths/Login/Login';
import BookingDetails from './Components/Paths/BookingDetails/BookingDetails';
import AuthProvider from './ContextApi/AuthProvider';
import AboutUs from './Components/Paths/AboutUs/AboutUs';
import PrivateRoute from './Components/Paths/PrivateRoute/PrivateRoute';
import NotFound from './Components/Paths/NotFound/NotFound';
function App() {
  return (
    <AuthProvider>
      <Router>
        <div className='flex flex-col min-h-screen justify-between'>
          <Header></Header>
          <Switch>

            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/products">
              <Products></Products>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <Route path="/addnewbooking">

            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <PrivateRoute path="/bookingDetail/:bookingID">
              <BookingDetails></BookingDetails>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </div>

      </Router>
    </AuthProvider>
  );
}

export default App;
