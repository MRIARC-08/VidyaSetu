export class WeakTopicAnalyticsError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.name = 'WeakTopicAnalyticsError';
    this.statusCode = statusCode;
  }
}

export interface WeakTopicResult {
  topicName: string;
  topicId: string;
  accuracy: number;
  attempts: number;
  correctAnswers: number;
}

export interface WeakTopicsResponse {
  topics: WeakTopicResult[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
