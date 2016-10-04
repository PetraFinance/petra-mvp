export const SET_FUND_PREVIEW = Symbol('SET_FUND_PREVIEW');
export function setFundPreviewName(fundPreviewName) {
  return {
    type: SET_FUND_PREVIEW,
    fundPreviewName
  };
}
