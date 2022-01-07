import { Speed } from '../src/utils';

test('convert speed string to number', () => {

    expect(Speed.converSpeedToNumber("44,053")).toBe(44.053);
});

test('convert speed number to string', () => {

    expect(Speed.convertSpeedToString(44.053)).toBe("44,053");
});