// Libraries
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

// Routes
import Index from './routes/Index'
import ExampleRoute from './routes/ExampleRoute'

/**
 * Main app component
 */
function App() {
  return (
    <Router>

      <Routes>
        <Route path='/' element={<Index />}>

          <Route path='/ExampleRoute' element={<ExampleRoute />} />
          
        </Route>
      </Routes>

    </Router>
  )
}

export default App
