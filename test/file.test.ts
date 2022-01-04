import { File } from '../src/utils';

test('read log file test', () => {
    expect(File.read("../../data/log.txt").length).toBe(23);
});