import React, { Component } from 'react';

import api from '../../api';
import {
  Card,
  CardContent,
  Container,
  Button,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = {
  root: {
    maxWidth: 100,

  },
}

class Cadastros extends Component {
  constructor(props){
    super(props);
      this.state = {
      dados: [],
    }
    this.carregar = this.carregar.bind(this);
  }
  async componentDidMount(){
    const response = await api.get('/cadastrar');
    this.setState({dados: response.data})
    console.log(response.data);
  }

  async carregar() {
    const response = await api.get('/cadastrar');
    this.setState({dados: response.data})
    console.log(response.data);


  };

  deletar = (id) => {
    if(window.confirm('tem certeza que deseja deletar?')){
      fetch('http://localhost:8080/cadastrar/'+id, {
        method: 'delete',
        headers: {'Accept': 'application/json',
        'Content-Type': 'application/json'},
      }).then( response => response.json()).then(() => {
          this.carregar();
      })
    }

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
              <Button color="secondary" variant="contained" onClick={()=> this.deletar(dado._id)}><DeleteIcon></DeleteIcon>DELETAR</Button>
          </CardContent>
      </Card>
        ))}
    </Container>
   );
 } 
}
export default withStyles(styles)(Cadastros);