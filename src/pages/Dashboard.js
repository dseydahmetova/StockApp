import React from 'react'
import { Link } from "react-router-dom"
import { useTable } from "react-table";
import { stocks as data } from "../data"

function Dashboard() {

  const columns = React.useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'name',
      },
      {
        Header: 'Price',
        accessor: 'lastPrice',
      },
      {
        Header: 'Change',
        accessor: 'change',
      },
    ],
    []
  )
 
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data })

  return (
    <div className='dashboard'>
      <h1>Most Active Stocks</h1>
       {/* <table {...getTableProps()} className='table'>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td   
                      {...cell.getCellProps()} className={row.original.change > 0 ? 'green' : 'red' }
                    ><Link key={row.original.symbol} to={`/stocks/${row.original.symbol}`} 
                  
                    
                    >
                        {cell.render('Cell')}
                      </Link>
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>  */}

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
                  
                      <td  key = {stock.name}> 
                      <Link key={stock.symbol} to={`/stocks/${stock.symbol}`} > 
                      {stock.name} 
                      </Link>
                      </td> 
                      <td key = {stock.lastPrice}>{stock.lastPrice}</td>
                      <td key = {stock.change} className={stock.change > 0 ? 'green' : 'red' }> {stock.change}</td>
                     
                   </tr>
                   
                   ))
               
              }
              </tbody>     
                          
                 </table> 
 

    </div>
  );
}

export default Dashboard
