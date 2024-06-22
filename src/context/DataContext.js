import React, { createContext,Component } from "react"

// Initialize localStorage
const factures = [
   
  ]

  const clients = [
    {
      "_id": "666ddefa4ba4c50150130608",
      "name": "Hendrix Underwood",
      "email": "hendrixunderwood@sentia.com",
      "phone": "+212 (833) 449-2821",
      "address": "440 Amersfort Place, Martinez, Rhode Island, 1542"
    },
    {
      "_id": "666ddefa331310a38eab8d32",
      "name": "Edna Mathews",
      "email": "ednamathews@sentia.com",
      "phone": "+212 (878) 405-2100",
      "address": "212 Bath Avenue, Leeper, Virgin Islands, 2893"
    },
    {
      "_id": "666ddefa7cd2c3ae19a219ff",
      "name": "Caitlin Hubbard",
      "email": "caitlinhubbard@sentia.com",
      "phone": "+212 (868) 589-3612",
      "address": "633 Harden Street, Waukeenah, Palau, 8906"
    },
    {
      "_id": "666ddefa0ccc826c4a6e4977",
      "name": "Harmon Patton",
      "email": "harmonpatton@sentia.com",
      "phone": "+212 (970) 583-3712",
      "address": "334 Ralph Avenue, Bridgetown, Mississippi, 3863"
    },
    {
      "_id": "666ddefae245788200eb3d11",
      "name": "Myrtle Washington",
      "email": "myrtlewashington@sentia.com",
      "phone": "+212 (877) 559-3394",
      "address": "424 Myrtle Avenue, Diaperville, Hawaii, 9881"
    },
    {
      "_id": "666ddefa9c0c9d46e96709c4",
      "name": "Battle Erickson",
      "email": "battleerickson@sentia.com",
      "phone": "+212 (958) 511-3440",
      "address": "312 Clermont Avenue, Gratton, Northern Mariana Islands, 6879"
    },
    {
      "_id": "666ddefa6016b40690ad1918",
      "name": "Erna Estes",
      "email": "ernaestes@sentia.com",
      "phone": "+212 (971) 485-3166",
      "address": "545 Story Street, Woodruff, Illinois, 9895"
    }
  ]

  const produits = [
    {
      "_id": "666dd60ed7beed408832ceda",
      "article": "ex",
      "stock": 22,
      "prix": "400"
    },
    {
      "_id": "666dd60eacff3a437df82178",
      "article": "consequat",
      "stock": 28,
      "prix": "200"
    },
    {
      "_id": "666dd60e3bb31db7f42c25fb",
      "article": "aliquip",
      "stock": 21,
      "prix": "300"
    },
    {
      "_id": "666dd60e4ccc0613095be26a",
      "article": "veniam",
      "stock": 36,
      "prix": "367"
    },
    {
      "_id": "666dd60e2d78c561ad701f48",
      "article": "consectetur",
      "stock": 30,
      "prix": "300"
    }
  ]

  function initializeLocalStorage() {
    if (!localStorage.getItem('factures')) {
        localStorage.setItem('factures', JSON.stringify(factures));
    }
    if (!localStorage.getItem('clients')) {
        localStorage.setItem('clients', JSON.stringify(clients));
    }
    if (!localStorage.getItem('produits')) {
        localStorage.setItem('produits', JSON.stringify(produits));
    }
}

// Call the initialization function
initializeLocalStorage();

export const DataContext = createContext()

export default class DataContextProvider extends Component {
    constructor(props) {
        super(props);

        // Load data from localStorage or use sample data if not available
        const facturesData = JSON.parse(localStorage.getItem('factures')) || factures;
        const clientsData = JSON.parse(localStorage.getItem('clients')) || clients;
        const produitsData = JSON.parse(localStorage.getItem('produits')) || produits;

        this.state = {
            facturesData,
            clientsData,
            produitsData
        };

        // Bind the update method
        this.updateData = this.updateData.bind(this);
    }
    getRevenue() {
      return this.state.facturesData.reduce((total, facture) => {
        return total + parseFloat(facture.ttc.replace(/,/g, ''));
      }, 0).toFixed(2);
    }
  
    getTotalClient() {
      return this.state.clientsData.length;
    }
  
    getTotalFacture() {
      return this.state.facturesData.length;
    }
    getTotalProduit() {
      return this.state.produitsData.length;
    }
    getMostPopularProduit() {
      return this.state.produitsData.reduce((max, produit) => {
        return produit.stock > max.stock ? produit : max;
      }, this.state.produitsData[0]);
    }
  
    getLowestStockProduit() {
      return this.state.produitsData.reduce((min, produit) => {
        return produit.stock < min.stock ? produit : min;
      }, this.state.produitsData[0]);
    }
    // Method to update localStorage when state changes
    updateData(key, value) {
        this.setState({ [key]: value }, () => {
            localStorage.setItem(key, JSON.stringify(value));
        });
    }
    render() {

        return (
            <DataContext.Provider value={{
                facturesData: this.state.facturesData,
                clientsData: this.state.clientsData,
                produitsData: this.state.produitsData,
                updateData: this.updateData, // Pass the update method to context
                getRevenue: this.getRevenue.bind(this),
                getTotalClient: this.getTotalClient.bind(this),
                getMostPopularProduit: this.getMostPopularProduit.bind(this),
                getLowestStockProduit: this.getLowestStockProduit.bind(this),
                getTotalFacture:this.getTotalFacture.bind(this),
                getTotalProduit:this.getTotalProduit.bind(this)
            }}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}


