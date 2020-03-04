import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'


import './DiscoverTable.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Game of Thrones', 'Mark Swinimer', '02/29/20', 33, 15),
    createData('Final Fantasy', 'Joe Borta', '02/1/20', 187, 5),
    createData('Game of Thrones', 'Mark Swinimer', '02/29/20', 33, 15),
    createData('Game of Thrones', 'Mark Swinimer', '02/29/20', 33, 15),
    createData('Game of Thrones', 'Mark Swinimer', '02/29/20', 33, 15),
    createData('Game of Thrones', 'Mark Swinimer', '02/29/20', 33, 15),
];

export default function SimpleTable() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow className="DiscoverTable-header">
                        <TableCell>Library Name</TableCell>
                        <TableCell>Creator</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Words</TableCell>
                        <TableCell>Plays</TableCell>
                        <TableCell></TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.calories}</TableCell>
                            <TableCell>{row.fat}</TableCell>
                            <TableCell>{row.carbs}</TableCell>
                            <TableCell>{row.protein}</TableCell>
                            <TableCell><FontAwesomeIcon className="icon" icon={faStar} /></TableCell>
                            <TableCell>
                                <button>
                                    RED
                                </button>
                                </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}