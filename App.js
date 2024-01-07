import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import Sports from "./Sports";
import MainPage2 from "./MainPage2";
import Internships from "./Internships";
import Scholarship from "./Scholarship";
import NewsLetter from "./NewsLetter";
import InternshipDetails from "./InternshipDetails";
import Login from "./Login";
import Form from "./Form";
import MyCalendar from "./MyCalendar";
const blogInfo={
  React:{
    post:"Learn useContext Hooks",
    author:"B GEETHIKA"
  },
  NodeJS:{
    post:"Node Commands",
    author:"B ARJUN"
  }
};
export const BlogContext=React.createContext(blogInfo);
function App() {
  return(
<div className="App">
  
<Router>
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Form/>}/>
      <Route path="/collegeside" element={<MyCalendar/>}/>
        <Route path="/sports" element={<Sports />} />
        <Route path="/contact" element={<NewsLetter />}/>
        <Route path="/scholarships" element={<MainPage2/>}/>
        <Route path="/internships" element={<Internships />} />
        <Route path="/internships/:internshipId" element={<InternshipDetails />} />
        <Route path="/scholarship" element={<Scholarship />} />
      </Routes>
    </Router>
 {/*<div>
 <h1>useContext()Demo</h1>
  <BlogContext.Provider value={blogInfo}>
    <BlogContextDemo/>
  </BlogContext.Provider>
  </div>
<ArrayClass/>
   <UseStateDemo/>
<FruitsArray/>
<DigitalClock/>
  <ColorChange/>
  <Counter/>
  <DigitalFun/>
  <FunCounter/>
  <TableForm/>
  <FetchFunctional/>
  <DataFetching/>
  <BMI/>
  <Chat/>*/}
</div>
  );
}

export default App;
