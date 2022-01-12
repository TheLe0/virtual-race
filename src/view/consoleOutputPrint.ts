const AsciiTable = require('ascii-table');
import { IRacer } from '../contract';

export default class ConsoleOutputPrint {

    public static printHeader() :string {

        const header = `
            ***********************************
            *                                 *
            *        VIRTUAL RACE             *
            *                                 *
            ***********************************
        `;

        return header;
    }

    public static fastestLap(fastestRacer :IRacer) :string {
        return `Fastest Lap: ${fastestRacer.racerNumber} - ${fastestRacer.name}: ${fastestRacer.fastestLap}\n`;
    }

    public static printFinalGrid(list :Array<IRacer>) :string {
        const table = new AsciiTable(' Final Grid ');

        table.setHeading(
            "Position", 
            "Racer", 
            "Completed Laps", 
            "Fastest Lap", 
            "Average Speed", 
            "Total Time on race", 
            "Difference"
        );

        list.forEach(racer => {

            table.addRow(
                racer.position, 
                `${racer.racerNumber} - ${racer.name}`,
                racer.laps,
                racer.fastestLap,
                racer.averageSpeed,
                racer.totalDrivingTime,
                racer.difference
            );
        });

        return table.toString();
    }

}