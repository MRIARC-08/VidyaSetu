'use client';
import React, { useState } from 'react';

import SecondSlide from './components/SecondSlide';
import FirstSlide from './components/FirstSlide';
import { date, includes } from 'zod';
import { ProfileController } from '@/modules/profile/profile.controller';
import { useRouter } from 'next/navigation';
import { fa } from 'zod/locales';

function page() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [clas, setClas] = useState<string>('4');
  const [loading, setLoading] = useState<boolean>(false);
  const [next, setNext] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      age,
      class: clas,
    };

    console.log(data);

    const profile = await fetch('/api/profile/updateOrCreateProfile', {
      method: 'PUT',
      credentials: 'include',
      body: JSON.stringify(data),
    });

    console.log(profile);

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

    console.log(res);
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
