import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Componets/Shared/Footer/Footer';
import Home from './Componets/Pages/Home/Home';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivacyPolicy from './Componets/Pages/PrivacyPolicy/PrivacyPolicy';
import Trainer from './Componets/Pages/Trainer/Trainer';
import Admission from './Componets/Pages/Admission/Admission';
import Gallery from './Componets/Pages/Gallery/Gallery';
import Story from './Componets/Pages/Story/Story';
import ScrollRebot from './Componets/Shared/ScrollRebot/ScrollRebot';
import NoMatch from './Componets/Shared/NoMatch/NoMatch';
import ScrollToTop from './Componets/Shared/ScrollToTop/ScrollToTop';
import Contact from './Componets/Pages/Contact/Contact';
import About from './Componets/Pages/About/About';
import PreLoder from './Componets/PreLoader/PreLoder';
import DashBoard from './Componets/DashBoard/DashBoard';
import DashHome from './Componets/DashBoard/DashHome/DashHome';
import Login from './Componets/Authentication/Login/Login';
import Register from './Componets/Authentication/Register/Register';
import FindAccount from './Componets/Authentication/PassForget/FindAccount';
import ForgetPassword from './Componets/Authentication/PassForget/ForgetPassword';
import AllUsers from './Componets/DashBoard/AllUsers/AllUsers';
import ContactList from './Componets/DashBoard/ContactList/ContactList';
import Navbar from './Componets/Shared/Navbar/Navbar';
import DashGallery from './Componets/DashBoard/DashGallery/DashGallery';
import Review from './Componets/DashBoard/Review/Review';
import AddReview from './Componets/Pages/Home/AddReview/AddReview';
import Notice from './Componets/DashBoard/Notice/Notice';
import HomeNotice from './Componets/Pages/HomeNotice/HomeNotice';
import ProtectedRoute from './Componets/ProtectedRoute/ProtectedRoute';
import NoticeDetails from './Componets/Pages/HomeNotice/NoticeDetails';
import ManagmentNotice from './Componets/DashBoard/Notice/ManagmentNotice';
import Profile from './Componets/Authentication/Profile/Profile';
import Admin from './Componets/DashBoard/Admin/Admin';






const App = () => {
  const [loadding, setLoadding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadding(false);
    }, 1000);
  })

  return (
    <>
      {
        loadding ? <PreLoder />
          :

          <BrowserRouter>
            <ScrollRebot />
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>

              {/* ============ All Pages Start Form Here========== */}
              <Route path='/privacy-policy' element={<PrivacyPolicy />}></Route>
              <Route path='/trainer' element={<Trainer />}></Route>
              <Route path='/admission' element={<Admission />}></Route>
              <Route path='/story' element={<Story />}></Route>
              <Route path='/gallery' element={<Gallery />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/all-notice' element={<HomeNotice />}></Route>
              <Route path='/notice-details/:id' element={<NoticeDetails />}></Route>
              <Route path='/add-review' element={<AddReview />}></Route>
              {/* ============ All Pages Start Form Here========== */}

              {/* ===========DashBoard Start========== */}
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              <Route path='/find-account' element={<FindAccount />}></Route>
              <Route path='/forget-password' element={<ForgetPassword />}></Route>
              <Route path='/profile' element={<Profile />}></Route>

              <Route element={<ProtectedRoute />}>
                <Route path='/dashboard' element={<DashBoard />}>
                  <Route index element={<DashHome />}></Route>
                  <Route path='/dashboard/all-users' element={<AllUsers />}></Route>
                  <Route path='/dashboard/contact-list' element={<ContactList />}></Route>
                  <Route path='/dashboard/upload-gallrey' element={<DashGallery />}></Route>
                  <Route path='/dashboard/review' element={<Review />}></Route>
                  <Route path='/dashboard/notice' element={<Notice />}></Route>
                  <Route path='/dashboard/notice-management' element={<ManagmentNotice />}></Route>
                  <Route path='/dashboard/admin-access' element={<Admin />}></Route>
                </Route>
              </Route>
              {/* ===========DashBoard End========== */}

              {/* =======404 Page======= */}
              <Route path='*' element={<NoMatch />}></Route>

            </Routes>

            {/* =========Footer Added ========= */}
            <Footer />
            {/* =========Toastify Added ========= */}
            <ToastContainer />

          </BrowserRouter>
      }
    </>

  );
};

export default App;