import React from 'react'
import {GlobalContext} from './globalContext'
import {NotificationContext} from './notificationContext'

//import ContextProvider and wrap around all the elementts that will need the context's

function ProviderComposer({contexts, children}) {
    return contexts.reduceRight(
      (kids, parent) =>
        React.cloneElement(parent, {
          children: kids,
        }),
      children,
    );
  }
  
  function ContextProvider({children}) {
    return (
      <ProviderComposer
        contexts={[
          <GlobalContext />,
          <NotificationContext />,
         // Next Context .... 
        ]}>
        {children}
      </ProviderComposer>
    );
  }
  
  export {ContextProvider};
  