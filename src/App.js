import 'bootstrap/dist/css/bootstrap.min.css'
import WarningSign from './components/WarningSign'
import MyBadge from './components/MyBadge'
import FilterBookList from './components/FilterBookList'
import './App.css';

function App() {
  return (
    <div >
      <MyBadge text="MyProfile" color="red" />
      <WarningSign text = "Awws You got Some errors to fix this" />
      <FilterBookList />
      
    </div>
  );
}

export default App;
