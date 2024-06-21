import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';

class ArticleList extends Component {
  static contextType = ThemeContext
  render() {
    const articles = [
      {
        "_id": "666dd60ed7beed408832ceda",
        "article": "ex",
        "stock": 22,
        "prix": "$2,477.62"
      },
      {
        "_id": "666dd60eacff3a437df82178",
        "article": "consequat",
        "stock": 28,
        "prix": "$1,913.93"
      },
      {
        "_id": "666dd60e3bb31db7f42c25fb",
        "article": "aliquip",
        "stock": 21,
        "prix": "$3,870.13"
      },
      {
        "_id": "666dd60e4ccc0613095be26a",
        "article": "veniam",
        "stock": 36,
        "prix": "$3,677.33"
      },
      {
        "_id": "666dd60e2d78c561ad701f48",
        "article": "consectetur",
        "stock": 30,
        "prix": "$1,556.57"
      }
    ]
    const { isLightTheme,light ,dark ,toggleTheme} = this.context; // Access the theme context
    const theme = isLightTheme? light : dark
    return (
      <div className="flex w-full flex-row justify-center p-5 pb-0">
      <table className="table-fixed w-full h-fit"   style={{backgroundColor:theme.palette.background.default,color:theme.palette.primary.main}}>
      <tr >
          <th className="text-start px-2">ID ARTICLE</th>
          <th className="text-start px-2">ARTICLE</th>
          <th className="text-start px-2">STOCK</th>
          <th className="text-start px-2">PRIX</th>
          
          <th className="w-10"></th>
          <th className="w-10"></th>
      </tr>
      {articles && articles.map(article=>(
      <tr >
          <td className="px-3">{article._id}</td>
          <td className="px-3">{article.article}</td>
          <td className="px-3">{article.stock}</td>
          <td className="px-3">{article.prix}</td>
  
          <td className=" px-3"><AiOutlineEye/></td>
          <td className="px-3"><FaRegTrashCan/></td>
      </tr>
      ))}
      </table>
    </div>
    )
  }
}

export default ArticleList