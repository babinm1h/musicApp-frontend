import moment from "moment"
require("moment-duration-format");

export const getDuration = (sec: number) => {
    const duration = moment.duration(sec, "seconds")
    const formated = duration.format("hh:mm:ss")
    return formated
}