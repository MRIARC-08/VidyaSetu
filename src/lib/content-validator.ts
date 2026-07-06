export interface ValidationResult {
  isValid: boolean;
  safetyFlags: string[];
  factualityIssues: string[];
  recommendations: string[];
}

const HARMFUL_PATTERNS = [
  /\b(kill|harm|hurt|abuse)\b/gi,
  /\b(explicit|pornographic|sexual)\b/gi,
  /\b(discriminat|racist|sexist)\b/gi,
];

const validateBasicSafety = (content: string): string[] => {
  const flags: string[] = [];

  for (const pattern of HARMFUL_PATTERNS) {
    if (pattern.test(content)) {
      flags.push(`Potentially harmful language detected: ${pattern.source}`);
    }
  }

  return flags;
};

const validateFactuality = (content: string, sourceContent: string): string[] => {
  const issues: string[] = [];

  // Check for extreme claims without citation
  const extremeClaims = /\b(always|never|impossible|definitely)\b/gi;
  const matches = content.match(extremeClaims);

  if (matches && matches.length > 3) {
    issues.push(
      'Content contains absolute claims (always, never) that should be qualified'
    );
  }

  // Check for minimum content length to ensure substantial generation
  if (content.length < 150) {
    issues.push('Generated content is too brief for comprehensive study notes');
  }

  // Check if content seems to reference the source material
  const sourceWords = sourceContent
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 4);
  const contentWords = new Set(
    content
      .toLowerCase()
      .split(/\s+/)
      .filter((w) => w.length > 4)
  );

  const commonWords = sourceWords.filter((w) => contentWords.has(w)).length;
  if (commonWords < sourceWords.length * 0.1) {
    issues.push(
      'Generated content may not adequately address the source material'
    );
  }

  return issues;
};

async function validateContentSafety(
  content: string,
  sourceContent?: string
): Promise<ValidationResult> {
  const safetyFlags = validateBasicSafety(content);
  const factualityIssues = sourceContent
    ? validateFactuality(content, sourceContent)
    : [];

  const recommendations: string[] = [];

  if (safetyFlags.length > 0) {
    recommendations.push('Review and remove any potentially harmful language');
  }

  if (factualityIssues.length > 0) {
    recommendations.push('Verify all claims against source material');
    recommendations.push(
      'Ensure content directly addresses the topic and source'
    );
  }

  if (content.split(/\s+/).length < 50) {
    recommendations.push('Expand content with more detailed explanations');
  }

  return {
    isValid: safetyFlags.length === 0 && factualityIssues.length === 0,
    safetyFlags,
    factualityIssues,
    recommendations,
  };
}

async function generateStudyNotes(
  chapter: string,
  topic: string,
  sourceContent: string
): Promise<{ content: string; validationResult: ValidationResult }> {
  if (!sourceContent || sourceContent.length < 50) {
    throw new Error('Source content must be at least 50 characters');
  }

  // Create study notes structure based on source
  const sections = sourceContent.split(/\n+/).filter((s) => s.trim());
  const notes = `# ${topic}\n\n## Key Concepts\n${sections
    .slice(0, 3)
    .map((s) => `- ${s.substring(0, 100).trim()}`)
    .join(
      '\n'
    )}\n\n## Summary\n${sections.map((s) => s.trim()).join(' ')}\n\n## Important Points\n- Topic: ${topic}\n- Chapter: ${chapter}\n- Covered aspects: ${sections.length} main sections`;

  // Validate the generated content
  const validationResult = await validateContentSafety(notes, sourceContent);

  return {
    content: notes,
    validationResult,
  };
}

export { validateContentSafety, generateStudyNotes };
