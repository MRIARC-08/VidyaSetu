import { CredentialsService } from '@/modules/credentials/credentials.service';
import { OpenAIClient, type OpenAIChatMessage } from '@/lib/ai/openai';

export class AIProvider {
  static async getClient(userId: string, provider: 'groq' | 'openai' = 'groq') {
    const apiKey = await CredentialsService.resolveForInternalUse(userId, provider);
    const baseURL = provider === 'groq' 
      ? 'https://api.groq.com/openai/v1' 
      : 'https://api.openai.com/v1';
      
    return new OpenAIClient(apiKey, baseURL);
  }

  static async generateText(
    userId: string, 
    prompt: string, 
    options: { model?: string; provider?: 'groq' | 'openai' } = {}
  ) {
    const provider = options.provider || 'groq';
    const model = options.model || (provider === 'groq' ? 'llama3-8b-8192' : 'gpt-3.5-turbo');
    
    const client = await this.getClient(userId, provider);
    const response = await client.createChatCompletion({
      model,
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
    });
    
    return response.choices?.[0]?.message?.content || '';
  }

  static async chatCompletion(
    userId: string,
    messages: OpenAIChatMessage[],
    options: { model?: string; provider?: 'groq' | 'openai'; temperature?: number } = {}
  ) {
    const provider = options.provider || 'groq';
    const model = options.model || (provider === 'groq' ? 'llama3-8b-8192' : 'gpt-3.5-turbo');
    
    const client = await this.getClient(userId, provider);
    const response = await client.createChatCompletion({
      model,
      messages,
      temperature: options.temperature ?? 0.7,
    });
    
    return response.choices?.[0]?.message?.content || '';
  }
}
