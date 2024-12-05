import React from 'react';
import TableInnerSquare from './TableInnerSquare';
import SubTable from './SubTable';

function TableRow(props) {
  const { columns, row, tableWidth, rowHeight } = props;

  // If row is not provided or columns are empty, return a fallback
  if (!row || columns.length === 0) {
    return <div className="table-row" style={{ width: tableWidth }}>No Data Available</div>;
  }

  return (
    <div
      className="table-row"
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        width: tableWidth,
        overflow: 'hidden',
      }}
    >
      {columns.map((property, idx) => {
        if (typeof row[property] === 'object') {
          // If row[property] is an object, render a SubTable
          return (
            <SubTable
              dataObject={row[property]}
              rowHeight={rowHeight}
              key={idx}
            />
          );
        } else {
          // Otherwise, render TableInnerSquare
          return (
            <div key={idx} style={{ overflow: 'hidden', flex: '1' }}>
              <TableInnerSquare
                innerData={row[property]}
                rowHeight={rowHeight}
              />
            </div>
          );
        }
      })}
    </div>
  );
}

export default TableRow;
