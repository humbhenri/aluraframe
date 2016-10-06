class DateHelper {

    constructor() {
        throw new Error("Cannot instantiate this class");
    }

    static textToDate(text) {
        return new Date(...text.split('-')
            .map((item, index) => item - index % 2));
    }

    static dateToText(date) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}