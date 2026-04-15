'use client';
import React, { useState } from 'react';

import SecondSlide from './components/SecondSlide';
import FirstSlide from './components/FirstSlide';
import { date, includes } from 'zod';

import { useRouter } from 'next/navigation';
import { fa } from 'zod/locales';

function page() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [clas, setClas] = useState<string>('4');
  const [loading, setLoading] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      age,
      class: clas,
    };

    const profile = await fetch('/api/profile/updateOrCreateProfile', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
    });

    const res = await profile.json();

    if (res.message == 'jwt expired') {
      await fetch('api/auth/refresh', {
        credentials: 'include',
        method: 'GET',
      });

      handleSubmit(e);
    }

    setLoading(false);

    if (profile.ok) {
      setNext(true);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {next ? (
          <SecondSlide></SecondSlide>
        ) : (
          <FirstSlide
            name={name}
            setName={setName}
            age={age}
            setAge={setAge}
            clas={clas}
            setClas={setClas}
            loading={loading}
          ></FirstSlide>
        )}
      </form>
    </div>
  );
}

export default page;
