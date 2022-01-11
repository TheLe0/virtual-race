import { Race } from '../src/controller';

test('e2e success test', () => {

    expect(new Race("test/mocks/log.txt").start()).toBe(true);
});

test('e2e failed test', () => {

    expect(new Race("test/mocks/log_empty.txt").start()).toBe(false);
});