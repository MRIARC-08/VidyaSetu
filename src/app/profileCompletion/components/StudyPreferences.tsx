'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Sun, Moon } from 'lucide-react';

interface StudyPreferencesProps {
  preferredLanguage: string;
  onLanguageChange: (value: string) => void;
  studyGoal: string;
  onStudyGoalChange: (value: string) => void;
  examTarget: string;
  onExamTargetChange: (value: string) => void;
  dailyStudyTime: string;
  onDailyStudyTimeChange: (value: string) => void;
  darkMode: boolean;
  onDarkModeChange: (value: boolean) => void;
  name: string;
  age: string;
  selectedClass: string;
  subjects: string[];
  photo: string | null;
}

const LANGUAGES = ['English', 'Hindi', 'Both'];
const EXAM_TARGETS = ['Board Exams', 'Competitive Exams', 'School Tests', 'General Improvement'];
const STUDY_TIMES = ['30 min', '1 hour', '2 hours', '3+ hours'];

export default function StudyPreferences({
  preferredLanguage,
  onLanguageChange,
  studyGoal,
  onStudyGoalChange,
  examTarget,
  onExamTargetChange,
  dailyStudyTime,
  onDailyStudyTimeChange,
  darkMode,
  onDarkModeChange,
  name,
  age,
  selectedClass,
  subjects,
  photo,
}: StudyPreferencesProps) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="language">Preferred Study Language</Label>
        <select
          id="language"
          value={preferredLanguage}
          onChange={(e) => onLanguageChange(e.target.value)}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
            'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
            !preferredLanguage && 'text-muted-foreground'
          )}
        >
          <option value="" disabled>
            Select language
          </option>
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="goal">Study Goal</Label>
        <Input
          id="goal"
          type="text"
          placeholder="e.g., Score 90% in boards"
          value={studyGoal}
          onChange={(e) => onStudyGoalChange(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="exam">Exam Target</Label>
        <select
          id="exam"
          value={examTarget}
          onChange={(e) => onExamTargetChange(e.target.value)}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
            'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
            !examTarget && 'text-muted-foreground'
          )}
        >
          <option value="" disabled>
            Select exam target
          </option>
          {EXAM_TARGETS.map((target) => (
            <option key={target} value={target}>
              {target}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="studyTime">Daily Study Time</Label>
        <select
          id="studyTime"
          value={dailyStudyTime}
          onChange={(e) => onDailyStudyTimeChange(e.target.value)}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
            'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
            !dailyStudyTime && 'text-muted-foreground'
          )}
        >
          <option value="" disabled>
            Select study time
          </option>
          {STUDY_TIMES.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label>Theme Preference</Label>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onDarkModeChange(false)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all',
              !darkMode
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:border-primary/50'
            )}
          >
            <Sun className="w-4 h-4" />
            Light
          </button>
          <button
            type="button"
            onClick={() => onDarkModeChange(true)}
            className={cn(
              'flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-all',
              darkMode
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-background text-foreground border-border hover:border-primary/50'
            )}
          >
            <Moon className="w-4 h-4" />
            Dark
          </button>
        </div>
      </div>

      <div className="border-t pt-6 space-y-3">
        <p className="text-sm font-semibold">Summary</p>
        <div className="bg-muted rounded-lg p-4 space-y-2 text-sm">
          {photo && (
            <div className="flex items-center gap-3 mb-3">
              <img
                src={photo}
                alt="Preview"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-muted-foreground">Photo uploaded</span>
            </div>
          )}
          <div className="flex justify-between">
            <span className="text-muted-foreground">Name</span>
            <span className="font-medium">{name || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Age</span>
            <span className="font-medium">{age || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Class</span>
            <span className="font-medium">{selectedClass || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subjects</span>
            <span className="font-medium">
              {subjects.length > 0 ? `${subjects.length} selected` : '-'}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Language</span>
            <span className="font-medium">{preferredLanguage || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Goal</span>
            <span className="font-medium">{studyGoal || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Exam Target</span>
            <span className="font-medium">{examTarget || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Daily Study</span>
            <span className="font-medium">{dailyStudyTime || '-'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Theme</span>
            <span className="font-medium">{darkMode ? 'Dark' : 'Light'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
