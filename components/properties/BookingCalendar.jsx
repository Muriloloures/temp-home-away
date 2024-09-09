'use client';
import { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';

export default function App() {
  const currentDate = new Date();
  const defaultSelected = {
    from: undefined,
    to: undefined,
  };
  const [range, setRange] = useState(defaultSelected);

  return (
    <Calendar
      id='test'
      mode='range'
      defaultMonth={currentDate}
      selected={range}
      onSelect={setRange}
    />
  );
}
