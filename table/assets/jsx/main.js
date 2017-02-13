//document.write(data.slice(0,10).join("<br/ >"))

class Table  extends React.Component {
  constructor() {
    super()
    this.state = {q: ''}
  }

  render() {
    return   <div>
    <table><tbody>
  {_.filter(data, this.f.bind(this)).slice(0, 10).map(function(row) {
    return <tr key={row[0]}>
      <td>{row[0]}</td>
      <td>{row[1]}</td>
      <td>{row[2]}</td>
      <td>{row[3]}</td>
    </tr>
  })}
  </tbody></table>
  <div>
  <input onChange={this.onchange.bind(this)} value={this.q}/>
  </div>
  </div>
  }

  onchange(e) {
    this.setState({q: e.target.value})
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
