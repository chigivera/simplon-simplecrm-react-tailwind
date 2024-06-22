import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AiOutlineEye } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';

class ClientList extends Component {
  static contextType = ThemeContext
  render() {
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
    const { isLightTheme,light ,dark ,toggleTheme} = this.context; // Access the theme context
    const theme = isLightTheme? light : dark
    return (
      <div className="flex w-full flex-row justify-center p-5 pb-0">
      <table className="table-auto w-full h-fit"   style={{backgroundColor:theme.palette.background.default,color:theme.palette.primary.main}}>
      <tr >
          <th className="text-start px-2">ID CLIENT</th>
          <th className="text-start px-2">NOM CLIENT</th>
          <th className="text-start px-2">EMAIL</th>
          <th className="text-start px-2">PHONE</th>
          <th className="text-start px-2">ADDRESS</th>

          {/* <th className="w-10"></th> */}
          <th className="w-10"></th>
      </tr>
      {clients && clients.map(client=>(

      <tr  >
          <td className="px-3">{client._id}</td>
          <td className="px-3">{client.name}</td>
          <td className="px-3">{client.email}</td>
          <td className="px-3">{client.phone}</td>
          <td className="px-3">{client.address}</td>
          {/* <td className=" px-3"><AiOutlineEye/></td> */}
          <td className="px-3"><FaRegTrashCan/></td>
      </tr>
      ))}
      </table>
    </div>
    )
  }
}

export default ClientList