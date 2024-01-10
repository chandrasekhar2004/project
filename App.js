import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import Sports from './Sports';
import MainPage2 from './MainPage2';
import Internships from './Internships';
import Scholarship from './Scholarship';
import NewsLetter from './NewsLetter';
import InternshipDetails from './InternshipDetails';
import Login from './Login';
import Form from './Form';
import MyCalendar from './MyCalendar';
import OTPEntryPage from './OTPEntryPage';
import ForgetPassword from './ForgetPassword';

const blogInfo = {
  React: {
    post: 'Learn useContext Hooks',
    author: 'B GEETHIKA',
  },
  NodeJS: {
    post: 'Node Commands',
    author: 'B ARJUN',
  },
};
export const BlogContext = React.createContext(blogInfo);

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/otp" element={<OTPEntryPage />} />
          <Route path="/forgot/:email" element={<ForgetPassword />} />
          <Route path="/register" element={<Form />} />
          <Route path="/collegeside" element={<MyCalendar />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/contact" element={<NewsLetter />} />
          <Route path="/scholarships" element={<MainPage2 />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/internships/:internshipId" element={<InternshipDetails />} />
          <Route path="/scholarship" element={<Scholarship />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
