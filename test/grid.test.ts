import { Grid } from '../src/repository';
import { RaceEnvVars } from '../src/config';


let repository :Grid;

beforeEach(() => {
    repository = new Grid();
});

test('insert on repository test', () => {

    const line0 = ["23:49:08.277", "038", "F.MASSA", "1", "1:02.852", "44,275"];
    const line1 = ["23:49:10.858", "033", "R.BARRICHELLO", "1", "1:04.352", "43,243"];

    expect(repository.upsertRacer(line0)).toBe(true);
    expect(repository.upsertRacer(line1)).toBe(true);
});

test('insert and update on repository test', () => {

    const line0 = ["23:49:08.277", "038", "F.MASSA", "1", "1:02.852", "44,275"];
    const line1 = ["23:50:11.447", "038", "F.MASSA ", String(RaceEnvVars.RaceLaps), "1:03.170", "44,053"];

    expect(repository.upsertRacer(line0)).toBe(true);
    expect(repository.upsertRacer(line1)).toBe(true);
});

test('insert line not correctly formated test', () => {

    const line0 = ["23:49:08.277", "038", "-", "F.MASSA", "1", "1:02.852", "44,275"];

    expect(repository.upsertRacer(line0)).toBe(false);
});

