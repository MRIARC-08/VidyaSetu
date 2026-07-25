'use client';
import React, { useState } from 'react';

import SecondSlide from './components/SecondSlide';
import FirstSlide from './components/FirstSlide';

import { useRouter } from 'next/navigation';
import authFetch from '@/lib/auth/authFetch';

function ProfilePage() {
  const [name, setName] = useState<string>('');
  const [age, setAge] = useState<string>('');
  const [clas, setClas] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [next] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!['9', '10', '11', '12'].includes(clas)) {
      return;
    }

    setLoading(true);
    const data = {
      name,
      class: clas,
    };
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
    };
    const url = '/api/user/updateUser';

    const profile = await authFetch({ url, options });

    setLoading(false);
    if (profile.message.class) {
      router.push('/dashboard');
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

export default ProfilePage;
