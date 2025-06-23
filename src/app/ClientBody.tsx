
'use client';
import { useEffect } from 'react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function ClientBody({ children }: Props) {
  useEffect(() => {
    document.body.className = 'antialiased';
  }, []);

  return <div className="antialiased">{children}</div>;
}
