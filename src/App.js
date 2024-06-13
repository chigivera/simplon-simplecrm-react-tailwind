import React from 'react';
import ThemeContextProvider from './context/ThemeContext';
import Layout from './Layout';
import './index.css'
import { Routes,Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Layout>
          <Routes>
            <Route path='/' element={<h1>main</h1>}/>
            <Route path='/factures' element={<h1>factures</h1>}/>
            <Route path='/produits' element={<h1>produits</h1>}/>
            <Route path='/clients' element={<h1>clients</h1>}/>
            <Route path='/*' element={<Navigate replace to="/" />} />

          </Routes>
        </Layout>
      </ThemeContextProvider>
    </div>
  );
}

export default App;