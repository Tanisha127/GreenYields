import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import NotFound from './landing_page/NotFound';
import Home from './landing_page/Home';
import Solutions from './landing_page/Solutions';
import Wizard from './landing_page/Wizard';
import Problem from './landing_page/Problem';
import Stories from './landing_page/Stories';
import Impact from './landing_page/Impact';
import Knowledge from './landing_page/Knowledge';
import Partners from './landing_page/Partners';
import Carbon from './landing_page/Carbon';
import Contact from './landing_page/Contact';

import { ImpactProvider } from './ImpactContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ImpactProvider>  
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/problem" element={<Problem />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/wizard" element={<Wizard />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/knowledge" element={<Knowledge />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/carbon" element={<Carbon />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </ImpactProvider>
);
