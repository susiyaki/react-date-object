type Calendar = "gregorian" | "persian" | "arabic" | "indian";
type Locale = "en" | "fa" | "ar" | "hi";
type DateType = Date | number | string | DateObject;
type NameType = {
  name: string;
  shortName: string;
  number: number;
  index: number;
  valueOf(): number;
  toString(): string;
};
type ObjectType = {
  year: number | undefined;
  month: NameType | undefined;
  day: number | undefined;
  weekDay: NameType | undefined;
  hour: number | undefined;
  minute: number | undefined;
  second: number | undefined;
  millisecond: number | undefined;
  weekOfYear: number | undefined;
  dayOfYear: number | undefined;
  daysLeft: number | undefined;
  calendar: string;
  locale: string;
  format: string | undefined;
};
type Meridiem = {
  name: string;
  shortName: string;
};
declare class DateObject {
  constructor();
  constructor(object: {
    year: number;
    month: number;
    day: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
  });
  constructor(object: {
    date?: DateType;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
  });
  constructor(date: DateType);

  static calendars: {
    gregorian: string;
    persian: string;
    arabic: string;
    indian: string;
  };
  static locales: { en: string; fa: string; ar: string; hi: string };
  /**
   * Parse string from the given formatting token.
   * Default formatting token: "YYYY MM DD hh mm ss SSS a".
   *
   * If you do not specify a formatting token, The default token is considered.
   * @param date
   * @example
   * var date = new DateObject();
   *
   * date.setFormat("dddd DD MMMM YYYY");
   * date.parse("Monday 24 August 2020");
   */
  parse(date: string): this;
  /**
   * Convert current calendar to given calendar.
   *
   * Availble calendars:
   *  - gregorian
   *  - persian
   *  - arabic
   *  - indian
   *
   * @param calendar
   * @example
   * var date = new DateObject();
   *
   * date.convert("persian");
   */
  convert(calendar: Calendar | undefined): this;
  /**
   * Formatting current time from given token.
   * Default token is "YYYY/MM/DD".
   *
   * If you do not specify a formatting token, The default token is considered.
   * @param format
   * @param ignoreList
   * @example
   * var date = new DateObject();
   *
   * date.format(); //2020/12/02
   * date.format("MM/DD/YYYY"); //12/02/2020
   *
   * @example
   * Ignoring `Date` & `Time`
   *
   * var date = new DateObject();
   *
   * date.format("Date:MM/DD/YYYY Time:HH:mm:ss", ["Date", "Time"]); //Date:12/02/2020 Time:11:03:12
   */
  format(format?: string, ignoreList?: string[]): string;
  getProperty(key: string): number | string;

