import MainPage from "./MainPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PRDResultPage from './PRDResultPage';


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/prd-result" element={<PRDResultPage />} />
      </Routes>
    </Router>
  );
}