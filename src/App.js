import React,{Component} from 'react';
import ThemeContextProvider from './context/ThemeContext';
import Layout from './Layout';
import './index.css'
import { Routes,Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FactureList from './components/FactureList';
import ClientList from './components/ClientList';
import CreerClient from './components/CreerClient';
import ProduitList from './components/ProduitList';
import AjouterDetailsFacture from './components/AjouterDetailsFacture';
class App extends Component {
  render() {
    const router = [
      { title: 'Dashboard', path: '/', element: <Dashboard /> },
      { title: 'Factures', path: '/factures', element: <FactureList /> },
      { title: 'Produits', path: '/produits', element: <ProduitList /> },
      { title: 'Clients', path: '/clients', element: <ClientList /> },
      { title: 'Settings', path: '/settings', element: <h1>Settings</h1> },
      { title: 'Créer Facture', path: '/ajouterFacture', element: <AjouterDetailsFacture /> },
      { title: 'Créer Client', path: '/ajouterClient', element: <CreerClient /> },
      { title: 'Not Found', path: '/*', element: <Navigate replace to="/" /> }
    ];

    return (
      <div className="App">
        <ThemeContextProvider>
            <Routes>
            {router.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout title={route.title}>
                    {route.element}
                  </Layout>
                }
              />
            ))}
            </Routes>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;