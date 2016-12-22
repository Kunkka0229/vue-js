/**
 * 日期格式化
 * @param date 时间戳
 * @param fmt  格式化格式
 * @returns {*}
 */
export function formatDate(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };
    for (let key in o) {
        if (new RegExp(`(${key})`).test(fmt)) {
            let str = o[key] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;

    // 补0
    function padLeftZero(str) {
        return ('00' + str).substr(str.length);
    }
}

export function formatDateToEditor(date) {
    let tempstamp = +new Date() - +new Date(date),
         year = ~~(tempstamp / (12 * 30 * 24 * 60 * 60 * 1000)),
         month = ~~(tempstamp / (30 * 24 * 60 * 60 * 1000)),
         day = ~~(tempstamp / (24 * 60 * 60 * 1000)),
         hour = ~~(tempstamp / (60 * 60 * 1000)),
         minute = ~~(tempstamp / (60 * 1000)),
         second = ~~(tempstamp / (1000)),
         millisecond = tempstamp;

    if(day){
        return date.split('T')[0];
    }
    if(hour){
        return `${hour}小时前`;
    }
    if(minute){
        return `${minute}分钟前`;
    }
    if(second){
        if(second && second < 10){
            return '刚刚'
        }
        return `${second}秒前`;
    }
    // 处理 本地评论插入时的日期
    if (millisecond) {
        return "刚刚"
    }
}

