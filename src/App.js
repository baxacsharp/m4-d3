import 'bootstrap/dist/css/bootstrap.min.css'
// import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import Home from './components/SingleBook'
import './App.css';

function App() {
  return (
    <div >
      <MyBadge text="MyProfile" color="red" />
      <Home />
      {/* <WarningSign text = "Awws You got Some errors to fix this" /> */}
    </div>
  );
}

export default App;
