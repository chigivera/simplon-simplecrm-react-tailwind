import React, { Component } from 'react';
import { AiOutlineEye } from "react-icons/ai";
import { FaRegTrashCan } from "react-icons/fa6";
import { ThemeContext } from '../context/ThemeContext';
import { DataContext } from '../context/DataContext';
import DetailsFacture from './DetailsFacture';

class FactureList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detailsVisibleFor: null, // Store the ID of the facture whose details are visible
      articles: null, // Store the articles of the selected facture
    };
  }

  toggleDetails = (id, articles) => {
    this.setState((prevState) => ({
      detailsVisibleFor: prevState.detailsVisibleFor === id ? null : id,
      articles: prevState.detailsVisibleFor === id ? null : articles,
    }));
  };

  render() {
    console.log(this.state.articles)
    return (
      <DataContext.Consumer>
        {(dataContext) => {
          const { facturesData } = dataContext;
          return (
            <ThemeContext.Consumer>
              {(themeContext) => {
                const { isLightTheme, light, dark } = themeContext;
                const theme = isLightTheme ? light : dark;
                return (
                  <div className="flex w-fit flex-row justify-center p-5 pb-0">
                    <table className="table-auto w-full h-fit" style={{ backgroundColor: theme.palette.background.default, color: theme.palette.primary.main }}>
                      <thead>
                        <tr>
                          <th className="text-start px-2">ID FACTURE</th>
                          <th className="text-start px-2">CLIENT</th>
                          <th className="text-start px-2">DATE</th>
                          <th className="text-start px-2">H.T</th>
                          <th className="text-start px-2">TVA</th>
                          <th className="text-start px-2">TTC</th>
                          <th></th>
                          <th></th>
                        </tr>
                      </thead>
                      <tbody>
                        {facturesData && facturesData.map((facture) => (
                          <React.Fragment key={facture._id}>
                            <tr>
                              <td className="px-3">{facture._id}</td>
                              <td className="px-3">{facture.name}</td>
                              <td className="px-3">{facture.date}</td>
                              <td className="px-3">{facture.ht}</td>
                              <td className="px-3">{facture.tva}</td>
                              <td className="px-3">{facture.ttc}</td>
                              <td className="px-3">
                                <AiOutlineEye onClick={() => this.toggleDetails(facture._id, facture.factureArticleList)} />
                              </td>
                              <td className="px-3">
                                <FaRegTrashCan />
                              </td>
                            </tr>
                            {this.state.detailsVisibleFor === facture._id && (
                              <tr>
                                <td colSpan="8">
                                  <DetailsFacture handleToggle={() => this.toggleDetails(null, null)} articles={this.state.articles} />
                                </td>
                              </tr>
                            )}
                          </React.Fragment>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );
              }}
            </ThemeContext.Consumer>
          );
        }}
      </DataContext.Consumer>
    );
  }
}

export default FactureList;
