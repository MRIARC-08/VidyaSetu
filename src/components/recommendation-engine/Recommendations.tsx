'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

type WeakTopic = {
  topic: string;
  score: number;
  suggestion: string;
};

type RecommendationData = {
  weakTopics: WeakTopic[];
  insights: string[];
};

const mockData: RecommendationData = {
  weakTopics: [
    {
      topic: 'Data Structures',
      score: 42,
      suggestion: 'Focus on arrays, linked lists, and recursion practice',
    },
    {
      topic: 'DBMS',
      score: 55,
      suggestion: 'Revise normalization, joins, and indexing',
    },
    {
      topic: 'Operating Systems',
      score: 48,
      suggestion: 'Practice process scheduling and deadlocks',
    },
  ],
  insights: [
    'Students with daily practice improve 2.3x faster',
    'Your consistency is the key factor for improvement',
    'Focus on weak topics first for maximum score gain',
  ],
};

export default function Recommendations() {
  const [data, setData] = useState<RecommendationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecommendations = async () => {
      try {
        setLoading(true);

        // Future API integration
        // const res = await fetch('/api/analytics/weak-topics');
        // const json = await res.json();
        // setData(json);

        await new Promise((r) => setTimeout(r, 700)); // mock delay
        setData(mockData);
      } catch (err: any) {
        setError(err.message || 'Failed to load recommendations');
      } finally {
        setLoading(false);
      }
    };

    fetchRecommendations();
  }, []);

  if (loading) {
    return (
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-muted-foreground">
            Loading personalized recommendations...
          </p>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="border-red-200">
        <CardContent className="p-4 flex items-center gap-2 text-red-500">
          <AlertCircle className="w-4 h-4" />
          <p className="text-sm">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!data) {
    return (
      <Card>
        <CardContent className="p-4 text-sm text-muted-foreground">
          No recommendations available
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4" />
          Study Recommendations
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Weak Topics */}
        <div>
          <h3 className="text-sm font-semibold mb-2">Weak Topics</h3>
          <div className="space-y-2">
            {data.weakTopics.map((item, idx) => (
              <div key={idx} className="p-3 rounded-lg border bg-muted/30">
                <div className="flex justify-between">
                  <span className="font-medium">{item.topic}</span>
                  <span className="text-sm text-red-500">{item.score}%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  {item.suggestion}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div>
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-1">
            <Lightbulb className="w-4 h-4" />
            Insights
          </h3>

          <ul className="space-y-1">
            {data.insights.map((insight, idx) => (
              <li key={idx} className="text-xs text-muted-foreground">
                • {insight}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
