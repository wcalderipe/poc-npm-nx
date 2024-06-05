import * as _ from 'lodash';

export function baz(): string {
  console.log('## baz', _.add(1, 1));

  return 'baz';
}
