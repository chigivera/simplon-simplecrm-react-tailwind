import React,{Component} from 'react';
import ThemeContextProvider from './context/ThemeContext';
import Layout from './Layout';
import './index.css'
import { Routes,Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FactureList from './components/FactureList';
import CreerFacture from './components/CreerFacture';
import ArticleList from './components/ArticleList';
import ClientList from './components/ClientList';
import CreerClient from './components/CreerClient';
class App extends Component {
  render() {

    return (
      <div className="App">
        <ThemeContextProvider>
          <Layout>
            <Routes>
              <Route path='/'  element={<Dashboard/>}/>
              <Route path='/factures' element={<FactureList/>}/>
              <Route path='/produits' element={<ArticleList/>}/>
              <Route path='/clients' element={<ClientList/>}/>
              <Route path='/settings' element={<h1>Settings</h1>}/>
              <Route path='/ajouterFacture' element={<CreerFacture/>}/>
              <Route path='/ajouterClient' element={<CreerClient/>}/>
              <Route path='/*' element={<Navigate replace to="/" />} />
  
            </Routes>
          </Layout>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;