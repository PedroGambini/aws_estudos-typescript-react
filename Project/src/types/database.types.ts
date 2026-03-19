export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      flashcard_progress: {
        Row: {
          id: string
          user_id: string
          flashcard_id: string
          category_id: string
          ease_factor: number
          interval: number
          repetitions: number
          next_review_date: string
          last_reviewed_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          flashcard_id: string
          category_id: string
          ease_factor?: number
          interval?: number
          repetitions?: number
          next_review_date?: string
          last_reviewed_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          flashcard_id?: string
          category_id?: string
          ease_factor?: number
          interval?: number
          repetitions?: number
          next_review_date?: string
          last_reviewed_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      game_history: {
        Row: {
          id: string
          user_id: string
          category_id: string
          score: number
          total_questions: number
          correct_answers: number
          time_spent: number
          completed_at: string
          created_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id: string
          score: number
          total_questions: number
          correct_answers: number
          time_spent: number
          completed_at?: string
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: string
          score?: number
          total_questions?: number
          correct_answers?: number
          time_spent?: number
          completed_at?: string
          created_at?: string
        }
      }
      user_preferences: {
        Row: {
          id: string
          user_id: string
          language: string
          theme: string
          notifications_enabled: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          language?: string
          theme?: string
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          language?: string
          theme?: string
          notifications_enabled?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      category_stats: {
        Row: {
          id: string
          user_id: string
          category_id: string
          total_studied: number
          total_correct: number
          total_incorrect: number
          average_score: number
          last_studied_at: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          user_id: string
          category_id: string
          total_studied?: number
          total_correct?: number
          total_incorrect?: number
          average_score?: number
          last_studied_at?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          category_id?: string
          total_studied?: number
          total_correct?: number
          total_incorrect?: number
          average_score?: number
          last_studied_at?: string | null
          created_at?: string
          updated_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
