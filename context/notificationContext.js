import React, {useState, createContext} from 'react';

export const NotificationContext = createContext();
//Where you want to usethis context just import {useContext} from 'react'
// then const notifications = useContext(NotificationContext)
// can get the values from notifications.notifications & set new notifications with notifications.setNotifications()

/*
  notification object 
    {
      text: 'sample notification',
      type: 'success',
      active: true,
      id: '123'
    }
*/
      
export const NotificationProvider = ({children}) => {
  const [notifications, setNotifications] = useState([]);
  
  const addFunction = ( value ) => {
      setNumber(number + value)
  }

  const resetNotifications = () => {
    setNotifications([]);
  };

  const setNewNotification = (text) => {
    setNotification(
      [...notifications, {
        text,
        type: 'success',
        active: true,
        id: '123'
      }]);
  };

  const removeNotification = (notification) => {
    const filteredItems = notifications.filter(item => item.id !== notification.id)
    setNotifications(filteredItems)
  }

  //Pass in element ontop of {children} to have elemet across all screens.
  return (
    <NotificationContext.Provider value={{notifications, setNotifications, addFunction, removeNotification, resetNotifications, setNewNotification}}>
      {children}
    </NotificationContext.Provider>
  );
};
