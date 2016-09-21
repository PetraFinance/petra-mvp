export const NEXT_OSTAGE = Symbol('NEXT_OSTAGE');
export function handleAdvance() {
  return {
    type: NEXT_OSTAGE
  };
}

export const BACK_OSTAGE = Symbol('BACK_OSTAGE');
export function handleBack() {
  return {
    type: BACK_OSTAGE
  };
}
