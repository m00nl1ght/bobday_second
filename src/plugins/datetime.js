const datetimePlugin = {}

datetimePlugin.install = function (Vue, options) {
  //вызов через Vue.myMethod()
  // Vue.myMethod = function () {
  //   console.log('It worked!')
  // }

  //вызов через this.myMethod()
  Vue.prototype.getWeekNumber = function (date) {
    // текущее дата/время
    const currentDateTime = new Date(date);

    // время начала текущего года, в миллисекундах
    const startTimeOfCurrentYear = (new Date(currentDateTime.getFullYear(), 0, 1)).getTime();

    // текущее время в миллисекундах
    const currentTime = currentDateTime.getTime();

    // прошедшее время с начала года, в миллисекундах
    const pastTimeOfStartCurrentYear = currentTime - startTimeOfCurrentYear;

    // количество миллисекунд в одном часе
    const hourOfMillisecs = 3600000;

    // количество часов в одном дне
    const hoursOfOneWeek = 24;
      
    // document.write("Прошло " + (pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek|0) + " дней<br />");
    // document.write("Сегодня " + Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek) + " день");
    return Math.ceil(pastTimeOfStartCurrentYear / hourOfMillisecs / hoursOfOneWeek / 7)
  },

  Vue.prototype.getMonday = function (date) {
      let d = new Date(date);
      let day = d.getDay(),
          diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
      return new Date(d.setDate(diff));
  },

  Vue.prototype.getFriday = function (date) {
    let d = new Date(date);
    let day = d.getDay(),
        diff = d.getDate() - day + (day == 0 ? -2:5); // adjust when day is sunday
    return new Date(d.setDate(diff));
},

  Vue.prototype.formatDate = function (date, index = 0) {
    let d = new Date(date);

    let dd = d.getDate() + index;
    if (dd < 10) dd = '0' + dd;
  
    let mm = d.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = d.getFullYear();
    // let yy = date.getFullYear() % 100;
    // if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  },

  Vue.prototype.printDay = function (date, index) {
    let d = new Date(date);

    let dd = d.getDate() + index;
    if (dd < 10) dd = '0' + dd;
  
    return dd;
  }
}
export default datetimePlugin