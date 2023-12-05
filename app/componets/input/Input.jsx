export class Input extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(inp1) {
      this.setState({value: inp1.target.value});
    }
  
    handleSubmit(inp1) {
      alert('Um nome foi enviado: ' + this.state.value);
      inp1.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
       
          <label>
            Nome:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
         
          <label>
            Email:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        
          <label>
            Numero:
            <input type="number" value={this.state.value} onChange={this.handleChange} />
          </label>
          
          <input type="submit" value="Enviar" />
        </form>
      );
    }
  }