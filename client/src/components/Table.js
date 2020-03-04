import React from 'react'
import styled from 'styled-components'
import { useTable } from 'react-table'

// import makeData from './makeData'

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;
    width: 100%;
    border-radius: 10px 10px 0 0;
    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    thead {
        border-radius: 10px;
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({
        columns,
        data,
    })

    // Render the UI for your table
    return (
        <table {...getTableProps()}>
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function App() {
    const columns = React.useMemo(
        () => [
            {
                Header: 'Library',
                accessor: 'libraryName',
            },
            {
                Header: 'Author',
                accessor: 'authorName',
            },
            {
                Header: 'Created',
                accessor: 'createdDate',
            },
            {
                Header: 'Words',
                accessor: 'wordCount',
            },
            {
                Header: 'Plays',
                accessor: 'plays',
            },
            {
                Header: '',
                accessor: 'undefined',
            },
        ],
        []
    )

    // const data = React.useMemo(() => makeData(20), [])
    const data = [
        { 
            libraryName: "Magic of Words", 
            authorName: "Mark Swinimer",
            createdDate: '03/3/2020',
            wordCount: 344,
            plays: 186,
        },
        { 
            libraryName: "Magic of Words", 
            authorName: "Mark Swinimer",
            createdDate: '03/3/2020',
            wordCount: 344,
            plays: 186,
        },
        { 
            libraryName: "Magic of Words", 
            authorName: "Mark Swinimer",
            createdDate: '03/3/2020',
            wordCount: 344,
            plays: 186,
        }
    ]

    return (
        <Styles>
            <Table columns={columns} data={data} />
        </Styles>
    )
}

export default App
