import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

//membuat fungsi prop agar kita bisa menggunakan komponen dengan data yang berbeda
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const cliickHandler = () => {
    setTitle('Update!');
    console.log(title);
  };
  return (
    <Card className="expense-item">
      {/* import komponen props di dalam komponent  */}
      <ExpenseDate date={props.date}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={cliickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
