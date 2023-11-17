# useCalendarSwitch

## Introduction

Calendar switch

## Basic Usage

```ts
import { useCalendarSwitch } from '@flypeng/tool/browser';
```

## Type Declaration

```ts
/**
 * Calendar switch
 * @param date: date format yyyy-MM-dd
 * @param type: 'solar' | 'lunar'
 * @returns
 */
declare function useCalendarSwitch(
  date: string,
  type: 'solar' | 'lunar',
):
  | number
  | {
      lYear: number;
      lMonth: number;
      lDay: number;
      Animal: string;
      IMonthCn: string;
      IDayCn: string;
      cYear: number;
      cMonth: number;
      cDay: number;
      gzYear: string;
      gzMonth: string;
      gzDay: string;
      isToday: boolean;
      isLeap: boolean;
      nWeek: number;
      ncWeek: string;
      isTerm: boolean;
      Term: string | null;
      astro: string;
    };
```

## Online Demo

<preview path="./index.vue" title="useCalendarSwitch" description="Calendar switch"></preview>
