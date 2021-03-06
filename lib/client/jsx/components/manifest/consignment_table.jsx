// Framework libraries.
import * as React from 'react';

class ConsignmentTable extends React.Component{
  tableHeader(){
    let {headers} = this.props;

    return(
      <tr>

        {headers.map((col_name, index)=>{
          return <th className='table-view-header' key={index}>{col_name}</th>;
        })}
      </tr>
    );
  }

  tableRows(){
    let {headers, rows} = this.props;
    return rows.map((row, i)=>{

      return(
        <tr className='table-view-row' key={i}>

          {row.map((data, j)=>{
            return(
              <td className='table-view-cell' key={j}>

                {(data == null) ? '' : String(data)}
              </td>
            );
          })}
        </tr>
      );
    });
  }

  render(){
    return(
      <div className='consignment-result-group'>

        <table className='table-view'>

          <thead>

            {this.tableHeader()}
          </thead>
          <tbody>

            {this.tableRows()}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ConsignmentTable;
