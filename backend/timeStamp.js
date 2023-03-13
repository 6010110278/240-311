function timeStamp(){
    let now = new Date();
    let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric'
    }
    let formatTime = Intl.DateTimeFormat('th-TH', options).format(now);

    return formatTime;
}

module.exports = timeStamp;