  setYear(year: number): this;
  /**
   * Use this method if you want to specify the names of the months manually.
   *
   * @param months
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setMonths([
   *  ["jan", "j"],
   *  ["feb", "f"],
   *  ["mar", "m"],
   *  ["apr", "a"],
   *  ["may", "m"],
   *  ["jun", "j"],
   *  ["jul", "j"],
   *  ["aug", "a"],
   *  ["sep", "s"],
   *  ["oct", "o"],
   *  ["nov", "n"],
   *  ["dec", "d"],
   * ])
   *
   * date.format("MMMM MMM") //dec d
   */
  setMonths(months: [string[]]): this;
  setMonth(month: number): this;
  /**
   * Use this method if you want to specify the names of week days manually.
   *
   * @param weekDays
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setWeekDays([
   *  ["su", "s"],
   *  ["mo", "m"],
   *  ["tu", "t"],
   *  ["we", "w"],
   *  ["th", "t"],
   *  ["fr", "f"],
   *  ["sa", "s"],
   * ])
   *
   * date.format("dddd ddd") //su s
   */
  setWeekDays(weekDays: [string[]]): this;
  setDigits(digits: string[]): this;
  /**
   * @param dayOfMonth
   */
  setDay(day: number): this;
  setHour(hour: number): this;
  setMinute(minute: number): this;
  setSecond(second: number): this;
  setMillisecond(millisecond: number): this;
  /**
   *
   * @param formattingToken
   * @example
   * var date = new DateObject()
   *
   * date.setFormat("dddd MMMM YYYY")
   *
   * date.format() //Sunday December 2020
   */
  setFormat(format?: string): this;
  /**
   * @param locale
   *
   * Availble locales:
   *  - en `english`
   *  - fa `farsi`
   *  - ar `arabic`
   *  - hi `hindi`
   */
  setLocale(locale: Locale): this;
  /**
   * @param calendar
   *
   * Availble calendars:
   *
   *  - gregorian
   *  - persian
   *  - arabic
   *  - indian
   */
  setCalendar(calendar: Calendar | undefined): this;
  setDate(date: DateType): this;
  set(key: string, value: any): this;
  set(obj: {
    date?: DateType;
    year?: number;
    month?: number;
    months?: [string[]];
    weekDays?: [string[]];
    day?: number;
    hour?: number;
    minute?: number;
    second?: number;
    millisecond?: number;
    calendar?: Calendar;
    locale?: Locale;
    format?: string;
    ignoreList?: string[];
    digits?: string[];
  }): this;
  /**
   * Availbe Types:
   *  - `years` `year` `y`
   *  - `months` `month` `M`
   *  - `days` `day` `d`
   *  - `hours` `hour` `h`
   *  - `minutes` `minute` `m`
   *  - `seconds` `second` `s`
   *  - `milliseconds` `millisecond` `ms`
   *
   * @param duration
   * @param type
   * @example
   *
   * var tomorrow = new DateObject().add(1, "day")
   */
  add(duration: number | string, type: string): this;
  /**
   * Availbe Types:
   *  - `years` `year` `y`
   *  - `months` `month` `M`
   *  - `days` `day` `d`
   *  - `hours` `hour` `h`
   *  - `minutes` `minute` `m`
   *  - `seconds` `second` `s`
   *  - `milliseconds` `millisecond` `ms`
   *
   * @param duration
   * @param type
   * @example
   *
   * var yesterday = new DateObject().subtract(1, "day")
   */
  subtract(duration: number | string, type: string): this;

  toFirstOfYear(): this;
  toLastOfYear(): this;
  toFirstOfMonth(): this;
  toLastOfMonth(): this;
  toFirstOfWeek(): this;
  toLastOfWeek(): this;
  toFirstWeekOfYear(): this;
  toLastWeekOfYear(): this;

  toString(): string;
  /**
   * convert current calendar to JavaScript Date
   */
  toDate(): Date;
  /**
   * convert current calendar to UTC
   */
  toUTC(): this;
  /**
   * Unix time in seconds
   */
  toUnix(): number;
  toJulianDay(): number;
  toObject(): ObjectType;
  toJSON(): ObjectType;
  /**
   * Unix time in milliseconds
   */
  valueOf(): number;

