function Total(props) {
  return (
    <div key={props.index}>
      <li>
        {props.todayData.quantity} {props.todayData.name} ={' '}
        {props.todayData.quantity * props.todayData.calories} cal{' '}
        <button
          onClick={() => {
            props.btnDelete(props.index);
          }}
        >
          🗑️
        </button>
      </li>
    </div>
  );
}

export default Total;
