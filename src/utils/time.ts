export class Time {
  public static monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  private static locale = "id";

  private static formatTimeToString(time: Date) {
    const date = time.getDate();
    const month = this.monthNames[time.getMonth()];
    const year = time.getFullYear();
    return `${date} ${month} ${year}`;
  }

  private static formatClock(time: Date) {
    const hour = ("0" + time.getHours()).slice(-2);
    const minutes = ("0" + time.getMinutes()).slice(-2);
    return `${hour}:${minutes} WIB`;
  }

  public static getDayName(time: Date) {
    const day = time.toLocaleDateString(this.locale, { weekday: "long" });
    return day;
  }

  public static getTimeObject(time: string) {
    return new Date(Number(time));
  }

  public static formatTimeAsHours(time: string) {
    return this.formatClock(this.getTimeObject(time));
  }

  public static formatTime(time: string) {
    if (!time) return null;
    return this.formatTimeToString(this.getTimeObject(time));
  }

  public static formatTimeWithHours(time: string) {
    const curTime = this.getTimeObject(time);
    return `${this.getDayName(curTime)}, ${this.formatTimeToString(
      curTime
    )} - ${this.formatClock(curTime)}`;
  }

  public static formatForForm(time: string) {
    const curTime = this.getTimeObject(time);
    return `${this.getDayName(curTime)}, ${this.formatTimeToString(
      curTime
    )} - ${this.formatClock(curTime)}`;
  }
}
