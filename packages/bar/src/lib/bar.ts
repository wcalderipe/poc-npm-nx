import { baz } from '@poc-npm-nx/baz';

export function bar(): string {
  baz();

  console.log('## bar');

  return 'bar';
}
