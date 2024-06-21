
// Initialize localStorage
const localStorage = Window.LocalStorage;
const factures = [
    {
      "_id": "666b3867df03285533e56ace",
      "name": "Terry Mcgowan",
      "date": "Thu Apr 15 2010 12:44:04 GMT+0000 (GMT)",
      "ht": "$1,983.29",
      "tva": "$3,044.40",
      "ttc": "$1,792.37"
    },
    {
      "_id": "666b38673770824055fd585b",
      "name": "Spencer Golden",
      "date": "Wed Aug 14 1996 02:04:08 GMT+0000 (GMT)",
      "ht": "$1,094.67",
      "tva": "$2,781.28",
      "ttc": "$1,838.24"
    },
    {
      "_id": "666b38676c1ccfd1a1016c8c",
      "name": "Powell Dodson",
      "date": "Tue Jul 19 1988 10:06:19 GMT+0000 (GMT)",
      "ht": "$3,180.32",
      "tva": "$2,144.45",
      "ttc": "$3,007.98"
    },
    {
      "_id": "666b386734d7ee22031affb5",
      "name": "Patel Pope",
      "date": "Wed Mar 20 2013 21:24:53 GMT+0000 (GMT)",
      "ht": "$3,499.96",
      "tva": "$1,662.72",
      "ttc": "$2,582.57"
    },
    {
      "_id": "666b38676da4ed8bbf16e8a0",
      "name": "Ebony Guerrero",
      "date": "Sun May 03 1970 04:36:23 GMT+0000 (GMT)",
      "ht": "$1,650.94",
      "tva": "$3,494.40",
      "ttc": "$2,428.16"
    },
    {
      "_id": "666b38673882e3346a4eceb4",
      "name": "Frederick Vazquez",
      "date": "Fri Aug 11 2006 10:54:55 GMT+0000 (GMT)",
      "ht": "$2,610.38",
      "tva": "$2,893.04",
      "ttc": "$2,542.95"
    },
    {
      "_id": "666b38679f5a991c52f80b14",
      "name": "Weaver Franks",
      "date": "Thu Mar 01 2007 01:55:17 GMT+0000 (GMT)",
      "ht": "$2,991.53",
      "tva": "$3,004.90",
      "ttc": "$3,305.79"
    }
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
// Function to set items in local storage
function setLocalStorageItem(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Set the data arrays in local storage
  setLocalStorageItem('factures', factures);
  setLocalStorageItem('clients', clients);
  setLocalStorageItem('produits', produits);