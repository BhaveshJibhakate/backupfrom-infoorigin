export const loggerMiddleware = store => next => action => {
    console.log("printing store",store);
    console.log("printing next",next); 
    console.log('Dispatching action:', action); 
     next(action); 
  };
  