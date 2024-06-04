import { bar } from '@poc-npm-nx/bar';

export function sdk(): string {
  bar();

  console.log('## SDK');

  return 'sdk';
}
