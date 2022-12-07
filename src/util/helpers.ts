import { Repo, Interval } from "src/types";

export function parseDate(date: string, locale: string, options: object) {
  return new Date(date).toLocaleDateString(locale, options);
};

export function timeSince(
  date: Date,
  nowDate: number = Date.now(), 
  rft = new Intl.RelativeTimeFormat(undefined, { numeric: "auto" })
  ): string | undefined {
  const SECOND = 1000;
  const MINUTE = 60 * SECOND;
  const HOUR = 60 * MINUTE;
  const DAY = 24 * HOUR;
  const WEEK = 7 * DAY;
  const MONTH = 30 * DAY;
  const YEAR = 365 * DAY;
  const intervals: Interval[] = [
      { ge: YEAR, divisor: YEAR, unit: 'year' },
      { ge: MONTH, divisor: MONTH, unit: 'month' },
      { ge: WEEK, divisor: WEEK, unit: 'week' },
      { ge: DAY, divisor: DAY, unit: 'day' },
      { ge: HOUR, divisor: HOUR, unit: 'hour' },
      { ge: MINUTE, divisor: MINUTE, unit: 'minute' },
      { ge: 30 * SECOND, divisor: SECOND, unit: 'seconds' },
      { ge: 0, divisor: 1, text: 'just now' },
  ];

  const now = new Date(nowDate).getTime();
  const diff = now - date.getTime();
  const diffAbs = Math.abs(diff);
  for (const interval of intervals) {
      if (diffAbs >= interval.ge) {
          const x = Math.round(Math.abs(diff) / interval.divisor);
          const isFuture = diff < 0;
          return interval.unit ? rft.format(isFuture ? x : -x, interval.unit) : interval.text;
      }
  }
}

export function getCount(repos: Repo[]) {
  return repos.reduce((acc, repo) => (acc += repo.stargazers_count), 0);
};

export function getSearchQuery(str: string) {
  return str ? str.slice(1) : '';
};
