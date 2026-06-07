import { Metadata } from 'next';
import ProfileSetupWizard from './components/ProfileSetupWizard';

export const metadata: Metadata = {
  title: 'Complete Your Profile | VidyaSetu',
  description: 'Set up your student profile to personalize your learning journey',
};

export default function ProfileCompletionPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <ProfileSetupWizard />
    </div>
  );
}
