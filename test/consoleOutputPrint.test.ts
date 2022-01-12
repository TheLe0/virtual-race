import { ConsoleOutputPrint } from '../src/view';
import { IRacer } from '../src/contract'; 

test('print output header test', async () => {
    expect(await ConsoleOutputPrint.printHeader()).toBeDefined();
});

test('print fastest lap test',  () => {

    expect(ConsoleOutputPrint.fastestLap({
        position: 1,
        name: "F.MASSA",
        racerNumber: "038",
        laps: 4,
        totalDrivingTime: "Not completed",
        fastestLap: "1:02.769",
        averageSpeed: "44,55",
        difference: ""
    })).toBeDefined();
});

test('print final grid lap test',  () => {

    const list = Array<IRacer>();


    list.push({
        position: 1,
        name: "F.MASSA",
        racerNumber: "038",
        laps: 4,
        totalDrivingTime: "Not completed",
        fastestLap: "1:02.769",
        averageSpeed: "44,55",
        difference: ""
    });

    list.push({
        position: 1,
        name: "F.MASSA",
        racerNumber: "038",
        laps: 4,
        totalDrivingTime: "Not completed",
        fastestLap: "1:02.769",
        averageSpeed: "44,55",
        difference: ""
    });

    list.push({
        position: 1,
        name: "F.MASSA",
        racerNumber: "038",
        laps: 4,
        totalDrivingTime: "Not completed",
        fastestLap: "1:02.769",
        averageSpeed: "44,55",
        difference: ""
    });

    expect(ConsoleOutputPrint.printFinalGrid(list)).toBeDefined();
});