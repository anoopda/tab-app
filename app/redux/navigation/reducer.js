import { AppStackRoot } from '../../routes';

import { addNavigationHelpers, NavigationActions } from "react-navigation";


const initialState = AppStackRoot.router.getStateForAction(NavigationActions.navigate({ routeName: "SplashScreen" }));

export default (state = initialState, action) => {
  let nextState ;  
  switch (action.type) {
    case 'Navigation/NAVIGATE':
      const { type, routeName } = action
      const lastRoute = state.routes[state.routes.length - 1]
      if (type == lastRoute.type && routeName == lastRoute.routeName) return state
       nextState = AppStackRoot.router.getStateForAction(action,state)
      return nextState || state;
    case 'Navigation/BACK':
       nextState = AppStackRoot.router.getStateForAction(NavigationActions.back(),state)
      return nextState || state;
    default:
      return state;
  }
};



