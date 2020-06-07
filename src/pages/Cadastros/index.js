import React, { Component } from 'react';

import api from '../../api';
import {
  Card,
  CardContent,
  Container,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    maxWidth: 100,

  },
}

class Cadastros extends Component {

  state = {
    dados: [],
  }

  async componentDidMount(){
    const response = await api.get('/cadastrar');
    this.setState({dados: response.data})
    console.log(response.data);
  }

  render(){ 

    const { dados } = this.state
    //const { classes } = this.props;

    return (

    <Container>
       {dados.map(dado => (
       <Card className="styles.root"
              variant="outlined"
              style={{ marginTop: 10, maxWidth:400, marginLeft:400 }} key={dado._id}>
          <CardContent>
              <p>Nome: {dado.nome}</p>
              <p>Data de entrega: {dado.dataEntrega}</p>
              <p>Partida: {dado.pontoPartida}</p>
              <p>Destino: {dado.pontoDestino}</p>
          </CardContent>
      </Card>
        ))}
    </Container>
   );
 } 
}
export default withStyles(styles)(Cadastros);