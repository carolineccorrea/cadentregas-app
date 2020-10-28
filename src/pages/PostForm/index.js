import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import "./style.css";


export default class PostForm extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      dataEntrega: '',
      pontoPartida: '',
      pontoDestino: ''
    }
    this.cadastrar = this.cadastrar.bind(this);
  }
  
  cadastrar = (e) => {
     e.preventDefault();
     fetch('https://api-deliveries.herokuapp.com/cadastrar', {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: this.state.nome,
          dataEntrega: this.state.dataEntrega,
          pontoPartida: this.state.pontoPartida,
          pontoDestino: this.state.pontoDestino
        })
          }).then( response => response.json()).then(data => {
            if (data){
              alert('enviado com sucesso');
              console.log('enviado com sucesso');
            } else {
              alert('erro ao cadastrar');
            }
          })
        }
     
         
 render(){
    return (
    <Container component="main" maxWidth="sm">
        <form onSubmit={this.cadastrar} className="container-form">
              <label>Cadastrar encomendas</label><br/>
                  <Box m={4}>  
                      <TextField 
                        type="text" 
                        placeholder="Seu nome" 
                        value={this.state.nome} 
                        autoFocus 
                        fullWidth
                        required
                        onChange={(e)=>this.setState({nome: e.target.value})}/>
                  </Box>
                  <Box m={4}>  
                      <TextField 
                        type="date" 
                        placeholder="Data de entrega" 
                        value={this.state.dataEntrega} 
                        autoFocus 
                        fullWidth
                        required
                        onChange={(e)=>this.setState({dataEntrega: e.target.value})}/>
                  </Box>
                  <Box m={4}>  
                      <TextField 
                        type="text" 
                        placeholder="Ponto de Partida" 
                        value={this.state.pontoPartida} 
                        autoFocus 
                        fullWidth
                        required
                        onChange={(e)=>this.setState({pontoPartida: e.target.value})}/>
                  </Box>      
                  <Box m={4}>  
                      <TextField 
                        type="text" 
                        placeholder="Destino" 
                        value={this.state.pontoDestino} 
                        autoFocus 
                        fullWidth
                        required
                        onChange={(e)=>this.setState({pontoDestino: e.target.value})}/>
                  </Box>
                  <Box mx="auto" p={3}>     
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className="btn-cad"
                    >
                    CADASTRAR
                    </Button>                
                    &nbsp;&nbsp;<Link to  ='/cadastros' className="link" >
                      <Button
                        margin="2dp"
                        variant="contained"
                        color="secondary"
                        className="btn-cad"
                      >
                          Lista de Cadastros    
                      </Button>
                    </Link>
                  </Box>  
        </form>
    </Container>
    );
 }
}