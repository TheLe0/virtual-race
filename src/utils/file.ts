import * as fs from 'fs';
import { Path } from '.';

export default class File {
    public static read(relativePath: string): Array<string[]> {

        const list = new Array<string[]>();

        const path = Path.getRootPath()+"/"+relativePath;

        let buffer = fs.readFileSync(path, 'utf8');
        buffer = buffer.replace("\t", " ");

        const lines = buffer.split('\n');

        for (let i = 0; i < lines.length; i++) {

            const line = lines[i].split(" ");

            if (line.length > 0) {
                list.push(line);
            }
        }

        return list;
    }

}