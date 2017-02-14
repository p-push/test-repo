class Table  extends React.Component {
  constructor() {
    super()
    this.state = {q: '', title: '', reviews: []}
  }

  render() {
    return   <div>
  <div>
  Pizzeria: <input onChange={this.onchange.bind(this)} value={this.q}/>
  </div>
    {this.state.title && <h1>{this.state.title}</h1>}
    <table><tbody>
  {this.state.reviews.map(function(row) {
    return <tr key={row}>
      <td dangerouslySetInnerHTML={{__html:row}}></td>
    </tr>
  })}
  </tbody></table>
  </div>
  }

  onchange(e) {
    this.setState({q: e.target.value})
    fetch('http://localhost:8080/search?q=' + e.target.value).then((response) => {
      return response.json()
    }).then((payload) => {
      this.setState({reviews: payload.reviews, title: payload.title})
    })
    
  }

  f(row) {
    if (!this.state.q.trim())
      return true
    return row[1].toLowerCase().indexOf(this.state.q.toLowerCase()) >= 0
  }
}

ReactDOM.render(
  <Table/>,
  document.getElementById('root')
);
