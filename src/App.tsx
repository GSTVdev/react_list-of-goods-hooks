import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];
enum SortType {
  None = 'none',
  Alphabetically = 'alphabetically',
  ByLength = 'byLength',
  Reverse = 'reverse',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState([...goodsFromServer]);

  function orderGoods(order: SortType) {
    let orderedGoods = [];

    switch (order) {
      case 'alphabetically':
        orderedGoods = [...goods.sort((a, b) => a.localeCompare(b))];
        break;
      case SortType.ByLength:
        orderedGoods = [...goods.sort((a, b) => a.length - b.length)];
        break;
      case 'reverse':
        orderedGoods = [...goods.reverse()];
        break;
      case 'none':
        orderedGoods = [...goodsFromServer];
        break;
    }

    return setGoods(orderedGoods);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          onClick={() => orderGoods(SortType.Alphabetically)}
          type="button"
          className="button is-info is-light"
        >
          Sort alphabetically
        </button>

        <button
          onClick={() => orderGoods(SortType.ByLength)}
          type="button"
          className="button is-success is-light"
        >
          Sort by length
        </button>

        <button
          onClick={() => orderGoods(SortType.Reverse)}
          type="button"
          className="button is-warning is-light"
        >
          Reverse
        </button>

        <button
          onClick={() => orderGoods(SortType.None)}
          type="button"
          className="button is-danger is-light"
        >
          Reset
        </button>
      </div>

      <ul>
        <ul>
          {goods.map(good => (
            <li key={good}>{good}</li>
          ))}
        </ul>
      </ul>
    </div>
  );
};
