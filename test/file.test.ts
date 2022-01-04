import { File } from '../src/utils';

test('read log file test', () => {
    expect(File.read("data/log.txt")).toBeDefined();
});

test('file not exists prevent exception test', () => {
    expect(File.read("log.txt")).toBeUndefined();
});