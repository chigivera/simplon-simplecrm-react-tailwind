import React, { Component } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

export class ArticleList extends Component {
  render() {
    const { articles, handleToggle } = this.props;
    console.log(articles)
    return (
      <div className="flex justify-center items-center pt-20 backdrop-blur-sm bg-opacity-10 bg-slate-900 w-full h-full z-1 absolute top-0 left-0">
        <div className="flex flex-col bg-white p-5 rounded shadow-lg m-10">
          <button onClick={handleToggle} className="self-end"><AiOutlineClose/></button>
          <h2 className="text-black mb-4">Articles</h2>
          {articles && articles.length > 0 ? (
            <table className="table-fixed w-full h-fit"  >
            <tr >
            <th className="text-start px-2">ID ARTICLE</th>

                <th className="text-start px-2">ARTICLE</th>
                <th className="text-start px-2">QUANTITY</th>
                <th className="text-start px-2">PRIX</th>
                
        
            </tr>

            {articles.map((item, index) => (
            <tr >
                <td className="px-3">{item._id}</td>
                <td className="px-3">{item.article}</td>
                <td className="px-3">{item.quantity}</td>
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

export default ArticleList;



// import React, { Component } from 'react';
// import { ThemeContext } from '../context/ThemeContext';
// import { AiOutlineEye } from 'react-icons/ai';
// import { FaRegTrashCan } from 'react-icons/fa6';
// import { DataContext } from '../context/DataContext';

// class ArticleList extends Component {
//   render() {
//     return (
//       <DataContext.Consumer>{({produitsData})=>(
        
//       <ThemeContext.Consumer>
//         {({ isLightTheme, light, dark }) => {
//           const theme = isLightTheme ? light : dark;
//           return (
//             <div className="flex w-full flex-row justify-center p-5 pb-0">
//               <table className="table-fixed w-full h-fit" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
//                 <thead>
//                   <tr>
//                     <th className="text-start px-2">ID PRODUIT</th>
//                     <th className="text-start px-2">PRODUIT</th>
//                     <th className="text-start px-2">STOCK</th>
//                     <th className="text-start px-2">PRIX</th>
//                     {/* <th className="w-10"></th> */}
//                     <th className="w-10"></th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {produitsData && produitsData.map(article => (
//                     <tr key={article._id}>
//                       <td className="p-3">{article._id}</td>
//                       <td className="p-3">{article.article}</td>
//                       <td className="p-3">{article.stock}</td>
//                       <td className="p-3">{article.prix}</td>
//                       {/* <td className="px-3"><AiOutlineEye /></td> */}
//                       <td className="p-3"><FaRegTrashCan /></td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           );
//         }}
//       </ThemeContext.Consumer>
//       )}

//       </DataContext.Consumer>
//     );
//   }
// }

// export default ArticleList;
