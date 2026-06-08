'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { User, GraduationCap, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import authFetch from '@/lib/auth/authFetch';
import PhotoUpload from './PhotoUpload';
import EducationInfo from './EducationInfo';
import StudyPreferences from './StudyPreferences';

const STEPS = [
  { label: 'Profile', icon: User },
  { label: 'Education', icon: GraduationCap },
  { label: 'Preferences', icon: Settings },
];

export default function ProfileSetupWizard() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [studyGoal, setStudyGoal] = useState('');
  const [examTarget, setExamTarget] = useState('');
  const [dailyStudyTime, setDailyStudyTime] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateEducation = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = 'Name is required';
    if (!age.trim()) errs.age = 'Age is required';
    if (!selectedClass) errs.class = 'Please select a class';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1 && !validateEducation()) return;
    setStep((prev) => Math.min(prev + 1, STEPS.length - 1));
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSkip = () => {
    router.push('/dashboard');
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const body: Record<string, unknown> = {
        name: name.trim(),
        age: parseInt(age),
        class: selectedClass,
        subjects: selectedSubjects,
        preferredLanguage,
        studyGoal,
        examTarget,
        dailyStudyTime,
        darkMode,
        firstTime: false,
      };
      if (photo) body.photo = photo;

      const res = await authFetch({
        url: '/api/user/updateUser',
        options: {
          method: 'POST',
          body: JSON.stringify(body),
          headers: { 'Content-Type': 'application/json' },
        },
      });

      if (res?.success || res?.message) {
        router.push('/dashboard');
      }
    } finally {
      setLoading(false);
    }
  };

  const progress = ((step + 1) / STEPS.length) * 100;

  return (
    <div className="w-full max-w-lg mx-auto">
      <div className="bg-card border rounded-xl shadow-sm p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold">Complete Your Profile</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Set up your profile to personalize your learning
          </p>
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            const isActive = i === step;
            const isCompleted = i < step;
            return (
              <div key={s.label} className="flex items-center gap-2">
                <div
                  className={cn(
                    'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all',
                    isActive && 'bg-primary text-primary-foreground',
                    isCompleted && 'bg-primary/10 text-primary',
                    !isActive && !isCompleted && 'bg-muted text-muted-foreground'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{s.label}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    className={cn(
                      'w-8 h-0.5 rounded',
                      i < step ? 'bg-primary' : 'bg-muted'
                    )}
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1.5 bg-muted rounded-full mb-8">
          <div
            className="h-full bg-primary rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Step Content */}
        <div className="min-h-[280px]">
          {step === 0 && <PhotoUpload photo={photo} onPhotoChange={setPhoto} />}

          {step === 1 && (
            <EducationInfo
              name={name}
              onNameChange={setName}
              age={age}
              onAgeChange={setAge}
              selectedClass={selectedClass}
              onClassChange={setSelectedClass}
              selectedSubjects={selectedSubjects}
              onSubjectsChange={setSelectedSubjects}
              errors={errors}
            />
          )}

          {step === 2 && (
            <StudyPreferences
              preferredLanguage={preferredLanguage}
              onLanguageChange={setPreferredLanguage}
              studyGoal={studyGoal}
              onStudyGoalChange={setStudyGoal}
              examTarget={examTarget}
              onExamTargetChange={setExamTarget}
              dailyStudyTime={dailyStudyTime}
              onDailyStudyTimeChange={setDailyStudyTime}
              darkMode={darkMode}
              onDarkModeChange={setDarkMode}
              name={name}
              age={age}
              selectedClass={selectedClass}
              subjects={selectedSubjects}
              photo={photo}
            />
          )}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-8 pt-6 border-t">
          <div>
            {step > 0 ? (
              <button
                type="button"
                onClick={handleBack}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Back
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSkip}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Skip for now
              </button>
            )}
          </div>

          <div className="flex gap-3">
            {step < STEPS.length - 1 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Next
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={cn(
                  'px-6 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg transition-colors',
                  loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-primary/90'
                )}
              >
                {loading ? 'Saving...' : 'Complete Setup'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
