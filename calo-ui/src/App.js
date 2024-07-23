import './App.css';
import Job from "./Job"
import JobSearch from './JobSearch';

function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} >
      <Job />
      <JobSearch />
    </div>
  );
}

export default App;
