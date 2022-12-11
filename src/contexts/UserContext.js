import React, {createContext, useContext, useEffect, useState} from 'react';
import ErrorContext from './ErrorContext';
import Toast from 'react-native-toast-message';

const UserContext = createContext();

export const UserProvider = props => {
  const [nick, setNick] = useState('');
  const [points, setPoints] = useState('');
  const [coupon, setCoupon] = useState([]);
  const {showError} = useContext(ErrorContext);

  const showToast = (type, text) => {
    Toast.show({
      type: type,
      text1: text,
    });
  };

  const addToCoupon = match => {
    let foundMatchIndex = coupon.findIndex((item, index) => {
      return item.id === match.id;
    });
    if (foundMatchIndex === -1) {
      setCoupon(prevCoupon => [...prevCoupon, match]);
      let info = {
        code: '1',
        message: 'Mecz dodany do kuponu',
      };
      showToast('success', info.message);
      // showError(info);
      return true;
    }
    showToast('error', 'Mecz już jest na kuponie');
    return false;
  };

  const deleteFromCoupon = matchId => {
    let newCoupon = coupon.filter((item, index) => {
      return item.id !== matchId;
    });
    setCoupon(newCoupon);
  };

  const clearCoupon = () => {
    setCoupon([]);
  };

  useEffect(() => {
    console.log('Zmiana kuponu');
    console.log(coupon);
  }, [coupon]);

  useEffect(() => {
    console.log(`Punkty: ${points}`);
  }, [points]);

  return (
    <UserContext.Provider
      value={{
        nick,
        setNick,
        points,
        setPoints,
        coupon,
        addToCoupon,
        deleteFromCoupon,
        clearCoupon,
      }}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
