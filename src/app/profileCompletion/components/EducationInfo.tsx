'use client';

import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import authFetch from '@/lib/auth/authFetch';

interface ClassOption {
  id: string;
  level: number;
}

interface SubjectOption {
  id: string;
  name: string;
}

interface EducationInfoProps {
  name: string;
  onNameChange: (value: string) => void;
  age: string;
  onAgeChange: (value: string) => void;
  selectedClass: string;
  onClassChange: (value: string) => void;
  selectedSubjects: string[];
  onSubjectsChange: (value: string[]) => void;
  errors: Record<string, string>;
}

export default function EducationInfo({
  name,
  onNameChange,
  age,
  onAgeChange,
  selectedClass,
  onClassChange,
  selectedSubjects,
  onSubjectsChange,
  errors,
}: EducationInfoProps) {
  const [classes, setClasses] = useState<ClassOption[]>([]);
  const [subjects, setSubjects] = useState<SubjectOption[]>([]);
  const [loadingSubjects, setLoadingSubjects] = useState(false);

  useEffect(() => {
    const fetchClasses = async () => {
      const res = await authFetch({
        url: '/api/ncert/classes',
        options: { method: 'GET' },
      });
      if (res?.classes) {
        setClasses(res.classes);
      }
    };
    fetchClasses();
  }, []);

  useEffect(() => {
    if (!selectedClass) {
      setSubjects([]);
      return;
    }

    const classObj = classes.find(
      (c) => c.level === parseInt(selectedClass)
    );

    if (!classObj) return;

    const fetchSubjects = async () => {
      setLoadingSubjects(true);
      const res = await authFetch({
        url: `/api/ncert/subjects?classId=${classObj.id}`,
        options: { method: 'GET' },
      });
      if (res?.subjects) {
        setSubjects(res.subjects);
      }
      setLoadingSubjects(false);
    };
    fetchSubjects();
  }, [selectedClass, classes]);

  const toggleSubject = (subjectId: string) => {
    if (selectedSubjects.includes(subjectId)) {
      onSubjectsChange(selectedSubjects.filter((id) => id !== subjectId));
    } else {
      onSubjectsChange([...selectedSubjects, subjectId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Full Name</Label>
        <Input
          id="name"
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
        {errors.name && (
          <p className="text-xs text-destructive">{errors.name}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="age">Age</Label>
        <Input
          id="age"
          type="number"
          min={1}
          max={100}
          placeholder="Enter your age"
          value={age}
          onChange={(e) => onAgeChange(e.target.value)}
        />
        {errors.age && (
          <p className="text-xs text-destructive">{errors.age}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="class">Class</Label>
        <select
          id="class"
          value={selectedClass}
          onChange={(e) => {
            onClassChange(e.target.value);
            onSubjectsChange([]);
          }}
          className={cn(
            'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-xs transition-colors',
            'focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:border-ring',
            'disabled:cursor-not-allowed disabled:opacity-50',
            !selectedClass && 'text-muted-foreground'
          )}
        >
          <option value="" disabled>
            Select your class
          </option>
          {classes.map((c) => (
            <option key={c.id} value={c.level}>
              Class {c.level}
            </option>
          ))}
        </select>
        {errors.class && (
          <p className="text-xs text-destructive">{errors.class}</p>
        )}
      </div>

      {selectedClass && (
        <div className="space-y-3">
          <Label>Subjects</Label>
          {loadingSubjects ? (
            <p className="text-sm text-muted-foreground">Loading subjects...</p>
          ) : subjects.length === 0 ? (
            <p className="text-sm text-muted-foreground">No subjects available</p>
          ) : (
            <div className="flex flex-wrap gap-2">
              {subjects.map((subject) => (
                <button
                  key={subject.id}
                  type="button"
                  onClick={() => toggleSubject(subject.id)}
                  className={cn(
                    'px-3 py-1.5 rounded-full text-sm font-medium border transition-all',
                    selectedSubjects.includes(subject.id)
                      ? 'bg-primary text-primary-foreground border-primary'
                      : 'bg-background text-foreground border-border hover:border-primary/50'
                  )}
                >
                  {subject.name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
