export const HIDE_OVERVIEW_TIP = Symbol('HIDE_OVERVIEW_TIP');
export function hideOverviewTip() {
  return {
    type: HIDE_OVERVIEW_TIP,
  };
}

export const SHOW_OVERVIEW_TIP = Symbol('SHOW_OVERVIEW_TIP');
export function showOverviewTip() {
  return {
    type: SHOW_OVERVIEW_TIP,
  };
}
