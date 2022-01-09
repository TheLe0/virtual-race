import { File } from '../src/utils';

test('read race log file test', () => {

    const list = File.read("test/mocks/log.txt");

    expect(list).toBeDefined();
});

test('read log file test', () => {

    const list = File.read("test/mocks/log.txt");

    const line0 = ["23:49:08.277", "038", "F.MASSA", "1", "1:02.852", "44,275"];
    const line1 = ["23:49:10.858", "033", "R.BARRICHELLO", "1", "1:04.352", "43,243"];

    expect(line0).toStrictEqual(list[0]);
    expect(line1).toStrictEqual(list[1]);
});

test('file not exists prevent exception test', () => {
    expect(File.read("log.txt")).toBeUndefined();
});