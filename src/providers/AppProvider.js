import { chunk, flatten, lowerCase, map } from 'lodash';
import { useEffect } from 'react';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

const useApp = () => useContext(AppContext);

const AppProvider = ({ children }) => {
  const [x, setX] = useState(2);
  const [y, setY] = useState(2);
  const [values, setValues] = useState([]);
  const [result, setResult] = useState('');

  const spiralize = matrix => {
    const arr = [];

    while (matrix.length) {
      arr.push(
        ...matrix.shift(),
        ...matrix.map(i => i.pop()),
        ...(matrix.pop() || []).reverse(),
        ...matrix.map(i => i.shift()).reverse()
      );
    }

    const str = map(arr, value => lowerCase(value)).join(' ');

    setResult(str);
  };

  useEffect(() => {
    const flat = Array.from({ length: x * y }, (_, i) =>
      String.fromCharCode('A'.charCodeAt(0) + i)
    );

    setValues(chunk(flat, x));
    spiralize(chunk(flat, x));
  }, [x, y]);

  return (
    <AppContext.Provider
      value={{
        x,
        setX,
        y,
        setY,
        values,
        flatValues: flatten(values),
        valueStr: map(flatten(values), value => value.toString()).join(''),
        result,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, useApp };
