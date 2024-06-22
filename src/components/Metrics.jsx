import React, { Component } from 'react';
import Metric from './Metric';
import { DataContext } from '../context/DataContext';
import { AiFillDollarCircle,AiFillCodeSandboxCircle, AiFillSmile, AiFillFire } from "react-icons/ai";

export class Metrics extends Component {
  render() {
    return (
      <DataContext.Consumer>
        {({ getRevenue, getTotalClient, getMostPopularProduit, getLowestStockProduit, getTotalFacture, getTotalProduit }) => {
          const revenue = getRevenue();
          const totalClients = getTotalClient();
          const totalProduits = getTotalProduit();
          const totalFactures = getTotalFacture();
          const mostPopularProduit = getMostPopularProduit();
          const lowestStockProduit = getLowestStockProduit();
          
          const metrics = [
            {
              title: 'Revenue',
              icon: <AiFillDollarCircle />,
              data: `$${revenue}`,
              records: totalFactures,
            },
            {
              title: 'Total Clients',
              icon:<AiFillSmile />              ,
              data: totalClients,
              records: totalClients,
            },
            {
              title: 'Most Popular Product',
              icon: <AiFillFire />,
              data: mostPopularProduit.article,
              records: mostPopularProduit.stock,
            },
            {
              title: 'Lowest Stock Product',
              icon:  <AiFillCodeSandboxCircle />,
              data: lowestStockProduit.article,
              records: lowestStockProduit.stock,
            }
          ];

          return (
            <div className="flex px-3 pt-5">
              {metrics.map((metric, index) => (
                <Metric 
                  key={index} 
                  title={metric.title} 
                  icon={metric.icon} 
                  data={metric.data} 
                  records={metric.records} 
                />
              ))}
            </div>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default Metrics;
