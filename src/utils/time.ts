export default class Time {

    public static convertLapTimeToMilliseconds(lapTime: string) :number {

        var lapParts = lapTime.split(".");

        const milliseconds = parseInt(lapParts[1]);

        lapParts = lapParts[0].split(":");

        const minutes = parseInt(lapParts[0]);
        const seconds = parseInt(lapParts[1]);

        return ((minutes*60 + seconds)*1000 + milliseconds);
    }

    public static convertMillisecondsToLapTime(lapTime: number) :string {

        let minutes = String(Math.floor(lapTime / 60000));

        let divisionRest = lapTime % 60000;

        let seconds = String(Math.floor(divisionRest / 1000));

        seconds = seconds.padStart(2, "0");

        let  milliseconds =  String(divisionRest % 1000);

        return `${minutes}:${seconds}.${milliseconds}`;
    }
}