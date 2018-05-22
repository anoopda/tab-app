import { NavigationActions } from 'react-navigation';

//navigation actions

export function navigateToScreenMainStack(screen) {
  return (dispatch, getState) => {
    const action = NavigationActions.navigate({
      routeName: screen
    })
    dispatch(action);
  };
}

export function onBack() {
  return (dispatch, getState) => {
    const backAction = NavigationActions.back()
    dispatch(backAction);
  };
}










  

