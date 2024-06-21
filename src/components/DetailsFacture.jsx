import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export class DetailsFacture extends Component {
  render() {
    const { articles, handleToggle } = this.props;
    console.log(articles)
    return (
      <div className="flex justify-center items-center pt-20 backdrop-blur-sm bg-opacity-10 bg-slate-900 w-full h-full z-1 absolute top-0 left-0">
        <div className="flex flex-col bg-white p-5 rounded shadow-lg">
          <button onClick={handleToggle} className="self-end"><AiOutlineClose/></button>
          <h2 className="text-black mb-4">Articles</h2>
          {articles && articles.length > 0 ? (
            <table className="table-fixed w-full h-fit"  >
            <tr >
                <th className="text-start px-2">ID ARTICLE</th>
                <th className="text-start px-2">ARTICLE</th>
                <th className="text-start px-2">STOCK</th>
                <th className="text-start px-2">PRIX</th>
                
        
            </tr>

            {articles.map((item, index) => (
            <tr >
                <td className="px-3">{item._id}</td>
                <td className="px-3">{item.article}</td>
                <td className="px-3">{item.stock}</td>
                <td className="px-3">{item.prix}</td>
        
            </tr>
            ))}
            </table>
          ) : (
            <p className="text-black">No articles available</p>
          )}
        </div>
      </div>
    );
  }
}

export default DetailsFacture;
