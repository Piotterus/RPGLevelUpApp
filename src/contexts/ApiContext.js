import React, {createContext, useState} from 'react';

const ApiContext = createContext();

export const ApiProvider = props => {
  const [apiUrl, setApiUrl] = useState(() => {
    if (__DEV__) {
      return 'https://rpg.verbum.com.pl/api/rpglevelup/';
    } else {
      return 'https://rpg.verbum.com.pl/api/rpglevelup/';
    }
  });
  const [apiKey, setApiKey] = useState(
    'da8b682a0c1cfbc5b2726fdcce796772b8202b6d',
  );

  return (
    <ApiContext.Provider
      value={{
        apiUrl,
        apiKey,
      }}>
      {props.children}
    </ApiContext.Provider>
  );
};

export default ApiContext;
