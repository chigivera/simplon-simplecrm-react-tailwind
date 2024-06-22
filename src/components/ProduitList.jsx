import React, { Component } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';
import { DataContext } from '../context/DataContext';

class ProduitList extends Component {
  render() {
    return (
      <DataContext.Consumer>{({produitsData})=>(
        
      <ThemeContext.Consumer>
        {({ isLightTheme, light, dark }) => {
          const theme = isLightTheme ? light : dark;
          return (
            <div className="flex w-full flex-row justify-center p-5 pb-0">
              <table className="table-fixed w-full h-fit" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
                <thead>
                  <tr>
                    <th className="text-start px-2">ID PRODUIT</th>
                    <th className="text-start px-2">PRODUIT</th>
                    <th className="text-start px-2">STOCK</th>
                    <th className="text-start px-2">PRIX</th>
                    {/* <th className="w-10"></th> */}
                    <th className="w-10"></th>
                  </tr>
                </thead>
                <tbody>
                  {produitsData && produitsData.map(article => (
                    <tr key={article._id}>
                      <td className="p-3">{article._id}</td>
                      <td className="p-3">{article.article}</td>
                      <td className="p-3">{article.stock}</td>
                      <td className="p-3">{article.prix}</td>
                      {/* <td className="px-3"><AiOutlineEye /></td> */}
                      <td className="p-3"><FaRegTrashCan /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }}
      </ThemeContext.Consumer>
      )}

      </DataContext.Consumer>
    );
  }
}

export default ProduitList;
