import React from 'react'
import { useNavigate, useParams } from "react-router-dom"

function Stock({ stocks }) {
  let { symbol } = useParams()
  let navigate = useNavigate()

  function goBack() {
    navigate('/stocks')
  }

  return (
    <div className="stock">
      <table className='stocktable'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
            <th>Symbol</th>
            <th>High</th>
            <th>Low</th>
            <th>Open</th>
          </tr>
        </thead>

        {stocks
          .filter((stock) => stock.symbol === symbol)
          .map((stock) => (
            <tbody>
              <tr>
                <td key={stock.name}>  {stock.name}    </td>
                <td key={stock.lastPrice}>{stock.lastPrice}</td>
                <td key={stock.change} className={stock.change > 0 ? 'green' : 'red'}> {stock.change}</td>
                <td key={stock.symbol}>  {stock.symbol}    </td>
                <td key={stock.high}>{stock.high}</td>
                <td key={stock.low}> {stock.low}</td>
                <td key={stock.open}> {stock.open}</td>
              </tr>
            </tbody>
          ))
        }
      </table>
      <button onClick={goBack}>Back</button>
    </div>
  )
}

export default Stock
