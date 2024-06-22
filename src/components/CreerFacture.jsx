import React, { Component } from 'react';
import  { ThemeContext } from '../context/ThemeContext';
import { AiOutlineEye, AiOutlinePlus } from 'react-icons/ai';
import { FaRegTrashCan } from 'react-icons/fa6';
import CreerClient from './CreerClient';
import { DataContext } from '../context/DataContext';
import { withRouter } from '../withRouter';


class CreerFacture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      factureArticleList: [],
      id_facture: '',
      date_facture: '',
      client: '',
      showCreerClient: false,
      errors:{}
    };
  }

  handleAddArticle = () => {
    this.setState((prevState) => ({
      factureArticleList: [...prevState.factureArticleList, {}],
    }));
  };

  handleDelete = (index) => {
    this.setState((prevState) => ({
      factureArticleList: prevState.factureArticleList.filter((_, i) => i !== index),
    }));
  };

  handleChange = (event, index) => {
    const { name, value } = event.target;
    if (name === "article") {
      const {article,prix,_id} = JSON.parse(value)
      const updatedList = this.state.factureArticleList.map((item, i) =>
        i === index ? { ...item, article,prix,_id } : item
      );
      return this.setState({ factureArticleList: updatedList });

    }
    const updatedList = this.state.factureArticleList.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    this.setState({ factureArticleList: updatedList });
  };

  handleSubmit = (e,facturesData,updateData) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject = Object.fromEntries(formData.entries());

    const handleMontant = (quantity, prix, remise) => {
      const priceAfterDiscount = prix - (prix * (remise / 100));
      return quantity * priceAfterDiscount;
    };

    const taxRate = 0.20;

    const updatedFactureArticleList = this.state.factureArticleList.map((item) => ({
      ...item,
      montant: handleMontant(item.quantity, item.prix, item.remise),
    }));

    const ht = updatedFactureArticleList.reduce((acc, item) => acc + item.montant, 0);
    const tva = ht * taxRate;
    const ttc = ht + tva;

    const combinedData = {
      _id: formDataObject.id_facture,
      date: new Date(formDataObject.date_facture).toUTCString(),
      name: formDataObject.client,
      factureArticleList: updatedFactureArticleList,
      ht: ht.toFixed(2),
      tva: tva.toFixed(2),
      ttc: ttc.toFixed(2),
    };
    updateData('factures',[...facturesData,combinedData])
    return     this.props.navigate('/');


  };

  toggleCreerClient = () => {
    this.setState((prevState) => ({
      showCreerClient: !prevState.showCreerClient,
    }));
  };

  handleClientChange = (e) => {
    if (e.target.value === "createNew") {
      this.toggleCreerClient();
    } else {
      this.setState({ client: e.target.value });
    }
  };

  render() {
      return (
      <DataContext.Consumer>
        {({ facturesData, clientsData, produitsData, updateData }) => (
          <ThemeContext.Consumer>
            {({ isLightTheme, light, dark }) => {
              const theme = isLightTheme ? light : dark;
              return (
                <div className="flex justify-center w-full">
                  <form
                    style={{
                      backgroundColor: theme.palette.background.default,
                      color: theme.palette.primary.main,
                    }}
                    onSubmit={(e) => {
                      this.handleSubmit(e,facturesData,updateData);
                    }}
                    action="/"
                    className="flex flex-col w-full items-center p-6 m-3"
                  >
                    <div className="flex w-full justify-between mb-3 items-end">
                      <div className="form-control flex flex-col">
                        <label htmlFor="id_facture">ID FACTURE</label>
                        <input
                          type="text"
                          className="bg-transparent"
                          name="id_facture"
                          id="id_facture"
                          value={this.state.id_facture}
                          onChange={(e) => this.setState({ id_facture: e.target.value })}
                        />
                      </div>
                      <div className="form-control flex flex-col">
                        <label htmlFor="date_facture">DATE FACTURE</label>
                        <input
                          type="date"
                          className="bg-transparent"
                          name="date_facture"
                          id="date_facture"
                          value={this.state.date_facture}
                          onChange={(e) => this.setState({ date_facture: e.target.value })}
                        />
                      </div>
                      <div className="form-control flex flex-col">
                        <label htmlFor="client">CLIENT</label>
                        <select
                          className="bg-transparent"
                          name="client"
                          id="client"
                          value={this.state.client}
                          onChange={this.handleClientChange}
                        >
                          {clientsData &&
                            clientsData.map((item, index) => (
                              <option key={index} value={item.name}>{item.name}</option>
                            ))}
                          <option value="createNew">Create New Client</option>
                        </select>
                        {this.state.showCreerClient && (
                          <CreerClient handleToggle={this.toggleCreerClient} />
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={this.handleAddArticle}
                        className="px-2 h-10 flex items-center"
                        style={{
                          background: theme.palette.secondary.main, color: theme.palette.background.default
                      }}
                      >
                        <AiOutlinePlus className="mr-3" /> Ajouter Article
                      </button>
                    </div>
                    <div className="flex flex-row w-fit justify-center mb-3">
                      <table className="table-fixed w-full">
                        <thead>
                          <tr>
                            <th className="text-start px-2">ARTICLE</th>
                            <th className="text-start px-2">QUANTITE</th>
                            <th className="text-start px-2">PRIX</th>
                            <th className="text-start px-2">REMISE</th>
                            <th className="text-start px-2">MONTANT</th>
                            <th className="w-10 px-2"></th>
                            <th className="w-10 px-2"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {this.state.factureArticleList.map((item, index) => (
                            <tr key={index}>
                              <td className="px-3">
                                <select
                                  onChange={(e) => this.handleChange(e, index)}
                                  name="article"
                                  id={`article${index}`}
                                  className="bg-transparent"
                                >
                                  <option value="">Selectionner</option>
                                  {produitsData &&
                                    produitsData.map((article, i) => (
                                      <option key={i} value={JSON.stringify(article)}>
                                        {article.article}
                                      </option>
                                    ))}
                                </select>
                              </td>
                              <td className="px-3">
                                <input
                                  type="number"
                                  name="quantity"
                                  id={`quantity${index}`}
                                  className="bg-transparent"
                                  value={item.quantity}
                                  onChange={(e) => this.handleChange(e, index)}
                                />
                              </td>
                              <td className="px-3">
                                <input
                                  type="number"
                                  name="prix"
                                  id={`prix${index}`}
                                  className="bg-transparent"
                                  readOnly
                                  value={item.prix}
                                  onChange={(e) => this.handleChange(e, index)}
                                />
                              </td>
                              <td className="px-3">
                                <input
                                  type="number"
                                  name="remise"
                                  id={`remise${index}`}
                                  className="bg-transparent"
                                  value={item.remise}
                                  onChange={(e) => this.handleChange(e, index)}
                                />
                              </td>
                              <td className="px-3">
                                <input
                                  type="text"
                                  name="montant"
                                  className="bg-transparent"
                                  id={`montant${index}`}
                                  readOnly
                                  value={(item.prix * item.quantity) - ((item.prix * item.quantity) * (item.remise / 100))}
                                />
                              </td>
                              <td className="px-5">
                              </td>
                              <td className="px-3" onClick={() => this.handleDelete(index)}>
                                <FaRegTrashCan />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="flex flex-row w-full justify-end items-end">
                      <input
                        className="px-2 h-10"
                        style={{
                          background: theme.palette.secondary.main, color: theme.palette.background.default
                      }}
                        type="submit"
                        value="Terminer"
                      />
                    </div>
                  </form>
                </div>
              );
            }}
          </ThemeContext.Consumer>
        )}
      </DataContext.Consumer>
    );
  }
}

export default withRouter(CreerFacture);