  /**
   * Count number of days passed from 1/1/1 (0/1/1 in indian calendar)
   */
  dayOfBeginning: number;
  /**
   * Count number of days passed from current year
   */
  dayOfYear: number;
  /**
   * Count number of weeks passed from current year
   */
  weekOfYear: number;
  /**
   * Number of days remaining from current year
   */
  daysLeft: number;
  /**
   * @get current year
   * @set year
   */
  year: number;
  /**
   * @get object (Month of year in current locale)
   * @example { name: "January", shortName: "Jan", index: 0, number: 1 }
   * @set number 1-12
   */
  get month(): NameType;
  // set month(month: number);
  /**
   * Day of month
   * @get number
   * @set number
   */
  day: number;
  /**
   * Day of week in current locale
   * @get object
   * @example { name: "Sunday", shortName: "Sun", index: 0, number: 1  }
   */
  get weekDay(): NameType;
  /**
   * @get current hour
   * @set hour
   */
  hour: number;
  /**
   * @get current minute
   * @set minute
   */
  minute: number;
  /**
   * @get current second
   * @set second
   */
  second: number;
  /**
   * @get current millisecond
   * @set millisecond
   */
  millisecond: number;
  /**
   * @get Array of months in current locale
   * @example [{ name: "January", shortName: "Jan", index: 0, number: 1 }, ...]
   * @set custom months
   * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
   * @example
   *
   * var Date = new DateObject()
   *
   * date.months = [
   *  ["jan", "j"],
   *  ["feb", "f"],
   *  ["mar", "m"],
   *  ["apr", "a"],
   *  ["may", "m"],
   *  ["jun", "j"],
   *  ["jul", "j"],
   *  ["aug", "a"],
   *  ["sep", "s"],
   *  ["oct", "o"],
   *  ["nov", "n"],
   *  ["dec", "d"],
   * ]
   *
   * date.format("MMMM MMM") //dec d
   */
  get months(): NameType[];
  // set months(months: string[]);
  /**
   * @get Array of week days in current locale
   * @example [{ name: "Sunday", shortName: "Sun", index: 0, number: 1 }, ...]
   * @set custom week days
   * @example [["name1" , "shortName1"], ["name2" , "shortName2"] ...]
   * @example
   *
   * var Date = new DateObject()
   *
   * date.setWeekDays([
   *  ["su", "s"],
   *  ["mo", "m"],
   *  ["tu", "t"],
   *  ["we", "w"],
   *  ["th", "t"],
   *  ["fr", "f"],
   *  ["sa", "s"],
   * ])
   *
   * date.format("dddd ddd") //su s
   */
  get weekDays(): NameType;
  // set weekDays(weekDays: NameType[]);
  /**
   * Array of leap years until now
   *
   * @example
   *
   * var date = new DateObject()
   *
   * date.leaps //[4, 8, 12, 16, 20, ...]
   */
  leaps: number[];
  /**
   * @get current calendar
   * @set calendar
   *
   * Availble calendars:
   *  - gregorian
   *  - persian
   *  - arabic
   *  - indian
   *
   * @default "gregorian"
   * @example
   * var date = new DateObject() //2020/12/06
   *
   * date.calendar = "indian" //1942/09/15
   */
  get calendar(): Calendar;
  set calendar(calendar: Calendar);
  /**
   * @get current locale
   * @set locale
   *
   * Availble locales:
   *  - en `english`
   *  - fa `farsi`
   *  - ar `arabic`
   *  - hi `hindi`
   *
   * @default "en"
   * @example
   * var date = new DateObject() //2020/12/06
   *
   * date.locale = "fa" //۲۰۲۰/۱۲/۰۶
   */
  get locale(): Locale;
  set locale(locale: Locale);
  /**
   * @get meridiems in current locale
   * @example
   *
   * var date = new DateObject()
   *
   * date.meridiems //[{ name: "AM", shortName: "am" }, { name: "PM", shortName: "pm" }]
   */
  meridiems: Meridiem[];
  /**
   * Array of locale numbers from 0 to 9
   */
  digits: string[];
  /**
   * @get current formatting token
   * @set formatting token
   * @default "YYYY/MM/DD"
   *
   * var date = new DateObject()
   *
   * date._format = "dddd MMMM YYYY"
   *
   * date.format() //Sunday December 2020
   */
  _format: string;
  /**
   * @get true if current year is leap
   */
  isLeap: boolean;
  /**
   * @get true if the year, month and day are correct
   */
  isValid: boolean;
  isUTC: boolean;
  /**
   * @get Unix time in seconds
   */
  unix: number;
  /**
   * formatting ignore list
   *
   * @example
   * var date = new DateObject()
   *
   * date._format = "Date:MM/DD/YYYY"
   * date.ignoreList = ["Date"]
   *
   * date.format() //Date:12/04/2020
   *
   * @example
   * var date = new DateObject({
   *   format: "Date:MM/DD/YYYY",
   *   ignoreList: ["Date"]
   * })
   *
   * date.format() //Date:12/04/2020
   * date.format("time:hh:mm a", ["time"]) //time:06:50 pm
   */
  ignoreList: string[];
  custom: {
    digits: string[] | undefined;
    months: string[] | undefined;
    weekDays: string[] | undefined;
  };
  set date(date: DateType);
}

export = DateObject;
