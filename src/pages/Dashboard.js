import React from 'react'
import { Link } from "react-router-dom"
import { stocks as data } from "../data"

function Dashboard() {
  return (
    <div className='dashboard'>
      <h1>Most Active Stocks</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Company Name</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {data.map(stock => (
            <tr>
              <td key={stock.name}>
                <Link key={stock.symbol} to={`/stocks/${stock.symbol}`} >
                  {stock.name}
                </Link>
              </td>
              <td key={stock.lastPrice}>
                <Link key={stock.symbol} to={`/stocks/${stock.symbol}`} >
                  {stock.lastPrice}
                </Link></td>
              <td key={stock.change} className={stock.change > 0 ? 'green' : 'red'}>
                <Link key={stock.symbol} to={`/stocks/${stock.symbol}`} >
                  {stock.change}
                </Link>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard
