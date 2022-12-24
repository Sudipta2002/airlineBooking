function compareTime(dateTime1, dateTime2) {
    let t1 = new Date(dateTime1);
    let t2 = new Date(dateTime2);

    return t1.getTime() > t2.getTime();
}

module.exports = { compareTime };