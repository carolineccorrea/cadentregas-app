import React, { Component } from 'react';
import api from '../../api';

class Cadastros extends Component {

  state = {
    dados: [],
  }

  async componentDidMount(){
    const response = await api.get('/');
    this.setState({dados: response.data})
    console.log(response.data);
  }

  render(){ 

    const { dados } = this.state

    return (
    <div>
        {dados.map(dado => (
          <li key={dado._id}>
            <strong>Nome</strong>
              {dado.nome}
            <strong>data de Entrega</strong> <br/>
              {dado.dataEntrega}
          </li>
        ))}
    </div>
   );
 } 
}
export default Cadastros;