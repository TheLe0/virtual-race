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

    public static convertHourToMilliseconds(lapTime: string) :number {

        var lapParts = lapTime.split(".");

        const milliseconds = parseInt(lapParts[1]);

        lapParts = lapParts[0].split(":");

        const hours = parseInt(lapParts[0]);
        const minutes = parseInt(lapParts[1]);
        const seconds = parseInt(lapParts[2]);

        return (hours * 3600000) + (minutes * 60000) + (seconds * 1000) + milliseconds;
    }

    public static convertMillisecondsToHour(lapTime: number) :string {

        let hours = String(Math.floor(lapTime / 3600000));

        let divisionRest = lapTime % 3600000;

        let minutes = String(Math.floor(divisionRest / 60000));

        minutes = minutes.padStart(2, "0");

        divisionRest = lapTime % 60000;

        let seconds = String(Math.floor(divisionRest / 1000));

        seconds = seconds.padStart(2, "0");

        let  milliseconds =  String(divisionRest % 1000);

        milliseconds = milliseconds.padStart(2, "0");

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    } 
}