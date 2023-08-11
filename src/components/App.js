import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import NotFound from "../pages/NotFound";
import CreateMeeting from "../pages/Streams/CreateMeeting";
import Layout from "./layouts/Layout";
import VideoStreams from "../pages/Streams/VideoStreams";
import ResetPassword from "../pages/auth/ResetPassword";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import VerifyEmail from "../pages/auth/VerifyEmail";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/create-meeting" element={<CreateMeeting />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/room/:roomID" element={<VideoStreams />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/verify-email" element={<VerifyEmail />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
