interface RateLimitEntry {
  count: number;
  resetAt: number;
}

export class RateLimiter {
  private store: Map<string, RateLimitEntry>;
  private windowMs: number;
  private maxRequests: number;

  constructor(windowMs: number = 60000, maxRequests: number = 5) {
    this.windowMs = windowMs;
    this.maxRequests = maxRequests;
    
    // Use global object to prevent memory leaks and preserve state during Next.js dev reloads
    const globalStore = global as typeof globalThis & {
      __rateLimiterStore?: Map<string, RateLimitEntry>;
    };

    if (!globalStore.__rateLimiterStore) {
      globalStore.__rateLimiterStore = new Map();
    }
    this.store = globalStore.__rateLimiterStore;
  }

  /**
   * Checks if the given identifier has exceeded the rate limit.
   * Increments the counter if not.
   * @param id The unique identifier (e.g., userId)
   * @returns true if allowed, false if rate limited
   */
  check(id: string): boolean {
    const now = Date.now();
    const entry = this.store.get(id);

    if (!entry || entry.resetAt < now) {
      // Create new entry or reset expired entry
      this.store.set(id, { count: 1, resetAt: now + this.windowMs });
      return true;
    }

    if (entry.count >= this.maxRequests) {
      return false; // Rate limited
    }

    // Increment count
    entry.count += 1;
    return true;
  }
}

// Default instance: 5 requests per minute
export const defaultRateLimiter = new RateLimiter(60000, 5);
