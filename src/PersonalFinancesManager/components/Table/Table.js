import {useState, useEffect} from 'react';
import './Table.css';

export default function Table(props){
    return(
        <div className="Table">
            <header className="tableHeader">
                <h3 className="headerLabel">Expense</h3>
                <h3 className="headerLabel">Spent</h3>
                <h3 className="headerLabel">Limit</h3>
                <h3 className="headerLabel">Difference</h3>
                <h3 className="headerLabel">Add</h3>
            </header>
            <div className="tableRow">
                {/*Label(name), totalGasto, totalAGastar, Diferença, input(numero), botaoHistorico*/}
                <label className="tableLabel">{props.label}</label>
                <strong className="tableNumber">R${props.totalSpent}</strong>
                <strong className="tableNumber">RS{props.limit}</strong>
                <strong className="tableNumber">RS{props.limit-props.totalSpent}</strong>
                <input type="number" className="tableInput"></input>
                <button className="tableIcon historyButton">H</button>
            </div>
        </div>
    )
}