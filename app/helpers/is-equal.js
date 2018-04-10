import { helper } from '@ember/component/helper';

export function isEqual([a, b] /*, hash*/ ) {
  return a === b;
}

export default helper(isEqual);