import React, { Component,useRef } from 'react'
//delete article.jsx and put everything here, make a handlesubmit that 
//updates the exact article in the array
class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articleList: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.tableRef = useRef
  }
  componentDidMount() {
    console.log('Component is mounted')
  }

  // getData = () => {
  //   return {
  //     article:this.state.article,
  //     prix: this.state.prix,
  //     quantity: this.state.quantity,
  //     remise: this.state.remise,
  //   };
  // };
  handleChange (e,_index) {
    console.log(e)
  }
  render() {
    return (
      <tbody ref={this.tableRef}>

      {this.state.factureArticleList &&
this.state.factureArticleList.map((item, index) => (
<tr key={index}>
<td className="px-3"><input type="checkbox" name="" id="" /></td>
<td className="px-3">
<input
            ref={this.articleRefs[index]}
            type="text"
            name="article"
            id={`article${index}`}
            value={this.state.factureArticleList[index].article || ''}
            onChange={(e) => this.handleChange(e, index)}
          />  
  </td>
<td className="px-3">
<input
                  ref={this.articleRefs[index]}

type="number"
name="quantity"
id="quantity"
value={this.state.quantity}
onChange={(e) => this.handleChange(e, index)}
/>
</td>
<td className="px-3">
<input
                  ref={this.articleRefs[index]}

type="number"
name="prix"
id="prix"
value={this.state.prix}
onChange={(e) => this.handleChange(e, index)}
/>
</td>
<td className="px-3">
<input
                  ref={this.articleRefs[index]}

type="number"
name="remise"
id="remise"
value={this.state.remise}
onChange={(e) => this.handleChange(e, index)}
/>
</td>
<td className="px-3">
<input
                  ref={this.articleRefs[index]}

type="text"
name="montant"
id="montant"
readOnly
value={(this.state.prix * this.state.quantity) - ((this.state.prix * this.state.quantity))*(this.state.remise/100)}
onChange={(e) => this.handleChange(e, index)}
/><></>
</td>
</tr>
))}
      </tbody>
    )
  }
  componentDidUpdate(prevProps) {
    console.log('Component is mounted')
  }
}

export default Article
