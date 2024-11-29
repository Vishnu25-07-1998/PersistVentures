import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Alliance from "./pages/Alliance";

function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='' element={<Alliance />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
