const List = ({table, title}) => {

  return (
    <div>
    <div className="listTitle">
      <h2>{title}</h2>
    </div>
    <div className="names">
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Amount</th>
          </tr>
          {table.map((item, i) => (
          <tr key={item.name}>
            <td>{item.name}</td>
            <td>{item.amount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
}

export default List;