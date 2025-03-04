import HomeLayout from './components/layouts/homeLayout'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import AllNotes from './pages/Notes/AllNotes.jsx'
import NoteForm from './pages/Notes/NoteForm.jsx'
import toast, { Toaster } from 'react-hot-toast';

function App() {

  return (<>
    <Toaster />
    <Routes>
      <Route path="/" element={<HomeLayout />} >
        <Route path="AllNotes" element={<AllNotes />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="add" element={<NoteForm />} />

      </Route>
    </Routes>
  </>
  )
}

export default App
