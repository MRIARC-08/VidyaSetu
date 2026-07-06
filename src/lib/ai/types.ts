// Shared request/response types for the internal FastAPI AI service

export interface PingResponse {
  status: 'ok';
  service: string;
}

export interface EmbedRequest {
  texts: string[];
  model?: string;
}

export interface EmbedResponse {
  embeddings: number[][];
  model: string;
  dim: number;
}

export interface SimilaritySearchRequest {
  query: string;
  source_type?: string;
  owner_id?: string;
  top_k?: number;
  model?: string;
}

export interface ChunkResult {
  chunk_id: string;
  document_id: string;
  chunk_text: string;
  heading_path: string | null;
  score: number;
}

export interface SimilaritySearchResponse {
  results: ChunkResult[];
  query: string;
  model: string;
}
