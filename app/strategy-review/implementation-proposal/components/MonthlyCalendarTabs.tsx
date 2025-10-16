'use client';

import { useState } from 'react';

interface CalendarWeek {
  weekLabel: string;
  dateRange: string;
  sun: string;
  mon: string;
  tue: string;
  wed: string;
  thu: string;
  fri: string;
  sat: string;
}

const januaryWeeks: CalendarWeek[] = [
  {
    weekLabel: "Week 1",
    dateRange: "Jan 5-11",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Trivia Night** 7-10pm",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** 7-10pm",
    fri: "**\"Winter Warmth\"** Theme + Hot Sake Old Fashioned",
    sat: "**MUSIC: Sushi & Sounds** 7-10pm"
  },
  {
    weekLabel: "Week 2",
    dateRange: "Jan 12-18",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "Focus: $12 Yaki Udon",
    fri: "**\"Winter Warmth\"** Theme + Hot Sake Old Fashioned",
    sat: "Regular Service"
  },
  {
    weekLabel: "Week 3",
    dateRange: "Jan 19-25",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Karaoke Night** 7-10pm",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** 7-10pm",
    fri: "**\"Winter Warmth\"** Theme + Hot Sake Old Fashioned",
    sat: "**OPTIONAL MUSIC** (if desired)"
  },
  {
    weekLabel: "Week 4",
    dateRange: "Jan 26-Feb 1",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "Focus: $12 Yaki Udon",
    fri: "**\"Winter Warmth\"** Theme + Hot Sake Old Fashioned",
    sat: "Regular Service"
  }
];

const februaryWeeks: CalendarWeek[] = [
  {
    weekLabel: "Week 1",
    dateRange: "Feb 2-8",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Trivia Night** (Valentine's theme)",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** (Singles/Galentine's)",
    fri: "**\"Romance\"** Theme + Cherry Blossom Martini",
    sat: "**MUSIC: Sushi & Sounds** 7-10pm"
  },
  {
    weekLabel: "Week 2",
    dateRange: "Feb 9-15",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Valentine's Day** Special Service",
    fri: "**\"Romance\"** Theme + Cherry Blossom Martini",
    sat: "Regular Service"
  },
  {
    weekLabel: "Week 3",
    dateRange: "Feb 16-22",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Karaoke Night** 7-10pm",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** 7-10pm",
    fri: "**\"Romance\"** Theme + Cherry Blossom Martini",
    sat: "**OPTIONAL MUSIC** (if desired)"
  },
  {
    weekLabel: "Week 4",
    dateRange: "Feb 23-Mar 1",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "Focus: $12 Yaki Udon",
    fri: "**\"Romance\"** Theme + Cherry Blossom Martini",
    sat: "Regular Service"
  }
];

const marchWeeks: CalendarWeek[] = [
  {
    weekLabel: "Week 1",
    dateRange: "Mar 2-8",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Trivia Night** 7-10pm",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** 7-10pm",
    fri: "**\"Spring Awakening\"** + Yuzu Gin Fizz",
    sat: "**MUSIC: Sushi & Sounds** 7-10pm"
  },
  {
    weekLabel: "Week 2",
    dateRange: "Mar 9-15",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "Focus: $12 Yaki Udon",
    fri: "**\"Spring Awakening\"** + Yuzu Gin Fizz",
    sat: "Regular Service"
  },
  {
    weekLabel: "Week 3",
    dateRange: "Mar 16-22",
    sun: "Regular Service",
    mon: "DARK",
    tue: "**Karaoke Night** 7-10pm",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "**Social Mixer** 7-10pm",
    fri: "**\"Spring Awakening\"** + Yuzu Gin Fizz",
    sat: "**OPTIONAL MUSIC** (if desired)"
  },
  {
    weekLabel: "Week 4",
    dateRange: "Mar 23-29",
    sun: "Regular Service",
    mon: "DARK",
    tue: "Focus: $12 Chicken Fried Rice",
    wed: "**Happy Hour** 4:30-6:30pm",
    thu: "Focus: $12 Yaki Udon",
    fri: "**\"Spring Awakening\"** + Yuzu Gin Fizz",
    sat: "Regular Service"
  }
];

