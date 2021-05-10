const datetimePlugin = {}

datetimePlugin.install = function (Vue, options) {
  //вызов через Vue.myMethod()
  // Vue.myMethod = function () {
  //   console.log('It worked!')
  // }

  //вызов через this.myMethod()
  Vue.prototype.getWeekNumber = function (date) {
    // // текущее дата/время
    // Copy date so don't modify original
    let d = new Date(date);
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);

    return weekNo;
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
    d.setDate(d.getDate() + index);

    let dd = d.getDate();
    if (dd < 10) dd = '0' + dd;
  
    let mm = d.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
  
    let yy = d.getFullYear();
    // let yy = date.getFullYear() % 100;
    // if (yy < 10) yy = '0' + yy;
  
    return dd + '.' + mm + '.' + yy;
  },

  Vue.prototype.printDay = function (date, index) {
    let d = new Date(date)
    d.setDate(d.getDate() + index);

    let dd = d.getDate();
    if (dd < 10) dd = '0' + dd;
  
    return dd;
  }
}
export default datetimePlugin