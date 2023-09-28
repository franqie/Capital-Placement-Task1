import './App.css';
import { Routes, Route } from "react-router-dom";
import Layout from './components/layout/Layout';
import AppForm from './components/app-form/AppForm';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Layout /> }>
          <Route path="/program-details" element={ <p>Program details</p> } />
          <Route index element={ <AppForm /> } />
          <Route path="/workflow" element={ <p>Workflow</p> } />
          <Route path="/preview" element={ <p>Preview</p> } />
        </Route>
      </Routes>        
    </div>
  );
}

export default App;