const months = [
  { name: "January 2025", weeks: januaryWeeks },
  { name: "February 2025", weeks: februaryWeeks },
  { name: "March 2025", weeks: marchWeeks }
];

export function MonthlyCalendarTabs() {
  const [activeMonth, setActiveMonth] = useState(0);

  const formatCell = (content: string) => {
    // Parse markdown-style bold for events
    if (content.includes('**')) {
      const parts = content.split('**');
      return (
        <>
          {parts.map((part, i) =>
            i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
          )}
        </>
      );
    }
    return content;
  };

  const getCellStyle = (content: string) => {
    if (content.includes('MUSIC') || content.includes('Trivia') || content.includes('Karaoke') || content.includes('Social Mixer')) {
      return 'bg-blue-900/30 border-l-4 border-blue-500';
    }
    if (content.includes('Happy Hour')) {
      return 'bg-blue-900/20 border-l-4 border-blue-400';
    }
    if (content.includes('Theme')) {
      return 'bg-purple-900/20 border-l-4 border-purple-500';
    }
    if (content.includes('Valentine')) {
      return 'bg-pink-900/30 border-l-4 border-pink-500';
    }
    if (content === 'DARK') {
      return 'bg-gray-900/50 text-gray-500';
    }
    return 'bg-gray-800/30';
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <h2 className="text-3xl font-bold text-white mb-6">
        Three-Month Implementation Calendar
      </h2>

      {/* Executive Summary */}
      <div className="bg-gray-800 border-2 border-gray-700 rounded-lg p-6 mb-6">
        <p className="text-lg leading-relaxed text-gray-300">
          January-March 2025 detailed calendar with specific dates, Valentine's theme integration (February), and
          Spring Awakening theme (March). First Saturday music events anchored, third Saturday discretionary based
          on demand. Color-coded cells indicate event types: <span className="px-2 py-1 bg-blue-900/30 border-l-4 border-blue-500 rounded text-sm">Major Events</span>,
          <span className="ml-2 px-2 py-1 bg-blue-900/20 border-l-4 border-blue-400 rounded text-sm">Weekly Anchor</span>,
          <span className="ml-2 px-2 py-1 bg-purple-900/20 border-l-4 border-purple-500 rounded text-sm">Monthly Theme</span>.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 border-b border-gray-700 mb-6">
        {months.map((month, index) => (
          <button
            key={index}
            onClick={() => setActiveMonth(index)}
            className={`px-6 py-3 font-semibold transition-all duration-200 ${
              activeMonth === index
                ? 'text-[#b22222] border-b-2 border-[#b22222] bg-gray-800/50'
                : 'text-gray-400 hover:text-white hover:bg-gray-800/30'
            }`}
          >
            {month.name}
          </button>
        ))}
      </div>

      {/* Calendar Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-900">
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Week</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Sun</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Mon</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Tue</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Wed</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Thu</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Fri</th>
              <th className="border border-gray-700 px-4 py-3 text-left text-white font-semibold">Sat</th>
            </tr>
          </thead>
          <tbody className="text-gray-300">
            {months[activeMonth].weeks.map((week, idx) => (
              <tr key={idx}>
                <td className="border border-gray-700 px-4 py-3">
                  <div className="font-semibold text-white">{week.weekLabel}</div>
                  <div className="text-xs text-gray-400 mt-1">{week.dateRange}</div>
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.sun)}`}>
                  {formatCell(week.sun)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.mon)}`}>
                  {formatCell(week.mon)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.tue)}`}>
                  {formatCell(week.tue)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.wed)}`}>
                  {formatCell(week.wed)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.thu)}`}>
                  {formatCell(week.thu)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.fri)}`}>
                  {formatCell(week.fri)}
                </td>
                <td className={`border border-gray-700 px-4 py-3 text-sm ${getCellStyle(week.sat)}`}>
                  {formatCell(week.sat)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-900/30 border-l-4 border-blue-500"></div>
          <span>Major Event (Trivia, Karaoke, Mixer, Music)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-900/20 border-l-4 border-blue-400"></div>
          <span>Weekly Happy Hour</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-purple-900/20 border-l-4 border-purple-500"></div>
          <span>Monthly Theme (All Fridays)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-gray-800/30 border border-gray-700"></div>
          <span>Regular Service / Dining Special</span>
        </div>
      </div>
    </section>
  );
}
