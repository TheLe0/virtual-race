import * as fs from 'fs';
import { Path } from '.';
import { makeLogger } from '../log';

const logger = makeLogger(); 

export default class File {
    public static read(relativePath: string): Array<string[]> {

        const list = new Array<string[]>();

        const path = Path.getRootPath()+"/"+relativePath;

        if (!fs.existsSync(path)) {
            logger.error({
                type: 'LOG_TYPE_1',
                message: `File not found on ${path}`
            });
            return undefined;
        }

        let buffer = fs.readFileSync(path, 'utf8');
        buffer = buffer.replace(" – ", "\t");
        buffer = buffer.replace("\r", "");

        const lines = buffer.split('\n');
        
        for (let i = 0; i < lines.length; i++) {

            const line = this.formatLine(lines[i].split("\t"));

            if (line.length > 0) {

                list.push(line);
            }
        }

        return list;
    }

    private static formatLine(line: string[]) :string[] {

        let lineFormated = Array<string>();
        

        line.forEach(element => {

            element = element.replace("\r", "");

            if (element != "" && element != "–") {
                
                if (element.includes(" – ")) {
                    const pilot = element.split(" – ");

                    lineFormated.push(pilot[0]);
                    lineFormated.push(pilot[1]);
                } else {
                    lineFormated.push(element);
                }
            }
        });

        return lineFormated;
    }

}