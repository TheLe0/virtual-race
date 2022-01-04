import * as fs from 'fs';

export default class File {
    public static read(path: string): Array<string[]> {

        const list = new Array<string[]>();

        console.log(__dirname);
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