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

test('fastest lap test', () => {

    const line0 = ["23:49:08.277", "038", "F.MASSA", "1", "1:02.852", "44,275"];
    const line1 = ["23:49:10.858", "033", "R.BARRICHELLO", "1", "1:04.352", "43,243"];
    const line2 = ["23:49:10.858", "038", "F.MASSA", "2", "1:01.352", "43,243"];
    const line3 = ["23:49:12.667", "023", "M.WEBBER", "1", "1:01.102", "47,243"];

    repository.upsertRacer(line0);
    repository.upsertRacer(line1);
    repository.upsertRacer(line2);
    repository.upsertRacer(line3);

    const fastestRacer = repository.fastestLap();

    expect(fastestRacer.racerNumber).toBe("023");
});


test('final grid list test', () => {

    const line0 = ["23:49:08.277", "038", "F.MASSA", "1", "1:02.852", "44,275"];
    const line1 = ["23:49:10.858", "033", "R.BARRICHELLO", "1", "1:04.352", "43,243"];
    const line2 = ["23:49:11.075", "002", "K.RAIKKONEN", "1", "1:04.108", "43,408"];
    const line3 = ["23:49:12.667", "023", "M.WEBBER", "1", "1:04.414", "43,202"];
    const line4 = ["23:49:30.976", "015", "F.ALONSO", "1", "1:18.456", "35,47"];
    const line5 = ["23:50:11.447", "038", "F.MASSA", "2", "1:03.170", "44,053"];
    const line6 = ["23:50:14.860", "033", "R.BARRICHELLO", "2", "1:04.002", "43,48"];
    const line7 = ["23:50:15.057", "002", "K.RAIKKONEN", "2", "1:03.982", "43,493"];
    const line8 = ["23:50:17.472", "023", "M.WEBBER", "2", "1:04.805", "42,941"];
    const line9 = ["23:50:37.987", "015", "F.ALONSO", "2", "1:07.011", "41,528"];
    const line10 = ["23:51:14.216", "038", "F.MASSA", "3", "1:02.769", "44,334"];
    const line11 = ["23:51:18.576", "033", "R.BARRICHELLO", "3", "1:03.716", "43,675"];
    const line12 = ["23:51:19.044", "002", "K.RAIKKONEN", "3", "1:03.987", "43,49"];
    const line13 = ["23:51:21.759", "023", "M.WEBBER", "3", "1:04.287", "43,287"];
    const line14 = ["23:51:46.691", "015", "F.ALONSO", "3", "1:08.704", "40,504"];
    const line15 = ["23:52:01.796", "011", "S.VETTEL", "1", "3:31.315", "13,169"];
    const line16 = ["23:52:17.003", "038", "F.MASS", "4", "1:02.787", "44,321"];
    const line17 = ["23:52:22.586", "033", "R.BARRICHELLO", "4", "1:04.010", "43,474"];
    const line18 = ["23:52:22.120", "002", "K.RAIKKONEN", "4", "1:03.076", "44,118"];
    const line19 = ["23:52:25.975", "023", "M.WEBBER", "4", "1:04.216", "43,335"];
    const line20 = ["23:53:06.741", "015", "F.ALONSO", "4", "1:20.050", "34,763"];
    const line21 = ["23:53:39.660", "011", "S.VETTEL", "2", "1:37.864", "28,435"];
    const line22 = ["23:54:57.757", "011", "S.VETTEL", "3", "1:18.097", "35,633"];

    repository.upsertRacer(line0);
    repository.upsertRacer(line1);
    repository.upsertRacer(line2);
    repository.upsertRacer(line3);
    repository.upsertRacer(line4);
    repository.upsertRacer(line5);
    repository.upsertRacer(line6);
    repository.upsertRacer(line7);
    repository.upsertRacer(line8);
    repository.upsertRacer(line9);
    repository.upsertRacer(line10);
    repository.upsertRacer(line11);
    repository.upsertRacer(line12);
    repository.upsertRacer(line13);
    repository.upsertRacer(line14);
    repository.upsertRacer(line15);
    repository.upsertRacer(line16);
    repository.upsertRacer(line17);
    repository.upsertRacer(line18);
    repository.upsertRacer(line19);
    repository.upsertRacer(line20);
    repository.upsertRacer(line21);
    repository.upsertRacer(line22);

    const gridList = repository.listFinalGrid();

    expect(gridList.length).toBe(6);
});