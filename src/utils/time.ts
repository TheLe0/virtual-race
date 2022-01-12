export default class Time {

    private static millisecondsInAHour = 3600000;
    private static millisecondsInAMinute = 60000;
    private static millisecondsInASecond = 1000;

    public static convertLapTimeToMilliseconds(lapTime: string) :number {

        var lapParts = lapTime.split(".");

        const milliseconds = parseInt(lapParts[1]);

        lapParts = lapParts[0].split(":");

        const minutes = parseInt(lapParts[0]);
        const seconds = parseInt(lapParts[1]);

        return  milliseconds +
            (minutes * this.millisecondsInAMinute) + 
            (seconds * this.millisecondsInASecond);
    }

    public static convertMillisecondsToLapTime(lapTime: number) :string {

        let minutes = String(Math.floor(lapTime / this.millisecondsInAMinute));

        let divisionRest = lapTime % this.millisecondsInAMinute;

        let seconds = String(Math.floor(divisionRest / this.millisecondsInASecond));

        seconds = seconds.padStart(2, "0");

        let  milliseconds =  String(divisionRest % this.millisecondsInASecond);

        milliseconds = milliseconds.padStart(3, "0");

        return `${minutes}:${seconds}.${milliseconds}`;
    }

    public static convertHourToMilliseconds(lapTime: string) :number {

        var lapParts = lapTime.split(".");

        const milliseconds = parseInt(lapParts[1]);

        lapParts = lapParts[0].split(":");

        const hours = parseInt(lapParts[0]);
        const minutes = parseInt(lapParts[1]);
        const seconds = parseInt(lapParts[2]);

        return (hours * this.millisecondsInAHour) + 
            (minutes * this.millisecondsInAMinute) + 
            (seconds * this.millisecondsInASecond) + 
            milliseconds;
    }

    public static convertMillisecondsToHour(lapTime: number) :string {

        let hours = String(Math.floor(lapTime / this.millisecondsInAHour));

        let divisionRest = lapTime % this.millisecondsInAHour;

        let minutes = String(Math.floor(divisionRest / this.millisecondsInAMinute));

        minutes = minutes.padStart(2, "0");

        divisionRest = lapTime % this.millisecondsInAMinute;

        let seconds = String(Math.floor(divisionRest / this.millisecondsInASecond));

        seconds = seconds.padStart(2, "0");

        let  milliseconds =  String(divisionRest % this.millisecondsInASecond);

        milliseconds = milliseconds.padStart(3, "0");

        return `${hours}:${minutes}:${seconds}.${milliseconds}`;
    } 
}