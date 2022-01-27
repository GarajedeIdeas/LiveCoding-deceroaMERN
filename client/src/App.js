import './App.css'
import IndexPage from './pages/IndexPage/IndexPage'
import CoastersPage from './pages/CoastersPage/CoastersPage'
import CoasterDetails from './pages/CoasterDetails/CoasterDetails'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="container">

      <Routes>

        <Route path="/" element={<IndexPage />} />
        <Route path="/galeria" element={<CoastersPage />} />
        <Route path="/detalles/:coaster_id" element={<CoasterDetails />} />

      </Routes>

    </div>
  )
}

export default App;
