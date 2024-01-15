import css from "./Transaction.module.css"

export function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ amount, currency, id, type }) => {
          return (
            <tr key={id}>
              <td>{changeCase(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

function changeCase(type) {
  return type.charAt(0).toUpperCase() + type.slice(1);
}