import React, { useEffect, useMemo, useState } from 'react';

type CountdownTimerProps = {
  // ISO timestamp in UTC that corresponds to the event start in Moscow time (UTC+3)
  targetISO?: string;
  title?: string;
};

const pad = (n: number) => String(Math.max(0, n)).padStart(2, '0');

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  // 2024-02-15 19:00 MSK = 2024-02-15 16:00:00Z
  targetISO = '2024-02-15T16:00:00Z',
  title = 'До начала вебинара осталось',
}) => {
  const targetDate = useMemo(() => new Date(targetISO).getTime(), [targetISO]);
  const [now, setNow] = useState<number>(Date.now());
  const startInMoscow = useMemo(() => {
    const d = new Date(targetISO);
    const formatter = new Intl.DateTimeFormat('ru-RU', {
      timeZone: 'Europe/Moscow',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
    return formatter.format(d);
  }, [targetISO]);

  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

  const diffMs = Math.max(0, targetDate - now);
  const totalSeconds = Math.floor(diffMs / 1000);
  const days = Math.floor(totalSeconds / (24 * 3600));
  const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const isPast = targetDate - now <= 0;

  return (
    <div className="bg-green-50 dark:bg-green-900 rounded-2xl p-6 mb-8 w-full">
      {isPast ? (
        <div className="text-center text-gray-700 font-medium">Вебинар уже состоялся</div>
      ) : (
        <>
          <div className="text-center text-gray-600 dark:text-gray-300 mb-4">{title}</div>
          <div className="grid grid-cols-4 gap-3 text-center">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm">
              <div className="text-3xl font-bold text-black dark:text-white">{pad(days)}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">дней</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm">
              <div className="text-3xl font-bold text-black dark:text-white">{pad(hours)}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">часов</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm">
              <div className="text-3xl font-bold text-black dark:text-white">{pad(minutes)}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">минут</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-3 shadow-sm">
              <div className="text-3xl font-bold text-black dark:text-white">{pad(seconds)}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">секунд</div>
            </div>
          </div>
          <div className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4">Старт: {startInMoscow} МСК</div>
        </>
      )}
    </div>
  );
};

export default CountdownTimer;


