export class ScheduleTask {
    id: number;
    name: string;
    recurrence: string;
    code: string;

    constructor(id: number, name: string, recurrence: string, code: string) {
        this.id = id;
        this.name = name;
        this.recurrence = recurrence;
        this.code = code;
    }

}
