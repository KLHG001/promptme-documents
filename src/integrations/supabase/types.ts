export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      action_impact_logs: {
        Row: {
          action_description: string | null
          action_type: string
          context_after: string | null
          context_before: string | null
          created_at: string
          effectiveness_rating: number | null
          id: string
          outcome_description: string | null
          purpose_alignment_after: number | null
          purpose_alignment_before: number | null
          source_id: string | null
          source_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          action_description?: string | null
          action_type: string
          context_after?: string | null
          context_before?: string | null
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          outcome_description?: string | null
          purpose_alignment_after?: number | null
          purpose_alignment_before?: number | null
          source_id?: string | null
          source_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          action_description?: string | null
          action_type?: string
          context_after?: string | null
          context_before?: string | null
          created_at?: string
          effectiveness_rating?: number | null
          id?: string
          outcome_description?: string | null
          purpose_alignment_after?: number | null
          purpose_alignment_before?: number | null
          source_id?: string | null
          source_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      adhd_q_a: {
        Row: {
          answer: string
          created_at: string | null
          id: string
          keywords: string | null
          question: string
        }
        Insert: {
          answer: string
          created_at?: string | null
          id?: string
          keywords?: string | null
          question: string
        }
        Update: {
          answer?: string
          created_at?: string | null
          id?: string
          keywords?: string | null
          question?: string
        }
        Relationships: []
      }
      adhd_q_a_knowledge: {
        Row: {
          answer_text: string
          category: string | null
          created_at: string | null
          id: string
          keywords: string | null
          question_phrase: string
          status: string
          submission_date: string | null
          submitted_by: string | null
        }
        Insert: {
          answer_text: string
          category?: string | null
          created_at?: string | null
          id?: string
          keywords?: string | null
          question_phrase: string
          status?: string
          submission_date?: string | null
          submitted_by?: string | null
        }
        Update: {
          answer_text?: string
          category?: string | null
          created_at?: string | null
          id?: string
          keywords?: string | null
          question_phrase?: string
          status?: string
          submission_date?: string | null
          submitted_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "adhd_q_a_knowledge_submitted_by_fkey"
            columns: ["submitted_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      admin_checkins: {
        Row: {
          author_id: string
          created_at: string
          id: string
          note: string
          pinned: boolean
          updated_at: string
          visibility: string
        }
        Insert: {
          author_id: string
          created_at?: string
          id?: string
          note: string
          pinned?: boolean
          updated_at?: string
          visibility?: string
        }
        Update: {
          author_id?: string
          created_at?: string
          id?: string
          note?: string
          pinned?: boolean
          updated_at?: string
          visibility?: string
        }
        Relationships: []
      }
      admin_events: {
        Row: {
          all_day: boolean
          assigned_to: string[] | null
          created_at: string
          created_by: string
          description: string | null
          end_at: string | null
          event_type: string
          id: string
          start_at: string
          title: string
          updated_at: string
        }
        Insert: {
          all_day?: boolean
          assigned_to?: string[] | null
          created_at?: string
          created_by: string
          description?: string | null
          end_at?: string | null
          event_type?: string
          id?: string
          start_at: string
          title: string
          updated_at?: string
        }
        Update: {
          all_day?: boolean
          assigned_to?: string[] | null
          created_at?: string
          created_by?: string
          description?: string | null
          end_at?: string | null
          event_type?: string
          id?: string
          start_at?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_messages: {
        Row: {
          channel: string
          content: string
          created_at: string
          id: string
          sender_id: string
        }
        Insert: {
          channel?: string
          content: string
          created_at?: string
          id?: string
          sender_id: string
        }
        Update: {
          channel?: string
          content?: string
          created_at?: string
          id?: string
          sender_id?: string
        }
        Relationships: []
      }
      admin_profiles: {
        Row: {
          avatar_url: string | null
          clerk_user_id: string
          created_at: string
          department: string | null
          display_name: string
          updated_at: string
        }
        Insert: {
          avatar_url?: string | null
          clerk_user_id: string
          created_at?: string
          department?: string | null
          display_name?: string
          updated_at?: string
        }
        Update: {
          avatar_url?: string | null
          clerk_user_id?: string
          created_at?: string
          department?: string | null
          display_name?: string
          updated_at?: string
        }
        Relationships: []
      }
      admin_tasks: {
        Row: {
          assigned_to: string | null
          created_at: string
          created_by: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          assigned_to?: string | null
          created_at?: string
          created_by: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          assigned_to?: string | null
          created_at?: string
          created_by?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      ae_ai_decisions: {
        Row: {
          ae_influence_keywords: string | null
          ae_x_confidence_score: number | null
          ae_x_influence_level: string | null
          ae_x_synthesis: string | null
          ai_assessment: string | null
          ai_influence_keywords: string | null
          business_model_analysis: string | null
          choices_flexibility: boolean | null
          choices_freedom: boolean | null
          choices_fulfillment: boolean | null
          core_values_input: string | null
          created_at: string | null
          decision_scenario: string
          generated_ae_response: string | null
          generated_ai_response: string | null
          guidance_provided: string | null
          id: string
          market_analysis: string | null
          potential_choices: string | null
          risk_assessment: string | null
          scenario_flexibility: boolean | null
          scenario_freedom: boolean | null
          scenario_fulfillment: boolean | null
          startup_context: Json | null
          user_id: string
        }
        Insert: {
          ae_influence_keywords?: string | null
          ae_x_confidence_score?: number | null
          ae_x_influence_level?: string | null
          ae_x_synthesis?: string | null
          ai_assessment?: string | null
          ai_influence_keywords?: string | null
          business_model_analysis?: string | null
          choices_flexibility?: boolean | null
          choices_freedom?: boolean | null
          choices_fulfillment?: boolean | null
          core_values_input?: string | null
          created_at?: string | null
          decision_scenario: string
          generated_ae_response?: string | null
          generated_ai_response?: string | null
          guidance_provided?: string | null
          id?: string
          market_analysis?: string | null
          potential_choices?: string | null
          risk_assessment?: string | null
          scenario_flexibility?: boolean | null
          scenario_freedom?: boolean | null
          scenario_fulfillment?: boolean | null
          startup_context?: Json | null
          user_id: string
        }
        Update: {
          ae_influence_keywords?: string | null
          ae_x_confidence_score?: number | null
          ae_x_influence_level?: string | null
          ae_x_synthesis?: string | null
          ai_assessment?: string | null
          ai_influence_keywords?: string | null
          business_model_analysis?: string | null
          choices_flexibility?: boolean | null
          choices_freedom?: boolean | null
          choices_fulfillment?: boolean | null
          core_values_input?: string | null
          created_at?: string | null
          decision_scenario?: string
          generated_ae_response?: string | null
          generated_ai_response?: string | null
          guidance_provided?: string | null
          id?: string
          market_analysis?: string | null
          potential_choices?: string | null
          risk_assessment?: string | null
          scenario_flexibility?: boolean | null
          scenario_freedom?: boolean | null
          scenario_fulfillment?: boolean | null
          startup_context?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      ae_personas: {
        Row: {
          created_at: string | null
          id: string
          nickname: string
          raw_traits: Json | null
          user_id: string
          voice_profile_id: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          nickname: string
          raw_traits?: Json | null
          user_id: string
          voice_profile_id?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          nickname?: string
          raw_traits?: Json | null
          user_id?: string
          voice_profile_id?: string | null
        }
        Relationships: []
      }
      ae_x_analyses: {
        Row: {
          ae_content: string
          ai_content: string
          analysis_type: string
          confidence_score: number | null
          created_at: string
          id: string
          influence_factors: Json | null
          learned_moments_used: Json | null
          mood_context: Json | null
          purpose_alignment_score: number | null
          source_decision_id: string | null
          synthesis_result: string
          three_f_scores: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ae_content: string
          ai_content: string
          analysis_type?: string
          confidence_score?: number | null
          created_at?: string
          id?: string
          influence_factors?: Json | null
          learned_moments_used?: Json | null
          mood_context?: Json | null
          purpose_alignment_score?: number | null
          source_decision_id?: string | null
          synthesis_result: string
          three_f_scores?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ae_content?: string
          ai_content?: string
          analysis_type?: string
          confidence_score?: number | null
          created_at?: string
          id?: string
          influence_factors?: Json | null
          learned_moments_used?: Json | null
          mood_context?: Json | null
          purpose_alignment_score?: number | null
          source_decision_id?: string | null
          synthesis_result?: string
          three_f_scores?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      aex_moments_log: {
        Row: {
          aex_outcome: string
          aex_points_awarded: number | null
          ai_contribution: string | null
          celebration_unlocked: string | null
          child_profile_id: string
          created_at: string | null
          id: string
          if_iv_contribution: string | null
          moment_description: string
          moment_type: string
          parent_note: string | null
        }
        Insert: {
          aex_outcome: string
          aex_points_awarded?: number | null
          ai_contribution?: string | null
          celebration_unlocked?: string | null
          child_profile_id: string
          created_at?: string | null
          id?: string
          if_iv_contribution?: string | null
          moment_description: string
          moment_type: string
          parent_note?: string | null
        }
        Update: {
          aex_outcome?: string
          aex_points_awarded?: number | null
          ai_contribution?: string | null
          celebration_unlocked?: string | null
          child_profile_id?: string
          created_at?: string | null
          id?: string
          if_iv_contribution?: string | null
          moment_description?: string
          moment_type?: string
          parent_note?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "aex_moments_log_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      affirmation_feedback_logs: {
        Row: {
          affirmation_id: string
          context: string | null
          created_at: string
          effectiveness_score: number | null
          feedback_rating: Database["public"]["Enums"]["affirmation_feedback_rating_enum"]
          id: string
          user_comment: string | null
          user_id: string
        }
        Insert: {
          affirmation_id: string
          context?: string | null
          created_at?: string
          effectiveness_score?: number | null
          feedback_rating: Database["public"]["Enums"]["affirmation_feedback_rating_enum"]
          id?: string
          user_comment?: string | null
          user_id: string
        }
        Update: {
          affirmation_id?: string
          context?: string | null
          created_at?: string
          effectiveness_score?: number | null
          feedback_rating?: Database["public"]["Enums"]["affirmation_feedback_rating_enum"]
          id?: string
          user_comment?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "affirmation_feedback_logs_affirmation_id_fkey"
            columns: ["affirmation_id"]
            isOneToOne: false
            referencedRelation: "affirmations"
            referencedColumns: ["id"]
          },
        ]
      }
      affirmation_likes: {
        Row: {
          affirmation_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          affirmation_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          affirmation_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "affirmation_likes_affirmation_id_fkey"
            columns: ["affirmation_id"]
            isOneToOne: false
            referencedRelation: "affirmations"
            referencedColumns: ["id"]
          },
        ]
      }
      affirmations: {
        Row: {
          ae_context_snapshot: string | null
          affirmation_text: string
          ai_context_snapshot: string | null
          ai_generation_context: Json | null
          care_area: Database["public"]["Enums"]["care_area_enum"]
          created_at: string
          current_mood_snapshot: string | null
          generated_by_ai: boolean
          id: string
          intended_audience: string
          is_nft_eligible: boolean
          likes_count: number
          nft_mint_status: string | null
          updated_at: string
          user_id: string
          user_intent: Database["public"]["Enums"]["affirmation_intent_enum"]
        }
        Insert: {
          ae_context_snapshot?: string | null
          affirmation_text: string
          ai_context_snapshot?: string | null
          ai_generation_context?: Json | null
          care_area: Database["public"]["Enums"]["care_area_enum"]
          created_at?: string
          current_mood_snapshot?: string | null
          generated_by_ai?: boolean
          id?: string
          intended_audience?: string
          is_nft_eligible?: boolean
          likes_count?: number
          nft_mint_status?: string | null
          updated_at?: string
          user_id: string
          user_intent: Database["public"]["Enums"]["affirmation_intent_enum"]
        }
        Update: {
          ae_context_snapshot?: string | null
          affirmation_text?: string
          ai_context_snapshot?: string | null
          ai_generation_context?: Json | null
          care_area?: Database["public"]["Enums"]["care_area_enum"]
          created_at?: string
          current_mood_snapshot?: string | null
          generated_by_ai?: boolean
          id?: string
          intended_audience?: string
          is_nft_eligible?: boolean
          likes_count?: number
          nft_mint_status?: string | null
          updated_at?: string
          user_id?: string
          user_intent?: Database["public"]["Enums"]["affirmation_intent_enum"]
        }
        Relationships: []
      }
      agreement_suggestions: {
        Row: {
          created_at: string
          id: string
          is_default: boolean
          suggestion_text: string
          suggestion_type: string
          updated_at: string
          usage_count: number
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_default?: boolean
          suggestion_text: string
          suggestion_type: string
          updated_at?: string
          usage_count?: number
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_default?: boolean
          suggestion_text?: string
          suggestion_type?: string
          updated_at?: string
          usage_count?: number
          user_id?: string
        }
        Relationships: []
      }
      ai_personas: {
        Row: {
          created_at: string | null
          id: string
          influence_name: string
          knowledge_base_ref: string | null
          polish_style: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          influence_name: string
          knowledge_base_ref?: string | null
          polish_style?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          influence_name?: string
          knowledge_base_ref?: string | null
          polish_style?: string | null
          user_id?: string
        }
        Relationships: []
      }
      altar_influences_log: {
        Row: {
          child_profile_id: string
          created_at: string | null
          emotional_tone: string | null
          id: string
          influence_type: string
          linked_mood_log_id: string | null
          parent_user_id: string
          situation_description: string
          source_context: string | null
          wisdom_quote: string
        }
        Insert: {
          child_profile_id: string
          created_at?: string | null
          emotional_tone?: string | null
          id?: string
          influence_type: string
          linked_mood_log_id?: string | null
          parent_user_id: string
          situation_description: string
          source_context?: string | null
          wisdom_quote: string
        }
        Update: {
          child_profile_id?: string
          created_at?: string | null
          emotional_tone?: string | null
          id?: string
          influence_type?: string
          linked_mood_log_id?: string | null
          parent_user_id?: string
          situation_description?: string
          source_context?: string | null
          wisdom_quote?: string
        }
        Relationships: [
          {
            foreignKeyName: "altar_influences_log_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "altar_influences_log_linked_mood_log_id_fkey"
            columns: ["linked_mood_log_id"]
            isOneToOne: false
            referencedRelation: "child_mood_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "altar_influences_log_parent_user_id_fkey"
            columns: ["parent_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      alter_ego_profiles: {
        Row: {
          archetype: string
          created_at: string
          description: string | null
          display_name: string | null
          id: string
          is_active: boolean
          risk_patterns: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          archetype: string
          created_at?: string
          description?: string | null
          display_name?: string | null
          id?: string
          is_active?: boolean
          risk_patterns?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          archetype?: string
          created_at?: string
          description?: string | null
          display_name?: string | null
          id?: string
          is_active?: boolean
          risk_patterns?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      announcements: {
        Row: {
          body_text: string
          created_at: string
          created_by: string | null
          cta_text: string | null
          cta_url: string | null
          display_location: string
          end_time: string
          headline: string
          id: string
          is_active: boolean | null
          start_time: string
          updated_at: string
        }
        Insert: {
          body_text: string
          created_at?: string
          created_by?: string | null
          cta_text?: string | null
          cta_url?: string | null
          display_location: string
          end_time: string
          headline: string
          id?: string
          is_active?: boolean | null
          start_time: string
          updated_at?: string
        }
        Update: {
          body_text?: string
          created_at?: string
          created_by?: string | null
          cta_text?: string | null
          cta_url?: string | null
          display_location?: string
          end_time?: string
          headline?: string
          id?: string
          is_active?: boolean | null
          start_time?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "announcements_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      anonymous_prompt_pool: {
        Row: {
          age_tier: string
          created_at: string | null
          helpful_votes: number | null
          id: string
          refined_query: string
          synthesized_response: string
        }
        Insert: {
          age_tier: string
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          refined_query: string
          synthesized_response: string
        }
        Update: {
          age_tier?: string
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          refined_query?: string
          synthesized_response?: string
        }
        Relationships: []
      }
      api_keys: {
        Row: {
          created_at: string | null
          expires_at: string | null
          id: string
          is_active: boolean | null
          key_hash: string
          key_name: string
          key_prefix: string
          last_used_at: string | null
          scopes: string[] | null
          updated_at: string | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_hash: string
          key_name?: string
          key_prefix: string
          last_used_at?: string | null
          scopes?: string[] | null
          updated_at?: string | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string | null
          expires_at?: string | null
          id?: string
          is_active?: boolean | null
          key_hash?: string
          key_name?: string
          key_prefix?: string
          last_used_at?: string | null
          scopes?: string[] | null
          updated_at?: string | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_keys_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      api_rate_limits: {
        Row: {
          created_at: string
          endpoint: string
          id: string
          request_count: number
          updated_at: string
          user_id: string | null
          window_end: string
          window_start: string
        }
        Insert: {
          created_at?: string
          endpoint: string
          id?: string
          request_count?: number
          updated_at?: string
          user_id?: string | null
          window_end?: string
          window_start?: string
        }
        Update: {
          created_at?: string
          endpoint?: string
          id?: string
          request_count?: number
          updated_at?: string
          user_id?: string | null
          window_end?: string
          window_start?: string
        }
        Relationships: []
      }
      api_request_queue: {
        Row: {
          completed_at: string | null
          created_at: string
          endpoint: string
          error_message: string | null
          id: string
          max_retries: number
          priority: number
          request_data: Json
          retry_count: number
          scheduled_for: string
          started_at: string | null
          status: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          endpoint: string
          error_message?: string | null
          id?: string
          max_retries?: number
          priority?: number
          request_data: Json
          retry_count?: number
          scheduled_for?: string
          started_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          endpoint?: string
          error_message?: string | null
          id?: string
          max_retries?: number
          priority?: number
          request_data?: Json
          retry_count?: number
          scheduled_for?: string
          started_at?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      api_usage_logs: {
        Row: {
          api_key_id: string
          created_at: string | null
          endpoint: string
          estimated_cost: number | null
          id: string
          latency_ms: number | null
          metadata: Json | null
          request_type: string
          response_status: number | null
          tokens_used: number | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          api_key_id: string
          created_at?: string | null
          endpoint: string
          estimated_cost?: number | null
          id?: string
          latency_ms?: number | null
          metadata?: Json | null
          request_type: string
          response_status?: number | null
          tokens_used?: number | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          api_key_id?: string
          created_at?: string | null
          endpoint?: string
          estimated_cost?: number | null
          id?: string
          latency_ms?: number | null
          metadata?: Json | null
          request_type?: string
          response_status?: number | null
          tokens_used?: number | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_logs_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "api_usage_logs_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      api_usage_summary: {
        Row: {
          api_key_id: string
          created_at: string | null
          date: string
          endpoints_breakdown: Json | null
          failed_requests: number | null
          id: string
          successful_requests: number | null
          total_estimated_cost: number | null
          total_requests: number | null
          total_tokens: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          api_key_id: string
          created_at?: string | null
          date: string
          endpoints_breakdown?: Json | null
          failed_requests?: number | null
          id?: string
          successful_requests?: number | null
          total_estimated_cost?: number | null
          total_requests?: number | null
          total_tokens?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          api_key_id?: string
          created_at?: string | null
          date?: string
          endpoints_breakdown?: Json | null
          failed_requests?: number | null
          id?: string
          successful_requests?: number | null
          total_estimated_cost?: number | null
          total_requests?: number | null
          total_tokens?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "api_usage_summary_api_key_id_fkey"
            columns: ["api_key_id"]
            isOneToOne: false
            referencedRelation: "api_keys"
            referencedColumns: ["id"]
          },
        ]
      }
      app_sessions: {
        Row: {
          created_at: string | null
          ended_at: string | null
          id: string
          session_check_in: number
          session_check_out: number | null
          started_at: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          session_check_in: number
          session_check_out?: number | null
          started_at?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          ended_at?: string | null
          id?: string
          session_check_in?: number
          session_check_out?: number | null
          started_at?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      app_submissions: {
        Row: {
          admin_notes: string | null
          admin_score: number | null
          app_description: string
          app_name: string
          app_url: string | null
          category: string
          contest_period: string
          created_at: string
          final_rank: number | null
          github_url: string | null
          id: string
          prize_awarded: string | null
          public_voting_score: number | null
          status: string
          submission_type: string
          tech_stack: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          admin_score?: number | null
          app_description: string
          app_name: string
          app_url?: string | null
          category: string
          contest_period: string
          created_at?: string
          final_rank?: number | null
          github_url?: string | null
          id?: string
          prize_awarded?: string | null
          public_voting_score?: number | null
          status?: string
          submission_type?: string
          tech_stack?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          admin_score?: number | null
          app_description?: string
          app_name?: string
          app_url?: string | null
          category?: string
          contest_period?: string
          created_at?: string
          final_rank?: number | null
          github_url?: string | null
          id?: string
          prize_awarded?: string | null
          public_voting_score?: number | null
          status?: string
          submission_type?: string
          tech_stack?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      architects_sanctuary: {
        Row: {
          created_at: string
          entry_content: string
          id: string
          mood_tag: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entry_content: string
          id?: string
          mood_tag?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entry_content?: string
          id?: string
          mood_tag?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      assessment_analytics: {
        Row: {
          assessment_type: string
          converted_to_signup: boolean | null
          created_at: string
          device_type: string | null
          event_type: string
          id: string
          max_score: number | null
          question_index: number | null
          referrer: string | null
          score: number | null
          session_id: string
          total_questions: number | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          assessment_type: string
          converted_to_signup?: boolean | null
          created_at?: string
          device_type?: string | null
          event_type: string
          id?: string
          max_score?: number | null
          question_index?: number | null
          referrer?: string | null
          score?: number | null
          session_id: string
          total_questions?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          assessment_type?: string
          converted_to_signup?: boolean | null
          created_at?: string
          device_type?: string | null
          event_type?: string
          id?: string
          max_score?: number | null
          question_index?: number | null
          referrer?: string | null
          score?: number | null
          session_id?: string
          total_questions?: number | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      avatar_conversations: {
        Row: {
          created_at: string
          id: string
          messages: Json
          persona: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          messages?: Json
          persona: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          messages?: Json
          persona?: string
          user_id?: string
        }
        Relationships: []
      }
      avatar_exports: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          persona: string
          script: string
          status: string
          user_id: string
          video_url: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          persona: string
          script: string
          status?: string
          user_id: string
          video_url?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          persona?: string
          script?: string
          status?: string
          user_id?: string
          video_url?: string | null
        }
        Relationships: []
      }
      avatar_generations: {
        Row: {
          generated_at: string
          generation_date: string
          id: string
          user_id: string
        }
        Insert: {
          generated_at?: string
          generation_date?: string
          id?: string
          user_id: string
        }
        Update: {
          generated_at?: string
          generation_date?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      avatar_selves: {
        Row: {
          avatar_provider: string
          avatar_source_id: string | null
          created_at: string
          id: string
          metadata: Json | null
          persona: string
          photo_url: string
          updated_at: string
          user_id: string
          voice_clone_id: string | null
        }
        Insert: {
          avatar_provider?: string
          avatar_source_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          persona: string
          photo_url: string
          updated_at?: string
          user_id: string
          voice_clone_id?: string | null
        }
        Update: {
          avatar_provider?: string
          avatar_source_id?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          persona?: string
          photo_url?: string
          updated_at?: string
          user_id?: string
          voice_clone_id?: string | null
        }
        Relationships: []
      }
      beta_completion_progress: {
        Row: {
          checkin_count: number | null
          coin_multiplier: number | null
          completed_at: string | null
          completion_percentage: number | null
          completion_rank: number | null
          created_at: string | null
          features_used: string[] | null
          id: string
          reward_tier: string | null
          rewards_claimed: boolean | null
          testimonial_count: number | null
          total_session_minutes: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          checkin_count?: number | null
          coin_multiplier?: number | null
          completed_at?: string | null
          completion_percentage?: number | null
          completion_rank?: number | null
          created_at?: string | null
          features_used?: string[] | null
          id?: string
          reward_tier?: string | null
          rewards_claimed?: boolean | null
          testimonial_count?: number | null
          total_session_minutes?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          checkin_count?: number | null
          coin_multiplier?: number | null
          completed_at?: string | null
          completion_percentage?: number | null
          completion_rank?: number | null
          created_at?: string | null
          features_used?: string[] | null
          id?: string
          reward_tier?: string | null
          rewards_claimed?: boolean | null
          testimonial_count?: number | null
          total_session_minutes?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      beta_testimonials: {
        Row: {
          admin_notes: string | null
          admin_reviewed: boolean | null
          category: string
          content: string | null
          created_at: string | null
          id: string
          media_url: string | null
          testimonial_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          admin_reviewed?: boolean | null
          category: string
          content?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          testimonial_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          admin_reviewed?: boolean | null
          category?: string
          content?: string | null
          created_at?: string | null
          id?: string
          media_url?: string | null
          testimonial_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      blueprint_samples: {
        Row: {
          blueprint_id: string
          created_at: string
          files: Json
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          blueprint_id: string
          created_at?: string
          files: Json
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          blueprint_id?: string
          created_at?: string
          files?: Json
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "blueprint_samples_blueprint_id_fkey"
            columns: ["blueprint_id"]
            isOneToOne: false
            referencedRelation: "blueprints"
            referencedColumns: ["id"]
          },
        ]
      }
      blueprints: {
        Row: {
          client_id: string | null
          created_at: string
          current_step: number
          data: Json
          generated_files: Json | null
          id: string
          linked_mindmap_id: string | null
          name: string
          project_id: string | null
          source_questionnaire_id: string | null
          status: string
          updated_at: string
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          current_step?: number
          data?: Json
          generated_files?: Json | null
          id?: string
          linked_mindmap_id?: string | null
          name?: string
          project_id?: string | null
          source_questionnaire_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          client_id?: string | null
          created_at?: string
          current_step?: number
          data?: Json
          generated_files?: Json | null
          id?: string
          linked_mindmap_id?: string | null
          name?: string
          project_id?: string | null
          source_questionnaire_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "blueprints_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blueprints_linked_mindmap_id_fkey"
            columns: ["linked_mindmap_id"]
            isOneToOne: false
            referencedRelation: "mind_maps"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blueprints_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blueprints_source_questionnaire_id_fkey"
            columns: ["source_questionnaire_id"]
            isOneToOne: false
            referencedRelation: "client_questionnaires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "blueprints_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      book_excerpts: {
        Row: {
          book_id: string
          created_at: string
          excerpt_text: string
          id: string
          page_reference: string | null
          relevance_reason: string | null
          saved_as_moment: boolean | null
          user_id: string
        }
        Insert: {
          book_id: string
          created_at?: string
          excerpt_text: string
          id?: string
          page_reference?: string | null
          relevance_reason?: string | null
          saved_as_moment?: boolean | null
          user_id: string
        }
        Update: {
          book_id?: string
          created_at?: string
          excerpt_text?: string
          id?: string
          page_reference?: string | null
          relevance_reason?: string | null
          saved_as_moment?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "book_excerpts_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
        ]
      }
      book_summaries: {
        Row: {
          book_id: string
          created_at: string
          discussion_points: Json | null
          goal_aligned_content: string | null
          id: string
          key_themes: string[] | null
          moral_of_story: string | null
          personalized_excerpts: Json | null
          user_id: string
        }
        Insert: {
          book_id: string
          created_at?: string
          discussion_points?: Json | null
          goal_aligned_content?: string | null
          id?: string
          key_themes?: string[] | null
          moral_of_story?: string | null
          personalized_excerpts?: Json | null
          user_id: string
        }
        Update: {
          book_id?: string
          created_at?: string
          discussion_points?: Json | null
          goal_aligned_content?: string | null
          id?: string
          key_themes?: string[] | null
          moral_of_story?: string | null
          personalized_excerpts?: Json | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "book_summaries_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["id"]
          },
        ]
      }
      books: {
        Row: {
          file_name: string
          file_size: number | null
          file_type: string
          file_url: string
          id: string
          processed_at: string | null
          processing_status: string
          purpose: string | null
          recommended_by: string | null
          recommender_traits: string[] | null
          title: string
          uploaded_at: string
          user_id: string
        }
        Insert: {
          file_name: string
          file_size?: number | null
          file_type: string
          file_url: string
          id?: string
          processed_at?: string | null
          processing_status?: string
          purpose?: string | null
          recommended_by?: string | null
          recommender_traits?: string[] | null
          title: string
          uploaded_at?: string
          user_id: string
        }
        Update: {
          file_name?: string
          file_size?: number | null
          file_type?: string
          file_url?: string
          id?: string
          processed_at?: string | null
          processing_status?: string
          purpose?: string | null
          recommended_by?: string | null
          recommender_traits?: string[] | null
          title?: string
          uploaded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      brand_materials: {
        Row: {
          blueprint_id: string | null
          brand_colors: Json | null
          brand_info: Json | null
          client_id: string | null
          created_at: string
          creation_method: string
          design_data: Json | null
          file_urls: Json | null
          fonts: Json | null
          id: string
          material_type: string
          name: string
          preview_url: string | null
          reference_urls: Json | null
          status: string
          template_id: string | null
          updated_at: string
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          blueprint_id?: string | null
          brand_colors?: Json | null
          brand_info?: Json | null
          client_id?: string | null
          created_at?: string
          creation_method: string
          design_data?: Json | null
          file_urls?: Json | null
          fonts?: Json | null
          id?: string
          material_type: string
          name: string
          preview_url?: string | null
          reference_urls?: Json | null
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          blueprint_id?: string | null
          brand_colors?: Json | null
          brand_info?: Json | null
          client_id?: string | null
          created_at?: string
          creation_method?: string
          design_data?: Json | null
          file_urls?: Json | null
          fonts?: Json | null
          id?: string
          material_type?: string
          name?: string
          preview_url?: string | null
          reference_urls?: Json | null
          status?: string
          template_id?: string | null
          updated_at?: string
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_materials_blueprint_id_fkey"
            columns: ["blueprint_id"]
            isOneToOne: false
            referencedRelation: "blueprints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brand_materials_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brand_materials_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      brand_questionnaires: {
        Row: {
          brand_colors: Json | null
          client_email: string | null
          client_id: string | null
          client_name: string | null
          config: Json | null
          created_at: string
          id: string
          material_type: string
          reference_urls: Json | null
          responses: Json | null
          share_token: string
          status: string
          submitted_at: string | null
          updated_at: string
          uploaded_files: Json | null
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          brand_colors?: Json | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          config?: Json | null
          created_at?: string
          id?: string
          material_type: string
          reference_urls?: Json | null
          responses?: Json | null
          share_token?: string
          status?: string
          submitted_at?: string | null
          updated_at?: string
          uploaded_files?: Json | null
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          brand_colors?: Json | null
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          config?: Json | null
          created_at?: string
          id?: string
          material_type?: string
          reference_urls?: Json | null
          responses?: Json | null
          share_token?: string
          status?: string
          submitted_at?: string | null
          updated_at?: string
          uploaded_files?: Json | null
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "brand_questionnaires_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "brand_questionnaires_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      budget_allocations: {
        Row: {
          ai_recommended: boolean | null
          allocated_amount: number | null
          allocated_percentage: number
          category_id: string | null
          created_at: string
          id: string
          period_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_recommended?: boolean | null
          allocated_amount?: number | null
          allocated_percentage: number
          category_id?: string | null
          created_at?: string
          id?: string
          period_type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_recommended?: boolean | null
          allocated_amount?: number | null
          allocated_percentage?: number
          category_id?: string | null
          created_at?: string
          id?: string
          period_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "budget_allocations_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "spending_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      business_checkins: {
        Row: {
          blockers: string | null
          business_sentiment: number | null
          calendar_event_id: string | null
          checked_in_at: string
          client_focus: string | null
          company_id: string | null
          created_at: string
          energy_level: number | null
          id: string
          notes: string | null
          project_id: string | null
          top_priority: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          blockers?: string | null
          business_sentiment?: number | null
          calendar_event_id?: string | null
          checked_in_at?: string
          client_focus?: string | null
          company_id?: string | null
          created_at?: string
          energy_level?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          top_priority?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          blockers?: string | null
          business_sentiment?: number | null
          calendar_event_id?: string | null
          checked_in_at?: string
          client_focus?: string | null
          company_id?: string | null
          created_at?: string
          energy_level?: number | null
          id?: string
          notes?: string | null
          project_id?: string | null
          top_priority?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_checkins_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_checkins_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_checkins_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      business_clients: {
        Row: {
          client_email: string | null
          client_name: string
          client_phone: string | null
          client_type: string | null
          communication_style: string | null
          company_id: string | null
          company_name: string | null
          contact_preferences: Json | null
          created_at: string
          id: string
          last_contact_date: string | null
          metadata: Json | null
          next_followup_date: string | null
          notes: string | null
          relationship_status: string | null
          total_project_value: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          client_email?: string | null
          client_name: string
          client_phone?: string | null
          client_type?: string | null
          communication_style?: string | null
          company_id?: string | null
          company_name?: string | null
          contact_preferences?: Json | null
          created_at?: string
          id?: string
          last_contact_date?: string | null
          metadata?: Json | null
          next_followup_date?: string | null
          notes?: string | null
          relationship_status?: string | null
          total_project_value?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          client_email?: string | null
          client_name?: string
          client_phone?: string | null
          client_type?: string | null
          communication_style?: string | null
          company_id?: string | null
          company_name?: string | null
          contact_preferences?: Json | null
          created_at?: string
          id?: string
          last_contact_date?: string | null
          metadata?: Json | null
          next_followup_date?: string | null
          notes?: string | null
          relationship_status?: string | null
          total_project_value?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_clients_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_communications: {
        Row: {
          ai_analysis: Json | null
          client_id: string | null
          communication_type: string
          company_id: string | null
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          id: string
          metadata: Json | null
          original_content: string | null
          platform: string | null
          project_id: string | null
          refined_content: string | null
          sent_at: string | null
          status: string | null
          subject: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          client_id?: string | null
          communication_type?: string
          company_id?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          original_content?: string | null
          platform?: string | null
          project_id?: string | null
          refined_content?: string | null
          sent_at?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json | null
          client_id?: string | null
          communication_type?: string
          company_id?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          id?: string
          metadata?: Json | null
          original_content?: string | null
          platform?: string | null
          project_id?: string | null
          refined_content?: string | null
          sent_at?: string | null
          status?: string | null
          subject?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_communications_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_business_communications_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_business_communications_project"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      business_documents: {
        Row: {
          access_level: string | null
          ai_analysis: Json | null
          auto_generated: boolean | null
          client_id: string | null
          company_id: string | null
          cpr_context: Json | null
          created_at: string
          document_category: string | null
          document_name: string
          document_status: string | null
          document_type: string
          extracted_data: Json | null
          file_size: number | null
          file_url: string | null
          form_template_id: string | null
          id: string
          metadata: Json | null
          project_id: string | null
          property_id: string | null
          tags: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_level?: string | null
          ai_analysis?: Json | null
          auto_generated?: boolean | null
          client_id?: string | null
          company_id?: string | null
          cpr_context?: Json | null
          created_at?: string
          document_category?: string | null
          document_name: string
          document_status?: string | null
          document_type: string
          extracted_data?: Json | null
          file_size?: number | null
          file_url?: string | null
          form_template_id?: string | null
          id?: string
          metadata?: Json | null
          project_id?: string | null
          property_id?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_level?: string | null
          ai_analysis?: Json | null
          auto_generated?: boolean | null
          client_id?: string | null
          company_id?: string | null
          cpr_context?: Json | null
          created_at?: string
          document_category?: string | null
          document_name?: string
          document_status?: string | null
          document_type?: string
          extracted_data?: Json | null
          file_size?: number | null
          file_url?: string | null
          form_template_id?: string | null
          id?: string
          metadata?: Json | null
          project_id?: string | null
          property_id?: string | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_documents_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_documents_form_template_id_fkey"
            columns: ["form_template_id"]
            isOneToOne: false
            referencedRelation: "form_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_documents_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_documents_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      business_draw_requests: {
        Row: {
          approved_at: string | null
          approved_by: string | null
          approver_notes: string | null
          company_id: string | null
          created_at: string
          current_draw_amount: number
          draw_number: number
          id: string
          net_amount_due: number | null
          paid_at: string | null
          period_end: string | null
          period_start: string | null
          project_id: string | null
          request_date: string
          retention_amount: number | null
          retention_percentage: number | null
          schedule_of_values: Json
          status: string | null
          supporting_documents: Json | null
          total_completed_to_date: number | null
          total_contract_amount: number | null
          total_previous_draws: number | null
          updated_at: string
          user_id: string
          work_completion_percentage: number | null
        }
        Insert: {
          approved_at?: string | null
          approved_by?: string | null
          approver_notes?: string | null
          company_id?: string | null
          created_at?: string
          current_draw_amount?: number
          draw_number: number
          id?: string
          net_amount_due?: number | null
          paid_at?: string | null
          period_end?: string | null
          period_start?: string | null
          project_id?: string | null
          request_date?: string
          retention_amount?: number | null
          retention_percentage?: number | null
          schedule_of_values?: Json
          status?: string | null
          supporting_documents?: Json | null
          total_completed_to_date?: number | null
          total_contract_amount?: number | null
          total_previous_draws?: number | null
          updated_at?: string
          user_id: string
          work_completion_percentage?: number | null
        }
        Update: {
          approved_at?: string | null
          approved_by?: string | null
          approver_notes?: string | null
          company_id?: string | null
          created_at?: string
          current_draw_amount?: number
          draw_number?: number
          id?: string
          net_amount_due?: number | null
          paid_at?: string | null
          period_end?: string | null
          period_start?: string | null
          project_id?: string | null
          request_date?: string
          retention_amount?: number | null
          retention_percentage?: number | null
          schedule_of_values?: Json
          status?: string | null
          supporting_documents?: Json | null
          total_completed_to_date?: number | null
          total_contract_amount?: number | null
          total_previous_draws?: number | null
          updated_at?: string
          user_id?: string
          work_completion_percentage?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "business_draw_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_draw_requests_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      business_emails: {
        Row: {
          attachments: Json | null
          automation_platform: string | null
          body_html: string | null
          body_text: string | null
          client_id: string | null
          created_at: string | null
          from_email: string
          from_name: string | null
          id: string
          is_archived: boolean | null
          is_read: boolean | null
          parsed_metadata: Json | null
          project_id: string | null
          property_id: string | null
          received_at: string | null
          routing_confidence: number | null
          routing_method: string | null
          subject: string | null
          to_email: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          attachments?: Json | null
          automation_platform?: string | null
          body_html?: string | null
          body_text?: string | null
          client_id?: string | null
          created_at?: string | null
          from_email: string
          from_name?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          parsed_metadata?: Json | null
          project_id?: string | null
          property_id?: string | null
          received_at?: string | null
          routing_confidence?: number | null
          routing_method?: string | null
          subject?: string | null
          to_email: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          attachments?: Json | null
          automation_platform?: string | null
          body_html?: string | null
          body_text?: string | null
          client_id?: string | null
          created_at?: string | null
          from_email?: string
          from_name?: string | null
          id?: string
          is_archived?: boolean | null
          is_read?: boolean | null
          parsed_metadata?: Json | null
          project_id?: string | null
          property_id?: string | null
          received_at?: string | null
          routing_confidence?: number | null
          routing_method?: string | null
          subject?: string | null
          to_email?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_emails_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_emails_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_emails_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "business_investments"
            referencedColumns: ["id"]
          },
        ]
      }
      business_expenses: {
        Row: {
          amount: number
          category: string
          company_id: string | null
          created_at: string
          description: string | null
          expense_date: string
          id: string
          is_billable: boolean | null
          is_reimbursable: boolean | null
          project_id: string | null
          property_id: string | null
          receipt_url: string | null
          reimbursed_at: string | null
          reimbursement_status: string | null
          tags: Json | null
          updated_at: string
          user_id: string
          vendor_name: string | null
        }
        Insert: {
          amount: number
          category: string
          company_id?: string | null
          created_at?: string
          description?: string | null
          expense_date?: string
          id?: string
          is_billable?: boolean | null
          is_reimbursable?: boolean | null
          project_id?: string | null
          property_id?: string | null
          receipt_url?: string | null
          reimbursed_at?: string | null
          reimbursement_status?: string | null
          tags?: Json | null
          updated_at?: string
          user_id: string
          vendor_name?: string | null
        }
        Update: {
          amount?: number
          category?: string
          company_id?: string | null
          created_at?: string
          description?: string | null
          expense_date?: string
          id?: string
          is_billable?: boolean | null
          is_reimbursable?: boolean | null
          project_id?: string | null
          property_id?: string | null
          receipt_url?: string | null
          reimbursed_at?: string | null
          reimbursement_status?: string | null
          tags?: Json | null
          updated_at?: string
          user_id?: string
          vendor_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_expenses_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_expenses_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_expenses_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "business_investments"
            referencedColumns: ["id"]
          },
        ]
      }
      business_financial_profiles: {
        Row: {
          accounting_method: string | null
          ai_personality_context: string | null
          company_id: string | null
          created_at: string
          expense_categories: Json | null
          financial_goals: string | null
          financial_structure_type: string | null
          fiscal_year_end_month: number | null
          id: string
          kpi_preferences: Json | null
          mission_alignment_notes: string | null
          onboarding_completed: boolean | null
          onboarding_completed_at: string | null
          payment_terms_default: string | null
          profit_margin_target: number | null
          revenue_categories: Json | null
          revenue_goal_annual: number | null
          updated_at: string
          user_id: string
          uses_draw_requests: boolean | null
          uses_hourly_billing: boolean | null
          uses_milestone_billing: boolean | null
          uses_retainers: boolean | null
          uses_subscription_billing: boolean | null
        }
        Insert: {
          accounting_method?: string | null
          ai_personality_context?: string | null
          company_id?: string | null
          created_at?: string
          expense_categories?: Json | null
          financial_goals?: string | null
          financial_structure_type?: string | null
          fiscal_year_end_month?: number | null
          id?: string
          kpi_preferences?: Json | null
          mission_alignment_notes?: string | null
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          payment_terms_default?: string | null
          profit_margin_target?: number | null
          revenue_categories?: Json | null
          revenue_goal_annual?: number | null
          updated_at?: string
          user_id: string
          uses_draw_requests?: boolean | null
          uses_hourly_billing?: boolean | null
          uses_milestone_billing?: boolean | null
          uses_retainers?: boolean | null
          uses_subscription_billing?: boolean | null
        }
        Update: {
          accounting_method?: string | null
          ai_personality_context?: string | null
          company_id?: string | null
          created_at?: string
          expense_categories?: Json | null
          financial_goals?: string | null
          financial_structure_type?: string | null
          fiscal_year_end_month?: number | null
          id?: string
          kpi_preferences?: Json | null
          mission_alignment_notes?: string | null
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          payment_terms_default?: string | null
          profit_margin_target?: number | null
          revenue_categories?: Json | null
          revenue_goal_annual?: number | null
          updated_at?: string
          user_id?: string
          uses_draw_requests?: boolean | null
          uses_hourly_billing?: boolean | null
          uses_milestone_billing?: boolean | null
          uses_retainers?: boolean | null
          uses_subscription_billing?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "business_financial_profiles_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_grants: {
        Row: {
          application_deadline: string | null
          attached_documents: Json | null
          created_at: string | null
          generated_responses: Json | null
          grant_amount: number | null
          grant_name: string
          grant_organization: string | null
          grant_questions: Json | null
          historical_narrative: string | null
          id: string
          mission_statement: string | null
          notes: string | null
          result_date: string | null
          status: string | null
          submission_date: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          application_deadline?: string | null
          attached_documents?: Json | null
          created_at?: string | null
          generated_responses?: Json | null
          grant_amount?: number | null
          grant_name: string
          grant_organization?: string | null
          grant_questions?: Json | null
          historical_narrative?: string | null
          id?: string
          mission_statement?: string | null
          notes?: string | null
          result_date?: string | null
          status?: string | null
          submission_date?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          application_deadline?: string | null
          attached_documents?: Json | null
          created_at?: string | null
          generated_responses?: Json | null
          grant_amount?: number | null
          grant_name?: string
          grant_organization?: string | null
          grant_questions?: Json | null
          historical_narrative?: string | null
          id?: string
          mission_statement?: string | null
          notes?: string | null
          result_date?: string | null
          status?: string | null
          submission_date?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      business_investments: {
        Row: {
          company_id: string | null
          construction_info: Json | null
          created_at: string
          current_value: number | null
          documents: Json | null
          id: string
          investment_amount: number
          investment_name: string
          investment_type: string
          loan_info: Json | null
          metadata: Json | null
          partnership_details: Json | null
          property_access_info: Json | null
          property_address: string | null
          property_details: Json | null
          purchase_closing_info: Json | null
          purchase_date: string | null
          roi_percentage: number | null
          sales_info: Json | null
          status: string | null
          tax_info: Json | null
          tenant_info: Json | null
          updated_at: string
          user_id: string
          utilities_info: Json | null
        }
        Insert: {
          company_id?: string | null
          construction_info?: Json | null
          created_at?: string
          current_value?: number | null
          documents?: Json | null
          id?: string
          investment_amount: number
          investment_name: string
          investment_type?: string
          loan_info?: Json | null
          metadata?: Json | null
          partnership_details?: Json | null
          property_access_info?: Json | null
          property_address?: string | null
          property_details?: Json | null
          purchase_closing_info?: Json | null
          purchase_date?: string | null
          roi_percentage?: number | null
          sales_info?: Json | null
          status?: string | null
          tax_info?: Json | null
          tenant_info?: Json | null
          updated_at?: string
          user_id: string
          utilities_info?: Json | null
        }
        Update: {
          company_id?: string | null
          construction_info?: Json | null
          created_at?: string
          current_value?: number | null
          documents?: Json | null
          id?: string
          investment_amount?: number
          investment_name?: string
          investment_type?: string
          loan_info?: Json | null
          metadata?: Json | null
          partnership_details?: Json | null
          property_access_info?: Json | null
          property_address?: string | null
          property_details?: Json | null
          purchase_closing_info?: Json | null
          purchase_date?: string | null
          roi_percentage?: number | null
          sales_info?: Json | null
          status?: string | null
          tax_info?: Json | null
          tenant_info?: Json | null
          updated_at?: string
          user_id?: string
          utilities_info?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "business_investments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      business_invoices: {
        Row: {
          amount_paid: number | null
          balance_due: number | null
          client_id: string | null
          company_id: string | null
          created_at: string
          discount_amount: number | null
          due_date: string
          id: string
          internal_notes: string | null
          invoice_date: string
          invoice_number: string
          line_items: Json
          notes: string | null
          paid_at: string | null
          payment_history: Json | null
          payment_terms: string | null
          project_id: string | null
          sent_at: string | null
          status: string | null
          subtotal: number
          tax_amount: number | null
          tax_rate: number | null
          total_amount: number
          updated_at: string
          user_id: string
          viewed_at: string | null
        }
        Insert: {
          amount_paid?: number | null
          balance_due?: number | null
          client_id?: string | null
          company_id?: string | null
          created_at?: string
          discount_amount?: number | null
          due_date: string
          id?: string
          internal_notes?: string | null
          invoice_date?: string
          invoice_number: string
          line_items?: Json
          notes?: string | null
          paid_at?: string | null
          payment_history?: Json | null
          payment_terms?: string | null
          project_id?: string | null
          sent_at?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          tax_rate?: number | null
          total_amount?: number
          updated_at?: string
          user_id: string
          viewed_at?: string | null
        }
        Update: {
          amount_paid?: number | null
          balance_due?: number | null
          client_id?: string | null
          company_id?: string | null
          created_at?: string
          discount_amount?: number | null
          due_date?: string
          id?: string
          internal_notes?: string | null
          invoice_date?: string
          invoice_number?: string
          line_items?: Json
          notes?: string | null
          paid_at?: string | null
          payment_history?: Json | null
          payment_terms?: string | null
          project_id?: string | null
          sent_at?: string | null
          status?: string | null
          subtotal?: number
          tax_amount?: number | null
          tax_rate?: number | null
          total_amount?: number
          updated_at?: string
          user_id?: string
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "business_invoices_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invoices_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_invoices_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      business_partnerships: {
        Row: {
          communication_log: Json | null
          created_at: string | null
          end_date: string | null
          id: string
          metadata: Json | null
          mou_document_id: string | null
          notes: string | null
          partner_contact_id: string | null
          partner_organization: string | null
          partnership_name: string
          partnership_type: string | null
          responsibilities: Json | null
          start_date: string | null
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          communication_log?: Json | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          metadata?: Json | null
          mou_document_id?: string | null
          notes?: string | null
          partner_contact_id?: string | null
          partner_organization?: string | null
          partnership_name: string
          partnership_type?: string | null
          responsibilities?: Json | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          communication_log?: Json | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          metadata?: Json | null
          mou_document_id?: string | null
          notes?: string | null
          partner_contact_id?: string | null
          partner_organization?: string | null
          partnership_name?: string
          partnership_type?: string | null
          responsibilities?: Json | null
          start_date?: string | null
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_partnerships_mou_document_id_fkey"
            columns: ["mou_document_id"]
            isOneToOne: false
            referencedRelation: "business_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_partnerships_partner_contact_id_fkey"
            columns: ["partner_contact_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      business_payment_requests: {
        Row: {
          amount: number
          approval_chain: Json | null
          approved_at: string | null
          approved_by: string | null
          company_id: string | null
          created_at: string
          currency: string
          description: string | null
          due_date: string | null
          id: string
          justification: string | null
          milestone_name: string | null
          milestone_percentage: number | null
          notes: string | null
          paid_at: string | null
          payee_details: Json | null
          payee_name: string | null
          payee_type: string | null
          payment_method: string | null
          payment_reference: string | null
          project_id: string | null
          rejection_reason: string | null
          related_expense_id: string | null
          related_invoice_id: string | null
          request_subtype: string | null
          request_type: string
          status: string
          supporting_documents: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          approval_chain?: Json | null
          approved_at?: string | null
          approved_by?: string | null
          company_id?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          due_date?: string | null
          id?: string
          justification?: string | null
          milestone_name?: string | null
          milestone_percentage?: number | null
          notes?: string | null
          paid_at?: string | null
          payee_details?: Json | null
          payee_name?: string | null
          payee_type?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          project_id?: string | null
          rejection_reason?: string | null
          related_expense_id?: string | null
          related_invoice_id?: string | null
          request_subtype?: string | null
          request_type: string
          status?: string
          supporting_documents?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          approval_chain?: Json | null
          approved_at?: string | null
          approved_by?: string | null
          company_id?: string | null
          created_at?: string
          currency?: string
          description?: string | null
          due_date?: string | null
          id?: string
          justification?: string | null
          milestone_name?: string | null
          milestone_percentage?: number | null
          notes?: string | null
          paid_at?: string | null
          payee_details?: Json | null
          payee_name?: string | null
          payee_type?: string | null
          payment_method?: string | null
          payment_reference?: string | null
          project_id?: string | null
          rejection_reason?: string | null
          related_expense_id?: string | null
          related_invoice_id?: string | null
          request_subtype?: string | null
          request_type?: string
          status?: string
          supporting_documents?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_payment_requests_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_payment_requests_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_payment_requests_related_expense_id_fkey"
            columns: ["related_expense_id"]
            isOneToOne: false
            referencedRelation: "business_expenses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_payment_requests_related_invoice_id_fkey"
            columns: ["related_invoice_id"]
            isOneToOne: false
            referencedRelation: "business_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      business_projects: {
        Row: {
          action_items: Json | null
          budget_allocated: number | null
          budget_spent: number | null
          client_id: string | null
          company_id: string | null
          completed_date: string | null
          completion_percentage: number | null
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          documents: Json | null
          due_date: string | null
          id: string
          industry_metadata: Json | null
          media_files: Json | null
          metadata: Json | null
          priority: string | null
          project_category: string | null
          project_description: string | null
          project_name: string
          project_type: string | null
          start_date: string | null
          status: string
          tracking_fields: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          action_items?: Json | null
          budget_allocated?: number | null
          budget_spent?: number | null
          client_id?: string | null
          company_id?: string | null
          completed_date?: string | null
          completion_percentage?: number | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          documents?: Json | null
          due_date?: string | null
          id?: string
          industry_metadata?: Json | null
          media_files?: Json | null
          metadata?: Json | null
          priority?: string | null
          project_category?: string | null
          project_description?: string | null
          project_name: string
          project_type?: string | null
          start_date?: string | null
          status?: string
          tracking_fields?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          action_items?: Json | null
          budget_allocated?: number | null
          budget_spent?: number | null
          client_id?: string | null
          company_id?: string | null
          completed_date?: string | null
          completion_percentage?: number | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          documents?: Json | null
          due_date?: string | null
          id?: string
          industry_metadata?: Json | null
          media_files?: Json | null
          metadata?: Json | null
          priority?: string | null
          project_category?: string | null
          project_description?: string | null
          project_name?: string
          project_type?: string | null
          start_date?: string | null
          status?: string
          tracking_fields?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_projects_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_business_projects_client"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
        ]
      }
      business_receipts: {
        Row: {
          client_id: string | null
          company_id: string | null
          created_at: string
          id: string
          invoice_id: string | null
          notes: string | null
          payment_amount: number
          payment_date: string
          payment_method: string | null
          receipt_number: string
          transaction_reference: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_amount: number
          payment_date?: string
          payment_method?: string | null
          receipt_number: string
          transaction_reference?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          company_id?: string | null
          created_at?: string
          id?: string
          invoice_id?: string | null
          notes?: string | null
          payment_amount?: number
          payment_date?: string
          payment_method?: string | null
          receipt_number?: string
          transaction_reference?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "business_receipts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_receipts_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "business_receipts_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "business_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      business_templates: {
        Row: {
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          id: string
          is_public: boolean | null
          metadata: Json | null
          tags: string[] | null
          template_category: string | null
          template_content: string
          template_name: string
          template_type: string
          updated_at: string
          usage_count: number | null
          user_id: string
        }
        Insert: {
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          template_category?: string | null
          template_content: string
          template_name: string
          template_type: string
          updated_at?: string
          usage_count?: number | null
          user_id: string
        }
        Update: {
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          metadata?: Json | null
          tags?: string[] | null
          template_category?: string | null
          template_content?: string
          template_name?: string
          template_type?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      calendar_events: {
        Row: {
          all_day: boolean | null
          color_code: string | null
          completed_at: string | null
          completion_quality_rating: number | null
          created_at: string | null
          event_date: string
          event_datetime: string | null
          event_description: string | null
          event_end_datetime: string | null
          event_subtype: string | null
          event_title: string
          event_type: string
          external_calendar_id: string | null
          external_calendar_provider: string | null
          icon_emoji: string | null
          id: string
          last_synced_at: string | null
          linked_goal_id: string | null
          notes: string | null
          parent_event_id: string | null
          participants: Json | null
          purpose_alignment_score: number | null
          recipient_id: string | null
          repeat_config: Json | null
          repeat_frequency: string | null
          repeat_until: string | null
          source_id: string | null
          source_table: string | null
          status: string | null
          sync_status: string | null
          tags: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          all_day?: boolean | null
          color_code?: string | null
          completed_at?: string | null
          completion_quality_rating?: number | null
          created_at?: string | null
          event_date: string
          event_datetime?: string | null
          event_description?: string | null
          event_end_datetime?: string | null
          event_subtype?: string | null
          event_title: string
          event_type: string
          external_calendar_id?: string | null
          external_calendar_provider?: string | null
          icon_emoji?: string | null
          id?: string
          last_synced_at?: string | null
          linked_goal_id?: string | null
          notes?: string | null
          parent_event_id?: string | null
          participants?: Json | null
          purpose_alignment_score?: number | null
          recipient_id?: string | null
          repeat_config?: Json | null
          repeat_frequency?: string | null
          repeat_until?: string | null
          source_id?: string | null
          source_table?: string | null
          status?: string | null
          sync_status?: string | null
          tags?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          all_day?: boolean | null
          color_code?: string | null
          completed_at?: string | null
          completion_quality_rating?: number | null
          created_at?: string | null
          event_date?: string
          event_datetime?: string | null
          event_description?: string | null
          event_end_datetime?: string | null
          event_subtype?: string | null
          event_title?: string
          event_type?: string
          external_calendar_id?: string | null
          external_calendar_provider?: string | null
          icon_emoji?: string | null
          id?: string
          last_synced_at?: string | null
          linked_goal_id?: string | null
          notes?: string | null
          parent_event_id?: string | null
          participants?: Json | null
          purpose_alignment_score?: number | null
          recipient_id?: string | null
          repeat_config?: Json | null
          repeat_frequency?: string | null
          repeat_until?: string | null
          source_id?: string | null
          source_table?: string | null
          status?: string | null
          sync_status?: string | null
          tags?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_events_linked_goal_id_fkey"
            columns: ["linked_goal_id"]
            isOneToOne: false
            referencedRelation: "purpose_goals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_parent_event_id_fkey"
            columns: ["parent_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "calendar_events_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_patterns: {
        Row: {
          acknowledged_at: string | null
          confidence_score: number | null
          correlation_strength: number | null
          created_at: string | null
          detected_at: string | null
          expires_at: string | null
          id: string
          mood_impact_score: number | null
          occurrences_found: number | null
          pattern_data: Json | null
          pattern_description: string
          pattern_title: string
          pattern_type: string
          primary_event_type: string | null
          productivity_impact_score: number | null
          purpose_alignment_impact: number | null
          recommended_actions: Json | null
          related_event_type: string | null
          status: string | null
          time_range_days: number | null
          user_acknowledged: boolean | null
          user_id: string
        }
        Insert: {
          acknowledged_at?: string | null
          confidence_score?: number | null
          correlation_strength?: number | null
          created_at?: string | null
          detected_at?: string | null
          expires_at?: string | null
          id?: string
          mood_impact_score?: number | null
          occurrences_found?: number | null
          pattern_data?: Json | null
          pattern_description: string
          pattern_title: string
          pattern_type: string
          primary_event_type?: string | null
          productivity_impact_score?: number | null
          purpose_alignment_impact?: number | null
          recommended_actions?: Json | null
          related_event_type?: string | null
          status?: string | null
          time_range_days?: number | null
          user_acknowledged?: boolean | null
          user_id: string
        }
        Update: {
          acknowledged_at?: string | null
          confidence_score?: number | null
          correlation_strength?: number | null
          created_at?: string | null
          detected_at?: string | null
          expires_at?: string | null
          id?: string
          mood_impact_score?: number | null
          occurrences_found?: number | null
          pattern_data?: Json | null
          pattern_description?: string
          pattern_title?: string
          pattern_type?: string
          primary_event_type?: string | null
          productivity_impact_score?: number | null
          purpose_alignment_impact?: number | null
          recommended_actions?: Json | null
          related_event_type?: string | null
          status?: string | null
          time_range_days?: number | null
          user_acknowledged?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_patterns_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      calendar_sync_settings: {
        Row: {
          auto_sync_enabled: boolean | null
          created_at: string | null
          export_filters: Json | null
          google_access_token: string | null
          google_calendar_enabled: boolean | null
          google_calendar_id: string | null
          google_refresh_token: string | null
          google_sync_direction: string | null
          google_token_expires_at: string | null
          id: string
          import_filters: Json | null
          last_full_sync_at: string | null
          outlook_access_token: string | null
          outlook_calendar_enabled: boolean | null
          outlook_calendar_id: string | null
          outlook_refresh_token: string | null
          outlook_sync_direction: string | null
          outlook_token_expires_at: string | null
          sync_errors: Json | null
          sync_interval_minutes: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          auto_sync_enabled?: boolean | null
          created_at?: string | null
          export_filters?: Json | null
          google_access_token?: string | null
          google_calendar_enabled?: boolean | null
          google_calendar_id?: string | null
          google_refresh_token?: string | null
          google_sync_direction?: string | null
          google_token_expires_at?: string | null
          id?: string
          import_filters?: Json | null
          last_full_sync_at?: string | null
          outlook_access_token?: string | null
          outlook_calendar_enabled?: boolean | null
          outlook_calendar_id?: string | null
          outlook_refresh_token?: string | null
          outlook_sync_direction?: string | null
          outlook_token_expires_at?: string | null
          sync_errors?: Json | null
          sync_interval_minutes?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          auto_sync_enabled?: boolean | null
          created_at?: string | null
          export_filters?: Json | null
          google_access_token?: string | null
          google_calendar_enabled?: boolean | null
          google_calendar_id?: string | null
          google_refresh_token?: string | null
          google_sync_direction?: string | null
          google_token_expires_at?: string | null
          id?: string
          import_filters?: Json | null
          last_full_sync_at?: string | null
          outlook_access_token?: string | null
          outlook_calendar_enabled?: boolean | null
          outlook_calendar_id?: string | null
          outlook_refresh_token?: string | null
          outlook_sync_direction?: string | null
          outlook_token_expires_at?: string | null
          sync_errors?: Json | null
          sync_interval_minutes?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "calendar_sync_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      call_log: {
        Row: {
          audio_url: string | null
          call_direction: string
          contact_id: string
          created_at: string
          follow_up_reminder_at: string | null
          id: string
          key_takeaways: string | null
          notified: boolean
          their_mood: string | null
          their_tone: string | null
          transcription: string | null
          user_id: string
        }
        Insert: {
          audio_url?: string | null
          call_direction: string
          contact_id: string
          created_at?: string
          follow_up_reminder_at?: string | null
          id?: string
          key_takeaways?: string | null
          notified?: boolean
          their_mood?: string | null
          their_tone?: string | null
          transcription?: string | null
          user_id: string
        }
        Update: {
          audio_url?: string | null
          call_direction?: string
          contact_id?: string
          created_at?: string
          follow_up_reminder_at?: string | null
          id?: string
          key_takeaways?: string | null
          notified?: boolean
          their_mood?: string | null
          their_tone?: string | null
          transcription?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "call_log_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      campfire_invitations: {
        Row: {
          campfire_id: string
          created_at: string
          id: string
          invitee_id: string
          inviter_id: string
          status: string
          updated_at: string
        }
        Insert: {
          campfire_id: string
          created_at?: string
          id?: string
          invitee_id: string
          inviter_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          campfire_id?: string
          created_at?: string
          id?: string
          invitee_id?: string
          inviter_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "campfire_invitations_campfire_id_fkey"
            columns: ["campfire_id"]
            isOneToOne: false
            referencedRelation: "village_campfires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_invitations_invitee_id_fkey"
            columns: ["invitee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_invitations_inviter_id_fkey"
            columns: ["inviter_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campfire_join_requests: {
        Row: {
          campfire_id: string
          created_at: string
          id: string
          message: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          campfire_id: string
          created_at?: string
          id?: string
          message?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          campfire_id?: string
          created_at?: string
          id?: string
          message?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      campfire_members: {
        Row: {
          campfire_id: string
          id: string
          invitation_limit: number | null
          invitations_sent: number | null
          is_active: boolean
          joined_at: string
          role: string
          user_id: string
        }
        Insert: {
          campfire_id: string
          id?: string
          invitation_limit?: number | null
          invitations_sent?: number | null
          is_active?: boolean
          joined_at?: string
          role?: string
          user_id: string
        }
        Update: {
          campfire_id?: string
          id?: string
          invitation_limit?: number | null
          invitations_sent?: number | null
          is_active?: boolean
          joined_at?: string
          role?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campfire_members_campfire_id_fkey"
            columns: ["campfire_id"]
            isOneToOne: false
            referencedRelation: "village_campfires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campfire_message_reactions: {
        Row: {
          created_at: string
          emoji: string
          id: string
          message_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          emoji: string
          id?: string
          message_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          emoji?: string
          id?: string
          message_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campfire_message_reactions_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "campfire_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_message_reactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      campfire_messages: {
        Row: {
          campfire_id: string
          created_at: string
          id: string
          is_edited: boolean | null
          message_text: string
          replied_to_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          campfire_id: string
          created_at?: string
          id?: string
          is_edited?: boolean | null
          message_text: string
          replied_to_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          campfire_id?: string
          created_at?: string
          id?: string
          is_edited?: boolean | null
          message_text?: string
          replied_to_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "campfire_messages_campfire_id_fkey"
            columns: ["campfire_id"]
            isOneToOne: false
            referencedRelation: "village_campfires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_messages_replied_to_id_fkey"
            columns: ["replied_to_id"]
            isOneToOne: false
            referencedRelation: "campfire_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      campfire_referrals: {
        Row: {
          clicked_at: string | null
          converted: boolean | null
          converted_at: string | null
          created_at: string | null
          id: string
          platform: string | null
          referred_user_id: string | null
          referrer_id: string
          share_slug: string
          source_post_id: string | null
        }
        Insert: {
          clicked_at?: string | null
          converted?: boolean | null
          converted_at?: string | null
          created_at?: string | null
          id?: string
          platform?: string | null
          referred_user_id?: string | null
          referrer_id: string
          share_slug: string
          source_post_id?: string | null
        }
        Update: {
          clicked_at?: string | null
          converted?: boolean | null
          converted_at?: string | null
          created_at?: string | null
          id?: string
          platform?: string | null
          referred_user_id?: string | null
          referrer_id?: string
          share_slug?: string
          source_post_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "campfire_referrals_referred_user_id_fkey"
            columns: ["referred_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_referrals_referrer_id_fkey"
            columns: ["referrer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "campfire_referrals_source_post_id_fkey"
            columns: ["source_post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      care_analysis: {
        Row: {
          analysis_type: string
          care_recommendations: Json | null
          community_support_suggested: boolean | null
          created_at: string
          emotional_indicators: Json | null
          id: string
          message_content: string
          professional_referral_needed: boolean | null
          suggested_actions: Json | null
          updated_at: string
          urgency_level: number
          user_id: string
        }
        Insert: {
          analysis_type?: string
          care_recommendations?: Json | null
          community_support_suggested?: boolean | null
          created_at?: string
          emotional_indicators?: Json | null
          id?: string
          message_content: string
          professional_referral_needed?: boolean | null
          suggested_actions?: Json | null
          updated_at?: string
          urgency_level?: number
          user_id: string
        }
        Update: {
          analysis_type?: string
          care_recommendations?: Json | null
          community_support_suggested?: boolean | null
          created_at?: string
          emotional_indicators?: Json | null
          id?: string
          message_content?: string
          professional_referral_needed?: boolean | null
          suggested_actions?: Json | null
          updated_at?: string
          urgency_level?: number
          user_id?: string
        }
        Relationships: []
      }
      care_checklists: {
        Row: {
          applies_to_resident_ids: string[] | null
          cpr_flow_on_miss: boolean | null
          created_at: string
          created_by: string | null
          days_of_week: number[] | null
          facility_id: string
          frequency: string
          grace_period_minutes: number | null
          id: string
          is_active: boolean | null
          is_mandatory: boolean | null
          points_value: number | null
          priority: string | null
          task_category: string
          task_description: string | null
          task_name: string
          time_windows: Json | null
          tts_prompt: string | null
          tts_reminder_prompt: string | null
          updated_at: string
        }
        Insert: {
          applies_to_resident_ids?: string[] | null
          cpr_flow_on_miss?: boolean | null
          created_at?: string
          created_by?: string | null
          days_of_week?: number[] | null
          facility_id: string
          frequency: string
          grace_period_minutes?: number | null
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          points_value?: number | null
          priority?: string | null
          task_category: string
          task_description?: string | null
          task_name: string
          time_windows?: Json | null
          tts_prompt?: string | null
          tts_reminder_prompt?: string | null
          updated_at?: string
        }
        Update: {
          applies_to_resident_ids?: string[] | null
          cpr_flow_on_miss?: boolean | null
          created_at?: string
          created_by?: string | null
          days_of_week?: number[] | null
          facility_id?: string
          frequency?: string
          grace_period_minutes?: number | null
          id?: string
          is_active?: boolean | null
          is_mandatory?: boolean | null
          points_value?: number | null
          priority?: string | null
          task_category?: string
          task_description?: string | null
          task_name?: string
          time_windows?: Json | null
          tts_prompt?: string | null
          tts_reminder_prompt?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_checklists_created_by_fkey"
            columns: ["created_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_checklists_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      care_facilities: {
        Row: {
          admin_user_id: string | null
          company_id: string | null
          compliance_requirements: Json | null
          created_at: string
          facility_address: string | null
          facility_benefits: Json | null
          facility_description: string | null
          facility_email: string | null
          facility_manager_email: string | null
          facility_manager_name: string | null
          facility_manager_phone: string | null
          facility_name: string
          facility_neighborhood: string | null
          facility_phone: string | null
          facility_photos: Json | null
          facility_type: string
          facility_videos: Json | null
          house_rules: Json | null
          id: string
          is_active: boolean | null
          maintenance_contact: string | null
          maintenance_phone: string | null
          max_residents: number | null
          metadata: Json | null
          portal_knowledge: Json | null
          property_id: string | null
          updated_at: string
        }
        Insert: {
          admin_user_id?: string | null
          company_id?: string | null
          compliance_requirements?: Json | null
          created_at?: string
          facility_address?: string | null
          facility_benefits?: Json | null
          facility_description?: string | null
          facility_email?: string | null
          facility_manager_email?: string | null
          facility_manager_name?: string | null
          facility_manager_phone?: string | null
          facility_name: string
          facility_neighborhood?: string | null
          facility_phone?: string | null
          facility_photos?: Json | null
          facility_type: string
          facility_videos?: Json | null
          house_rules?: Json | null
          id?: string
          is_active?: boolean | null
          maintenance_contact?: string | null
          maintenance_phone?: string | null
          max_residents?: number | null
          metadata?: Json | null
          portal_knowledge?: Json | null
          property_id?: string | null
          updated_at?: string
        }
        Update: {
          admin_user_id?: string | null
          company_id?: string | null
          compliance_requirements?: Json | null
          created_at?: string
          facility_address?: string | null
          facility_benefits?: Json | null
          facility_description?: string | null
          facility_email?: string | null
          facility_manager_email?: string | null
          facility_manager_name?: string | null
          facility_manager_phone?: string | null
          facility_name?: string
          facility_neighborhood?: string | null
          facility_phone?: string | null
          facility_photos?: Json | null
          facility_type?: string
          facility_videos?: Json | null
          house_rules?: Json | null
          id?: string
          is_active?: boolean | null
          maintenance_contact?: string | null
          maintenance_phone?: string | null
          max_residents?: number | null
          metadata?: Json | null
          portal_knowledge?: Json | null
          property_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_facilities_admin_user_id_fkey"
            columns: ["admin_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_facilities_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_facilities_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_facilities_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      care_intake_forms: {
        Row: {
          ae_profile: Json | null
          ai_profile: Json | null
          client_email: string | null
          client_name: string
          client_phone: string | null
          compatibility_answers: Json | null
          completed_at: string | null
          converted_to_resident_id: string | null
          created_at: string
          created_by: string
          expires_at: string
          facility_id: string
          financial_housing: Json | null
          i_profile: Json | null
          id: string
          notes: string | null
          personal_info: Json | null
          referred_by_email: string | null
          referred_by_name: string | null
          referred_by_phone: string | null
          sent_at: string | null
          share_token: string
          started_at: string | null
          status: string
          updated_at: string
          viewed_at: string | null
        }
        Insert: {
          ae_profile?: Json | null
          ai_profile?: Json | null
          client_email?: string | null
          client_name: string
          client_phone?: string | null
          compatibility_answers?: Json | null
          completed_at?: string | null
          converted_to_resident_id?: string | null
          created_at?: string
          created_by: string
          expires_at?: string
          facility_id: string
          financial_housing?: Json | null
          i_profile?: Json | null
          id?: string
          notes?: string | null
          personal_info?: Json | null
          referred_by_email?: string | null
          referred_by_name?: string | null
          referred_by_phone?: string | null
          sent_at?: string | null
          share_token?: string
          started_at?: string | null
          status?: string
          updated_at?: string
          viewed_at?: string | null
        }
        Update: {
          ae_profile?: Json | null
          ai_profile?: Json | null
          client_email?: string | null
          client_name?: string
          client_phone?: string | null
          compatibility_answers?: Json | null
          completed_at?: string | null
          converted_to_resident_id?: string | null
          created_at?: string
          created_by?: string
          expires_at?: string
          facility_id?: string
          financial_housing?: Json | null
          i_profile?: Json | null
          id?: string
          notes?: string | null
          personal_info?: Json | null
          referred_by_email?: string | null
          referred_by_name?: string | null
          referred_by_phone?: string | null
          sent_at?: string | null
          share_token?: string
          started_at?: string | null
          status?: string
          updated_at?: string
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "care_intake_forms_converted_to_resident_id_fkey"
            columns: ["converted_to_resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "care_intake_forms_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      care_suggestion_responses: {
        Row: {
          care_analysis_id: string
          created_at: string
          feedback_notes: string | null
          id: string
          response_type: string
          selected_recommendation: string | null
          user_id: string
        }
        Insert: {
          care_analysis_id: string
          created_at?: string
          feedback_notes?: string | null
          id?: string
          response_type: string
          selected_recommendation?: string | null
          user_id: string
        }
        Update: {
          care_analysis_id?: string
          created_at?: string
          feedback_notes?: string | null
          id?: string
          response_type?: string
          selected_recommendation?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "care_suggestion_responses_care_analysis_id_fkey"
            columns: ["care_analysis_id"]
            isOneToOne: false
            referencedRelation: "care_analysis"
            referencedColumns: ["id"]
          },
        ]
      }
      cash_conversion_transactions: {
        Row: {
          cash_amount: number
          coins_amount: number
          conversion_rate: number
          conversion_type: string
          created_at: string
          id: string
          status: string
          transaction_fee: number | null
          user_id: string
        }
        Insert: {
          cash_amount: number
          coins_amount: number
          conversion_rate: number
          conversion_type: string
          created_at?: string
          id?: string
          status?: string
          transaction_fee?: number | null
          user_id: string
        }
        Update: {
          cash_amount?: number
          coins_amount?: number
          conversion_rate?: number
          conversion_type?: string
          created_at?: string
          id?: string
          status?: string
          transaction_fee?: number | null
          user_id?: string
        }
        Relationships: []
      }
      chat_documents: {
        Row: {
          chat_session_id: string | null
          created_at: string | null
          document_metadata: Json | null
          extracted_text: string | null
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          id: string
          processing_status: string | null
          text_summary: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          chat_session_id?: string | null
          created_at?: string | null
          document_metadata?: Json | null
          extracted_text?: string | null
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          id?: string
          processing_status?: string | null
          text_summary?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          chat_session_id?: string | null
          created_at?: string | null
          document_metadata?: Json | null
          extracted_text?: string | null
          file_name?: string
          file_size?: number
          file_type?: string
          file_url?: string
          id?: string
          processing_status?: string | null
          text_summary?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      chat_history: {
        Row: {
          attachments: Json | null
          content: string
          created_at: string
          id: string
          role: string
          session_context: string
          user_id: string
        }
        Insert: {
          attachments?: Json | null
          content: string
          created_at?: string
          id?: string
          role: string
          session_context?: string
          user_id: string
        }
        Update: {
          attachments?: Json | null
          content?: string
          created_at?: string
          id?: string
          role?: string
          session_context?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          file_urls: string[] | null
          id: string
          role: string
          user_id: string
        }
        Insert: {
          content: string
          conversation_id?: string
          created_at?: string
          file_urls?: string[] | null
          id?: string
          role: string
          user_id: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          file_urls?: string[] | null
          id?: string
          role?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_sessions: {
        Row: {
          created_at: string
          id: string
          messages: Json
          status: string
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          messages?: Json
          status?: string
          title?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          messages?: Json
          status?: string
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      chat_threads: {
        Row: {
          conflict_flag_count: number | null
          created_at: string
          escalated_to_resolution: boolean | null
          id: string
          last_message_at: string | null
          participant_ids: string[]
          thread_name: string | null
          thread_type: string | null
          updated_at: string
        }
        Insert: {
          conflict_flag_count?: number | null
          created_at?: string
          escalated_to_resolution?: boolean | null
          id?: string
          last_message_at?: string | null
          participant_ids: string[]
          thread_name?: string | null
          thread_type?: string | null
          updated_at?: string
        }
        Update: {
          conflict_flag_count?: number | null
          created_at?: string
          escalated_to_resolution?: boolean | null
          id?: string
          last_message_at?: string | null
          participant_ids?: string[]
          thread_name?: string | null
          thread_type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      chatbot_flow_rules: {
        Row: {
          action_label: string | null
          action_type: Database["public"]["Enums"]["chatbot_flow_action_type"]
          action_url: string | null
          created_at: string
          created_by: string | null
          custom_response: string | null
          icon_name: string | null
          id: string
          is_active: boolean
          priority: number
          rule_name: string
          trigger_description: string | null
          trigger_keywords: string[]
          updated_at: string
        }
        Insert: {
          action_label?: string | null
          action_type?: Database["public"]["Enums"]["chatbot_flow_action_type"]
          action_url?: string | null
          created_at?: string
          created_by?: string | null
          custom_response?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          priority?: number
          rule_name: string
          trigger_description?: string | null
          trigger_keywords?: string[]
          updated_at?: string
        }
        Update: {
          action_label?: string | null
          action_type?: Database["public"]["Enums"]["chatbot_flow_action_type"]
          action_url?: string | null
          created_at?: string
          created_by?: string | null
          custom_response?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          priority?: number
          rule_name?: string
          trigger_description?: string | null
          trigger_keywords?: string[]
          updated_at?: string
        }
        Relationships: []
      }
      child_ai_chat_sessions: {
        Row: {
          child_profile_id: string
          created_at: string | null
          id: string
          last_message_at: string | null
          message_count: number | null
          mood_detected: string | null
          session_name: string | null
          topics_discussed: string[] | null
          updated_at: string | null
        }
        Insert: {
          child_profile_id: string
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          message_count?: number | null
          mood_detected?: string | null
          session_name?: string | null
          topics_discussed?: string[] | null
          updated_at?: string | null
        }
        Update: {
          child_profile_id?: string
          created_at?: string | null
          id?: string
          last_message_at?: string | null
          message_count?: number | null
          mood_detected?: string | null
          session_name?: string | null
          topics_discussed?: string[] | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "child_ai_chat_sessions_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_ai_insights: {
        Row: {
          child_profile_id: string
          created_at: string | null
          id: string
          insight_type: string
          parent_viewed: boolean | null
          session_id: string | null
          summary: string
          urgency_level: string | null
        }
        Insert: {
          child_profile_id: string
          created_at?: string | null
          id?: string
          insight_type: string
          parent_viewed?: boolean | null
          session_id?: string | null
          summary: string
          urgency_level?: string | null
        }
        Update: {
          child_profile_id?: string
          created_at?: string | null
          id?: string
          insight_type?: string
          parent_viewed?: boolean | null
          session_id?: string | null
          summary?: string
          urgency_level?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "child_ai_insights_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_ai_insights_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "child_ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      child_ai_messages: {
        Row: {
          child_profile_id: string
          content: string
          created_at: string | null
          id: string
          mood_context: string | null
          role: string
          safety_flag: boolean | null
          safety_reason: string | null
          session_id: string
        }
        Insert: {
          child_profile_id: string
          content: string
          created_at?: string | null
          id?: string
          mood_context?: string | null
          role: string
          safety_flag?: boolean | null
          safety_reason?: string | null
          session_id: string
        }
        Update: {
          child_profile_id?: string
          content?: string
          created_at?: string | null
          id?: string
          mood_context?: string | null
          role?: string
          safety_flag?: boolean | null
          safety_reason?: string | null
          session_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_ai_messages_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_ai_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "child_ai_chat_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      child_assessment_resources: {
        Row: {
          created_at: string
          description: string
          id: string
          is_active: boolean
          phone: string | null
          resource_name: string
          resource_type: string
          specialty: string
          website: string | null
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          phone?: string | null
          resource_name: string
          resource_type: string
          specialty: string
          website?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          phone?: string | null
          resource_name?: string
          resource_type?: string
          specialty?: string
          website?: string | null
        }
        Relationships: []
      }
      child_assessment_responses: {
        Row: {
          assessment_context: string
          child_profile_id: string
          completed_at: string | null
          created_at: string
          id: string
          parent_user_id: string
          responses: Json
          template_id: string
        }
        Insert: {
          assessment_context?: string
          child_profile_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          parent_user_id: string
          responses?: Json
          template_id: string
        }
        Update: {
          assessment_context?: string
          child_profile_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          parent_user_id?: string
          responses?: Json
          template_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_assessment_responses_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_assessment_responses_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "child_assessment_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      child_assessment_results: {
        Row: {
          assessment_response_id: string
          child_profile_id: string
          created_at: string
          domain_scores: Json
          generated_report: string | null
          id: string
          overall_score: number
          professional_referral_suggested: boolean
          recommendations: Json
          referral_urgency: string
          risk_flags: Json
          strengths: Json
        }
        Insert: {
          assessment_response_id: string
          child_profile_id: string
          created_at?: string
          domain_scores?: Json
          generated_report?: string | null
          id?: string
          overall_score: number
          professional_referral_suggested?: boolean
          recommendations?: Json
          referral_urgency?: string
          risk_flags?: Json
          strengths?: Json
        }
        Update: {
          assessment_response_id?: string
          child_profile_id?: string
          created_at?: string
          domain_scores?: Json
          generated_report?: string | null
          id?: string
          overall_score?: number
          professional_referral_suggested?: boolean
          recommendations?: Json
          referral_urgency?: string
          risk_flags?: Json
          strengths?: Json
        }
        Relationships: [
          {
            foreignKeyName: "child_assessment_results_assessment_response_id_fkey"
            columns: ["assessment_response_id"]
            isOneToOne: false
            referencedRelation: "child_assessment_responses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_assessment_results_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_assessment_templates: {
        Row: {
          age_max: number
          age_min: number
          assessment_type: string
          created_at: string
          id: string
          questions: Json
          template_name: string
          updated_at: string
          version: string
        }
        Insert: {
          age_max: number
          age_min: number
          assessment_type?: string
          created_at?: string
          id?: string
          questions?: Json
          template_name: string
          updated_at?: string
          version?: string
        }
        Update: {
          age_max?: number
          age_min?: number
          assessment_type?: string
          created_at?: string
          id?: string
          questions?: Json
          template_name?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      child_conflict_logs: {
        Row: {
          child_perspective_translation: string | null
          child_profile_id: string
          conflict_description: string
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          generated_script: string | null
          id: string
          parent_user_id: string
          resolution_notes: string | null
          resolution_status: string | null
          updated_at: string
        }
        Insert: {
          child_perspective_translation?: string | null
          child_profile_id: string
          conflict_description: string
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          generated_script?: string | null
          id?: string
          parent_user_id: string
          resolution_notes?: string | null
          resolution_status?: string | null
          updated_at?: string
        }
        Update: {
          child_perspective_translation?: string | null
          child_profile_id?: string
          conflict_description?: string
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          generated_script?: string | null
          id?: string
          parent_user_id?: string
          resolution_notes?: string | null
          resolution_status?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_conflict_logs_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_delegated_tasks: {
        Row: {
          child_friendly_reminder: string | null
          child_profile_id: string
          completed_at: string | null
          completion_media_urls: Json | null
          created_at: string
          due_datetime: string | null
          id: string
          linked_express_agreement_id: string | null
          parent_user_id: string
          pmi_points_reward: number | null
          status: string | null
          task_description: string | null
          task_title: string
          updated_at: string
        }
        Insert: {
          child_friendly_reminder?: string | null
          child_profile_id: string
          completed_at?: string | null
          completion_media_urls?: Json | null
          created_at?: string
          due_datetime?: string | null
          id?: string
          linked_express_agreement_id?: string | null
          parent_user_id: string
          pmi_points_reward?: number | null
          status?: string | null
          task_description?: string | null
          task_title: string
          updated_at?: string
        }
        Update: {
          child_friendly_reminder?: string | null
          child_profile_id?: string
          completed_at?: string | null
          completion_media_urls?: Json | null
          created_at?: string
          due_datetime?: string | null
          id?: string
          linked_express_agreement_id?: string | null
          parent_user_id?: string
          pmi_points_reward?: number | null
          status?: string | null
          task_description?: string | null
          task_title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_delegated_tasks_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_delegated_tasks_linked_express_agreement_id_fkey"
            columns: ["linked_express_agreement_id"]
            isOneToOne: false
            referencedRelation: "child_express_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      child_event_comments: {
        Row: {
          calendar_event_id: string
          child_profile_id: string
          comment_text: string
          created_at: string
          emotional_tone: string | null
          id: string
          parent_notified: boolean
          parent_response: string | null
          updated_at: string
        }
        Insert: {
          calendar_event_id: string
          child_profile_id: string
          comment_text: string
          created_at?: string
          emotional_tone?: string | null
          id?: string
          parent_notified?: boolean
          parent_response?: string | null
          updated_at?: string
        }
        Update: {
          calendar_event_id?: string
          child_profile_id?: string
          comment_text?: string
          created_at?: string
          emotional_tone?: string | null
          id?: string
          parent_notified?: boolean
          parent_response?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_event_comments_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_event_comments_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_express_agreements: {
        Row: {
          agreement_title: string
          approval_status: string | null
          approved_by_guardian_id: string | null
          car_position: number | null
          child_profile_id: string
          child_task_completed: boolean | null
          child_task_description: string
          completed_at: string | null
          created_at: string
          created_by_child: boolean | null
          due_date: string | null
          id: string
          parent_task_completed: boolean | null
          parent_task_description: string
          parent_user_id: string
          progress_percentage: number | null
          requires_guardian_approval: boolean | null
          reward_description: string
          status: string | null
          total_distance: number | null
          updated_at: string
        }
        Insert: {
          agreement_title: string
          approval_status?: string | null
          approved_by_guardian_id?: string | null
          car_position?: number | null
          child_profile_id: string
          child_task_completed?: boolean | null
          child_task_description: string
          completed_at?: string | null
          created_at?: string
          created_by_child?: boolean | null
          due_date?: string | null
          id?: string
          parent_task_completed?: boolean | null
          parent_task_description: string
          parent_user_id: string
          progress_percentage?: number | null
          requires_guardian_approval?: boolean | null
          reward_description: string
          status?: string | null
          total_distance?: number | null
          updated_at?: string
        }
        Update: {
          agreement_title?: string
          approval_status?: string | null
          approved_by_guardian_id?: string | null
          car_position?: number | null
          child_profile_id?: string
          child_task_completed?: boolean | null
          child_task_description?: string
          completed_at?: string | null
          created_at?: string
          created_by_child?: boolean | null
          due_date?: string | null
          id?: string
          parent_task_completed?: boolean | null
          parent_task_description?: string
          parent_user_id?: string
          progress_percentage?: number | null
          requires_guardian_approval?: boolean | null
          reward_description?: string
          status?: string | null
          total_distance?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_express_agreements_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_guardians: {
        Row: {
          accepted_at: string | null
          can_approve_agreements: boolean | null
          can_create_agreements: boolean | null
          child_profile_id: string
          created_at: string | null
          guardian_user_id: string
          id: string
          invited_at: string | null
          is_primary: boolean | null
          relationship_type: string
          status: string
          updated_at: string | null
        }
        Insert: {
          accepted_at?: string | null
          can_approve_agreements?: boolean | null
          can_create_agreements?: boolean | null
          child_profile_id: string
          created_at?: string | null
          guardian_user_id: string
          id?: string
          invited_at?: string | null
          is_primary?: boolean | null
          relationship_type: string
          status?: string
          updated_at?: string | null
        }
        Update: {
          accepted_at?: string | null
          can_approve_agreements?: boolean | null
          can_create_agreements?: boolean | null
          child_profile_id?: string
          created_at?: string | null
          guardian_user_id?: string
          id?: string
          invited_at?: string | null
          is_primary?: boolean | null
          relationship_type?: string
          status?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "child_guardians_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_logging_rewards: {
        Row: {
          child_profile_id: string
          coins_awarded: number
          created_at: string
          id: string
          log_type: string
          parent_user_id: string
        }
        Insert: {
          child_profile_id: string
          coins_awarded: number
          created_at?: string
          id?: string
          log_type: string
          parent_user_id: string
        }
        Update: {
          child_profile_id?: string
          coins_awarded?: number
          created_at?: string
          id?: string
          log_type?: string
          parent_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_logging_rewards_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_mood_logs: {
        Row: {
          child_profile_id: string
          created_at: string
          feelings_note: string | null
          id: string
          mood_intensity: number | null
          mood_type: string
          updated_at: string
        }
        Insert: {
          child_profile_id: string
          created_at?: string
          feelings_note?: string | null
          id?: string
          mood_intensity?: number | null
          mood_type: string
          updated_at?: string
        }
        Update: {
          child_profile_id?: string
          created_at?: string
          feelings_note?: string | null
          id?: string
          mood_intensity?: number | null
          mood_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_mood_logs_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_personality_framework: {
        Row: {
          aex_experience_points: number | null
          aex_level: number | null
          child_profile_id: string
          companion_avatar_config: Json | null
          companion_avatar_type: string | null
          companion_image_url: string | null
          companion_name: string | null
          created_at: string | null
          framework_type: string
          id: string
          iv_image_url: string | null
          iv_representation_style: string | null
          updated_at: string | null
        }
        Insert: {
          aex_experience_points?: number | null
          aex_level?: number | null
          child_profile_id: string
          companion_avatar_config?: Json | null
          companion_avatar_type?: string | null
          companion_image_url?: string | null
          companion_name?: string | null
          created_at?: string | null
          framework_type: string
          id?: string
          iv_image_url?: string | null
          iv_representation_style?: string | null
          updated_at?: string | null
        }
        Update: {
          aex_experience_points?: number | null
          aex_level?: number | null
          child_profile_id?: string
          companion_avatar_config?: Json | null
          companion_avatar_type?: string | null
          companion_image_url?: string | null
          companion_name?: string | null
          created_at?: string | null
          framework_type?: string
          id?: string
          iv_image_url?: string | null
          iv_representation_style?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "child_personality_framework_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: true
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      child_profiles: {
        Row: {
          aex_total_points: number | null
          age: number
          avatar_type: string | null
          child_name: string
          child_onboarding_completed: boolean | null
          child_user_id: string | null
          created_at: string
          current_mood_icon: string | null
          favorite_hobbies: string[] | null
          framework_setup_completed: boolean | null
          has_login_access: boolean | null
          id: string
          if_iv_visibility_preference: string | null
          login_avatar_emoji: string | null
          login_method: string | null
          login_token: string | null
          login_token_created_at: string | null
          parent_approved_login: boolean | null
          parent_user_id: string
          pin_code: string | null
          pmi_experience_points: number | null
          pmi_level: number | null
          updated_at: string
          username: string | null
        }
        Insert: {
          aex_total_points?: number | null
          age: number
          avatar_type?: string | null
          child_name: string
          child_onboarding_completed?: boolean | null
          child_user_id?: string | null
          created_at?: string
          current_mood_icon?: string | null
          favorite_hobbies?: string[] | null
          framework_setup_completed?: boolean | null
          has_login_access?: boolean | null
          id?: string
          if_iv_visibility_preference?: string | null
          login_avatar_emoji?: string | null
          login_method?: string | null
          login_token?: string | null
          login_token_created_at?: string | null
          parent_approved_login?: boolean | null
          parent_user_id: string
          pin_code?: string | null
          pmi_experience_points?: number | null
          pmi_level?: number | null
          updated_at?: string
          username?: string | null
        }
        Update: {
          aex_total_points?: number | null
          age?: number
          avatar_type?: string | null
          child_name?: string
          child_onboarding_completed?: boolean | null
          child_user_id?: string | null
          created_at?: string
          current_mood_icon?: string | null
          favorite_hobbies?: string[] | null
          framework_setup_completed?: boolean | null
          has_login_access?: boolean | null
          id?: string
          if_iv_visibility_preference?: string | null
          login_avatar_emoji?: string | null
          login_method?: string | null
          login_token?: string | null
          login_token_created_at?: string | null
          parent_approved_login?: boolean | null
          parent_user_id?: string
          pin_code?: string | null
          pmi_experience_points?: number | null
          pmi_level?: number | null
          updated_at?: string
          username?: string | null
        }
        Relationships: []
      }
      child_schedule_acknowledgements: {
        Row: {
          acknowledged_at: string
          acknowledgement_type: string
          calendar_event_id: string
          child_profile_id: string
          created_at: string
          id: string
        }
        Insert: {
          acknowledged_at?: string
          acknowledgement_type?: string
          calendar_event_id: string
          child_profile_id: string
          created_at?: string
          id?: string
        }
        Update: {
          acknowledged_at?: string
          acknowledgement_type?: string
          calendar_event_id?: string
          child_profile_id?: string
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "child_schedule_acknowledgements_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "child_schedule_acknowledgements_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      client_accounts: {
        Row: {
          client_id: string | null
          created_at: string
          display_name: string | null
          email: string
          id: string
          invite_code: string | null
          status: string
          updated_at: string
          user_id: string | null
          workspace_id: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          display_name?: string | null
          email: string
          id?: string
          invite_code?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          workspace_id: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          display_name?: string | null
          email?: string
          id?: string
          invite_code?: string | null
          status?: string
          updated_at?: string
          user_id?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_accounts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_accounts_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      client_approval_requests: {
        Row: {
          created_at: string
          created_by: string
          description: string | null
          id: string
          options: Json | null
          property_id: string
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by: string
          description?: string | null
          id?: string
          options?: Json | null
          property_id: string
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string
          description?: string | null
          id?: string
          options?: Json | null
          property_id?: string
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_approval_requests_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_approval_requests_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      client_approval_responses: {
        Row: {
          approval_request_id: string
          client_user_id: string
          comment: string | null
          created_at: string
          id: string
          response: string
          selected_option: string | null
        }
        Insert: {
          approval_request_id: string
          client_user_id: string
          comment?: string | null
          created_at?: string
          id?: string
          response?: string
          selected_option?: string | null
        }
        Update: {
          approval_request_id?: string
          client_user_id?: string
          comment?: string | null
          created_at?: string
          id?: string
          response?: string
          selected_option?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_approval_responses_approval_request_id_fkey"
            columns: ["approval_request_id"]
            isOneToOne: false
            referencedRelation: "client_approval_requests"
            referencedColumns: ["id"]
          },
        ]
      }
      client_messages: {
        Row: {
          client_id: string
          created_at: string
          id: string
          message_text: string
          property_id: string
          sender_role: string
        }
        Insert: {
          client_id: string
          created_at?: string
          id?: string
          message_text: string
          property_id: string
          sender_role?: string
        }
        Update: {
          client_id?: string
          created_at?: string
          id?: string
          message_text?: string
          property_id?: string
          sender_role?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_messages_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "property_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      client_portal_conversations: {
        Row: {
          content: string
          created_at: string | null
          data_retrieved: Json | null
          id: string
          intent_detected: string | null
          is_suggestion: boolean | null
          pm_mood_shown: boolean | null
          portal_id: string
          role: string
          suggestion_reviewed: boolean | null
        }
        Insert: {
          content: string
          created_at?: string | null
          data_retrieved?: Json | null
          id?: string
          intent_detected?: string | null
          is_suggestion?: boolean | null
          pm_mood_shown?: boolean | null
          portal_id: string
          role: string
          suggestion_reviewed?: boolean | null
        }
        Update: {
          content?: string
          created_at?: string | null
          data_retrieved?: Json | null
          id?: string
          intent_detected?: string | null
          is_suggestion?: boolean | null
          pm_mood_shown?: boolean | null
          portal_id?: string
          role?: string
          suggestion_reviewed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "client_portal_conversations_portal_id_fkey"
            columns: ["portal_id"]
            isOneToOne: false
            referencedRelation: "client_project_portals"
            referencedColumns: ["id"]
          },
        ]
      }
      client_project_portals: {
        Row: {
          ai_auto_reply: boolean
          business_user_id: string
          client_email: string
          client_id: string | null
          client_name: string
          company_id: string | null
          created_at: string | null
          deactivated_at: string | null
          deactivation_reason: string | null
          id: string
          is_active: boolean | null
          last_accessed_at: string | null
          permissions: Json | null
          portal_token: string
          project_id: string
          total_messages: number | null
          total_sessions: number | null
          unread_count: number
          updated_at: string | null
          welcome_message: string | null
        }
        Insert: {
          ai_auto_reply?: boolean
          business_user_id: string
          client_email: string
          client_id?: string | null
          client_name: string
          company_id?: string | null
          created_at?: string | null
          deactivated_at?: string | null
          deactivation_reason?: string | null
          id?: string
          is_active?: boolean | null
          last_accessed_at?: string | null
          permissions?: Json | null
          portal_token: string
          project_id: string
          total_messages?: number | null
          total_sessions?: number | null
          unread_count?: number
          updated_at?: string | null
          welcome_message?: string | null
        }
        Update: {
          ai_auto_reply?: boolean
          business_user_id?: string
          client_email?: string
          client_id?: string | null
          client_name?: string
          company_id?: string | null
          created_at?: string | null
          deactivated_at?: string | null
          deactivation_reason?: string | null
          id?: string
          is_active?: boolean | null
          last_accessed_at?: string | null
          permissions?: Json | null
          portal_token?: string
          project_id?: string
          total_messages?: number | null
          total_sessions?: number | null
          unread_count?: number
          updated_at?: string | null
          welcome_message?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "client_project_portals_business_user_id_fkey"
            columns: ["business_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_project_portals_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "business_clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_project_portals_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_project_portals_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      client_questionnaires: {
        Row: {
          client_email: string | null
          client_id: string | null
          client_name: string | null
          completed_at: string | null
          created_at: string
          expires_at: string | null
          id: string
          last_activity_at: string | null
          progress_percentage: number | null
          project_id: string | null
          questionnaire_type: string
          questions_answered: number | null
          responses: Json | null
          revision_count: number
          sent_at: string | null
          share_token: string
          started_at: string | null
          status: string
          template_id: string | null
          total_questions: number | null
          updated_at: string
          viewed_at: string | null
          workspace_id: string
        }
        Insert: {
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          completed_at?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          last_activity_at?: string | null
          progress_percentage?: number | null
          project_id?: string | null
          questionnaire_type?: string
          questions_answered?: number | null
          responses?: Json | null
          revision_count?: number
          sent_at?: string | null
          share_token?: string
          started_at?: string | null
          status?: string
          template_id?: string | null
          total_questions?: number | null
          updated_at?: string
          viewed_at?: string | null
          workspace_id: string
        }
        Update: {
          client_email?: string | null
          client_id?: string | null
          client_name?: string | null
          completed_at?: string | null
          created_at?: string
          expires_at?: string | null
          id?: string
          last_activity_at?: string | null
          progress_percentage?: number | null
          project_id?: string | null
          questionnaire_type?: string
          questions_answered?: number | null
          responses?: Json | null
          revision_count?: number
          sent_at?: string | null
          share_token?: string
          started_at?: string | null
          status?: string
          template_id?: string | null
          total_questions?: number | null
          updated_at?: string
          viewed_at?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_questionnaires_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_questionnaires_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_questionnaires_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "questionnaire_templates"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_questionnaires_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      client_relationships: {
        Row: {
          client_data_consent: boolean
          client_id: string
          created_at: string
          id: string
          professional_id: string
          relationship_uid: string
          status: string
          updated_at: string
          verification_code: string
        }
        Insert: {
          client_data_consent?: boolean
          client_id: string
          created_at?: string
          id?: string
          professional_id: string
          relationship_uid?: string
          status?: string
          updated_at?: string
          verification_code?: string
        }
        Update: {
          client_data_consent?: boolean
          client_id?: string
          created_at?: string
          id?: string
          professional_id?: string
          relationship_uid?: string
          status?: string
          updated_at?: string
          verification_code?: string
        }
        Relationships: [
          {
            foreignKeyName: "client_relationships_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "client_relationships_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      clients: {
        Row: {
          company: string | null
          created_at: string
          email: string | null
          id: string
          name: string
          notes: string | null
          phone: string | null
          promptme_profile: Json | null
          promptme_url: string | null
          status: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name: string
          notes?: string | null
          phone?: string | null
          promptme_profile?: Json | null
          promptme_url?: string | null
          status?: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string | null
          id?: string
          name?: string
          notes?: string | null
          phone?: string | null
          promptme_profile?: Json | null
          promptme_url?: string | null
          status?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "clients_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      coach_corner_logs: {
        Row: {
          context_data: Json | null
          created_at: string
          generated_message: string
          generation_date: string
          id: string
          message_type: string
          user_engagement: string | null
          user_id: string
        }
        Insert: {
          context_data?: Json | null
          created_at?: string
          generated_message: string
          generation_date?: string
          id?: string
          message_type?: string
          user_engagement?: string | null
          user_id: string
        }
        Update: {
          context_data?: Json | null
          created_at?: string
          generated_message?: string
          generation_date?: string
          id?: string
          message_type?: string
          user_engagement?: string | null
          user_id?: string
        }
        Relationships: []
      }
      cognitive_visualizations: {
        Row: {
          created_at: string | null
          dictation_id: string | null
          iam_nodes: Json | null
          id: string
          me_nodes: Json | null
          myself_nodes: Json | null
          node_data: Json
          status: string | null
          theme_colors: Json | null
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          user_id: string
          visualization_type: string
        }
        Insert: {
          created_at?: string | null
          dictation_id?: string | null
          iam_nodes?: Json | null
          id?: string
          me_nodes?: Json | null
          myself_nodes?: Json | null
          node_data?: Json
          status?: string | null
          theme_colors?: Json | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          user_id: string
          visualization_type: string
        }
        Update: {
          created_at?: string | null
          dictation_id?: string | null
          iam_nodes?: Json | null
          id?: string
          me_nodes?: Json | null
          myself_nodes?: Json | null
          node_data?: Json
          status?: string | null
          theme_colors?: Json | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          user_id?: string
          visualization_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "cognitive_visualizations_dictation_id_fkey"
            columns: ["dictation_id"]
            isOneToOne: false
            referencedRelation: "dictations"
            referencedColumns: ["id"]
          },
        ]
      }
      coin_transactions: {
        Row: {
          amount: number
          blockchain_tx_hash: string | null
          created_at: string
          description: string
          id: string
          source_id: string | null
          source_type: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          amount: number
          blockchain_tx_hash?: string | null
          created_at?: string
          description: string
          id?: string
          source_id?: string | null
          source_type: string
          transaction_type: string
          user_id: string
        }
        Update: {
          amount?: number
          blockchain_tx_hash?: string | null
          created_at?: string
          description?: string
          id?: string
          source_id?: string | null
          source_type?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: []
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          message_origin: string | null
          moderation_status: string | null
          post_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          message_origin?: string | null
          moderation_status?: string | null
          post_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          message_origin?: string | null
          moderation_status?: string | null
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "comments_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "comments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      communication_logs: {
        Row: {
          created_at: string
          detected_tone: string | null
          generated_ae_message: string | null
          generated_ai_message: string | null
          generated_blended_message: string | null
          guidance_text: string | null
          id: string
          message_origin: string | null
          original_message_text: string
          user_id: string
        }
        Insert: {
          created_at?: string
          detected_tone?: string | null
          generated_ae_message?: string | null
          generated_ai_message?: string | null
          generated_blended_message?: string | null
          guidance_text?: string | null
          id?: string
          message_origin?: string | null
          original_message_text: string
          user_id: string
        }
        Update: {
          created_at?: string
          detected_tone?: string | null
          generated_ae_message?: string | null
          generated_ai_message?: string | null
          generated_blended_message?: string | null
          guidance_text?: string | null
          id?: string
          message_origin?: string | null
          original_message_text?: string
          user_id?: string
        }
        Relationships: []
      }
      communication_mediator_requests: {
        Row: {
          ai_analysis: Json | null
          auto_detected: boolean | null
          created_at: string | null
          detection_confidence: number | null
          extracted_deadline: string | null
          extracted_task: string | null
          extracted_urgency: string | null
          generated_response: string | null
          id: string
          linked_calendar_event_id: string | null
          linked_task_id: string | null
          pmi_context: Json | null
          request_content: string
          request_source: string | null
          responded_at: string | null
          response_delivery_method: string | null
          response_sent: boolean | null
          response_sent_at: string | null
          sender_info: string
          source_email_id: string | null
          source_type: string | null
          status: string | null
          suggested_time_slots: Json | null
          updated_at: string | null
          user_decision: string | null
          user_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          auto_detected?: boolean | null
          created_at?: string | null
          detection_confidence?: number | null
          extracted_deadline?: string | null
          extracted_task?: string | null
          extracted_urgency?: string | null
          generated_response?: string | null
          id?: string
          linked_calendar_event_id?: string | null
          linked_task_id?: string | null
          pmi_context?: Json | null
          request_content: string
          request_source?: string | null
          responded_at?: string | null
          response_delivery_method?: string | null
          response_sent?: boolean | null
          response_sent_at?: string | null
          sender_info: string
          source_email_id?: string | null
          source_type?: string | null
          status?: string | null
          suggested_time_slots?: Json | null
          updated_at?: string | null
          user_decision?: string | null
          user_id: string
        }
        Update: {
          ai_analysis?: Json | null
          auto_detected?: boolean | null
          created_at?: string | null
          detection_confidence?: number | null
          extracted_deadline?: string | null
          extracted_task?: string | null
          extracted_urgency?: string | null
          generated_response?: string | null
          id?: string
          linked_calendar_event_id?: string | null
          linked_task_id?: string | null
          pmi_context?: Json | null
          request_content?: string
          request_source?: string | null
          responded_at?: string | null
          response_delivery_method?: string | null
          response_sent?: boolean | null
          response_sent_at?: string | null
          sender_info?: string
          source_email_id?: string | null
          source_type?: string | null
          status?: string | null
          suggested_time_slots?: Json | null
          updated_at?: string | null
          user_decision?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "communication_mediator_requests_linked_calendar_event_id_fkey"
            columns: ["linked_calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "communication_mediator_requests_linked_task_id_fkey"
            columns: ["linked_task_id"]
            isOneToOne: false
            referencedRelation: "promptme_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "communication_mediator_requests_source_email_id_fkey"
            columns: ["source_email_id"]
            isOneToOne: false
            referencedRelation: "business_emails"
            referencedColumns: ["id"]
          },
        ]
      }
      communication_refiner_logs: {
        Row: {
          ai_reframing_advice: string | null
          ai_tone_analysis: string | null
          contact_id: string | null
          created_at: string
          id: string
          incoming_message_text: string
          suggested_reframed_message: string | null
          user_id: string
        }
        Insert: {
          ai_reframing_advice?: string | null
          ai_tone_analysis?: string | null
          contact_id?: string | null
          created_at?: string
          id?: string
          incoming_message_text: string
          suggested_reframed_message?: string | null
          user_id: string
        }
        Update: {
          ai_reframing_advice?: string | null
          ai_tone_analysis?: string | null
          contact_id?: string | null
          created_at?: string
          id?: string
          incoming_message_text?: string
          suggested_reframed_message?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "communication_refiner_logs_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "user_contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_embeddings: {
        Row: {
          clerk_user_id: string
          content_text: string
          created_at: string
          embedding: string
          id: string
          mood_score: number | null
          sharing_level: string
          source_id: string
          source_table: string
          topic_tags: string[] | null
        }
        Insert: {
          clerk_user_id: string
          content_text: string
          created_at?: string
          embedding: string
          id?: string
          mood_score?: number | null
          sharing_level?: string
          source_id: string
          source_table: string
          topic_tags?: string[] | null
        }
        Update: {
          clerk_user_id?: string
          content_text?: string
          created_at?: string
          embedding?: string
          id?: string
          mood_score?: number | null
          sharing_level?: string
          source_id?: string
          source_table?: string
          topic_tags?: string[] | null
        }
        Relationships: []
      }
      community_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_type: string
          metadata: Json | null
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_type: string
          metadata?: Json | null
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_type?: string
          metadata?: Json | null
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_interactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      community_moderation: {
        Row: {
          action_taken: string | null
          content_id: string
          content_type: string
          created_at: string | null
          id: string
          moderator_id: string | null
          moderator_notes: string | null
          reason: string
          reported_at: string | null
          reported_by: string | null
          resolved_at: string | null
          status: string
        }
        Insert: {
          action_taken?: string | null
          content_id: string
          content_type: string
          created_at?: string | null
          id?: string
          moderator_id?: string | null
          moderator_notes?: string | null
          reason: string
          reported_at?: string | null
          reported_by?: string | null
          resolved_at?: string | null
          status?: string
        }
        Update: {
          action_taken?: string | null
          content_id?: string
          content_type?: string
          created_at?: string | null
          id?: string
          moderator_id?: string | null
          moderator_notes?: string | null
          reason?: string
          reported_at?: string | null
          reported_by?: string | null
          resolved_at?: string | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "community_moderation_moderator_id_fkey"
            columns: ["moderator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "community_moderation_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_compliance_requirements: {
        Row: {
          company_id: string | null
          company_type_applicable: string[] | null
          created_at: string
          description: string | null
          due_date_formula: string | null
          frequency: string
          grace_period_days: number | null
          id: string
          industry_type: string | null
          is_active: boolean | null
          penalty_description: string | null
          priority_level: string
          requirement_name: string
          requirement_type: string
          state_applicable: string[] | null
          updated_at: string
        }
        Insert: {
          company_id?: string | null
          company_type_applicable?: string[] | null
          created_at?: string
          description?: string | null
          due_date_formula?: string | null
          frequency: string
          grace_period_days?: number | null
          id?: string
          industry_type?: string | null
          is_active?: boolean | null
          penalty_description?: string | null
          priority_level?: string
          requirement_name: string
          requirement_type: string
          state_applicable?: string[] | null
          updated_at?: string
        }
        Update: {
          company_id?: string | null
          company_type_applicable?: string[] | null
          created_at?: string
          description?: string | null
          due_date_formula?: string | null
          frequency?: string
          grace_period_days?: number | null
          id?: string
          industry_type?: string | null
          is_active?: boolean | null
          penalty_description?: string | null
          priority_level?: string
          requirement_name?: string
          requirement_type?: string
          state_applicable?: string[] | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_compliance_requirements_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_compliance_status: {
        Row: {
          assigned_to_member_id: string | null
          company_id: string
          completion_evidence_url: string | null
          created_at: string
          id: string
          last_completed_date: string | null
          next_due_date: string
          notes: string | null
          reminder_sent_count: number | null
          requirement_id: string
          status: string
          updated_at: string
        }
        Insert: {
          assigned_to_member_id?: string | null
          company_id: string
          completion_evidence_url?: string | null
          created_at?: string
          id?: string
          last_completed_date?: string | null
          next_due_date: string
          notes?: string | null
          reminder_sent_count?: number | null
          requirement_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_to_member_id?: string | null
          company_id?: string
          completion_evidence_url?: string | null
          created_at?: string
          id?: string
          last_completed_date?: string | null
          next_due_date?: string
          notes?: string | null
          reminder_sent_count?: number | null
          requirement_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_compliance_status_assigned_to_member_id_fkey"
            columns: ["assigned_to_member_id"]
            isOneToOne: false
            referencedRelation: "company_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_compliance_status_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_compliance_status_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "company_compliance_requirements"
            referencedColumns: ["id"]
          },
        ]
      }
      company_members: {
        Row: {
          access_level: string
          address: string | null
          business_hero: string | null
          communication_style: string | null
          company_id: string
          conflict_resolution_style: string | null
          created_at: string
          email: string | null
          id: string
          investment_amount: number | null
          invited_at: string | null
          invited_by: string | null
          joined_at: string | null
          member_name: string
          member_title: string | null
          metadata: Json | null
          notes: string | null
          onboarding_completed: boolean | null
          ownership_percentage: number | null
          ownership_type: string | null
          permissions: Json | null
          phone: string | null
          promptme_user_id: string | null
          removed_at: string | null
          role: string
          status: string
          updated_at: string
          work_preferences: Json | null
          work_strengths: string[] | null
        }
        Insert: {
          access_level?: string
          address?: string | null
          business_hero?: string | null
          communication_style?: string | null
          company_id: string
          conflict_resolution_style?: string | null
          created_at?: string
          email?: string | null
          id?: string
          investment_amount?: number | null
          invited_at?: string | null
          invited_by?: string | null
          joined_at?: string | null
          member_name: string
          member_title?: string | null
          metadata?: Json | null
          notes?: string | null
          onboarding_completed?: boolean | null
          ownership_percentage?: number | null
          ownership_type?: string | null
          permissions?: Json | null
          phone?: string | null
          promptme_user_id?: string | null
          removed_at?: string | null
          role: string
          status?: string
          updated_at?: string
          work_preferences?: Json | null
          work_strengths?: string[] | null
        }
        Update: {
          access_level?: string
          address?: string | null
          business_hero?: string | null
          communication_style?: string | null
          company_id?: string
          conflict_resolution_style?: string | null
          created_at?: string
          email?: string | null
          id?: string
          investment_amount?: number | null
          invited_at?: string | null
          invited_by?: string | null
          joined_at?: string | null
          member_name?: string
          member_title?: string | null
          metadata?: Json | null
          notes?: string | null
          onboarding_completed?: boolean | null
          ownership_percentage?: number | null
          ownership_type?: string | null
          permissions?: Json | null
          phone?: string | null
          promptme_user_id?: string | null
          removed_at?: string | null
          role?: string
          status?: string
          updated_at?: string
          work_preferences?: Json | null
          work_strengths?: string[] | null
        }
        Relationships: [
          {
            foreignKeyName: "company_members_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      company_officers: {
        Row: {
          appointment_date: string | null
          bank_signatory: boolean | null
          company_id: string
          contract_authority: boolean | null
          created_at: string
          email: string | null
          hiring_authority: boolean | null
          id: string
          member_id: string | null
          metadata: Json | null
          notes: string | null
          officer_name: string
          officer_role: string
          officer_title: string
          phone: string | null
          responsibilities: string | null
          signing_authority: boolean | null
          status: string
          tax_signatory: boolean | null
          term_end_date: string | null
          updated_at: string
        }
        Insert: {
          appointment_date?: string | null
          bank_signatory?: boolean | null
          company_id: string
          contract_authority?: boolean | null
          created_at?: string
          email?: string | null
          hiring_authority?: boolean | null
          id?: string
          member_id?: string | null
          metadata?: Json | null
          notes?: string | null
          officer_name: string
          officer_role: string
          officer_title: string
          phone?: string | null
          responsibilities?: string | null
          signing_authority?: boolean | null
          status?: string
          tax_signatory?: boolean | null
          term_end_date?: string | null
          updated_at?: string
        }
        Update: {
          appointment_date?: string | null
          bank_signatory?: boolean | null
          company_id?: string
          contract_authority?: boolean | null
          created_at?: string
          email?: string | null
          hiring_authority?: boolean | null
          id?: string
          member_id?: string | null
          metadata?: Json | null
          notes?: string | null
          officer_name?: string
          officer_role?: string
          officer_title?: string
          phone?: string | null
          responsibilities?: string | null
          signing_authority?: boolean | null
          status?: string
          tax_signatory?: boolean | null
          term_end_date?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "company_officers_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "company_officers_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "company_members"
            referencedColumns: ["id"]
          },
        ]
      }
      company_profiles: {
        Row: {
          alter_ego_name: string | null
          alter_intelligence_name: string | null
          annual_filing_due_date: string | null
          articles_of_incorporation_number: string | null
          billing_cycle: string | null
          brand_voice: string | null
          business_description: string | null
          business_email: string | null
          business_license_expiry: string | null
          business_license_number: string | null
          business_phone: string | null
          communication_style: string | null
          company_legal_name: string
          company_photos: Json | null
          company_type: string
          company_videos: Json | null
          compliance_status: string | null
          contact_person: string | null
          core_values: Json | null
          created_at: string
          date_incorporated: string | null
          doing_business_as: string | null
          emergency_contact_name: string | null
          emergency_contact_phone: string | null
          federal_ein: string | null
          foreign_qualification_states: Json | null
          good_standing_status: string | null
          housing_contact_email: string | null
          housing_contact_name: string | null
          housing_contact_phone: string | null
          id: string
          industry_type: string
          location_office_number: string | null
          mailbox_number: string | null
          mailing_address_city: string | null
          mailing_address_country: string | null
          mailing_address_state: string | null
          mailing_address_street: string | null
          mailing_address_zip: string | null
          metadata: Json | null
          mission_statement: string | null
          monthly_fee: number | null
          movement_statement: string | null
          naics_code: string | null
          next_billing_date: string | null
          operating_agreement_date: string | null
          owner_user_id: string
          password_hint: string | null
          principal_address_city: string | null
          principal_address_country: string | null
          principal_address_state: string | null
          principal_address_street: string | null
          principal_address_zip: string | null
          program_end_date: string | null
          program_license_active: boolean | null
          program_license_key: string | null
          program_modules_unlocked: string[] | null
          program_start_date: string | null
          registered_agent_address: string | null
          registered_agent_name: string | null
          state_entity_number: string | null
          state_of_incorporation: string | null
          state_tax_id: string | null
          subscription_status: string
          subscription_tier: string
          target_audience: string | null
          trial_end_date: string | null
          updated_at: string
          virtual_address: string | null
          website_url: string | null
        }
        Insert: {
          alter_ego_name?: string | null
          alter_intelligence_name?: string | null
          annual_filing_due_date?: string | null
          articles_of_incorporation_number?: string | null
          billing_cycle?: string | null
          brand_voice?: string | null
          business_description?: string | null
          business_email?: string | null
          business_license_expiry?: string | null
          business_license_number?: string | null
          business_phone?: string | null
          communication_style?: string | null
          company_legal_name: string
          company_photos?: Json | null
          company_type: string
          company_videos?: Json | null
          compliance_status?: string | null
          contact_person?: string | null
          core_values?: Json | null
          created_at?: string
          date_incorporated?: string | null
          doing_business_as?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          federal_ein?: string | null
          foreign_qualification_states?: Json | null
          good_standing_status?: string | null
          housing_contact_email?: string | null
          housing_contact_name?: string | null
          housing_contact_phone?: string | null
          id?: string
          industry_type: string
          location_office_number?: string | null
          mailbox_number?: string | null
          mailing_address_city?: string | null
          mailing_address_country?: string | null
          mailing_address_state?: string | null
          mailing_address_street?: string | null
          mailing_address_zip?: string | null
          metadata?: Json | null
          mission_statement?: string | null
          monthly_fee?: number | null
          movement_statement?: string | null
          naics_code?: string | null
          next_billing_date?: string | null
          operating_agreement_date?: string | null
          owner_user_id: string
          password_hint?: string | null
          principal_address_city?: string | null
          principal_address_country?: string | null
          principal_address_state?: string | null
          principal_address_street?: string | null
          principal_address_zip?: string | null
          program_end_date?: string | null
          program_license_active?: boolean | null
          program_license_key?: string | null
          program_modules_unlocked?: string[] | null
          program_start_date?: string | null
          registered_agent_address?: string | null
          registered_agent_name?: string | null
          state_entity_number?: string | null
          state_of_incorporation?: string | null
          state_tax_id?: string | null
          subscription_status?: string
          subscription_tier?: string
          target_audience?: string | null
          trial_end_date?: string | null
          updated_at?: string
          virtual_address?: string | null
          website_url?: string | null
        }
        Update: {
          alter_ego_name?: string | null
          alter_intelligence_name?: string | null
          annual_filing_due_date?: string | null
          articles_of_incorporation_number?: string | null
          billing_cycle?: string | null
          brand_voice?: string | null
          business_description?: string | null
          business_email?: string | null
          business_license_expiry?: string | null
          business_license_number?: string | null
          business_phone?: string | null
          communication_style?: string | null
          company_legal_name?: string
          company_photos?: Json | null
          company_type?: string
          company_videos?: Json | null
          compliance_status?: string | null
          contact_person?: string | null
          core_values?: Json | null
          created_at?: string
          date_incorporated?: string | null
          doing_business_as?: string | null
          emergency_contact_name?: string | null
          emergency_contact_phone?: string | null
          federal_ein?: string | null
          foreign_qualification_states?: Json | null
          good_standing_status?: string | null
          housing_contact_email?: string | null
          housing_contact_name?: string | null
          housing_contact_phone?: string | null
          id?: string
          industry_type?: string
          location_office_number?: string | null
          mailbox_number?: string | null
          mailing_address_city?: string | null
          mailing_address_country?: string | null
          mailing_address_state?: string | null
          mailing_address_street?: string | null
          mailing_address_zip?: string | null
          metadata?: Json | null
          mission_statement?: string | null
          monthly_fee?: number | null
          movement_statement?: string | null
          naics_code?: string | null
          next_billing_date?: string | null
          operating_agreement_date?: string | null
          owner_user_id?: string
          password_hint?: string | null
          principal_address_city?: string | null
          principal_address_country?: string | null
          principal_address_state?: string | null
          principal_address_street?: string | null
          principal_address_zip?: string | null
          program_end_date?: string | null
          program_license_active?: boolean | null
          program_license_key?: string | null
          program_modules_unlocked?: string[] | null
          program_start_date?: string | null
          registered_agent_address?: string | null
          registered_agent_name?: string | null
          state_entity_number?: string | null
          state_of_incorporation?: string | null
          state_tax_id?: string | null
          subscription_status?: string
          subscription_tier?: string
          target_audience?: string | null
          trial_end_date?: string | null
          updated_at?: string
          virtual_address?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      compatibility_scores: {
        Row: {
          compatibility_score: number | null
          conflict_points: Json | null
          created_at: string
          facility_id: string
          harmony_points: Json | null
          how_to_get_along: Json | null
          id: string
          interaction_count: number | null
          last_analyzed_at: string | null
          last_interaction_at: string | null
          notes: string | null
          relationship_status: string | null
          resident_a: string
          resident_b: string
          updated_at: string
        }
        Insert: {
          compatibility_score?: number | null
          conflict_points?: Json | null
          created_at?: string
          facility_id: string
          harmony_points?: Json | null
          how_to_get_along?: Json | null
          id?: string
          interaction_count?: number | null
          last_analyzed_at?: string | null
          last_interaction_at?: string | null
          notes?: string | null
          relationship_status?: string | null
          resident_a: string
          resident_b: string
          updated_at?: string
        }
        Update: {
          compatibility_score?: number | null
          conflict_points?: Json | null
          created_at?: string
          facility_id?: string
          harmony_points?: Json | null
          how_to_get_along?: Json | null
          id?: string
          interaction_count?: number | null
          last_analyzed_at?: string | null
          last_interaction_at?: string | null
          notes?: string | null
          relationship_status?: string | null
          resident_a?: string
          resident_b?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compatibility_scores_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compatibility_scores_resident_a_fkey"
            columns: ["resident_a"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "compatibility_scores_resident_b_fkey"
            columns: ["resident_b"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
        ]
      }
      compliance_reminders: {
        Row: {
          created_at: string
          escalation_level: string
          id: string
          notify_roles: string[]
          reminder_days_before: number
          reminder_message: string | null
          requirement_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          escalation_level?: string
          id?: string
          notify_roles?: string[]
          reminder_days_before: number
          reminder_message?: string | null
          requirement_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          escalation_level?: string
          id?: string
          notify_roles?: string[]
          reminder_days_before?: number
          reminder_message?: string | null
          requirement_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "compliance_reminders_requirement_id_fkey"
            columns: ["requirement_id"]
            isOneToOne: false
            referencedRelation: "company_compliance_requirements"
            referencedColumns: ["id"]
          },
        ]
      }
      consequence_reminders: {
        Row: {
          consequence_id: string
          created_at: string | null
          id: string
          is_sent: boolean | null
          reminder_message: string
          scheduled_for: string
          sent_at: string | null
          user_id: string
        }
        Insert: {
          consequence_id: string
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          reminder_message: string
          scheduled_for: string
          sent_at?: string | null
          user_id: string
        }
        Update: {
          consequence_id?: string
          created_at?: string | null
          id?: string
          is_sent?: boolean | null
          reminder_message?: string
          scheduled_for?: string
          sent_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "consequence_reminders_consequence_id_fkey"
            columns: ["consequence_id"]
            isOneToOne: false
            referencedRelation: "moment_consequences"
            referencedColumns: ["id"]
          },
        ]
      }
      construction_ledger: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          expense_type: string
          id: string
          invoice_num: string | null
          property_id: string
          receipt_link: string | null
          updated_at: string
          vendor: string | null
        }
        Insert: {
          amount?: number
          created_at?: string
          description?: string | null
          expense_type?: string
          id?: string
          invoice_num?: string | null
          property_id: string
          receipt_link?: string | null
          updated_at?: string
          vendor?: string | null
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          expense_type?: string
          id?: string
          invoice_num?: string | null
          property_id?: string
          receipt_link?: string | null
          updated_at?: string
          vendor?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "construction_ledger_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "construction_ledger_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_cpr: {
        Row: {
          contact_id: string
          context: string
          created_at: string
          id: string
          next_steps: string | null
          outcome: string | null
        }
        Insert: {
          contact_id: string
          context: string
          created_at?: string
          id?: string
          next_steps?: string | null
          outcome?: string | null
        }
        Update: {
          contact_id?: string
          context?: string
          created_at?: string
          id?: string
          next_steps?: string | null
          outcome?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "contact_cpr_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_documents: {
        Row: {
          contact_id: string
          content: string | null
          created_at: string
          description: string | null
          file_size: number | null
          file_type: string | null
          file_url: string | null
          id: string
          title: string
          user_id: string
        }
        Insert: {
          contact_id: string
          content?: string | null
          created_at?: string
          description?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          title: string
          user_id: string
        }
        Update: {
          contact_id?: string
          content?: string | null
          created_at?: string
          description?: string | null
          file_size?: number | null
          file_type?: string | null
          file_url?: string | null
          id?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_documents_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_events: {
        Row: {
          completed: boolean
          contact_id: string
          created_at: string
          description: string | null
          event_date: string
          event_end: string | null
          id: string
          location: string | null
          reminder_at: string | null
          title: string
          user_id: string
        }
        Insert: {
          completed?: boolean
          contact_id: string
          created_at?: string
          description?: string | null
          event_date: string
          event_end?: string | null
          id?: string
          location?: string | null
          reminder_at?: string | null
          title: string
          user_id: string
        }
        Update: {
          completed?: boolean
          contact_id?: string
          created_at?: string
          description?: string | null
          event_date?: string
          event_end?: string | null
          id?: string
          location?: string | null
          reminder_at?: string | null
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_events_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_tasks: {
        Row: {
          contact_id: string
          created_at: string
          description: string | null
          due_date: string | null
          id: string
          priority: string
          status: string
          title: string
          user_id: string
        }
        Insert: {
          contact_id: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          status?: string
          title: string
          user_id: string
        }
        Update: {
          contact_id?: string
          created_at?: string
          description?: string | null
          due_date?: string | null
          id?: string
          priority?: string
          status?: string
          title?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_tasks_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contact_turning_reward_claims: {
        Row: {
          amount: number
          celebration_year: number
          contact_id: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          amount: number
          celebration_year: number
          contact_id: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          amount?: number
          celebration_year?: number
          contact_id?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "contact_turning_reward_claims_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      contacts: {
        Row: {
          account_number: string | null
          address: string | null
          avatar_url: string | null
          business_name: string | null
          call_frequency: string | null
          conflict_style: string
          contact_title: string | null
          contact_type: string
          created_at: string
          email: string | null
          email_secondary: string | null
          frequency: string
          full_name: string | null
          id: string
          name: string
          nd_type: string | null
          neuro_confirmation: string | null
          neuro_type: string
          notes: string | null
          phone: string | null
          phone_extension: string | null
          phone_secondary: string | null
          user_id: string
          website: string | null
        }
        Insert: {
          account_number?: string | null
          address?: string | null
          avatar_url?: string | null
          business_name?: string | null
          call_frequency?: string | null
          conflict_style: string
          contact_title?: string | null
          contact_type?: string
          created_at?: string
          email?: string | null
          email_secondary?: string | null
          frequency: string
          full_name?: string | null
          id?: string
          name: string
          nd_type?: string | null
          neuro_confirmation?: string | null
          neuro_type: string
          notes?: string | null
          phone?: string | null
          phone_extension?: string | null
          phone_secondary?: string | null
          user_id: string
          website?: string | null
        }
        Update: {
          account_number?: string | null
          address?: string | null
          avatar_url?: string | null
          business_name?: string | null
          call_frequency?: string | null
          conflict_style?: string
          contact_title?: string | null
          contact_type?: string
          created_at?: string
          email?: string | null
          email_secondary?: string | null
          frequency?: string
          full_name?: string | null
          id?: string
          name?: string
          nd_type?: string | null
          neuro_confirmation?: string | null
          neuro_type?: string
          notes?: string | null
          phone?: string | null
          phone_extension?: string | null
          phone_secondary?: string | null
          user_id?: string
          website?: string | null
        }
        Relationships: []
      }
      content_analytics: {
        Row: {
          click_through_rate: number | null
          conversion_rate: number | null
          cpr_effectiveness_score: number | null
          engagement_rate: number | null
          id: string
          platform_performance: Json | null
          post_id: string
          recorded_at: string
          user_id: string
        }
        Insert: {
          click_through_rate?: number | null
          conversion_rate?: number | null
          cpr_effectiveness_score?: number | null
          engagement_rate?: number | null
          id?: string
          platform_performance?: Json | null
          post_id: string
          recorded_at?: string
          user_id: string
        }
        Update: {
          click_through_rate?: number | null
          conversion_rate?: number | null
          cpr_effectiveness_score?: number | null
          engagement_rate?: number | null
          id?: string
          platform_performance?: Json | null
          post_id?: string
          recorded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      contributor_lived_experiences: {
        Row: {
          contributor_id: string
          created_at: string | null
          description: string | null
          experience_area: string
          id: string
          updated_at: string | null
          verified: boolean | null
        }
        Insert: {
          contributor_id: string
          created_at?: string | null
          description?: string | null
          experience_area: string
          id?: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Update: {
          contributor_id?: string
          created_at?: string | null
          description?: string | null
          experience_area?: string
          id?: string
          updated_at?: string | null
          verified?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "contributor_lived_experiences_contributor_id_fkey"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      contributor_responses: {
        Row: {
          contributor_id: string
          created_at: string
          id: string
          is_priority_response: boolean | null
          lived_experience_areas: string[] | null
          post_id: string
          response_content: string
          response_position: number | null
          updated_at: string
        }
        Insert: {
          contributor_id: string
          created_at?: string
          id?: string
          is_priority_response?: boolean | null
          lived_experience_areas?: string[] | null
          post_id: string
          response_content: string
          response_position?: number | null
          updated_at?: string
        }
        Update: {
          contributor_id?: string
          created_at?: string
          id?: string
          is_priority_response?: boolean | null
          lived_experience_areas?: string[] | null
          post_id?: string
          response_content?: string
          response_position?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "contributor_responses_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_contributor_responses_contributor"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_contributor_responses_post"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      contributor_submissions: {
        Row: {
          category: string | null
          content: string
          contributor_id: string
          created_at: string | null
          featured: boolean | null
          id: string
          keywords: string | null
          points_awarded: number | null
          review_date: string | null
          review_notes: string | null
          reviewer_id: string | null
          status: string
          submission_date: string | null
          submission_type: string
          title: string
          updated_at: string | null
          video_links: Json | null
        }
        Insert: {
          category?: string | null
          content: string
          contributor_id: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          keywords?: string | null
          points_awarded?: number | null
          review_date?: string | null
          review_notes?: string | null
          reviewer_id?: string | null
          status?: string
          submission_date?: string | null
          submission_type: string
          title: string
          updated_at?: string | null
          video_links?: Json | null
        }
        Update: {
          category?: string | null
          content?: string
          contributor_id?: string
          created_at?: string | null
          featured?: boolean | null
          id?: string
          keywords?: string | null
          points_awarded?: number | null
          review_date?: string | null
          review_notes?: string | null
          reviewer_id?: string | null
          status?: string
          submission_date?: string | null
          submission_type?: string
          title?: string
          updated_at?: string | null
          video_links?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "contributor_submissions_contributor_id_fkey"
            columns: ["contributor_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "contributor_submissions_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      conversation_messages: {
        Row: {
          analysis_id: string | null
          conversation_id: string
          created_at: string
          edited_at: string | null
          id: string
          message_content: string
          message_origin: string | null
          message_type: string
          read_at: string | null
          sender_id: string
        }
        Insert: {
          analysis_id?: string | null
          conversation_id: string
          created_at?: string
          edited_at?: string | null
          id?: string
          message_content: string
          message_origin?: string | null
          message_type?: string
          read_at?: string | null
          sender_id: string
        }
        Update: {
          analysis_id?: string | null
          conversation_id?: string
          created_at?: string
          edited_at?: string | null
          id?: string
          message_content?: string
          message_origin?: string | null
          message_type?: string
          read_at?: string | null
          sender_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_conversation_messages_analysis_id"
            columns: ["analysis_id"]
            isOneToOne: false
            referencedRelation: "message_analysis"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_conversation_messages_conversation_id"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "user_conversations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "fk_conversation_messages_sender_id"
            columns: ["sender_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cpr_templates: {
        Row: {
          category: string | null
          context_template: string | null
          created_at: string
          id: string
          is_public: boolean | null
          purpose_template: string | null
          result_template: string | null
          template_name: string
          updated_at: string
          usage_count: number | null
          user_id: string
        }
        Insert: {
          category?: string | null
          context_template?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          purpose_template?: string | null
          result_template?: string | null
          template_name: string
          updated_at?: string
          usage_count?: number | null
          user_id: string
        }
        Update: {
          category?: string | null
          context_template?: string | null
          created_at?: string
          id?: string
          is_public?: boolean | null
          purpose_template?: string | null
          result_template?: string | null
          template_name?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string
        }
        Relationships: []
      }
      creation_engagements: {
        Row: {
          created_at: string
          creation_id: string
          engagement_type: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          creation_id: string
          engagement_type: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          creation_id?: string
          engagement_type?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_creation_engagements_creation_id"
            columns: ["creation_id"]
            isOneToOne: false
            referencedRelation: "user_creations"
            referencedColumns: ["id"]
          },
        ]
      }
      creation_rewards: {
        Row: {
          created_at: string
          creation_id: string
          creator_id: string
          id: string
          reward_amount: number
          reward_reason: string
        }
        Insert: {
          created_at?: string
          creation_id: string
          creator_id: string
          id?: string
          reward_amount: number
          reward_reason: string
        }
        Update: {
          created_at?: string
          creation_id?: string
          creator_id?: string
          id?: string
          reward_amount?: number
          reward_reason?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_creation_rewards_creation_id"
            columns: ["creation_id"]
            isOneToOne: false
            referencedRelation: "user_creations"
            referencedColumns: ["id"]
          },
        ]
      }
      credit_transactions: {
        Row: {
          amount: number
          created_at: string
          credit_type: string
          description: string | null
          id: string
          user_id: string | null
          workspace_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          credit_type: string
          description?: string | null
          id?: string
          user_id?: string | null
          workspace_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          credit_type?: string
          description?: string | null
          id?: string
          user_id?: string | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "credit_transactions_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      creditors: {
        Row: {
          account_number: string | null
          contact_email: string | null
          contact_phone: string | null
          created_at: string
          creditor_name: string
          creditor_type: string
          current_balance: number | null
          due_date: string | null
          id: string
          interest_rate: number | null
          is_active: boolean | null
          minimum_payment: number | null
          notes: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          account_number?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          creditor_name: string
          creditor_type: string
          current_balance?: number | null
          due_date?: string | null
          id?: string
          interest_rate?: number | null
          is_active?: boolean | null
          minimum_payment?: number | null
          notes?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          account_number?: string | null
          contact_email?: string | null
          contact_phone?: string | null
          created_at?: string
          creditor_name?: string
          creditor_type?: string
          current_balance?: number | null
          due_date?: string | null
          id?: string
          interest_rate?: number | null
          is_active?: boolean | null
          minimum_payment?: number | null
          notes?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "creditors_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      credits_ledger: {
        Row: {
          amount: number
          created_at: string
          id: string
          reason: string
          reference_id: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          id?: string
          reason: string
          reference_id?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          id?: string
          reason?: string
          reference_id?: string | null
          user_id?: string
        }
        Relationships: []
      }
      curated_media: {
        Row: {
          category: string
          created_at: string
          description: string | null
          duration_minutes: number | null
          id: string
          is_active: boolean
          keywords: string[]
          media_type: string
          platform: string | null
          thumbnail_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean
          keywords?: string[]
          media_type: string
          platform?: string | null
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean
          keywords?: string[]
          media_type?: string
          platform?: string | null
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      custom_prompts: {
        Row: {
          client_id: string | null
          created_at: string
          delivered_at: string | null
          id: string
          is_delivered: boolean
          priority: number | null
          professional_id: string
          prompt_text: string
          prompt_type: string | null
          scheduled_at: string | null
          updated_at: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          delivered_at?: string | null
          id?: string
          is_delivered?: boolean
          priority?: number | null
          professional_id: string
          prompt_text: string
          prompt_type?: string | null
          scheduled_at?: string | null
          updated_at?: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          delivered_at?: string | null
          id?: string
          is_delivered?: boolean
          priority?: number | null
          professional_id?: string
          prompt_text?: string
          prompt_type?: string | null
          scheduled_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "custom_prompts_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "custom_prompts_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      cybrian_messages: {
        Row: {
          content: string
          created_at: string
          id: string
          metadata: Json | null
          role: string
          session_id: string | null
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role: string
          session_id?: string | null
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          metadata?: Json | null
          role?: string
          session_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cybrian_messages_session_id_fkey"
            columns: ["session_id"]
            isOneToOne: false
            referencedRelation: "cybrian_sessions"
            referencedColumns: ["id"]
          },
        ]
      }
      cybrian_sessions: {
        Row: {
          active_alter_ego: string | null
          check_in_at: string
          check_out_at: string | null
          check_out_reflection: string | null
          created_at: string
          daily_wins: string[] | null
          id: string
          mood_score: number | null
          primary_focus: string | null
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          active_alter_ego?: string | null
          check_in_at?: string
          check_out_at?: string | null
          check_out_reflection?: string | null
          created_at?: string
          daily_wins?: string[] | null
          id?: string
          mood_score?: number | null
          primary_focus?: string | null
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          active_alter_ego?: string | null
          check_in_at?: string
          check_out_at?: string | null
          check_out_reflection?: string | null
          created_at?: string
          daily_wins?: string[] | null
          id?: string
          mood_score?: number | null
          primary_focus?: string | null
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dad_activity_suggestions: {
        Row: {
          activity_description: string
          activity_title: string
          child_profile_id: string | null
          completed: boolean | null
          completion_notes: string | null
          created_at: string | null
          faex_skill_targeted: string | null
          id: string
          materials_needed: string[] | null
          step_by_step_guide: string | null
          time_required: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          activity_description: string
          activity_title: string
          child_profile_id?: string | null
          completed?: boolean | null
          completion_notes?: string | null
          created_at?: string | null
          faex_skill_targeted?: string | null
          id?: string
          materials_needed?: string[] | null
          step_by_step_guide?: string | null
          time_required?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          activity_description?: string
          activity_title?: string
          child_profile_id?: string | null
          completed?: boolean | null
          completion_notes?: string | null
          created_at?: string | null
          faex_skill_targeted?: string | null
          id?: string
          materials_needed?: string[] | null
          step_by_step_guide?: string | null
          time_required?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dad_activity_suggestions_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      dad_community_channels: {
        Row: {
          channel_name: string
          created_at: string | null
          description: string | null
          icon_emoji: string | null
          id: string
          is_active: boolean | null
          updated_at: string | null
        }
        Insert: {
          channel_name: string
          created_at?: string | null
          description?: string | null
          icon_emoji?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Update: {
          channel_name?: string
          created_at?: string | null
          description?: string | null
          icon_emoji?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
        }
        Relationships: []
      }
      dad_community_posts: {
        Row: {
          action_taken: string | null
          anonymous_display_name: string | null
          channel_id: string | null
          created_at: string | null
          id: string
          outcome_result: string | null
          post_content: string
          reaction_count: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          action_taken?: string | null
          anonymous_display_name?: string | null
          channel_id?: string | null
          created_at?: string | null
          id?: string
          outcome_result?: string | null
          post_content: string
          reaction_count?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          action_taken?: string | null
          anonymous_display_name?: string | null
          channel_id?: string | null
          created_at?: string | null
          id?: string
          outcome_result?: string | null
          post_content?: string
          reaction_count?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dad_community_posts_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "dad_community_channels"
            referencedColumns: ["id"]
          },
        ]
      }
      dad_community_reactions: {
        Row: {
          created_at: string | null
          id: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          post_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dad_community_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "dad_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      dad_journals: {
        Row: {
          action_taken: string | null
          child_profile_id: string | null
          created_at: string | null
          entry_content: string
          entry_title: string | null
          id: string
          is_private: boolean | null
          outcome_observed: string | null
          situation_description: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          action_taken?: string | null
          child_profile_id?: string | null
          created_at?: string | null
          entry_content: string
          entry_title?: string | null
          id?: string
          is_private?: boolean | null
          outcome_observed?: string | null
          situation_description?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          action_taken?: string | null
          child_profile_id?: string | null
          created_at?: string | null
          entry_content?: string
          entry_title?: string | null
          id?: string
          is_private?: boolean | null
          outcome_observed?: string | null
          situation_description?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dad_journals_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      dad_mood_checkins: {
        Row: {
          challenges_today: string[] | null
          confidence_level: number | null
          connection_level: number | null
          created_at: string | null
          id: string
          mood_notes: string | null
          user_id: string
          wins_today: string[] | null
        }
        Insert: {
          challenges_today?: string[] | null
          confidence_level?: number | null
          connection_level?: number | null
          created_at?: string | null
          id?: string
          mood_notes?: string | null
          user_id: string
          wins_today?: string[] | null
        }
        Update: {
          challenges_today?: string[] | null
          confidence_level?: number | null
          connection_level?: number | null
          created_at?: string | null
          id?: string
          mood_notes?: string | null
          user_id?: string
          wins_today?: string[] | null
        }
        Relationships: []
      }
      dad_translation_scripts: {
        Row: {
          action_script: string
          child_emotional_state: string | null
          child_profile_id: string | null
          cpr_recommendation: string | null
          created_at: string | null
          id: string
          outcome_notes: string | null
          translated_need: string
          trigger_situation: string
          updated_at: string | null
          used_successfully: boolean | null
          user_id: string
        }
        Insert: {
          action_script: string
          child_emotional_state?: string | null
          child_profile_id?: string | null
          cpr_recommendation?: string | null
          created_at?: string | null
          id?: string
          outcome_notes?: string | null
          translated_need: string
          trigger_situation: string
          updated_at?: string | null
          used_successfully?: boolean | null
          user_id: string
        }
        Update: {
          action_script?: string
          child_emotional_state?: string | null
          child_profile_id?: string | null
          cpr_recommendation?: string | null
          created_at?: string | null
          id?: string
          outcome_notes?: string | null
          translated_need?: string
          trigger_situation?: string
          updated_at?: string | null
          used_successfully?: boolean | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "dad_translation_scripts_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_checkins: {
        Row: {
          active_persona: Json | null
          calendar_event_id: string | null
          checked_in_at: string
          checkin_type: string
          generated_image_url: string | null
          generated_message_text: string | null
          id: string
          mood_comparison: string | null
          mood_input_number: number | null
          mood_input_origin: string | null
          mood_input_text: string | null
          morning_checkin_id: string | null
          pr_intervention_accepted: boolean | null
          pr_intervention_offered: boolean | null
          pr_response_log_id: string | null
          session_duration: number | null
          user_id: string
        }
        Insert: {
          active_persona?: Json | null
          calendar_event_id?: string | null
          checked_in_at?: string
          checkin_type?: string
          generated_image_url?: string | null
          generated_message_text?: string | null
          id?: string
          mood_comparison?: string | null
          mood_input_number?: number | null
          mood_input_origin?: string | null
          mood_input_text?: string | null
          morning_checkin_id?: string | null
          pr_intervention_accepted?: boolean | null
          pr_intervention_offered?: boolean | null
          pr_response_log_id?: string | null
          session_duration?: number | null
          user_id: string
        }
        Update: {
          active_persona?: Json | null
          calendar_event_id?: string | null
          checked_in_at?: string
          checkin_type?: string
          generated_image_url?: string | null
          generated_message_text?: string | null
          id?: string
          mood_comparison?: string | null
          mood_input_number?: number | null
          mood_input_origin?: string | null
          mood_input_text?: string | null
          morning_checkin_id?: string | null
          pr_intervention_accepted?: boolean | null
          pr_intervention_offered?: boolean | null
          pr_response_log_id?: string | null
          session_duration?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "daily_checkins_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_checkins_morning_checkin_id_fkey"
            columns: ["morning_checkin_id"]
            isOneToOne: false
            referencedRelation: "daily_checkins"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_checkins_pr_response_log_id_fkey"
            columns: ["pr_response_log_id"]
            isOneToOne: false
            referencedRelation: "pr_response_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "daily_checkins_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      daily_purpose_tracking: {
        Row: {
          ae_moments: number | null
          ai_moments: number | null
          created_at: string
          energy_level: number | null
          evening_reflection: string | null
          fulfillment_level: number | null
          id: string
          key_activities: Json | null
          morning_intention: string | null
          neutral_moments: number | null
          purpose_alignment_self_rating: number | null
          tracking_date: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ae_moments?: number | null
          ai_moments?: number | null
          created_at?: string
          energy_level?: number | null
          evening_reflection?: string | null
          fulfillment_level?: number | null
          id?: string
          key_activities?: Json | null
          morning_intention?: string | null
          neutral_moments?: number | null
          purpose_alignment_self_rating?: number | null
          tracking_date: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ae_moments?: number | null
          ai_moments?: number | null
          created_at?: string
          energy_level?: number | null
          evening_reflection?: string | null
          fulfillment_level?: number | null
          id?: string
          key_activities?: Json | null
          morning_intention?: string | null
          neutral_moments?: number | null
          purpose_alignment_self_rating?: number | null
          tracking_date?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      debt_communications_log: {
        Row: {
          ai_analysis: Json | null
          created_at: string
          creditor_id: string
          follow_up_date: string | null
          follow_up_needed: boolean | null
          generated_message: string
          id: string
          message_type: string
          original_message: string | null
          sent_at: string | null
          updated_at: string
          user_context: Json | null
          user_id: string
          was_sent: boolean | null
        }
        Insert: {
          ai_analysis?: Json | null
          created_at?: string
          creditor_id: string
          follow_up_date?: string | null
          follow_up_needed?: boolean | null
          generated_message: string
          id?: string
          message_type: string
          original_message?: string | null
          sent_at?: string | null
          updated_at?: string
          user_context?: Json | null
          user_id: string
          was_sent?: boolean | null
        }
        Update: {
          ai_analysis?: Json | null
          created_at?: string
          creditor_id?: string
          follow_up_date?: string | null
          follow_up_needed?: boolean | null
          generated_message?: string
          id?: string
          message_type?: string
          original_message?: string | null
          sent_at?: string | null
          updated_at?: string
          user_context?: Json | null
          user_id?: string
          was_sent?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "debt_communications_log_creditor_id_fkey"
            columns: ["creditor_id"]
            isOneToOne: false
            referencedRelation: "creditors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "debt_communications_log_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      debt_stack: {
        Row: {
          accum_interest: number | null
          amt_note: number
          created_at: string
          daily_rate_365: number | null
          id: string
          interest_rate: number | null
          lender_name: string
          maturity_date: string | null
          position: string
          property_id: string
          updated_at: string
        }
        Insert: {
          accum_interest?: number | null
          amt_note?: number
          created_at?: string
          daily_rate_365?: number | null
          id?: string
          interest_rate?: number | null
          lender_name: string
          maturity_date?: string | null
          position?: string
          property_id: string
          updated_at?: string
        }
        Update: {
          accum_interest?: number | null
          amt_note?: number
          created_at?: string
          daily_rate_365?: number | null
          id?: string
          interest_rate?: number | null
          lender_name?: string
          maturity_date?: string | null
          position?: string
          property_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "debt_stack_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "debt_stack_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      debug_logs: {
        Row: {
          created_at: string
          details: Json | null
          id: string
          log_type: string
          message: string
          session_id: string | null
          source: string
          user_agent: string | null
        }
        Insert: {
          created_at?: string
          details?: Json | null
          id?: string
          log_type?: string
          message: string
          session_id?: string | null
          source: string
          user_agent?: string | null
        }
        Update: {
          created_at?: string
          details?: Json | null
          id?: string
          log_type?: string
          message?: string
          session_id?: string | null
          source?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      defining_moment_resolutions: {
        Row: {
          created_at: string
          id: string
          influencer_insights: Json | null
          learning_outcome: string
          moment_id: string
          origin_after: string | null
          origin_before: string | null
          resolution_date: string
          transformation_description: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          influencer_insights?: Json | null
          learning_outcome: string
          moment_id: string
          origin_after?: string | null
          origin_before?: string | null
          resolution_date?: string
          transformation_description?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          influencer_insights?: Json | null
          learning_outcome?: string
          moment_id?: string
          origin_after?: string | null
          origin_before?: string | null
          resolution_date?: string
          transformation_description?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "defining_moment_resolutions_moment_id_fkey"
            columns: ["moment_id"]
            isOneToOne: false
            referencedRelation: "personality_moments"
            referencedColumns: ["id"]
          },
        ]
      }
      defining_moments: {
        Row: {
          alter_ego_id: string | null
          batch_processed_at: string | null
          category: string
          company_id: string | null
          contact_id: string | null
          contributor_id: string | null
          created_at: string
          emotional_context: string | null
          financial_impact: string | null
          id: string
          influencer_id: string | null
          lesson_learned: string | null
          linked_archetype: string | null
          moment_scope: string | null
          moment_text: string | null
          moment_type: string | null
          mood_context: string | null
          prompt: string | null
          response_i: string | null
          response_me: string | null
          response_myself: string | null
          source_app: string | null
          training_mode: string | null
          user_id: string
          vault_toggled: boolean
          visionary_id: string | null
        }
        Insert: {
          alter_ego_id?: string | null
          batch_processed_at?: string | null
          category?: string
          company_id?: string | null
          contact_id?: string | null
          contributor_id?: string | null
          created_at?: string
          emotional_context?: string | null
          financial_impact?: string | null
          id?: string
          influencer_id?: string | null
          lesson_learned?: string | null
          linked_archetype?: string | null
          moment_scope?: string | null
          moment_text?: string | null
          moment_type?: string | null
          mood_context?: string | null
          prompt?: string | null
          response_i?: string | null
          response_me?: string | null
          response_myself?: string | null
          source_app?: string | null
          training_mode?: string | null
          user_id: string
          vault_toggled?: boolean
          visionary_id?: string | null
        }
        Update: {
          alter_ego_id?: string | null
          batch_processed_at?: string | null
          category?: string
          company_id?: string | null
          contact_id?: string | null
          contributor_id?: string | null
          created_at?: string
          emotional_context?: string | null
          financial_impact?: string | null
          id?: string
          influencer_id?: string | null
          lesson_learned?: string | null
          linked_archetype?: string | null
          moment_scope?: string | null
          moment_text?: string | null
          moment_type?: string | null
          mood_context?: string | null
          prompt?: string | null
          response_i?: string | null
          response_me?: string | null
          response_myself?: string | null
          source_app?: string | null
          training_mode?: string | null
          user_id?: string
          vault_toggled?: boolean
          visionary_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "defining_moments_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "defining_moments_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      dictations: {
        Row: {
          ai_extracted_data: Json | null
          categorization: Json | null
          created_at: string
          created_defining_moment_id: string | null
          has_complex_structure: boolean | null
          id: string
          original_audio_url: string | null
          status: string | null
          title: string | null
          transcribed_text: string
          updated_at: string
          user_id: string
          visualization_id: string | null
        }
        Insert: {
          ai_extracted_data?: Json | null
          categorization?: Json | null
          created_at?: string
          created_defining_moment_id?: string | null
          has_complex_structure?: boolean | null
          id?: string
          original_audio_url?: string | null
          status?: string | null
          title?: string | null
          transcribed_text: string
          updated_at?: string
          user_id: string
          visualization_id?: string | null
        }
        Update: {
          ai_extracted_data?: Json | null
          categorization?: Json | null
          created_at?: string
          created_defining_moment_id?: string | null
          has_complex_structure?: boolean | null
          id?: string
          original_audio_url?: string | null
          status?: string | null
          title?: string | null
          transcribed_text?: string
          updated_at?: string
          user_id?: string
          visualization_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "dictations_created_defining_moment_id_fkey"
            columns: ["created_defining_moment_id"]
            isOneToOne: false
            referencedRelation: "personality_moments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dictations_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "dictations_visualization_id_fkey"
            columns: ["visualization_id"]
            isOneToOne: false
            referencedRelation: "cognitive_visualizations"
            referencedColumns: ["id"]
          },
        ]
      }
      direct_messages: {
        Row: {
          created_at: string
          delivered_at: string | null
          delivery_status: string
          id: string
          message_content: string
          message_type: string
          metadata: Json | null
          read_at: string | null
          recipient_email: string | null
          recipient_id: string | null
          recipient_phone: string | null
          sender_id: string
          sent_at: string | null
          source_id: string | null
          source_tool: string | null
          updated_at: string
        }
        Insert: {
          created_at?: string
          delivered_at?: string | null
          delivery_status?: string
          id?: string
          message_content: string
          message_type?: string
          metadata?: Json | null
          read_at?: string | null
          recipient_email?: string | null
          recipient_id?: string | null
          recipient_phone?: string | null
          sender_id: string
          sent_at?: string | null
          source_id?: string | null
          source_tool?: string | null
          updated_at?: string
        }
        Update: {
          created_at?: string
          delivered_at?: string | null
          delivery_status?: string
          id?: string
          message_content?: string
          message_type?: string
          metadata?: Json | null
          read_at?: string | null
          recipient_email?: string | null
          recipient_id?: string | null
          recipient_phone?: string | null
          sender_id?: string
          sent_at?: string | null
          source_id?: string | null
          source_tool?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      document_templates: {
        Row: {
          category: string
          completion_message: string | null
          created_at: string
          description: string | null
          fields: Json
          icon: string | null
          id: string
          is_ai_generated: boolean | null
          keywords: string[] | null
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          category?: string
          completion_message?: string | null
          created_at?: string
          description?: string | null
          fields?: Json
          icon?: string | null
          id?: string
          is_ai_generated?: boolean | null
          keywords?: string[] | null
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          category?: string
          completion_message?: string | null
          created_at?: string
          description?: string | null
          fields?: Json
          icon?: string | null
          id?: string
          is_ai_generated?: boolean | null
          keywords?: string[] | null
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      dr_talky_messages: {
        Row: {
          child_profile_id: string
          created_at: string
          crisis_keywords: string[] | null
          id: string
          is_crisis: boolean
          is_read: boolean
          original_message: string
          parent_user_id: string
          sender_type: string
          softened_message: string
        }
        Insert: {
          child_profile_id: string
          created_at?: string
          crisis_keywords?: string[] | null
          id?: string
          is_crisis?: boolean
          is_read?: boolean
          original_message: string
          parent_user_id: string
          sender_type: string
          softened_message: string
        }
        Update: {
          child_profile_id?: string
          created_at?: string
          crisis_keywords?: string[] | null
          id?: string
          is_crisis?: boolean
          is_read?: boolean
          original_message?: string
          parent_user_id?: string
          sender_type?: string
          softened_message?: string
        }
        Relationships: [
          {
            foreignKeyName: "dr_talky_messages_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_accounts: {
        Row: {
          access_token: string | null
          created_at: string | null
          display_name: string | null
          email_address: string
          id: string
          imap_config: Json | null
          last_sync_at: string | null
          metadata: Json | null
          provider: string
          refresh_token: string | null
          sync_cursor: string | null
          sync_enabled: boolean | null
          sync_status: string | null
          token_expires_at: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          access_token?: string | null
          created_at?: string | null
          display_name?: string | null
          email_address: string
          id?: string
          imap_config?: Json | null
          last_sync_at?: string | null
          metadata?: Json | null
          provider: string
          refresh_token?: string | null
          sync_cursor?: string | null
          sync_enabled?: boolean | null
          sync_status?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          access_token?: string | null
          created_at?: string | null
          display_name?: string | null
          email_address?: string
          id?: string
          imap_config?: Json | null
          last_sync_at?: string | null
          metadata?: Json | null
          provider?: string
          refresh_token?: string | null
          sync_cursor?: string | null
          sync_enabled?: boolean | null
          sync_status?: string | null
          token_expires_at?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_drafts: {
        Row: {
          account_id: string | null
          ai_generated: boolean | null
          attachments: Json | null
          bcc_addresses: Json | null
          body_html: string | null
          body_text: string | null
          cc_addresses: Json | null
          cpr_context: Json | null
          created_at: string | null
          draft_type: string | null
          id: string
          metadata: Json | null
          reply_to_message_id: string | null
          scheduled_for: string | null
          sent_at: string | null
          status: string | null
          subject: string | null
          to_addresses: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_id?: string | null
          ai_generated?: boolean | null
          attachments?: Json | null
          bcc_addresses?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_addresses?: Json | null
          cpr_context?: Json | null
          created_at?: string | null
          draft_type?: string | null
          id?: string
          metadata?: Json | null
          reply_to_message_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          subject?: string | null
          to_addresses?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_id?: string | null
          ai_generated?: boolean | null
          attachments?: Json | null
          bcc_addresses?: Json | null
          body_html?: string | null
          body_text?: string | null
          cc_addresses?: Json | null
          cpr_context?: Json | null
          created_at?: string | null
          draft_type?: string | null
          id?: string
          metadata?: Json | null
          reply_to_message_id?: string | null
          scheduled_for?: string | null
          sent_at?: string | null
          status?: string | null
          subject?: string | null
          to_addresses?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_drafts_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_drafts_reply_to_message_id_fkey"
            columns: ["reply_to_message_id"]
            isOneToOne: false
            referencedRelation: "email_messages"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_drafts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_engagement_responses: {
        Row: {
          created_at: string
          email_type: string
          feedback_submitted_at: string | null
          id: string
          opened_at: string | null
          questions_data: Json | null
          responses_data: Json | null
          sent_at: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          email_type: string
          feedback_submitted_at?: string | null
          id?: string
          opened_at?: string | null
          questions_data?: Json | null
          responses_data?: Json | null
          sent_at?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          email_type?: string
          feedback_submitted_at?: string | null
          id?: string
          opened_at?: string | null
          questions_data?: Json | null
          responses_data?: Json | null
          sent_at?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_engagement_responses_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_messages: {
        Row: {
          account_id: string
          ai_analysis: Json | null
          attachments: Json | null
          bcc_addresses: Json | null
          body_html: string | null
          body_preview: string | null
          body_text: string | null
          cc_addresses: Json | null
          conversation_summary: string | null
          created_at: string | null
          external_message_id: string
          folder: string | null
          from_address: string
          from_name: string | null
          has_attachments: boolean | null
          id: string
          importance: string | null
          is_archived: boolean | null
          is_read: boolean | null
          is_starred: boolean | null
          labels: Json | null
          metadata: Json | null
          received_at: string
          reply_to_addresses: Json | null
          subject: string | null
          thread_id: string | null
          to_addresses: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_id: string
          ai_analysis?: Json | null
          attachments?: Json | null
          bcc_addresses?: Json | null
          body_html?: string | null
          body_preview?: string | null
          body_text?: string | null
          cc_addresses?: Json | null
          conversation_summary?: string | null
          created_at?: string | null
          external_message_id: string
          folder?: string | null
          from_address: string
          from_name?: string | null
          has_attachments?: boolean | null
          id?: string
          importance?: string | null
          is_archived?: boolean | null
          is_read?: boolean | null
          is_starred?: boolean | null
          labels?: Json | null
          metadata?: Json | null
          received_at: string
          reply_to_addresses?: Json | null
          subject?: string | null
          thread_id?: string | null
          to_addresses?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_id?: string
          ai_analysis?: Json | null
          attachments?: Json | null
          bcc_addresses?: Json | null
          body_html?: string | null
          body_preview?: string | null
          body_text?: string | null
          cc_addresses?: Json | null
          conversation_summary?: string | null
          created_at?: string | null
          external_message_id?: string
          folder?: string | null
          from_address?: string
          from_name?: string | null
          has_attachments?: boolean | null
          id?: string
          importance?: string | null
          is_archived?: boolean | null
          is_read?: boolean | null
          is_starred?: boolean | null
          labels?: Json | null
          metadata?: Json | null
          received_at?: string
          reply_to_addresses?: Json | null
          subject?: string | null
          thread_id?: string | null
          to_addresses?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_messages_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_messages_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_rules: {
        Row: {
          account_id: string | null
          actions: Json
          applied_count: number | null
          conditions: Json
          created_at: string | null
          enabled: boolean | null
          id: string
          priority: number | null
          rule_description: string | null
          rule_name: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          account_id?: string | null
          actions?: Json
          applied_count?: number | null
          conditions?: Json
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          priority?: number | null
          rule_description?: string | null
          rule_name: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          account_id?: string | null
          actions?: Json
          applied_count?: number | null
          conditions?: Json
          created_at?: string | null
          enabled?: boolean | null
          id?: string
          priority?: number | null
          rule_description?: string | null
          rule_name?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_rules_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "email_rules_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      email_sync_logs: {
        Row: {
          account_id: string
          completed_at: string | null
          created_at: string | null
          error_details: Json | null
          error_message: string | null
          id: string
          messages_deleted: number | null
          messages_synced: number | null
          messages_updated: number | null
          started_at: string | null
          status: string | null
          sync_type: string
        }
        Insert: {
          account_id: string
          completed_at?: string | null
          created_at?: string | null
          error_details?: Json | null
          error_message?: string | null
          id?: string
          messages_deleted?: number | null
          messages_synced?: number | null
          messages_updated?: number | null
          started_at?: string | null
          status?: string | null
          sync_type: string
        }
        Update: {
          account_id?: string
          completed_at?: string | null
          created_at?: string | null
          error_details?: Json | null
          error_message?: string | null
          id?: string
          messages_deleted?: number | null
          messages_synced?: number | null
          messages_updated?: number | null
          started_at?: string | null
          status?: string | null
          sync_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_sync_logs_account_id_fkey"
            columns: ["account_id"]
            isOneToOne: false
            referencedRelation: "email_accounts"
            referencedColumns: ["id"]
          },
        ]
      }
      email_templates: {
        Row: {
          body_html: string | null
          body_text: string | null
          category: string | null
          cpr_context: Json | null
          created_at: string | null
          id: string
          is_public: boolean | null
          subject: string | null
          template_description: string | null
          template_name: string
          template_variables: Json | null
          updated_at: string | null
          usage_count: number | null
          user_id: string
        }
        Insert: {
          body_html?: string | null
          body_text?: string | null
          category?: string | null
          cpr_context?: Json | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          subject?: string | null
          template_description?: string | null
          template_name: string
          template_variables?: Json | null
          updated_at?: string | null
          usage_count?: number | null
          user_id: string
        }
        Update: {
          body_html?: string | null
          body_text?: string | null
          category?: string | null
          cpr_context?: Json | null
          created_at?: string | null
          id?: string
          is_public?: boolean | null
          subject?: string | null
          template_description?: string | null
          template_name?: string
          template_variables?: Json | null
          updated_at?: string | null
          usage_count?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "email_templates_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      enterprise_inquiries: {
        Row: {
          additional_notes: string | null
          admin_notes: string | null
          api_access_level: string | null
          backup_requirements: string | null
          branding_requirements: Json | null
          budget_initial: string | null
          budget_ongoing: string | null
          client_count: string | null
          company_name: string
          company_size: string | null
          compliance_requirements: string[] | null
          contact_email: string
          contact_name: string
          contact_phone: string | null
          contact_role: string | null
          created_at: string | null
          current_tools: string | null
          custom_features: string | null
          data_ownership: string | null
          data_residency: string | null
          data_retention: string | null
          documentation_needs: string | null
          features_needed: string[] | null
          features_not_needed: string[] | null
          hosting_preference: string | null
          id: string
          industry: string | null
          integration_requirements: string | null
          maintenance_expectations: string | null
          monthly_volume: string | null
          pain_points: string | null
          pilot_interest: boolean | null
          referral_source: string | null
          sso_requirements: string | null
          status: string | null
          support_level: string | null
          timeline: string | null
          training_requirements: string | null
          updated_at: string | null
          website_url: string | null
        }
        Insert: {
          additional_notes?: string | null
          admin_notes?: string | null
          api_access_level?: string | null
          backup_requirements?: string | null
          branding_requirements?: Json | null
          budget_initial?: string | null
          budget_ongoing?: string | null
          client_count?: string | null
          company_name: string
          company_size?: string | null
          compliance_requirements?: string[] | null
          contact_email: string
          contact_name: string
          contact_phone?: string | null
          contact_role?: string | null
          created_at?: string | null
          current_tools?: string | null
          custom_features?: string | null
          data_ownership?: string | null
          data_residency?: string | null
          data_retention?: string | null
          documentation_needs?: string | null
          features_needed?: string[] | null
          features_not_needed?: string[] | null
          hosting_preference?: string | null
          id?: string
          industry?: string | null
          integration_requirements?: string | null
          maintenance_expectations?: string | null
          monthly_volume?: string | null
          pain_points?: string | null
          pilot_interest?: boolean | null
          referral_source?: string | null
          sso_requirements?: string | null
          status?: string | null
          support_level?: string | null
          timeline?: string | null
          training_requirements?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Update: {
          additional_notes?: string | null
          admin_notes?: string | null
          api_access_level?: string | null
          backup_requirements?: string | null
          branding_requirements?: Json | null
          budget_initial?: string | null
          budget_ongoing?: string | null
          client_count?: string | null
          company_name?: string
          company_size?: string | null
          compliance_requirements?: string[] | null
          contact_email?: string
          contact_name?: string
          contact_phone?: string | null
          contact_role?: string | null
          created_at?: string | null
          current_tools?: string | null
          custom_features?: string | null
          data_ownership?: string | null
          data_residency?: string | null
          data_retention?: string | null
          documentation_needs?: string | null
          features_needed?: string[] | null
          features_not_needed?: string[] | null
          hosting_preference?: string | null
          id?: string
          industry?: string | null
          integration_requirements?: string | null
          maintenance_expectations?: string | null
          monthly_volume?: string | null
          pain_points?: string | null
          pilot_interest?: boolean | null
          referral_source?: string | null
          sso_requirements?: string | null
          status?: string | null
          support_level?: string | null
          timeline?: string | null
          training_requirements?: string | null
          updated_at?: string | null
          website_url?: string | null
        }
        Relationships: []
      }
      exercise_checkins: {
        Row: {
          ai_adaptation_suggestion: string | null
          checkin_time: string
          created_at: string
          diastolic_bp: number | null
          heart_rate_bpm: number | null
          id: string
          mood_input_number: number | null
          routine_id: string | null
          systolic_bp: number | null
          thought_feeling_input: string | null
          user_id: string
        }
        Insert: {
          ai_adaptation_suggestion?: string | null
          checkin_time?: string
          created_at?: string
          diastolic_bp?: number | null
          heart_rate_bpm?: number | null
          id?: string
          mood_input_number?: number | null
          routine_id?: string | null
          systolic_bp?: number | null
          thought_feeling_input?: string | null
          user_id: string
        }
        Update: {
          ai_adaptation_suggestion?: string | null
          checkin_time?: string
          created_at?: string
          diastolic_bp?: number | null
          heart_rate_bpm?: number | null
          id?: string
          mood_input_number?: number | null
          routine_id?: string | null
          systolic_bp?: number | null
          thought_feeling_input?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_checkins_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "exercise_routines"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "exercise_checkins_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      exercise_routines: {
        Row: {
          available_time_minutes: number | null
          created_at: string
          current_fitness_level: string | null
          fitness_goal: string | null
          generated_routine_text: string
          id: string
          preferred_exercise_types: string | null
          preferred_frequency: string | null
          reminder_days: string | null
          reminder_time: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          available_time_minutes?: number | null
          created_at?: string
          current_fitness_level?: string | null
          fitness_goal?: string | null
          generated_routine_text: string
          id?: string
          preferred_exercise_types?: string | null
          preferred_frequency?: string | null
          reminder_days?: string | null
          reminder_time?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          available_time_minutes?: number | null
          created_at?: string
          current_fitness_level?: string | null
          fitness_goal?: string | null
          generated_routine_text?: string
          id?: string
          preferred_exercise_types?: string | null
          preferred_frequency?: string | null
          reminder_days?: string | null
          reminder_time?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "exercise_routines_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_check_ins: {
        Row: {
          check_in_date: string
          check_in_time: string | null
          check_out_time: string | null
          created_at: string
          facility_id: string
          id: string
          notes: string | null
          resident_id: string
          status: string
          updated_at: string
          verified_by: string | null
          wellness_rating: number | null
        }
        Insert: {
          check_in_date?: string
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string
          facility_id: string
          id?: string
          notes?: string | null
          resident_id: string
          status?: string
          updated_at?: string
          verified_by?: string | null
          wellness_rating?: number | null
        }
        Update: {
          check_in_date?: string
          check_in_time?: string | null
          check_out_time?: string | null
          created_at?: string
          facility_id?: string
          id?: string
          notes?: string | null
          resident_id?: string
          status?: string
          updated_at?: string
          verified_by?: string | null
          wellness_rating?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "facility_check_ins_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_check_ins_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_check_ins_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_contacts: {
        Row: {
          contact_name: string
          contact_role: string
          created_at: string
          email: string | null
          facility_id: string
          id: string
          is_primary: boolean
          notes: string | null
          phone: string | null
          updated_at: string
        }
        Insert: {
          contact_name: string
          contact_role?: string
          created_at?: string
          email?: string | null
          facility_id: string
          id?: string
          is_primary?: boolean
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Update: {
          contact_name?: string
          contact_role?: string
          created_at?: string
          email?: string | null
          facility_id?: string
          id?: string
          is_primary?: boolean
          notes?: string | null
          phone?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_contacts_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_incidents: {
        Row: {
          created_at: string
          description: string
          facility_id: string
          follow_up_notes: string | null
          follow_up_required: boolean | null
          id: string
          immediate_actions: string | null
          incident_date: string
          incident_type: string
          location: string | null
          reported_by: string | null
          residents_involved: string[] | null
          reviewed_by: string | null
          severity: string
          staff_involved: string[] | null
          status: string
          updated_at: string
          witnesses: string | null
        }
        Insert: {
          created_at?: string
          description: string
          facility_id: string
          follow_up_notes?: string | null
          follow_up_required?: boolean | null
          id?: string
          immediate_actions?: string | null
          incident_date?: string
          incident_type: string
          location?: string | null
          reported_by?: string | null
          residents_involved?: string[] | null
          reviewed_by?: string | null
          severity?: string
          staff_involved?: string[] | null
          status?: string
          updated_at?: string
          witnesses?: string | null
        }
        Update: {
          created_at?: string
          description?: string
          facility_id?: string
          follow_up_notes?: string | null
          follow_up_required?: boolean | null
          id?: string
          immediate_actions?: string | null
          incident_date?: string
          incident_type?: string
          location?: string | null
          reported_by?: string | null
          residents_involved?: string[] | null
          reviewed_by?: string | null
          severity?: string
          staff_involved?: string[] | null
          status?: string
          updated_at?: string
          witnesses?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "facility_incidents_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_incidents_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_incidents_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_inspections: {
        Row: {
          checklist_items: Json | null
          completed_date: string | null
          corrective_actions: string | null
          created_at: string
          facility_id: string
          follow_up_date: string | null
          id: string
          inspection_type: string
          inspector_id: string | null
          issues_found: Json | null
          overall_rating: number | null
          photos: string[] | null
          resident_id: string | null
          room_number: string | null
          scheduled_date: string
          status: string
          updated_at: string
        }
        Insert: {
          checklist_items?: Json | null
          completed_date?: string | null
          corrective_actions?: string | null
          created_at?: string
          facility_id: string
          follow_up_date?: string | null
          id?: string
          inspection_type: string
          inspector_id?: string | null
          issues_found?: Json | null
          overall_rating?: number | null
          photos?: string[] | null
          resident_id?: string | null
          room_number?: string | null
          scheduled_date: string
          status?: string
          updated_at?: string
        }
        Update: {
          checklist_items?: Json | null
          completed_date?: string | null
          corrective_actions?: string | null
          created_at?: string
          facility_id?: string
          follow_up_date?: string | null
          id?: string
          inspection_type?: string
          inspector_id?: string | null
          issues_found?: Json | null
          overall_rating?: number | null
          photos?: string[] | null
          resident_id?: string | null
          room_number?: string | null
          scheduled_date?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_inspections_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_inspections_inspector_id_fkey"
            columns: ["inspector_id"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_inspections_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_permits: {
        Row: {
          created_at: string
          document_url: string | null
          expiry_date: string
          facility_id: string
          id: string
          issue_date: string | null
          issuing_authority: string | null
          notes: string | null
          permit_name: string
          permit_type: string
          renewal_reminder_days: number | null
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          document_url?: string | null
          expiry_date: string
          facility_id: string
          id?: string
          issue_date?: string | null
          issuing_authority?: string | null
          notes?: string | null
          permit_name: string
          permit_type: string
          renewal_reminder_days?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          document_url?: string | null
          expiry_date?: string
          facility_id?: string
          id?: string
          issue_date?: string | null
          issuing_authority?: string | null
          notes?: string | null
          permit_name?: string
          permit_type?: string
          renewal_reminder_days?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_permits_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_resources: {
        Row: {
          category: string | null
          created_at: string
          created_by: string | null
          description: string | null
          facility_id: string
          id: string
          is_active: boolean
          is_pinned: boolean
          resource_type: string
          thumbnail_url: string | null
          title: string
          updated_at: string
          url: string
        }
        Insert: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          facility_id: string
          id?: string
          is_active?: boolean
          is_pinned?: boolean
          resource_type?: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string
          url: string
        }
        Update: {
          category?: string | null
          created_at?: string
          created_by?: string | null
          description?: string | null
          facility_id?: string
          id?: string
          is_active?: boolean
          is_pinned?: boolean
          resource_type?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_resources_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_staff: {
        Row: {
          created_at: string
          facility_id: string
          hired_date: string | null
          id: string
          is_active: boolean | null
          notes: string | null
          permissions: Json | null
          role: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          facility_id: string
          hired_date?: string | null
          id?: string
          is_active?: boolean | null
          notes?: string | null
          permissions?: Json | null
          role: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          facility_id?: string
          hired_date?: string | null
          id?: string
          is_active?: boolean | null
          notes?: string | null
          permissions?: Json | null
          role?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_staff_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_staff_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_staff_invitations: {
        Row: {
          accepted_at: string | null
          created_at: string
          email: string
          expires_at: string
          facility_id: string
          id: string
          invited_by: string
          role: string
          staff_name: string | null
          status: string
          token: string
        }
        Insert: {
          accepted_at?: string | null
          created_at?: string
          email: string
          expires_at?: string
          facility_id: string
          id?: string
          invited_by: string
          role?: string
          staff_name?: string | null
          status?: string
          token?: string
        }
        Update: {
          accepted_at?: string | null
          created_at?: string
          email?: string
          expires_at?: string
          facility_id?: string
          id?: string
          invited_by?: string
          role?: string
          staff_name?: string | null
          status?: string
          token?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_staff_invitations_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_staff_invitations_invited_by_fkey"
            columns: ["invited_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      facility_visitor_logs: {
        Row: {
          approved_by: string | null
          check_in_time: string
          check_out_time: string | null
          created_at: string
          facility_id: string
          id: string
          notes: string | null
          photo_id_verified: boolean | null
          purpose: string | null
          relationship: string | null
          resident_id: string | null
          visit_date: string
          visitor_name: string
        }
        Insert: {
          approved_by?: string | null
          check_in_time: string
          check_out_time?: string | null
          created_at?: string
          facility_id: string
          id?: string
          notes?: string | null
          photo_id_verified?: boolean | null
          purpose?: string | null
          relationship?: string | null
          resident_id?: string | null
          visit_date?: string
          visitor_name: string
        }
        Update: {
          approved_by?: string | null
          check_in_time?: string
          check_out_time?: string | null
          created_at?: string
          facility_id?: string
          id?: string
          notes?: string | null
          photo_id_verified?: boolean | null
          purpose?: string | null
          relationship?: string | null
          resident_id?: string | null
          visit_date?: string
          visitor_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "facility_visitor_logs_approved_by_fkey"
            columns: ["approved_by"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_visitor_logs_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "facility_visitor_logs_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
        ]
      }
      family_beta_completion: {
        Row: {
          both_completed_at: string | null
          child_completed: boolean | null
          child_profile_id: string | null
          created_at: string | null
          family_completion_rank: number | null
          family_pioneer: boolean | null
          id: string
          parent_completed: boolean | null
          parent_user_id: string
          updated_at: string | null
        }
        Insert: {
          both_completed_at?: string | null
          child_completed?: boolean | null
          child_profile_id?: string | null
          created_at?: string | null
          family_completion_rank?: number | null
          family_pioneer?: boolean | null
          id?: string
          parent_completed?: boolean | null
          parent_user_id: string
          updated_at?: string | null
        }
        Update: {
          both_completed_at?: string | null
          child_completed?: boolean | null
          child_profile_id?: string | null
          created_at?: string | null
          family_completion_rank?: number | null
          family_pioneer?: boolean | null
          id?: string
          parent_completed?: boolean | null
          parent_user_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "family_beta_completion_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      family_chat_messages: {
        Row: {
          ai_intervention_shown: boolean | null
          child_profile_id: string | null
          created_at: string
          faex_terminology_used: string[] | null
          flagged_for_conflict: boolean | null
          group_members: string[] | null
          id: string
          is_group_message: boolean | null
          linked_moment_id: string | null
          linked_task_id: string | null
          message_text: string
          message_type: string | null
          original_message_text: string | null
          parent_profile_id: string | null
          read_at: string | null
          recipient_id: string | null
          recipient_mood_at_send: string | null
          reward_points_earned: number | null
          sender_id: string
          sender_mood_at_send: string | null
          thread_id: string | null
          tone_analysis: Json | null
          updated_at: string
          was_reframed: boolean | null
        }
        Insert: {
          ai_intervention_shown?: boolean | null
          child_profile_id?: string | null
          created_at?: string
          faex_terminology_used?: string[] | null
          flagged_for_conflict?: boolean | null
          group_members?: string[] | null
          id?: string
          is_group_message?: boolean | null
          linked_moment_id?: string | null
          linked_task_id?: string | null
          message_text: string
          message_type?: string | null
          original_message_text?: string | null
          parent_profile_id?: string | null
          read_at?: string | null
          recipient_id?: string | null
          recipient_mood_at_send?: string | null
          reward_points_earned?: number | null
          sender_id: string
          sender_mood_at_send?: string | null
          thread_id?: string | null
          tone_analysis?: Json | null
          updated_at?: string
          was_reframed?: boolean | null
        }
        Update: {
          ai_intervention_shown?: boolean | null
          child_profile_id?: string | null
          created_at?: string
          faex_terminology_used?: string[] | null
          flagged_for_conflict?: boolean | null
          group_members?: string[] | null
          id?: string
          is_group_message?: boolean | null
          linked_moment_id?: string | null
          linked_task_id?: string | null
          message_text?: string
          message_type?: string | null
          original_message_text?: string | null
          parent_profile_id?: string | null
          read_at?: string | null
          recipient_id?: string | null
          recipient_mood_at_send?: string | null
          reward_points_earned?: number | null
          sender_id?: string
          sender_mood_at_send?: string | null
          thread_id?: string | null
          tone_analysis?: Json | null
          updated_at?: string
          was_reframed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "family_chat_messages_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "family_chat_messages_parent_profile_id_fkey"
            columns: ["parent_profile_id"]
            isOneToOne: false
            referencedRelation: "parent_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      finance_categories: {
        Row: {
          class_id: number
          class_name: string
          created_at: string
          id: string
          sub_class_id1: number | null
          sub_class_name: string | null
        }
        Insert: {
          class_id: number
          class_name: string
          created_at?: string
          id?: string
          sub_class_id1?: number | null
          sub_class_name?: string | null
        }
        Update: {
          class_id?: number
          class_name?: string
          created_at?: string
          id?: string
          sub_class_id1?: number | null
          sub_class_name?: string | null
        }
        Relationships: []
      }
      financial_decision_logs: {
        Row: {
          ae_perspective: string | null
          ai_perspective: string | null
          blended_recommendation: string | null
          consequences_included: boolean | null
          created_at: string
          decision_made: string | null
          follow_up_notes: string | null
          id: string
          original_query: string
          potential_consequences: Json | null
          satisfaction_rating: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ae_perspective?: string | null
          ai_perspective?: string | null
          blended_recommendation?: string | null
          consequences_included?: boolean | null
          created_at?: string
          decision_made?: string | null
          follow_up_notes?: string | null
          id?: string
          original_query: string
          potential_consequences?: Json | null
          satisfaction_rating?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ae_perspective?: string | null
          ai_perspective?: string | null
          blended_recommendation?: string | null
          consequences_included?: boolean | null
          created_at?: string
          decision_made?: string | null
          follow_up_notes?: string | null
          id?: string
          original_query?: string
          potential_consequences?: Json | null
          satisfaction_rating?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      financial_profiles: {
        Row: {
          commitments: string | null
          created_at: string
          current_relationship_status: string | null
          dependents_count: number | null
          desires: string | null
          dream_car: string | null
          financial_goals: string | null
          id: string
          life_of_party: boolean | null
          likes_to_party: boolean | null
          money_perception: string | null
          must_haves: string | null
          needs_medical_dental: boolean | null
          preferred_shopping_locations: string | null
          updated_at: string
          user_id: string
          vacation_preference: string | null
        }
        Insert: {
          commitments?: string | null
          created_at?: string
          current_relationship_status?: string | null
          dependents_count?: number | null
          desires?: string | null
          dream_car?: string | null
          financial_goals?: string | null
          id?: string
          life_of_party?: boolean | null
          likes_to_party?: boolean | null
          money_perception?: string | null
          must_haves?: string | null
          needs_medical_dental?: boolean | null
          preferred_shopping_locations?: string | null
          updated_at?: string
          user_id: string
          vacation_preference?: string | null
        }
        Update: {
          commitments?: string | null
          created_at?: string
          current_relationship_status?: string | null
          dependents_count?: number | null
          desires?: string | null
          dream_car?: string | null
          financial_goals?: string | null
          id?: string
          life_of_party?: boolean | null
          likes_to_party?: boolean | null
          money_perception?: string | null
          must_haves?: string | null
          needs_medical_dental?: boolean | null
          preferred_shopping_locations?: string | null
          updated_at?: string
          user_id?: string
          vacation_preference?: string | null
        }
        Relationships: []
      }
      fire_circle_messages: {
        Row: {
          author_id: string | null
          author_name: string
          circle_id: string
          content: string
          created_at: string
          id: string
          message_type: string
        }
        Insert: {
          author_id?: string | null
          author_name?: string
          circle_id: string
          content: string
          created_at?: string
          id?: string
          message_type?: string
        }
        Update: {
          author_id?: string | null
          author_name?: string
          circle_id?: string
          content?: string
          created_at?: string
          id?: string
          message_type?: string
        }
        Relationships: []
      }
      form_categories: {
        Row: {
          created_at: string
          description: string | null
          display_order: number | null
          icon: string | null
          id: string
          is_active: boolean | null
          name: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon?: string | null
          id?: string
          is_active?: boolean | null
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      form_fields: {
        Row: {
          created_at: string
          display_order: number | null
          field_name: string
          field_type: string
          id: string
          label: string
          options: Json | null
          placeholder: string | null
          required: boolean | null
          section: string | null
          template_id: string | null
          validation_rules: Json | null
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          field_name: string
          field_type: string
          id?: string
          label: string
          options?: Json | null
          placeholder?: string | null
          required?: boolean | null
          section?: string | null
          template_id?: string | null
          validation_rules?: Json | null
        }
        Update: {
          created_at?: string
          display_order?: number | null
          field_name?: string
          field_type?: string
          id?: string
          label?: string
          options?: Json | null
          placeholder?: string | null
          required?: boolean | null
          section?: string | null
          template_id?: string | null
          validation_rules?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "form_fields_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "form_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      form_submissions: {
        Row: {
          client_id: string | null
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          exported_at: string | null
          exported_formats: Json | null
          form_data: Json
          generated_structure: Json | null
          id: string
          metadata: Json | null
          project_id: string | null
          status: string | null
          template_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          client_id?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          exported_at?: string | null
          exported_formats?: Json | null
          form_data?: Json
          generated_structure?: Json | null
          id?: string
          metadata?: Json | null
          project_id?: string | null
          status?: string | null
          template_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          client_id?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          exported_at?: string | null
          exported_formats?: Json | null
          form_data?: Json
          generated_structure?: Json | null
          id?: string
          metadata?: Json | null
          project_id?: string | null
          status?: string | null
          template_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_submissions_template_id_fkey"
            columns: ["template_id"]
            isOneToOne: false
            referencedRelation: "form_templates"
            referencedColumns: ["id"]
          },
        ]
      }
      form_template_requests: {
        Row: {
          admin_notes: string | null
          category_id: string | null
          created_at: string | null
          description: string | null
          id: string
          priority: string | null
          requested_name: string
          status: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          admin_notes?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string | null
          requested_name: string
          status?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          admin_notes?: string | null
          category_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          priority?: string | null
          requested_name?: string
          status?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "form_template_requests_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "form_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      form_templates: {
        Row: {
          base_structure: Json | null
          category_id: string | null
          complexity_level: string | null
          cpr_context_prompt: string | null
          cpr_purpose_prompt: string | null
          cpr_result_prompt: string | null
          created_at: string
          description: string | null
          id: string
          industry_category: string | null
          is_active: boolean | null
          name: string
          pmi_data_sources: Json | null
          required_cpr_fields: Json | null
          required_fields: Json | null
          updated_at: string
          validation_rules: Json | null
        }
        Insert: {
          base_structure?: Json | null
          category_id?: string | null
          complexity_level?: string | null
          cpr_context_prompt?: string | null
          cpr_purpose_prompt?: string | null
          cpr_result_prompt?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry_category?: string | null
          is_active?: boolean | null
          name: string
          pmi_data_sources?: Json | null
          required_cpr_fields?: Json | null
          required_fields?: Json | null
          updated_at?: string
          validation_rules?: Json | null
        }
        Update: {
          base_structure?: Json | null
          category_id?: string | null
          complexity_level?: string | null
          cpr_context_prompt?: string | null
          cpr_purpose_prompt?: string | null
          cpr_result_prompt?: string | null
          created_at?: string
          description?: string | null
          id?: string
          industry_category?: string | null
          is_active?: boolean | null
          name?: string
          pmi_data_sources?: Json | null
          required_cpr_fields?: Json | null
          required_fields?: Json | null
          updated_at?: string
          validation_rules?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "form_templates_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "form_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      free_chat_usage: {
        Row: {
          created_at: string | null
          id: string
          last_reset_date: string | null
          prompts_used: number | null
          updated_at: string | null
          user_identifier: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_reset_date?: string | null
          prompts_used?: number | null
          updated_at?: string | null
          user_identifier: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_reset_date?: string | null
          prompts_used?: number | null
          updated_at?: string | null
          user_identifier?: string
        }
        Relationships: []
      }
      friend_advice_logs: {
        Row: {
          advice_category: string | null
          ai_advice: string
          created_at: string
          friend_id: string | null
          id: string
          situation_description: string
          user_id: string
          was_helpful: boolean | null
        }
        Insert: {
          advice_category?: string | null
          ai_advice: string
          created_at?: string
          friend_id?: string | null
          id?: string
          situation_description: string
          user_id: string
          was_helpful?: boolean | null
        }
        Update: {
          advice_category?: string | null
          ai_advice?: string
          created_at?: string
          friend_id?: string | null
          id?: string
          situation_description?: string
          user_id?: string
          was_helpful?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "friend_advice_logs_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "friend_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_conversation_starters: {
        Row: {
          created_at: string
          friend_id: string | null
          id: string
          starter_text: string
          topic_category: string | null
          user_id: string
          was_used: boolean | null
        }
        Insert: {
          created_at?: string
          friend_id?: string | null
          id?: string
          starter_text: string
          topic_category?: string | null
          user_id: string
          was_used?: boolean | null
        }
        Update: {
          created_at?: string
          friend_id?: string | null
          id?: string
          starter_text?: string
          topic_category?: string | null
          user_id?: string
          was_used?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "friend_conversation_starters_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "friend_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_message_refinements: {
        Row: {
          ai_feedback: string | null
          context_description: string | null
          created_at: string
          friend_id: string | null
          id: string
          original_message: string
          refined_message: string | null
          updated_at: string
          user_id: string
          was_used: boolean | null
        }
        Insert: {
          ai_feedback?: string | null
          context_description?: string | null
          created_at?: string
          friend_id?: string | null
          id?: string
          original_message: string
          refined_message?: string | null
          updated_at?: string
          user_id: string
          was_used?: boolean | null
        }
        Update: {
          ai_feedback?: string | null
          context_description?: string | null
          created_at?: string
          friend_id?: string | null
          id?: string
          original_message?: string
          refined_message?: string | null
          updated_at?: string
          user_id?: string
          was_used?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "friend_message_refinements_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "friend_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_private_journals: {
        Row: {
          created_at: string
          entry_content: string
          entry_type: string | null
          friend_id: string | null
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entry_content: string
          entry_type?: string | null
          friend_id?: string | null
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entry_content?: string
          entry_type?: string | null
          friend_id?: string | null
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friend_private_journals_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "friend_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      friend_profiles: {
        Row: {
          created_at: string
          friend_name: string
          hobbies_and_interests: string[] | null
          id: string
          personality_traits: string[] | null
          relationship_notes: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          friend_name: string
          hobbies_and_interests?: string[] | null
          id?: string
          personality_traits?: string[] | null
          relationship_notes?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          friend_name?: string
          hobbies_and_interests?: string[] | null
          id?: string
          personality_traits?: string[] | null
          relationship_notes?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      friend_relationship_metrics: {
        Row: {
          conflict_entries: number | null
          created_at: string
          friend_id: string
          health_score: number | null
          id: string
          last_interaction_date: string | null
          positive_interactions: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          conflict_entries?: number | null
          created_at?: string
          friend_id: string
          health_score?: number | null
          id?: string
          last_interaction_date?: string | null
          positive_interactions?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          conflict_entries?: number | null
          created_at?: string
          friend_id?: string
          health_score?: number | null
          id?: string
          last_interaction_date?: string | null
          positive_interactions?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "friend_relationship_metrics_friend_id_fkey"
            columns: ["friend_id"]
            isOneToOne: false
            referencedRelation: "friend_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      guardian_notifications: {
        Row: {
          agreement_id: string | null
          child_profile_id: string
          created_at: string | null
          guardian_user_id: string
          id: string
          message: string
          notification_type: string
          read: boolean | null
          task_id: string | null
        }
        Insert: {
          agreement_id?: string | null
          child_profile_id: string
          created_at?: string | null
          guardian_user_id: string
          id?: string
          message: string
          notification_type: string
          read?: boolean | null
          task_id?: string | null
        }
        Update: {
          agreement_id?: string | null
          child_profile_id?: string
          created_at?: string | null
          guardian_user_id?: string
          id?: string
          message?: string
          notification_type?: string
          read?: boolean | null
          task_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "guardian_notifications_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "child_express_agreements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guardian_notifications_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "guardian_notifications_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "child_delegated_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      help_articles: {
        Row: {
          category: string
          content: string
          created_at: string
          id: string
          is_published: boolean
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          id?: string
          is_published?: boolean
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          id?: string
          is_published?: boolean
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      housing_residents: {
        Row: {
          actual_discharge_date: string | null
          admission_date: string
          ae_profile: Json | null
          ai_profile: Json | null
          compatibility_answers: Json | null
          compliance_score: number | null
          created_at: string
          emergency_contact: Json | null
          facility_id: string
          financial_housing: Json | null
          i_profile: Json | null
          id: string
          last_activity_at: string | null
          medical_notes: string | null
          onboarding_completed: boolean | null
          onboarding_completed_at: string | null
          personal_info: Json | null
          residency_status: string
          risk_level: string | null
          room_number: string | null
          special_requirements: string | null
          target_discharge_date: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          actual_discharge_date?: string | null
          admission_date?: string
          ae_profile?: Json | null
          ai_profile?: Json | null
          compatibility_answers?: Json | null
          compliance_score?: number | null
          created_at?: string
          emergency_contact?: Json | null
          facility_id: string
          financial_housing?: Json | null
          i_profile?: Json | null
          id?: string
          last_activity_at?: string | null
          medical_notes?: string | null
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          personal_info?: Json | null
          residency_status?: string
          risk_level?: string | null
          room_number?: string | null
          special_requirements?: string | null
          target_discharge_date?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          actual_discharge_date?: string | null
          admission_date?: string
          ae_profile?: Json | null
          ai_profile?: Json | null
          compatibility_answers?: Json | null
          compliance_score?: number | null
          created_at?: string
          emergency_contact?: Json | null
          facility_id?: string
          financial_housing?: Json | null
          i_profile?: Json | null
          id?: string
          last_activity_at?: string | null
          medical_notes?: string | null
          onboarding_completed?: boolean | null
          onboarding_completed_at?: string | null
          personal_info?: Json | null
          residency_status?: string
          risk_level?: string | null
          room_number?: string | null
          special_requirements?: string | null
          target_discharge_date?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "housing_residents_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "housing_residents_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      hydration_goals: {
        Row: {
          created_at: string
          daily_goal_ml: number
          daily_goal_oz: number | null
          goal_basis: string | null
          id: string
          pmi_recommended_ml: number | null
          reminder_enabled: boolean
          reminder_interval_minutes: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          daily_goal_ml?: number
          daily_goal_oz?: number | null
          goal_basis?: string | null
          id?: string
          pmi_recommended_ml?: number | null
          reminder_enabled?: boolean
          reminder_interval_minutes?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          daily_goal_ml?: number
          daily_goal_oz?: number | null
          goal_basis?: string | null
          id?: string
          pmi_recommended_ml?: number | null
          reminder_enabled?: boolean
          reminder_interval_minutes?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      hydration_logs: {
        Row: {
          amount_ml: number
          amount_oz: number | null
          calendar_event_id: string | null
          created_at: string
          id: string
          liquid_type: string
          logged_at: string
          net_hydration_score: number
          notes: string | null
          user_id: string
        }
        Insert: {
          amount_ml: number
          amount_oz?: number | null
          calendar_event_id?: string | null
          created_at?: string
          id?: string
          liquid_type?: string
          logged_at?: string
          net_hydration_score?: number
          notes?: string | null
          user_id: string
        }
        Update: {
          amount_ml?: number
          amount_oz?: number | null
          calendar_event_id?: string | null
          created_at?: string
          id?: string
          liquid_type?: string
          logged_at?: string
          net_hydration_score?: number
          notes?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "hydration_logs_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
        ]
      }
      inbound_email_routes: {
        Row: {
          address: string
          created_at: string
          id: string
          label: string | null
          user_id: string
        }
        Insert: {
          address: string
          created_at?: string
          id?: string
          label?: string | null
          user_id: string
        }
        Update: {
          address?: string
          created_at?: string
          id?: string
          label?: string | null
          user_id?: string
        }
        Relationships: []
      }
      incident_reports: {
        Row: {
          ae_analysis: Json | null
          attachments: Json | null
          created_at: string
          facility_id: string
          follow_up_date: string | null
          follow_up_notes: string | null
          follow_up_required: boolean | null
          id: string
          incident_date: string
          incident_description: string
          incident_time: string | null
          incident_type: string
          involved_residents: Json
          involved_staff: Json | null
          location: string | null
          mediation_approach: string | null
          mediation_script: string | null
          pmi_translation: string | null
          reported_by: string
          resolution_notes: string | null
          resolution_status: string
          resolved_at: string | null
          resolved_by: string | null
          severity: string
          updated_at: string
        }
        Insert: {
          ae_analysis?: Json | null
          attachments?: Json | null
          created_at?: string
          facility_id: string
          follow_up_date?: string | null
          follow_up_notes?: string | null
          follow_up_required?: boolean | null
          id?: string
          incident_date?: string
          incident_description: string
          incident_time?: string | null
          incident_type: string
          involved_residents?: Json
          involved_staff?: Json | null
          location?: string | null
          mediation_approach?: string | null
          mediation_script?: string | null
          pmi_translation?: string | null
          reported_by: string
          resolution_notes?: string | null
          resolution_status?: string
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          updated_at?: string
        }
        Update: {
          ae_analysis?: Json | null
          attachments?: Json | null
          created_at?: string
          facility_id?: string
          follow_up_date?: string | null
          follow_up_notes?: string | null
          follow_up_required?: boolean | null
          id?: string
          incident_date?: string
          incident_description?: string
          incident_time?: string | null
          incident_type?: string
          involved_residents?: Json
          involved_staff?: Json | null
          location?: string | null
          mediation_approach?: string | null
          mediation_script?: string | null
          pmi_translation?: string | null
          reported_by?: string
          resolution_notes?: string | null
          resolution_status?: string
          resolved_at?: string | null
          resolved_by?: string | null
          severity?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "incident_reports_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incident_reports_reported_by_fkey"
            columns: ["reported_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "incident_reports_resolved_by_fkey"
            columns: ["resolved_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      income_entries: {
        Row: {
          amount: number
          created_at: string
          description: string | null
          id: string
          received_date: string
          session_id: string | null
          source: string | null
          user_id: string
        }
        Insert: {
          amount: number
          created_at?: string
          description?: string | null
          id?: string
          received_date?: string
          session_id?: string | null
          source?: string | null
          user_id: string
        }
        Update: {
          amount?: number
          created_at?: string
          description?: string | null
          id?: string
          received_date?: string
          session_id?: string | null
          source?: string | null
          user_id?: string
        }
        Relationships: []
      }
      inventory_logistics: {
        Row: {
          case_cost: number | null
          created_at: string
          id: string
          item_description: string
          pallet_count: number | null
          property_id: string
          total_weight: number | null
          upc: string | null
          updated_at: string
        }
        Insert: {
          case_cost?: number | null
          created_at?: string
          id?: string
          item_description: string
          pallet_count?: number | null
          property_id: string
          total_weight?: number | null
          upc?: string | null
          updated_at?: string
        }
        Update: {
          case_cost?: number | null
          created_at?: string
          id?: string
          item_description?: string
          pallet_count?: number | null
          property_id?: string
          total_weight?: number | null
          upc?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "inventory_logistics_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "inventory_logistics_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      investment_reports: {
        Row: {
          aex_alignment_score: number | null
          created_at: string | null
          financial_analysis: Json
          full_report_markdown: string
          id: string
          market_analysis: Json
          property_address: string
          property_data: Json
          recommendation: string
          report_type: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          aex_alignment_score?: number | null
          created_at?: string | null
          financial_analysis: Json
          full_report_markdown: string
          id?: string
          market_analysis: Json
          property_address: string
          property_data: Json
          recommendation: string
          report_type: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          aex_alignment_score?: number | null
          created_at?: string | null
          financial_analysis?: Json
          full_report_markdown?: string
          id?: string
          market_analysis?: Json
          property_address?: string
          property_data?: Json
          recommendation?: string
          report_type?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      investor_feature_favorites: {
        Row: {
          created_at: string | null
          feature_title: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          feature_title: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          feature_title?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      investor_onboarding_data: {
        Row: {
          completed_at: string | null
          created_at: string | null
          demo_scenario_data: Json | null
          demo_scenario_generated: boolean | null
          financial_goals: string
          id: string
          investment_strategy: string
          personal_experience: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string | null
          demo_scenario_data?: Json | null
          demo_scenario_generated?: boolean | null
          financial_goals: string
          id?: string
          investment_strategy: string
          personal_experience?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string | null
          demo_scenario_data?: Json | null
          demo_scenario_generated?: boolean | null
          financial_goals?: string
          id?: string
          investment_strategy?: string
          personal_experience?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      investor_onboarding_progress: {
        Row: {
          accreditation_status: string | null
          additional_notes: string | null
          company_affiliation: string | null
          completed_at: string | null
          created_at: string | null
          id: string
          investment_interest: string | null
          investment_range: string | null
          nda_signed: boolean | null
          questionnaire_completed: boolean | null
          referral_source: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          accreditation_status?: string | null
          additional_notes?: string | null
          company_affiliation?: string | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          investment_interest?: string | null
          investment_range?: string | null
          nda_signed?: boolean | null
          questionnaire_completed?: boolean | null
          referral_source?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          accreditation_status?: string | null
          additional_notes?: string | null
          company_affiliation?: string | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          investment_interest?: string | null
          investment_range?: string | null
          nda_signed?: boolean | null
          questionnaire_completed?: boolean | null
          referral_source?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      investor_profiles: {
        Row: {
          access_to_help_network: string | null
          available_capital: number | null
          construction_diy_knowledge_level: string | null
          created_at: string
          desired_roi_percent: number | null
          id: string
          investment_goals: string | null
          risk_tolerance: string | null
          time_commitment_per_week: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_to_help_network?: string | null
          available_capital?: number | null
          construction_diy_knowledge_level?: string | null
          created_at?: string
          desired_roi_percent?: number | null
          id?: string
          investment_goals?: string | null
          risk_tolerance?: string | null
          time_commitment_per_week?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_to_help_network?: string | null
          available_capital?: number | null
          construction_diy_knowledge_level?: string | null
          created_at?: string
          desired_roi_percent?: number | null
          id?: string
          investment_goals?: string | null
          risk_tolerance?: string | null
          time_commitment_per_week?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "investor_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      jv_partners: {
        Row: {
          created_at: string
          equity_percentage: number | null
          id: string
          initial_investment: number | null
          partner_email: string | null
          partner_name: string | null
          partner_user_id: string
          preferred_return: number | null
          property_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          equity_percentage?: number | null
          id?: string
          initial_investment?: number | null
          partner_email?: string | null
          partner_name?: string | null
          partner_user_id: string
          preferred_return?: number | null
          property_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          equity_percentage?: number | null
          id?: string
          initial_investment?: number | null
          partner_email?: string | null
          partner_name?: string | null
          partner_user_id?: string
          preferred_return?: number | null
          property_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "jv_partners_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "jv_partners_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      meal_logs: {
        Row: {
          ai_analysis: Json | null
          ai_nutritional_category: string | null
          beverage_alcoholic: boolean | null
          beverage_type: string | null
          calendar_event_id: string | null
          consumption_time: string | null
          cost_usd: number | null
          created_at: string
          current_mood_score: number | null
          food_description: string
          id: string
          location_latitude: number | null
          location_longitude: number | null
          location_name: string | null
          logged_at: string
          meal_type: string
          media_urls: string[] | null
          mood_snapshot: string | null
          notes: string | null
          preparation_method: string
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          ai_nutritional_category?: string | null
          beverage_alcoholic?: boolean | null
          beverage_type?: string | null
          calendar_event_id?: string | null
          consumption_time?: string | null
          cost_usd?: number | null
          created_at?: string
          current_mood_score?: number | null
          food_description: string
          id?: string
          location_latitude?: number | null
          location_longitude?: number | null
          location_name?: string | null
          logged_at?: string
          meal_type: string
          media_urls?: string[] | null
          mood_snapshot?: string | null
          notes?: string | null
          preparation_method: string
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json | null
          ai_nutritional_category?: string | null
          beverage_alcoholic?: boolean | null
          beverage_type?: string | null
          calendar_event_id?: string | null
          consumption_time?: string | null
          cost_usd?: number | null
          created_at?: string
          current_mood_score?: number | null
          food_description?: string
          id?: string
          location_latitude?: number | null
          location_longitude?: number | null
          location_name?: string | null
          logged_at?: string
          meal_type?: string
          media_urls?: string[] | null
          mood_snapshot?: string | null
          notes?: string | null
          preparation_method?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "meal_logs_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
        ]
      }
      media_accounts: {
        Row: {
          access_token: string | null
          account_avatar_url: string | null
          account_display_name: string | null
          account_username: string | null
          connected_at: string
          created_at: string
          expires_at: string | null
          id: string
          is_active: boolean
          platform: string
          platform_user_id: string | null
          refresh_token: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          access_token?: string | null
          account_avatar_url?: string | null
          account_display_name?: string | null
          account_username?: string | null
          connected_at?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          platform: string
          platform_user_id?: string | null
          refresh_token?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          access_token?: string | null
          account_avatar_url?: string | null
          account_display_name?: string | null
          account_username?: string | null
          connected_at?: string
          created_at?: string
          expires_at?: string | null
          id?: string
          is_active?: boolean
          platform?: string
          platform_user_id?: string | null
          refresh_token?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_accounts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_curation_settings: {
        Row: {
          auto_hide_negative: boolean
          blocked_keywords: string[] | null
          content_types: string[]
          created_at: string
          daily_content_limit: number | null
          filter_sensitivity: number
          id: string
          preferred_sources: string[] | null
          prioritize_goals: boolean
          updated_at: string
          user_id: string
        }
        Insert: {
          auto_hide_negative?: boolean
          blocked_keywords?: string[] | null
          content_types?: string[]
          created_at?: string
          daily_content_limit?: number | null
          filter_sensitivity?: number
          id?: string
          preferred_sources?: string[] | null
          prioritize_goals?: boolean
          updated_at?: string
          user_id: string
        }
        Update: {
          auto_hide_negative?: boolean
          blocked_keywords?: string[] | null
          content_types?: string[]
          created_at?: string
          daily_content_limit?: number | null
          filter_sensitivity?: number
          id?: string
          preferred_sources?: string[] | null
          prioritize_goals?: boolean
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_curation_settings_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      media_feed: {
        Row: {
          ai_curation_score: number | null
          content: Json
          created_at: string
          curated_at: string
          goal_alignment: string[] | null
          id: string
          interaction_type: string | null
          is_filtered_out: boolean
          mood_alignment: string | null
          personality_notes: string | null
          platform: string
          user_feedback: string | null
          user_id: string
        }
        Insert: {
          ai_curation_score?: number | null
          content?: Json
          created_at?: string
          curated_at?: string
          goal_alignment?: string[] | null
          id?: string
          interaction_type?: string | null
          is_filtered_out?: boolean
          mood_alignment?: string | null
          personality_notes?: string | null
          platform: string
          user_feedback?: string | null
          user_id: string
        }
        Update: {
          ai_curation_score?: number | null
          content?: Json
          created_at?: string
          curated_at?: string
          goal_alignment?: string[] | null
          id?: string
          interaction_type?: string | null
          is_filtered_out?: boolean
          mood_alignment?: string | null
          personality_notes?: string | null
          platform?: string
          user_feedback?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "media_feed_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      message_analysis: {
        Row: {
          ae_suggestion: string | null
          ai_suggestion: string | null
          blended_message: string | null
          created_at: string
          detected_tone: string | null
          guidance_text: string | null
          id: string
          original_message_id: string
          original_text: string
          recipient_context: Json | null
          recipient_id: string
          user_id: string
        }
        Insert: {
          ae_suggestion?: string | null
          ai_suggestion?: string | null
          blended_message?: string | null
          created_at?: string
          detected_tone?: string | null
          guidance_text?: string | null
          id?: string
          original_message_id: string
          original_text: string
          recipient_context?: Json | null
          recipient_id: string
          user_id: string
        }
        Update: {
          ae_suggestion?: string | null
          ai_suggestion?: string | null
          blended_message?: string | null
          created_at?: string
          detected_tone?: string | null
          guidance_text?: string | null
          id?: string
          original_message_id?: string
          original_text?: string
          recipient_context?: Json | null
          recipient_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_analysis_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "message_analysis_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      message_inbox: {
        Row: {
          body: string
          channel: string
          contact_id: string | null
          created_at: string
          direction: string
          external_id: string | null
          from_address: string | null
          id: string
          read: boolean
          subject: string | null
          to_address: string | null
          user_id: string
        }
        Insert: {
          body: string
          channel: string
          contact_id?: string | null
          created_at?: string
          direction?: string
          external_id?: string | null
          from_address?: string | null
          id?: string
          read?: boolean
          subject?: string | null
          to_address?: string | null
          user_id: string
        }
        Update: {
          body?: string
          channel?: string
          contact_id?: string | null
          created_at?: string
          direction?: string
          external_id?: string | null
          from_address?: string | null
          id?: string
          read?: boolean
          subject?: string | null
          to_address?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_inbox_contact_id_fkey"
            columns: ["contact_id"]
            isOneToOne: false
            referencedRelation: "contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      message_labels: {
        Row: {
          created_at: string
          id: string
          label: Json
          message_id: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          label?: Json
          message_id?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          label?: Json
          message_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_labels_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      message_tone_alerts: {
        Row: {
          ai_reframe_suggestion: string | null
          ai_suggestion: string | null
          alert_type: string
          created_at: string
          dismissed: boolean | null
          id: string
          message_id: string | null
          recipient_mood_context: string | null
          sender_id: string
          severity_level: string | null
          tone_indicators: Json | null
          user_action: string | null
        }
        Insert: {
          ai_reframe_suggestion?: string | null
          ai_suggestion?: string | null
          alert_type: string
          created_at?: string
          dismissed?: boolean | null
          id?: string
          message_id?: string | null
          recipient_mood_context?: string | null
          sender_id: string
          severity_level?: string | null
          tone_indicators?: Json | null
          user_action?: string | null
        }
        Update: {
          ai_reframe_suggestion?: string | null
          ai_suggestion?: string | null
          alert_type?: string
          created_at?: string
          dismissed?: boolean | null
          id?: string
          message_id?: string | null
          recipient_mood_context?: string | null
          sender_id?: string
          severity_level?: string | null
          tone_indicators?: Json | null
          user_action?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "message_tone_alerts_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "communication_history_view"
            referencedColumns: ["message_id"]
          },
          {
            foreignKeyName: "message_tone_alerts_message_id_fkey"
            columns: ["message_id"]
            isOneToOne: false
            referencedRelation: "family_chat_messages"
            referencedColumns: ["id"]
          },
        ]
      }
      message_training_feedback: {
        Row: {
          communication_log_id: string | null
          corrected_message: string
          created_at: string
          feedback_notes: string | null
          feedback_type: string
          helpful_rating: number | null
          id: string
          original_suggestion: string
          updated_at: string
          user_id: string
        }
        Insert: {
          communication_log_id?: string | null
          corrected_message: string
          created_at?: string
          feedback_notes?: string | null
          feedback_type: string
          helpful_rating?: number | null
          id?: string
          original_suggestion: string
          updated_at?: string
          user_id: string
        }
        Update: {
          communication_log_id?: string | null
          corrected_message?: string
          created_at?: string
          feedback_notes?: string | null
          feedback_type?: string
          helpful_rating?: number | null
          id?: string
          original_suggestion?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "message_training_feedback_communication_log_id_fkey"
            columns: ["communication_log_id"]
            isOneToOne: false
            referencedRelation: "communication_logs"
            referencedColumns: ["id"]
          },
        ]
      }
      mimic_feedback_logs: {
        Row: {
          activity_context: string | null
          created_at: string | null
          feedback_text: string | null
          helpfulness_score: number | null
          id: string
          media_name: string
          media_type: string
          media_url: string | null
          mood_after: string | null
          mood_before: string | null
          rating: number | null
          user_id: string
        }
        Insert: {
          activity_context?: string | null
          created_at?: string | null
          feedback_text?: string | null
          helpfulness_score?: number | null
          id?: string
          media_name: string
          media_type: string
          media_url?: string | null
          mood_after?: string | null
          mood_before?: string | null
          rating?: number | null
          user_id: string
        }
        Update: {
          activity_context?: string | null
          created_at?: string | null
          feedback_text?: string | null
          helpfulness_score?: number | null
          id?: string
          media_name?: string
          media_type?: string
          media_url?: string | null
          mood_after?: string | null
          mood_before?: string | null
          rating?: number | null
          user_id?: string
        }
        Relationships: []
      }
      mimic_recommendations_log: {
        Row: {
          ai_explanation: string | null
          created_at: string | null
          id: string
          recommendation_context: Json | null
          recommended_media_name: string
          recommended_media_type: string
          recommended_media_url: string | null
          updated_at: string | null
          user_goal: string | null
          user_id: string
          user_mood: string | null
          user_rating: number | null
          was_used: boolean | null
        }
        Insert: {
          ai_explanation?: string | null
          created_at?: string | null
          id?: string
          recommendation_context?: Json | null
          recommended_media_name: string
          recommended_media_type: string
          recommended_media_url?: string | null
          updated_at?: string | null
          user_goal?: string | null
          user_id: string
          user_mood?: string | null
          user_rating?: number | null
          was_used?: boolean | null
        }
        Update: {
          ai_explanation?: string | null
          created_at?: string | null
          id?: string
          recommendation_context?: Json | null
          recommended_media_name?: string
          recommended_media_type?: string
          recommended_media_url?: string | null
          updated_at?: string | null
          user_goal?: string | null
          user_id?: string
          user_mood?: string | null
          user_rating?: number | null
          was_used?: boolean | null
        }
        Relationships: []
      }
      mimic_settings: {
        Row: {
          auto_recommendations: boolean | null
          created_at: string | null
          id: string
          preferred_energy_audio_type: string | null
          preferred_focus_media_type: string | null
          preferred_media_platforms: string[] | null
          preferred_relaxation_audio_type: string | null
          preferred_video_type: string | null
          updated_at: string | null
          user_id: string
          volume_preference: number | null
        }
        Insert: {
          auto_recommendations?: boolean | null
          created_at?: string | null
          id?: string
          preferred_energy_audio_type?: string | null
          preferred_focus_media_type?: string | null
          preferred_media_platforms?: string[] | null
          preferred_relaxation_audio_type?: string | null
          preferred_video_type?: string | null
          updated_at?: string | null
          user_id: string
          volume_preference?: number | null
        }
        Update: {
          auto_recommendations?: boolean | null
          created_at?: string | null
          id?: string
          preferred_energy_audio_type?: string | null
          preferred_focus_media_type?: string | null
          preferred_media_platforms?: string[] | null
          preferred_relaxation_audio_type?: string | null
          preferred_video_type?: string | null
          updated_at?: string | null
          user_id?: string
          volume_preference?: number | null
        }
        Relationships: []
      }
      mind_maps: {
        Row: {
          created_at: string
          data: Json
          id: string
          linked_blueprint_id: string | null
          name: string
          project_id: string | null
          source_questionnaire_id: string | null
          status: string
          updated_at: string
          user_id: string
          workspace_id: string | null
        }
        Insert: {
          created_at?: string
          data?: Json
          id?: string
          linked_blueprint_id?: string | null
          name?: string
          project_id?: string | null
          source_questionnaire_id?: string | null
          status?: string
          updated_at?: string
          user_id: string
          workspace_id?: string | null
        }
        Update: {
          created_at?: string
          data?: Json
          id?: string
          linked_blueprint_id?: string | null
          name?: string
          project_id?: string | null
          source_questionnaire_id?: string | null
          status?: string
          updated_at?: string
          user_id?: string
          workspace_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mind_maps_linked_blueprint_id_fkey"
            columns: ["linked_blueprint_id"]
            isOneToOne: false
            referencedRelation: "blueprints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_maps_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_maps_source_questionnaire_id_fkey"
            columns: ["source_questionnaire_id"]
            isOneToOne: false
            referencedRelation: "client_questionnaires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mind_maps_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      module_assignments: {
        Row: {
          assigned_by_professional_id: string
          client_id: string
          completed_at: string | null
          created_at: string
          id: string
          last_accessed_at: string | null
          module_id: string
          progress_percentage: number | null
          status: string
          updated_at: string
        }
        Insert: {
          assigned_by_professional_id: string
          client_id: string
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed_at?: string | null
          module_id: string
          progress_percentage?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          assigned_by_professional_id?: string
          client_id?: string
          completed_at?: string | null
          created_at?: string
          id?: string
          last_accessed_at?: string | null
          module_id?: string
          progress_percentage?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "module_assignments_assigned_by_professional_id_fkey"
            columns: ["assigned_by_professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_assignments_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "module_assignments_module_id_fkey"
            columns: ["module_id"]
            isOneToOne: false
            referencedRelation: "modules"
            referencedColumns: ["id"]
          },
        ]
      }
      modules: {
        Row: {
          category: string | null
          content_json: Json
          created_at: string
          created_by_professional_id: string | null
          description: string | null
          estimated_duration: number | null
          id: string
          is_public: boolean
          title: string
          updated_at: string
        }
        Insert: {
          category?: string | null
          content_json?: Json
          created_at?: string
          created_by_professional_id?: string | null
          description?: string | null
          estimated_duration?: number | null
          id?: string
          is_public?: boolean
          title: string
          updated_at?: string
        }
        Update: {
          category?: string | null
          content_json?: Json
          created_at?: string
          created_by_professional_id?: string | null
          description?: string | null
          estimated_duration?: number | null
          id?: string
          is_public?: boolean
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "modules_created_by_professional_id_fkey"
            columns: ["created_by_professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      moment_consequences: {
        Row: {
          category: string
          consequence_description: string
          created_at: string | null
          id: string
          last_reminded_at: string | null
          lesson_learned: string | null
          moment_id: string
          next_reminder_date: string | null
          reminder_enabled: boolean | null
          reminder_frequency: string | null
          severity_level: number
          updated_at: string | null
          user_id: string
        }
        Insert: {
          category: string
          consequence_description: string
          created_at?: string | null
          id?: string
          last_reminded_at?: string | null
          lesson_learned?: string | null
          moment_id: string
          next_reminder_date?: string | null
          reminder_enabled?: boolean | null
          reminder_frequency?: string | null
          severity_level: number
          updated_at?: string | null
          user_id: string
        }
        Update: {
          category?: string
          consequence_description?: string
          created_at?: string | null
          id?: string
          last_reminded_at?: string | null
          lesson_learned?: string | null
          moment_id?: string
          next_reminder_date?: string | null
          reminder_enabled?: boolean | null
          reminder_frequency?: string | null
          severity_level?: number
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "moment_consequences_moment_id_fkey"
            columns: ["moment_id"]
            isOneToOne: false
            referencedRelation: "personality_moments"
            referencedColumns: ["id"]
          },
        ]
      }
      mood_locations: {
        Row: {
          activity: string
          created_at: string
          id: string
          latitude: number
          location_data: Json
          longitude: number
          mood_score: number
          notes: string | null
          recorded_at: string
          user_id: string
        }
        Insert: {
          activity: string
          created_at?: string
          id?: string
          latitude: number
          location_data?: Json
          longitude: number
          mood_score: number
          notes?: string | null
          recorded_at?: string
          user_id: string
        }
        Update: {
          activity?: string
          created_at?: string
          id?: string
          latitude?: number
          location_data?: Json
          longitude?: number
          mood_score?: number
          notes?: string | null
          recorded_at?: string
          user_id?: string
        }
        Relationships: []
      }
      mood_recovery_sessions: {
        Row: {
          all_steps_completed: boolean | null
          biological_data: Json | null
          business_data: Json | null
          coins_awarded: number | null
          created_at: string
          emotional_data: Json | null
          id: string
          initial_mood: number
          post_recovery_mood: number | null
          step_1_biological: Json | null
          step_2_emotional: Json | null
          step_3_movement: Json | null
          trigger_type: string
          triggering_checkin_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          all_steps_completed?: boolean | null
          biological_data?: Json | null
          business_data?: Json | null
          coins_awarded?: number | null
          created_at?: string
          emotional_data?: Json | null
          id?: string
          initial_mood: number
          post_recovery_mood?: number | null
          step_1_biological?: Json | null
          step_2_emotional?: Json | null
          step_3_movement?: Json | null
          trigger_type: string
          triggering_checkin_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          all_steps_completed?: boolean | null
          biological_data?: Json | null
          business_data?: Json | null
          coins_awarded?: number | null
          created_at?: string
          emotional_data?: Json | null
          id?: string
          initial_mood?: number
          post_recovery_mood?: number | null
          step_1_biological?: Json | null
          step_2_emotional?: Json | null
          step_3_movement?: Json | null
          trigger_type?: string
          triggering_checkin_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mood_recovery_sessions_triggering_checkin_id_fkey"
            columns: ["triggering_checkin_id"]
            isOneToOne: false
            referencedRelation: "daily_checkins"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_agreements: {
        Row: {
          ae_x_analysis: Json | null
          ae_x_synthesis_score: number | null
          agreement_type: string
          alignment_analysis: Json | null
          client_email: string | null
          client_name: string
          client_phone: string | null
          client_signature_data: Json | null
          completion_percentage: number | null
          context_details: string
          created_at: string
          currency: string
          defining_moments_referenced: Json | null
          description: string | null
          document_hash: string | null
          end_date: string | null
          id: string
          improvement_suggestions: Json | null
          parent_agreement_id: string | null
          payment_structure: string
          provider_email: string | null
          provider_name: string
          provider_signature_data: Json | null
          purpose_alignment_score: number | null
          purpose_statement: string
          quality_assessment: Json | null
          quality_score: number | null
          result_criteria: string
          risk_warnings: Json | null
          signed_at: string | null
          start_date: string | null
          status: string
          title: string
          total_amount: number | null
          updated_at: string
          user_id: string
          version: number
        }
        Insert: {
          ae_x_analysis?: Json | null
          ae_x_synthesis_score?: number | null
          agreement_type?: string
          alignment_analysis?: Json | null
          client_email?: string | null
          client_name: string
          client_phone?: string | null
          client_signature_data?: Json | null
          completion_percentage?: number | null
          context_details: string
          created_at?: string
          currency?: string
          defining_moments_referenced?: Json | null
          description?: string | null
          document_hash?: string | null
          end_date?: string | null
          id?: string
          improvement_suggestions?: Json | null
          parent_agreement_id?: string | null
          payment_structure?: string
          provider_email?: string | null
          provider_name: string
          provider_signature_data?: Json | null
          purpose_alignment_score?: number | null
          purpose_statement: string
          quality_assessment?: Json | null
          quality_score?: number | null
          result_criteria: string
          risk_warnings?: Json | null
          signed_at?: string | null
          start_date?: string | null
          status?: string
          title: string
          total_amount?: number | null
          updated_at?: string
          user_id: string
          version?: number
        }
        Update: {
          ae_x_analysis?: Json | null
          ae_x_synthesis_score?: number | null
          agreement_type?: string
          alignment_analysis?: Json | null
          client_email?: string | null
          client_name?: string
          client_phone?: string | null
          client_signature_data?: Json | null
          completion_percentage?: number | null
          context_details?: string
          created_at?: string
          currency?: string
          defining_moments_referenced?: Json | null
          description?: string | null
          document_hash?: string | null
          end_date?: string | null
          id?: string
          improvement_suggestions?: Json | null
          parent_agreement_id?: string | null
          payment_structure?: string
          provider_email?: string | null
          provider_name?: string
          provider_signature_data?: Json | null
          purpose_alignment_score?: number | null
          purpose_statement?: string
          quality_assessment?: Json | null
          quality_score?: number | null
          result_criteria?: string
          risk_warnings?: Json | null
          signed_at?: string | null
          start_date?: string | null
          status?: string
          title?: string
          total_amount?: number | null
          updated_at?: string
          user_id?: string
          version?: number
        }
        Relationships: [
          {
            foreignKeyName: "mou_agreements_parent_agreement_id_fkey"
            columns: ["parent_agreement_id"]
            isOneToOne: false
            referencedRelation: "mou_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_invoices: {
        Row: {
          agreement_id: string
          created_at: string
          due_date: string
          id: string
          invoice_date: string
          invoice_number: string
          line_items: Json
          notes: string | null
          paid_at: string | null
          payment_term_id: string | null
          sent_at: string | null
          status: string
          subtotal: number
          tax_amount: number | null
          tax_rate: number | null
          terms_conditions: string | null
          total_amount: number
          updated_at: string
          user_id: string
          viewed_at: string | null
        }
        Insert: {
          agreement_id: string
          created_at?: string
          due_date: string
          id?: string
          invoice_date?: string
          invoice_number: string
          line_items?: Json
          notes?: string | null
          paid_at?: string | null
          payment_term_id?: string | null
          sent_at?: string | null
          status?: string
          subtotal: number
          tax_amount?: number | null
          tax_rate?: number | null
          terms_conditions?: string | null
          total_amount: number
          updated_at?: string
          user_id: string
          viewed_at?: string | null
        }
        Update: {
          agreement_id?: string
          created_at?: string
          due_date?: string
          id?: string
          invoice_date?: string
          invoice_number?: string
          line_items?: Json
          notes?: string | null
          paid_at?: string | null
          payment_term_id?: string | null
          sent_at?: string | null
          status?: string
          subtotal?: number
          tax_amount?: number | null
          tax_rate?: number | null
          terms_conditions?: string | null
          total_amount?: number
          updated_at?: string
          user_id?: string
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "mou_invoices_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "mou_agreements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mou_invoices_payment_term_id_fkey"
            columns: ["payment_term_id"]
            isOneToOne: false
            referencedRelation: "mou_payment_terms"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_payment_terms: {
        Row: {
          agreement_id: string
          amount: number
          created_at: string
          due_date: string | null
          id: string
          late_fee_grace_days: number | null
          late_fee_percentage: number | null
          milestone_trigger: string | null
          paid_at: string | null
          payment_name: string
          payment_type: string
          percentage_of_total: number | null
          status: string
          updated_at: string
        }
        Insert: {
          agreement_id: string
          amount: number
          created_at?: string
          due_date?: string | null
          id?: string
          late_fee_grace_days?: number | null
          late_fee_percentage?: number | null
          milestone_trigger?: string | null
          paid_at?: string | null
          payment_name: string
          payment_type: string
          percentage_of_total?: number | null
          status?: string
          updated_at?: string
        }
        Update: {
          agreement_id?: string
          amount?: number
          created_at?: string
          due_date?: string | null
          id?: string
          late_fee_grace_days?: number | null
          late_fee_percentage?: number | null
          milestone_trigger?: string | null
          paid_at?: string | null
          payment_name?: string
          payment_type?: string
          percentage_of_total?: number | null
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mou_payment_terms_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "mou_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_receipts: {
        Row: {
          agreement_id: string
          created_at: string
          id: string
          invoice_id: string
          notes: string | null
          payment_amount: number
          payment_date: string
          payment_method: string | null
          payment_processor: string | null
          processing_fee: number | null
          receipt_data: Json | null
          receipt_number: string
          transaction_reference: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          agreement_id: string
          created_at?: string
          id?: string
          invoice_id: string
          notes?: string | null
          payment_amount: number
          payment_date?: string
          payment_method?: string | null
          payment_processor?: string | null
          processing_fee?: number | null
          receipt_data?: Json | null
          receipt_number: string
          transaction_reference?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          agreement_id?: string
          created_at?: string
          id?: string
          invoice_id?: string
          notes?: string | null
          payment_amount?: number
          payment_date?: string
          payment_method?: string | null
          payment_processor?: string | null
          processing_fee?: number | null
          receipt_data?: Json | null
          receipt_number?: string
          transaction_reference?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "mou_receipts_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "mou_agreements"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "mou_receipts_invoice_id_fkey"
            columns: ["invoice_id"]
            isOneToOne: false
            referencedRelation: "mou_invoices"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_service_items: {
        Row: {
          acceptance_criteria: string | null
          agreement_id: string
          completed_at: string | null
          created_at: string
          deliverable_details: string | null
          estimated_hours: number | null
          id: string
          milestone_order: number | null
          quantity: number | null
          service_description: string | null
          service_name: string
          status: string
          total_price: number | null
          unit_price: number | null
          updated_at: string
        }
        Insert: {
          acceptance_criteria?: string | null
          agreement_id: string
          completed_at?: string | null
          created_at?: string
          deliverable_details?: string | null
          estimated_hours?: number | null
          id?: string
          milestone_order?: number | null
          quantity?: number | null
          service_description?: string | null
          service_name: string
          status?: string
          total_price?: number | null
          unit_price?: number | null
          updated_at?: string
        }
        Update: {
          acceptance_criteria?: string | null
          agreement_id?: string
          completed_at?: string | null
          created_at?: string
          deliverable_details?: string | null
          estimated_hours?: number | null
          id?: string
          milestone_order?: number | null
          quantity?: number | null
          service_description?: string | null
          service_name?: string
          status?: string
          total_price?: number | null
          unit_price?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "mou_service_items_agreement_id_fkey"
            columns: ["agreement_id"]
            isOneToOne: false
            referencedRelation: "mou_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      mou_templates: {
        Row: {
          created_at: string
          default_payment_structure: string | null
          default_terms: string | null
          id: string
          is_public: boolean
          template_data: Json
          template_description: string | null
          template_name: string
          template_type: string
          updated_at: string
          usage_count: number | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          default_payment_structure?: string | null
          default_terms?: string | null
          id?: string
          is_public?: boolean
          template_data?: Json
          template_description?: string | null
          template_name: string
          template_type?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          default_payment_structure?: string | null
          default_terms?: string | null
          id?: string
          is_public?: boolean
          template_data?: Json
          template_description?: string | null
          template_name?: string
          template_type?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string | null
        }
        Relationships: []
      }
      neighborhoods: {
        Row: {
          active_topics: string[] | null
          color: string
          created_at: string
          description: string
          display_order: number
          icon: string
          id: string
          is_active: boolean
          member_count: number
          name: string
          updated_at: string
        }
        Insert: {
          active_topics?: string[] | null
          color: string
          created_at?: string
          description: string
          display_order?: number
          icon: string
          id?: string
          is_active?: boolean
          member_count?: number
          name: string
          updated_at?: string
        }
        Update: {
          active_topics?: string[] | null
          color?: string
          created_at?: string
          description?: string
          display_order?: number
          icon?: string
          id?: string
          is_active?: boolean
          member_count?: number
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      news_feedback_responses: {
        Row: {
          content_id: string
          created_at: string
          id: string
          mood_context: string | null
          personality_context: Json | null
          question_type: string
          response_value: string
          user_id: string
        }
        Insert: {
          content_id: string
          created_at?: string
          id?: string
          mood_context?: string | null
          personality_context?: Json | null
          question_type: string
          response_value: string
          user_id: string
        }
        Update: {
          content_id?: string
          created_at?: string
          id?: string
          mood_context?: string | null
          personality_context?: Json | null
          question_type?: string
          response_value?: string
          user_id?: string
        }
        Relationships: []
      }
      nft_mint_requests: {
        Row: {
          affirmation_id: string
          created_at: string
          generated_image_url: string | null
          id: string
          mint_fee_currency: string | null
          mint_fee_paid: number | null
          mint_status: string
          mint_transaction_hash: string | null
          nft_contract_address: string | null
          nft_token_id: string | null
          requester_user_id: string
          royalty_percentage: number | null
          updated_at: string
        }
        Insert: {
          affirmation_id: string
          created_at?: string
          generated_image_url?: string | null
          id?: string
          mint_fee_currency?: string | null
          mint_fee_paid?: number | null
          mint_status?: string
          mint_transaction_hash?: string | null
          nft_contract_address?: string | null
          nft_token_id?: string | null
          requester_user_id: string
          royalty_percentage?: number | null
          updated_at?: string
        }
        Update: {
          affirmation_id?: string
          created_at?: string
          generated_image_url?: string | null
          id?: string
          mint_fee_currency?: string | null
          mint_fee_paid?: number | null
          mint_status?: string
          mint_transaction_hash?: string | null
          nft_contract_address?: string | null
          nft_token_id?: string | null
          requester_user_id?: string
          royalty_percentage?: number | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "nft_mint_requests_affirmation_id_fkey"
            columns: ["affirmation_id"]
            isOneToOne: true
            referencedRelation: "affirmations"
            referencedColumns: ["id"]
          },
        ]
      }
      notification_preferences: {
        Row: {
          community_updates: boolean | null
          contributor_responses: boolean | null
          created_at: string
          id: string
          priority_notifications: boolean | null
          updated_at: string
          user_id: string
        }
        Insert: {
          community_updates?: boolean | null
          contributor_responses?: boolean | null
          created_at?: string
          id?: string
          priority_notifications?: boolean | null
          updated_at?: string
          user_id: string
        }
        Update: {
          community_updates?: boolean | null
          contributor_responses?: boolean | null
          created_at?: string
          id?: string
          priority_notifications?: boolean | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      onboarding_boosts: {
        Row: {
          applied_at: string
          boost_type: string
          coins_spent: number
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          applied_at?: string
          boost_type: string
          coins_spent: number
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          applied_at?: string
          boost_type?: string
          coins_spent?: number
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      onboarding_configurations: {
        Row: {
          created_at: string
          created_by: string | null
          id: string
          is_active: boolean
          is_default: boolean
          name: string
          path_id: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_default?: boolean
          name: string
          path_id: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          created_by?: string | null
          id?: string
          is_active?: boolean
          is_default?: boolean
          name?: string
          path_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_configurations_path_id_fkey"
            columns: ["path_id"]
            isOneToOne: false
            referencedRelation: "onboarding_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      onboarding_drafts: {
        Row: {
          clerk_user_id: string
          completed_at: string | null
          created_at: string
          current_step: number
          id: string
          payload: Json
          updated_at: string
        }
        Insert: {
          clerk_user_id: string
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          payload?: Json
          updated_at?: string
        }
        Update: {
          clerk_user_id?: string
          completed_at?: string | null
          created_at?: string
          current_step?: number
          id?: string
          payload?: Json
          updated_at?: string
        }
        Relationships: []
      }
      onboarding_paths: {
        Row: {
          account_type_mapping: string | null
          badge_text: string | null
          badge_type: string | null
          bullet_points: Json | null
          created_at: string
          description: string | null
          display_name: string
          display_order: number
          footer_note: string | null
          icon: string
          id: string
          is_active: boolean
          path_key: string
          subtitle: string | null
          time_estimate: string | null
          tour_confirmation_message: string | null
          tour_confirmation_title: string | null
          updated_at: string
        }
        Insert: {
          account_type_mapping?: string | null
          badge_text?: string | null
          badge_type?: string | null
          bullet_points?: Json | null
          created_at?: string
          description?: string | null
          display_name: string
          display_order?: number
          footer_note?: string | null
          icon?: string
          id?: string
          is_active?: boolean
          path_key: string
          subtitle?: string | null
          time_estimate?: string | null
          tour_confirmation_message?: string | null
          tour_confirmation_title?: string | null
          updated_at?: string
        }
        Update: {
          account_type_mapping?: string | null
          badge_text?: string | null
          badge_type?: string | null
          bullet_points?: Json | null
          created_at?: string
          description?: string | null
          display_name?: string
          display_order?: number
          footer_note?: string | null
          icon?: string
          id?: string
          is_active?: boolean
          path_key?: string
          subtitle?: string | null
          time_estimate?: string | null
          tour_confirmation_message?: string | null
          tour_confirmation_title?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      onboarding_step_configs: {
        Row: {
          config_id: string
          created_at: string
          display_order: number
          id: string
          is_enabled: boolean
          is_required: boolean
          route_path: string
          step_description: string | null
          step_icon: string
          step_key: string
          step_name: string
          step_settings: Json | null
          updated_at: string
        }
        Insert: {
          config_id: string
          created_at?: string
          display_order?: number
          id?: string
          is_enabled?: boolean
          is_required?: boolean
          route_path: string
          step_description?: string | null
          step_icon?: string
          step_key: string
          step_name: string
          step_settings?: Json | null
          updated_at?: string
        }
        Update: {
          config_id?: string
          created_at?: string
          display_order?: number
          id?: string
          is_enabled?: boolean
          is_required?: boolean
          route_path?: string
          step_description?: string | null
          step_icon?: string
          step_key?: string
          step_name?: string
          step_settings?: Json | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "onboarding_step_configs_config_id_fkey"
            columns: ["config_id"]
            isOneToOne: false
            referencedRelation: "onboarding_configurations"
            referencedColumns: ["id"]
          },
        ]
      }
      opportunity_assessments: {
        Row: {
          aex_conflict_flag: boolean | null
          aex_conflict_reason: string | null
          assessment_summary: string | null
          created_at: string
          id: string
          match_score: number | null
          opportunity_text: string
          opportunity_title: string
          opportunity_type: string
          skill_gaps: Json | null
          strategic_actions: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          aex_conflict_flag?: boolean | null
          aex_conflict_reason?: string | null
          assessment_summary?: string | null
          created_at?: string
          id?: string
          match_score?: number | null
          opportunity_text: string
          opportunity_title: string
          opportunity_type?: string
          skill_gaps?: Json | null
          strategic_actions?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          aex_conflict_flag?: boolean | null
          aex_conflict_reason?: string | null
          assessment_summary?: string | null
          created_at?: string
          id?: string
          match_score?: number | null
          opportunity_text?: string
          opportunity_title?: string
          opportunity_type?: string
          skill_gaps?: Json | null
          strategic_actions?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      parent_child_relationships: {
        Row: {
          can_assign_tasks: boolean | null
          can_view_progress: boolean | null
          child_age_status: string | null
          child_profile_id: string | null
          child_user_id: string
          created_at: string | null
          id: string
          parent_user_id: string
          relationship_status: string | null
          updated_at: string | null
        }
        Insert: {
          can_assign_tasks?: boolean | null
          can_view_progress?: boolean | null
          child_age_status?: string | null
          child_profile_id?: string | null
          child_user_id: string
          created_at?: string | null
          id?: string
          parent_user_id: string
          relationship_status?: string | null
          updated_at?: string | null
        }
        Update: {
          can_assign_tasks?: boolean | null
          can_view_progress?: boolean | null
          child_age_status?: string | null
          child_profile_id?: string | null
          child_user_id?: string
          created_at?: string | null
          id?: string
          parent_user_id?: string
          relationship_status?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "parent_child_relationships_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_community_channels: {
        Row: {
          channel_name: string
          channel_slug: string
          color_code: string | null
          created_at: string
          description: string | null
          display_order: number | null
          icon_emoji: string | null
          id: string
          is_active: boolean | null
          updated_at: string
        }
        Insert: {
          channel_name: string
          channel_slug: string
          color_code?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon_emoji?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string
        }
        Update: {
          channel_name?: string
          channel_slug?: string
          color_code?: string | null
          created_at?: string
          description?: string | null
          display_order?: number | null
          icon_emoji?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string
        }
        Relationships: []
      }
      parent_community_posts: {
        Row: {
          ai_moderated: boolean | null
          anonymous_display_name: string | null
          channel_id: string
          child_profile_insight: Json | null
          created_at: string
          id: string
          is_anonymous: boolean | null
          moderation_status: string | null
          mood_status: string | null
          post_content: string
          post_title: string | null
          reaction_count: number | null
          reply_count: number | null
          tags: string[] | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_moderated?: boolean | null
          anonymous_display_name?: string | null
          channel_id: string
          child_profile_insight?: Json | null
          created_at?: string
          id?: string
          is_anonymous?: boolean | null
          moderation_status?: string | null
          mood_status?: string | null
          post_content: string
          post_title?: string | null
          reaction_count?: number | null
          reply_count?: number | null
          tags?: string[] | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_moderated?: boolean | null
          anonymous_display_name?: string | null
          channel_id?: string
          child_profile_insight?: Json | null
          created_at?: string
          id?: string
          is_anonymous?: boolean | null
          moderation_status?: string | null
          mood_status?: string | null
          post_content?: string
          post_title?: string | null
          reaction_count?: number | null
          reply_count?: number | null
          tags?: string[] | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_community_posts_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "parent_community_channels"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_community_reactions: {
        Row: {
          created_at: string
          id: string
          post_id: string
          reaction_emoji: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          reaction_emoji: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          reaction_emoji?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_community_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "parent_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_journals: {
        Row: {
          created_at: string
          entry_content: string | null
          entry_type: string
          id: string
          is_shared_to_community: boolean | null
          linked_task_ids: string[] | null
          media_duration_seconds: number | null
          media_url: string | null
          pmi_action_items: Json | null
          pmi_empathy_response: string | null
          raw_emotion_tags: string[] | null
          refined_message: string | null
          refined_message_recipient: string | null
          shared_post_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          entry_content?: string | null
          entry_type?: string
          id?: string
          is_shared_to_community?: boolean | null
          linked_task_ids?: string[] | null
          media_duration_seconds?: number | null
          media_url?: string | null
          pmi_action_items?: Json | null
          pmi_empathy_response?: string | null
          raw_emotion_tags?: string[] | null
          refined_message?: string | null
          refined_message_recipient?: string | null
          shared_post_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          entry_content?: string | null
          entry_type?: string
          id?: string
          is_shared_to_community?: boolean | null
          linked_task_ids?: string[] | null
          media_duration_seconds?: number | null
          media_url?: string | null
          pmi_action_items?: Json | null
          pmi_empathy_response?: string | null
          raw_emotion_tags?: string[] | null
          refined_message?: string | null
          refined_message_recipient?: string | null
          shared_post_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "parent_journals_shared_post_id_fkey"
            columns: ["shared_post_id"]
            isOneToOne: false
            referencedRelation: "parent_community_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      parent_mood_checkins: {
        Row: {
          capacity_status: string | null
          created_at: string
          energy_level: string | null
          id: string
          is_visible_to_community: boolean | null
          mood_level: number | null
          notes: string | null
          stress_level: number | null
          user_id: string
        }
        Insert: {
          capacity_status?: string | null
          created_at?: string
          energy_level?: string | null
          id?: string
          is_visible_to_community?: boolean | null
          mood_level?: number | null
          notes?: string | null
          stress_level?: number | null
          user_id: string
        }
        Update: {
          capacity_status?: string | null
          created_at?: string
          energy_level?: string | null
          id?: string
          is_visible_to_community?: boolean | null
          mood_level?: number | null
          notes?: string | null
          stress_level?: number | null
          user_id?: string
        }
        Relationships: []
      }
      parent_profiles: {
        Row: {
          communication_approach: string | null
          created_at: string | null
          has_full_promptme_access: boolean | null
          id: string
          is_standalone_account: boolean | null
          notification_preferences: Json | null
          parent_first_name: string
          parent_gender: string | null
          parent_last_name: string
          parent_onboarding_completed: boolean | null
          parent_phone: string | null
          parenting_style: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          communication_approach?: string | null
          created_at?: string | null
          has_full_promptme_access?: boolean | null
          id?: string
          is_standalone_account?: boolean | null
          notification_preferences?: Json | null
          parent_first_name: string
          parent_gender?: string | null
          parent_last_name: string
          parent_onboarding_completed?: boolean | null
          parent_phone?: string | null
          parenting_style?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          communication_approach?: string | null
          created_at?: string | null
          has_full_promptme_access?: boolean | null
          id?: string
          is_standalone_account?: boolean | null
          notification_preferences?: Json | null
          parent_first_name?: string
          parent_gender?: string | null
          parent_last_name?: string
          parent_onboarding_completed?: boolean | null
          parent_phone?: string | null
          parenting_style?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      partner_communication_logs: {
        Row: {
          ai_suggestions: Json | null
          analyzed_mood: string | null
          analyzed_tone: string | null
          connection_id: string
          created_at: string
          id: string
          original_message: string
          recipient_id: string
          sender_id: string
          sent_message: string | null
          updated_at: string
        }
        Insert: {
          ai_suggestions?: Json | null
          analyzed_mood?: string | null
          analyzed_tone?: string | null
          connection_id: string
          created_at?: string
          id?: string
          original_message: string
          recipient_id: string
          sender_id: string
          sent_message?: string | null
          updated_at?: string
        }
        Update: {
          ai_suggestions?: Json | null
          analyzed_mood?: string | null
          analyzed_tone?: string | null
          connection_id?: string
          created_at?: string
          id?: string
          original_message?: string
          recipient_id?: string
          sender_id?: string
          sent_message?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      partner_contributions: {
        Row: {
          amount_cents: number
          created_at: string
          id: string
          is_recurring: boolean
          org_id: string
          purpose: string
          status: string
        }
        Insert: {
          amount_cents?: number
          created_at?: string
          id?: string
          is_recurring?: boolean
          org_id: string
          purpose?: string
          status?: string
        }
        Update: {
          amount_cents?: number
          created_at?: string
          id?: string
          is_recurring?: boolean
          org_id?: string
          purpose?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_contributions_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "partner_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_intercept_attachments: {
        Row: {
          created_at: string | null
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          id: string
          intercept_id: string | null
          uploaded_by: string | null
        }
        Insert: {
          created_at?: string | null
          file_name: string
          file_size: number
          file_type: string
          file_url: string
          id?: string
          intercept_id?: string | null
          uploaded_by?: string | null
        }
        Update: {
          created_at?: string | null
          file_name?: string
          file_size?: number
          file_type?: string
          file_url?: string
          id?: string
          intercept_id?: string | null
          uploaded_by?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_intercept_attachments_intercept_id_fkey"
            columns: ["intercept_id"]
            isOneToOne: false
            referencedRelation: "partner_intercept_logs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_intercept_attachments_uploaded_by_fkey"
            columns: ["uploaded_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_intercept_logs: {
        Row: {
          ai_action_item: string | null
          ai_summary: string | null
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          partner_business_tier: string | null
          partner_email: string
          partner_file_access_approved: boolean | null
          partner_has_personality: boolean | null
          partner_is_member: boolean | null
          partner_name: string
          partner_personality_summary: Json | null
          partner_response: string | null
          partner_user_id: string | null
          processed_at: string | null
          secure_token: string
          status: string | null
          submitted_at: string | null
          token_used: boolean | null
          updated_at: string | null
          user_id: string
          user_status_context: string | null
          user_wellbeing_snapshot: Json | null
          viewed_at: string | null
        }
        Insert: {
          ai_action_item?: string | null
          ai_summary?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          partner_business_tier?: string | null
          partner_email: string
          partner_file_access_approved?: boolean | null
          partner_has_personality?: boolean | null
          partner_is_member?: boolean | null
          partner_name: string
          partner_personality_summary?: Json | null
          partner_response?: string | null
          partner_user_id?: string | null
          processed_at?: string | null
          secure_token: string
          status?: string | null
          submitted_at?: string | null
          token_used?: boolean | null
          updated_at?: string | null
          user_id: string
          user_status_context?: string | null
          user_wellbeing_snapshot?: Json | null
          viewed_at?: string | null
        }
        Update: {
          ai_action_item?: string | null
          ai_summary?: string | null
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          partner_business_tier?: string | null
          partner_email?: string
          partner_file_access_approved?: boolean | null
          partner_has_personality?: boolean | null
          partner_is_member?: boolean | null
          partner_name?: string
          partner_personality_summary?: Json | null
          partner_response?: string | null
          partner_user_id?: string | null
          processed_at?: string | null
          secure_token?: string
          status?: string | null
          submitted_at?: string | null
          token_used?: boolean | null
          updated_at?: string | null
          user_id?: string
          user_status_context?: string | null
          user_wellbeing_snapshot?: Json | null
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "partner_intercept_logs_partner_user_id_fkey"
            columns: ["partner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_intercept_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_messages: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          message_text: string
          partner_id: string
          property_id: string
          sender_user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          message_text: string
          partner_id: string
          property_id: string
          sender_user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          message_text?: string
          partner_id?: string
          property_id?: string
          sender_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_messages_partner_id_fkey"
            columns: ["partner_id"]
            isOneToOne: false
            referencedRelation: "jv_partners"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_messages_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_mh_services: {
        Row: {
          accepts_referrals: boolean
          availability: string
          created_at: string
          description: string
          id: string
          org_id: string
          service_name: string
          service_type: string
          updated_at: string
        }
        Insert: {
          accepts_referrals?: boolean
          availability?: string
          created_at?: string
          description?: string
          id?: string
          org_id: string
          service_name: string
          service_type?: string
          updated_at?: string
        }
        Update: {
          accepts_referrals?: boolean
          availability?: string
          created_at?: string
          description?: string
          id?: string
          org_id?: string
          service_name?: string
          service_type?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_mh_services_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "partner_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_organizations: {
        Row: {
          approved: boolean
          clerk_user_id: string
          contact_email: string
          contact_phone: string
          created_at: string
          description: string
          id: string
          name: string
          org_type: string
          updated_at: string
          website: string
        }
        Insert: {
          approved?: boolean
          clerk_user_id: string
          contact_email?: string
          contact_phone?: string
          created_at?: string
          description?: string
          id?: string
          name: string
          org_type: string
          updated_at?: string
          website?: string
        }
        Update: {
          approved?: boolean
          clerk_user_id?: string
          contact_email?: string
          contact_phone?: string
          created_at?: string
          description?: string
          id?: string
          name?: string
          org_type?: string
          updated_at?: string
          website?: string
        }
        Relationships: []
      }
      partner_programs: {
        Row: {
          category: string
          created_at: string
          description: string
          id: string
          is_active: boolean
          name: string
          org_id: string
          short_label: string
          updated_at: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          name: string
          org_id: string
          short_label?: string
          updated_at?: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          name?: string
          org_id?: string
          short_label?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_programs_org_id_fkey"
            columns: ["org_id"]
            isOneToOne: false
            referencedRelation: "partner_organizations"
            referencedColumns: ["id"]
          },
        ]
      }
      partner_shared_files: {
        Row: {
          access_granted_at: string | null
          access_revoked_at: string | null
          created_at: string | null
          document_id: string | null
          id: string
          is_active: boolean | null
          partner_user_id: string
          user_id: string
        }
        Insert: {
          access_granted_at?: string | null
          access_revoked_at?: string | null
          created_at?: string | null
          document_id?: string | null
          id?: string
          is_active?: boolean | null
          partner_user_id: string
          user_id: string
        }
        Update: {
          access_granted_at?: string | null
          access_revoked_at?: string | null
          created_at?: string | null
          document_id?: string | null
          id?: string
          is_active?: boolean | null
          partner_user_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "partner_shared_files_document_id_fkey"
            columns: ["document_id"]
            isOneToOne: false
            referencedRelation: "business_documents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_shared_files_partner_user_id_fkey"
            columns: ["partner_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "partner_shared_files_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pending_assessment_codes: {
        Row: {
          assessment_data: Json
          claimed_at: string | null
          claimed_by: string | null
          created_at: string | null
          expires_at: string | null
          id: string
          recovery_code: string
        }
        Insert: {
          assessment_data: Json
          claimed_at?: string | null
          claimed_by?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          recovery_code: string
        }
        Update: {
          assessment_data?: Json
          claimed_at?: string | null
          claimed_by?: string | null
          created_at?: string | null
          expires_at?: string | null
          id?: string
          recovery_code?: string
        }
        Relationships: []
      }
      pep_daily_checkins: {
        Row: {
          checkin_date: string
          created_at: string
          id: string
          is_update: boolean
          mood: number
          pep_message: string | null
          personal_note: string | null
          probation_note: string | null
          sent_to_monitor: boolean
          sharing_level: string
          updated_at: string
          user_id: string
        }
        Insert: {
          checkin_date?: string
          created_at?: string
          id?: string
          is_update?: boolean
          mood: number
          pep_message?: string | null
          personal_note?: string | null
          probation_note?: string | null
          sent_to_monitor?: boolean
          sharing_level?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          checkin_date?: string
          created_at?: string
          id?: string
          is_update?: boolean
          mood?: number
          pep_message?: string | null
          personal_note?: string | null
          probation_note?: string | null
          sent_to_monitor?: boolean
          sharing_level?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pep_session_checkouts: {
        Row: {
          clerk_user_id: string
          created_at: string
          for_date: string
          id: string
          mood: number
          updated_at: string
        }
        Insert: {
          clerk_user_id: string
          created_at?: string
          for_date?: string
          id?: string
          mood: number
          updated_at?: string
        }
        Update: {
          clerk_user_id?: string
          created_at?: string
          for_date?: string
          id?: string
          mood?: number
          updated_at?: string
        }
        Relationships: []
      }
      pep_training_progress: {
        Row: {
          clerk_user_id: string
          created_at: string
          id: string
          label: string | null
          module_id: string
          percent: number
          title: string | null
        }
        Insert: {
          clerk_user_id: string
          created_at?: string
          id?: string
          label?: string | null
          module_id: string
          percent?: number
          title?: string | null
        }
        Update: {
          clerk_user_id?: string
          created_at?: string
          id?: string
          label?: string | null
          module_id?: string
          percent?: number
          title?: string | null
        }
        Relationships: []
      }
      peppoints: {
        Row: {
          history: Json
          total_coins: number
          user_id: string
        }
        Insert: {
          history?: Json
          total_coins?: number
          user_id: string
        }
        Update: {
          history?: Json
          total_coins?: number
          user_id?: string
        }
        Relationships: []
      }
      personality_moments: {
        Row: {
          audio_url: string | null
          context: string | null
          created_at: string
          hindsight_action: string | null
          hindsight_perspective: string | null
          id: string
          include_in_personality: boolean | null
          is_resolved: boolean | null
          learned_from_moment: boolean | null
          learning_evaluation: Json | null
          learning_explanation: string | null
          media_metadata: Json | null
          media_urls: string[] | null
          moment_type: string
          occurred_at: string | null
          origin_category: string | null
          resolution_id: string | null
          story: string | null
          tags: string[] | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          audio_url?: string | null
          context?: string | null
          created_at?: string
          hindsight_action?: string | null
          hindsight_perspective?: string | null
          id?: string
          include_in_personality?: boolean | null
          is_resolved?: boolean | null
          learned_from_moment?: boolean | null
          learning_evaluation?: Json | null
          learning_explanation?: string | null
          media_metadata?: Json | null
          media_urls?: string[] | null
          moment_type: string
          occurred_at?: string | null
          origin_category?: string | null
          resolution_id?: string | null
          story?: string | null
          tags?: string[] | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          audio_url?: string | null
          context?: string | null
          created_at?: string
          hindsight_action?: string | null
          hindsight_perspective?: string | null
          id?: string
          include_in_personality?: boolean | null
          is_resolved?: boolean | null
          learned_from_moment?: boolean | null
          learning_evaluation?: Json | null
          learning_explanation?: string | null
          media_metadata?: Json | null
          media_urls?: string[] | null
          moment_type?: string
          occurred_at?: string | null
          origin_category?: string | null
          resolution_id?: string | null
          story?: string | null
          tags?: string[] | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "personality_moments_resolution_id_fkey"
            columns: ["resolution_id"]
            isOneToOne: false
            referencedRelation: "defining_moment_resolutions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "personality_moments_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      personality_profiles: {
        Row: {
          completed_at: string | null
          created_at: string
          id: string
          progress: number
          sections: Json
          updated_at: string
          user_id: string
          version: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          id?: string
          progress?: number
          sections?: Json
          updated_at?: string
          user_id: string
          version?: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          id?: string
          progress?: number
          sections?: Json
          updated_at?: string
          user_id?: string
          version?: string
        }
        Relationships: [
          {
            foreignKeyName: "personality_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      personality_signals: {
        Row: {
          content_excerpt: string | null
          created_at: string
          id: string
          metadata: Json
          origin: string
          source: string
          user_id: string
        }
        Insert: {
          content_excerpt?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          origin?: string
          source?: string
          user_id: string
        }
        Update: {
          content_excerpt?: string | null
          created_at?: string
          id?: string
          metadata?: Json
          origin?: string
          source?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "personality_signals_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      personality_summaries: {
        Row: {
          content: string
          created_at: string
          id: string
          length: string
          metadata: Json | null
          summary_type: string
          tone: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          length: string
          metadata?: Json | null
          summary_type: string
          tone: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          length?: string
          metadata?: Json | null
          summary_type?: string
          tone?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      pillar_balances: {
        Row: {
          allocated: number
          created_at: string
          id: string
          period: string
          pillar_id: number
          spent: number
          surplus: number
          updated_at: string
          user_id: string
        }
        Insert: {
          allocated?: number
          created_at?: string
          id?: string
          period: string
          pillar_id: number
          spent?: number
          surplus?: number
          updated_at?: string
          user_id: string
        }
        Update: {
          allocated?: number
          created_at?: string
          id?: string
          period?: string
          pillar_id?: number
          spent?: number
          surplus?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      playground_channel_members: {
        Row: {
          channel_id: string
          child_profile_id: string
          id: string
          is_active: boolean | null
          joined_at: string | null
        }
        Insert: {
          channel_id: string
          child_profile_id: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
        }
        Update: {
          channel_id?: string
          child_profile_id?: string
          id?: string
          is_active?: boolean | null
          joined_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playground_channel_members_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "playground_channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_channel_members_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      playground_channels: {
        Row: {
          age_range_max: number | null
          age_range_min: number | null
          channel_description: string | null
          channel_name: string
          created_at: string | null
          id: string
          interest_tags: string[] | null
          is_active: boolean | null
          member_count: number | null
          updated_at: string | null
        }
        Insert: {
          age_range_max?: number | null
          age_range_min?: number | null
          channel_description?: string | null
          channel_name: string
          created_at?: string | null
          id?: string
          interest_tags?: string[] | null
          is_active?: boolean | null
          member_count?: number | null
          updated_at?: string | null
        }
        Update: {
          age_range_max?: number | null
          age_range_min?: number | null
          channel_description?: string | null
          channel_name?: string
          created_at?: string | null
          id?: string
          interest_tags?: string[] | null
          is_active?: boolean | null
          member_count?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      playground_flagged_content: {
        Row: {
          child_profile_id: string
          content_snapshot: string
          created_at: string | null
          flag_reason: string
          flagged_by: string
          id: string
          post_id: string
          resolution_action: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          severity: string | null
        }
        Insert: {
          child_profile_id: string
          content_snapshot: string
          created_at?: string | null
          flag_reason: string
          flagged_by: string
          id?: string
          post_id: string
          resolution_action?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: string | null
        }
        Update: {
          child_profile_id?: string
          content_snapshot?: string
          created_at?: string | null
          flag_reason?: string
          flagged_by?: string
          id?: string
          post_id?: string
          resolution_action?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          severity?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playground_flagged_content_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_flagged_content_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "playground_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_flagged_content_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      playground_posts: {
        Row: {
          channel_id: string
          child_profile_id: string
          content: string
          created_at: string | null
          filter_reason: string | null
          helpful_count: number | null
          id: string
          is_approved: boolean | null
          is_filtered: boolean | null
          parent_post_id: string | null
          post_type: string | null
          updated_at: string | null
        }
        Insert: {
          channel_id: string
          child_profile_id: string
          content: string
          created_at?: string | null
          filter_reason?: string | null
          helpful_count?: number | null
          id?: string
          is_approved?: boolean | null
          is_filtered?: boolean | null
          parent_post_id?: string | null
          post_type?: string | null
          updated_at?: string | null
        }
        Update: {
          channel_id?: string
          child_profile_id?: string
          content?: string
          created_at?: string | null
          filter_reason?: string | null
          helpful_count?: number | null
          id?: string
          is_approved?: boolean | null
          is_filtered?: boolean | null
          parent_post_id?: string | null
          post_type?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "playground_posts_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "playground_channels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_posts_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_posts_parent_post_id_fkey"
            columns: ["parent_post_id"]
            isOneToOne: false
            referencedRelation: "playground_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      playground_reactions: {
        Row: {
          child_profile_id: string
          created_at: string | null
          id: string
          post_id: string
          reaction_type: string
        }
        Insert: {
          child_profile_id: string
          created_at?: string | null
          id?: string
          post_id: string
          reaction_type: string
        }
        Update: {
          child_profile_id?: string
          created_at?: string | null
          id?: string
          post_id?: string
          reaction_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "playground_reactions_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "playground_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      playground_rewards: {
        Row: {
          child_profile_id: string
          created_at: string | null
          description: string | null
          id: string
          points_awarded: number | null
          post_id: string | null
          reward_type: string
        }
        Insert: {
          child_profile_id: string
          created_at?: string | null
          description?: string | null
          id?: string
          points_awarded?: number | null
          post_id?: string | null
          reward_type: string
        }
        Update: {
          child_profile_id?: string
          created_at?: string | null
          description?: string | null
          id?: string
          points_awarded?: number | null
          post_id?: string | null
          reward_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "playground_rewards_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "playground_rewards_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "playground_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      playground_topic_prompts: {
        Row: {
          channel_id: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          prompt_category: string | null
          prompt_text: string
          target_age_max: number | null
          target_age_min: number | null
          usage_count: number | null
        }
        Insert: {
          channel_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          prompt_category?: string | null
          prompt_text: string
          target_age_max?: number | null
          target_age_min?: number | null
          usage_count?: number | null
        }
        Update: {
          channel_id?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          prompt_category?: string | null
          prompt_text?: string
          target_age_max?: number | null
          target_age_min?: number | null
          usage_count?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "playground_topic_prompts_channel_id_fkey"
            columns: ["channel_id"]
            isOneToOne: false
            referencedRelation: "playground_channels"
            referencedColumns: ["id"]
          },
        ]
      }
      playlist_videos: {
        Row: {
          added_at: string
          duration_seconds: number | null
          id: string
          playlist_id: string
          thumbnail_url: string | null
          video_platform: string
          video_title: string
          video_url: string
        }
        Insert: {
          added_at?: string
          duration_seconds?: number | null
          id?: string
          playlist_id: string
          thumbnail_url?: string | null
          video_platform?: string
          video_title: string
          video_url: string
        }
        Update: {
          added_at?: string
          duration_seconds?: number | null
          id?: string
          playlist_id?: string
          thumbnail_url?: string | null
          video_platform?: string
          video_title?: string
          video_url?: string
        }
        Relationships: []
      }
      pm_app_access_logs: {
        Row: {
          actual_access_time: string | null
          app_launcher_id: string
          created_at: string | null
          id: string
          scheduled_time: string | null
          source: string | null
          user_id: string
        }
        Insert: {
          actual_access_time?: string | null
          app_launcher_id: string
          created_at?: string | null
          id?: string
          scheduled_time?: string | null
          source?: string | null
          user_id: string
        }
        Update: {
          actual_access_time?: string | null
          app_launcher_id?: string
          created_at?: string | null
          id?: string
          scheduled_time?: string | null
          source?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pm_app_access_logs_app_launcher_id_fkey"
            columns: ["app_launcher_id"]
            isOneToOne: false
            referencedRelation: "pm_app_launcher"
            referencedColumns: ["id"]
          },
        ]
      }
      pm_app_access_schedules: {
        Row: {
          app_launcher_id: string
          calendar_sync_enabled: boolean | null
          created_at: string | null
          days_of_week: number[]
          id: string
          is_active: boolean | null
          reminder_minutes_before: number | null
          schedule_time: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          app_launcher_id: string
          calendar_sync_enabled?: boolean | null
          created_at?: string | null
          days_of_week?: number[]
          id?: string
          is_active?: boolean | null
          reminder_minutes_before?: number | null
          schedule_time: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          app_launcher_id?: string
          calendar_sync_enabled?: boolean | null
          created_at?: string | null
          days_of_week?: number[]
          id?: string
          is_active?: boolean | null
          reminder_minutes_before?: number | null
          schedule_time?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pm_app_access_schedules_app_launcher_id_fkey"
            columns: ["app_launcher_id"]
            isOneToOne: false
            referencedRelation: "pm_app_launcher"
            referencedColumns: ["id"]
          },
        ]
      }
      pm_app_launcher: {
        Row: {
          access_count: number | null
          android_package_name: string | null
          app_category: string | null
          app_icon_url: string | null
          app_name: string
          app_url: string | null
          created_at: string
          encrypted_password: string | null
          id: string
          last_accessed_at: string | null
          notes: string | null
          pass_vault_id: string | null
          password_method: string
          quick_links: Json | null
          security_level: string | null
          updated_at: string
          user_id: string
          username: string | null
        }
        Insert: {
          access_count?: number | null
          android_package_name?: string | null
          app_category?: string | null
          app_icon_url?: string | null
          app_name: string
          app_url?: string | null
          created_at?: string
          encrypted_password?: string | null
          id?: string
          last_accessed_at?: string | null
          notes?: string | null
          pass_vault_id?: string | null
          password_method: string
          quick_links?: Json | null
          security_level?: string | null
          updated_at?: string
          user_id: string
          username?: string | null
        }
        Update: {
          access_count?: number | null
          android_package_name?: string | null
          app_category?: string | null
          app_icon_url?: string | null
          app_name?: string
          app_url?: string | null
          created_at?: string
          encrypted_password?: string | null
          id?: string
          last_accessed_at?: string | null
          notes?: string | null
          pass_vault_id?: string | null
          password_method?: string
          quick_links?: Json | null
          security_level?: string | null
          updated_at?: string
          user_id?: string
          username?: string | null
        }
        Relationships: []
      }
      pm_pass_vault: {
        Row: {
          app_launcher_id: string | null
          base_word: string
          capitalization_rule: string | null
          created_at: string
          formula_hint: string | null
          id: string
          length_rule: number | null
          number_rule: string | null
          pmi_fields_used: string[] | null
          special_char_rule: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          app_launcher_id?: string | null
          base_word: string
          capitalization_rule?: string | null
          created_at?: string
          formula_hint?: string | null
          id?: string
          length_rule?: number | null
          number_rule?: string | null
          pmi_fields_used?: string[] | null
          special_char_rule?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          app_launcher_id?: string | null
          base_word?: string
          capitalization_rule?: string | null
          created_at?: string
          formula_hint?: string | null
          id?: string
          length_rule?: number | null
          number_rule?: string | null
          pmi_fields_used?: string[] | null
          special_char_rule?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "pm_pass_vault_app_launcher_id_fkey"
            columns: ["app_launcher_id"]
            isOneToOne: false
            referencedRelation: "pm_app_launcher"
            referencedColumns: ["id"]
          },
        ]
      }
      pm_quick_link_analytics: {
        Row: {
          app_launcher_id: string | null
          clicked_at: string | null
          created_at: string | null
          id: string
          quick_link_id: string
          routine_id: string | null
          source: string
          user_id: string | null
        }
        Insert: {
          app_launcher_id?: string | null
          clicked_at?: string | null
          created_at?: string | null
          id?: string
          quick_link_id: string
          routine_id?: string | null
          source: string
          user_id?: string | null
        }
        Update: {
          app_launcher_id?: string | null
          clicked_at?: string | null
          created_at?: string | null
          id?: string
          quick_link_id?: string
          routine_id?: string | null
          source?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "pm_quick_link_analytics_app_launcher_id_fkey"
            columns: ["app_launcher_id"]
            isOneToOne: false
            referencedRelation: "pm_app_launcher"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pm_quick_link_analytics_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_announcement_targets: {
        Row: {
          announcement_id: string
          created_at: string
          group_tag: string | null
          id: string
          portal_token_id: string | null
        }
        Insert: {
          announcement_id: string
          created_at?: string
          group_tag?: string | null
          id?: string
          portal_token_id?: string | null
        }
        Update: {
          announcement_id?: string
          created_at?: string
          group_tag?: string | null
          id?: string
          portal_token_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "portal_announcement_targets_announcement_id_fkey"
            columns: ["announcement_id"]
            isOneToOne: false
            referencedRelation: "portal_announcements"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_announcements: {
        Row: {
          announcement_type: string
          body: string
          company_id: string | null
          created_at: string
          created_by: string | null
          expires_at: string | null
          facility_id: string | null
          id: string
          is_active: boolean
          is_premium: boolean
          media_type: string | null
          media_url: string | null
          portal_scope: string
          target_type: string
          title: string
          updated_at: string
        }
        Insert: {
          announcement_type?: string
          body: string
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          expires_at?: string | null
          facility_id?: string | null
          id?: string
          is_active?: boolean
          is_premium?: boolean
          media_type?: string | null
          media_url?: string | null
          portal_scope?: string
          target_type?: string
          title: string
          updated_at?: string
        }
        Update: {
          announcement_type?: string
          body?: string
          company_id?: string | null
          created_at?: string
          created_by?: string | null
          expires_at?: string | null
          facility_id?: string | null
          id?: string
          is_active?: boolean
          is_premium?: boolean
          media_type?: string | null
          media_url?: string | null
          portal_scope?: string
          target_type?: string
          title?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "portal_announcements_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_announcements_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_chat_requests: {
        Row: {
          client_account_id: string
          created_at: string
          description: string | null
          id: string
          portal_id: string | null
          priority: string
          response_note: string | null
          status: string
          title: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          client_account_id: string
          created_at?: string
          description?: string | null
          id?: string
          portal_id?: string | null
          priority?: string
          response_note?: string | null
          status?: string
          title: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          client_account_id?: string
          created_at?: string
          description?: string | null
          id?: string
          portal_id?: string | null
          priority?: string
          response_note?: string | null
          status?: string
          title?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "portal_chat_requests_client_account_id_fkey"
            columns: ["client_account_id"]
            isOneToOne: false
            referencedRelation: "client_accounts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_chat_requests_portal_id_fkey"
            columns: ["portal_id"]
            isOneToOne: false
            referencedRelation: "client_project_portals"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_chat_requests_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      portal_invite_codes: {
        Row: {
          client_id: string | null
          code: string
          created_at: string
          created_by: string | null
          email: string | null
          expires_at: string | null
          id: string
          max_uses: number | null
          uses: number | null
          workspace_id: string
        }
        Insert: {
          client_id?: string | null
          code?: string
          created_at?: string
          created_by?: string | null
          email?: string | null
          expires_at?: string | null
          id?: string
          max_uses?: number | null
          uses?: number | null
          workspace_id: string
        }
        Update: {
          client_id?: string | null
          code?: string
          created_at?: string
          created_by?: string | null
          email?: string | null
          expires_at?: string | null
          id?: string
          max_uses?: number | null
          uses?: number | null
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "portal_invite_codes_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "portal_invite_codes_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      post_likes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      post_reactions: {
        Row: {
          created_at: string
          id: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          reaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          reaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_reactions_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      post_resonances: {
        Row: {
          created_at: string
          id: string
          post_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_resonances_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          access_tier: string
          ai_refined_captions: Json | null
          campfire_id: string | null
          content: string
          created_at: string
          description: string | null
          id: string
          is_featured: boolean | null
          is_public: boolean | null
          likes_count: number
          media_attachments: Json | null
          media_type: string | null
          media_urls: string[] | null
          message_origin: string
          moderation_status: string | null
          neighborhood_id: string | null
          priority_level: number | null
          requires_premium: boolean | null
          resonance_count: number | null
          share_count: number | null
          share_slug: string | null
          subject: string | null
          tags: string[] | null
          user_id: string
        }
        Insert: {
          access_tier?: string
          ai_refined_captions?: Json | null
          campfire_id?: string | null
          content: string
          created_at?: string
          description?: string | null
          id?: string
          is_featured?: boolean | null
          is_public?: boolean | null
          likes_count?: number
          media_attachments?: Json | null
          media_type?: string | null
          media_urls?: string[] | null
          message_origin?: string
          moderation_status?: string | null
          neighborhood_id?: string | null
          priority_level?: number | null
          requires_premium?: boolean | null
          resonance_count?: number | null
          share_count?: number | null
          share_slug?: string | null
          subject?: string | null
          tags?: string[] | null
          user_id: string
        }
        Update: {
          access_tier?: string
          ai_refined_captions?: Json | null
          campfire_id?: string | null
          content?: string
          created_at?: string
          description?: string | null
          id?: string
          is_featured?: boolean | null
          is_public?: boolean | null
          likes_count?: number
          media_attachments?: Json | null
          media_type?: string | null
          media_urls?: string[] | null
          message_origin?: string
          moderation_status?: string | null
          neighborhood_id?: string | null
          priority_level?: number | null
          requires_premium?: boolean | null
          resonance_count?: number | null
          share_count?: number | null
          share_slug?: string | null
          subject?: string | null
          tags?: string[] | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_campfire_id_fkey"
            columns: ["campfire_id"]
            isOneToOne: false
            referencedRelation: "village_campfires"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_neighborhood_id_fkey"
            columns: ["neighborhood_id"]
            isOneToOne: false
            referencedRelation: "neighborhoods"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      pr_response_logs: {
        Row: {
          ae_x_reinforcement_message: string | null
          affected_relationship: string | null
          altar_intellect_principle: string | null
          communication_drafts: Json | null
          created_at: string | null
          created_task_ids: string[] | null
          crisis_context: Json
          error_description: string
          gemini_model_used: string | null
          id: string
          question_answers: Json | null
          recovery_plan: Json | null
          related_form_ids: string[] | null
          related_mou_ids: string[] | null
          response_status: string | null
          trigger_source_id: string | null
          trigger_type: string
          updated_at: string | null
          user_feedback: Json | null
          user_id: string
        }
        Insert: {
          ae_x_reinforcement_message?: string | null
          affected_relationship?: string | null
          altar_intellect_principle?: string | null
          communication_drafts?: Json | null
          created_at?: string | null
          created_task_ids?: string[] | null
          crisis_context: Json
          error_description: string
          gemini_model_used?: string | null
          id?: string
          question_answers?: Json | null
          recovery_plan?: Json | null
          related_form_ids?: string[] | null
          related_mou_ids?: string[] | null
          response_status?: string | null
          trigger_source_id?: string | null
          trigger_type: string
          updated_at?: string | null
          user_feedback?: Json | null
          user_id: string
        }
        Update: {
          ae_x_reinforcement_message?: string | null
          affected_relationship?: string | null
          altar_intellect_principle?: string | null
          communication_drafts?: Json | null
          created_at?: string | null
          created_task_ids?: string[] | null
          crisis_context?: Json
          error_description?: string
          gemini_model_used?: string | null
          id?: string
          question_answers?: Json | null
          recovery_plan?: Json | null
          related_form_ids?: string[] | null
          related_mou_ids?: string[] | null
          response_status?: string | null
          trigger_source_id?: string | null
          trigger_type?: string
          updated_at?: string | null
          user_feedback?: Json | null
          user_id?: string
        }
        Relationships: []
      }
      preview_feedback: {
        Row: {
          client_email: string | null
          client_name: string | null
          created_at: string
          general_message: string | null
          id: string
          overall_rating: string | null
          preview_id: string
          reference_images: string[] | null
          section_notes: Json | null
          status: string
        }
        Insert: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          general_message?: string | null
          id?: string
          overall_rating?: string | null
          preview_id: string
          reference_images?: string[] | null
          section_notes?: Json | null
          status?: string
        }
        Update: {
          client_email?: string | null
          client_name?: string | null
          created_at?: string
          general_message?: string | null
          id?: string
          overall_rating?: string | null
          preview_id?: string
          reference_images?: string[] | null
          section_notes?: Json | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "preview_feedback_preview_id_fkey"
            columns: ["preview_id"]
            isOneToOne: false
            referencedRelation: "website_previews"
            referencedColumns: ["id"]
          },
        ]
      }
      privacy_notice_versions: {
        Row: {
          created_at: string
          effective_date: string
          id: string
          is_current: boolean
          notice_text: string
          updated_at: string
          version: string
        }
        Insert: {
          created_at?: string
          effective_date: string
          id?: string
          is_current?: boolean
          notice_text: string
          updated_at?: string
          version: string
        }
        Update: {
          created_at?: string
          effective_date?: string
          id?: string
          is_current?: boolean
          notice_text?: string
          updated_at?: string
          version?: string
        }
        Relationships: []
      }
      professional_applications: {
        Row: {
          application_status: string
          approach_description: string | null
          availability_hours: string | null
          bio: string | null
          business_name: string | null
          consultation_types: string[] | null
          created_at: string
          credentials: string | null
          email_contact: string | null
          id: string
          languages_spoken: string[] | null
          location_city: string | null
          location_country: string | null
          location_state: string | null
          motivation_statement: string | null
          phone_number: string | null
          pricing_range: string | null
          professional_title: string
          reviewed_at: string | null
          reviewer_notes: string | null
          services_offered: string
          specializations: string[] | null
          submitted_at: string
          updated_at: string
          user_id: string
          website_url: string | null
          years_experience: number | null
        }
        Insert: {
          application_status?: string
          approach_description?: string | null
          availability_hours?: string | null
          bio?: string | null
          business_name?: string | null
          consultation_types?: string[] | null
          created_at?: string
          credentials?: string | null
          email_contact?: string | null
          id?: string
          languages_spoken?: string[] | null
          location_city?: string | null
          location_country?: string | null
          location_state?: string | null
          motivation_statement?: string | null
          phone_number?: string | null
          pricing_range?: string | null
          professional_title: string
          reviewed_at?: string | null
          reviewer_notes?: string | null
          services_offered: string
          specializations?: string[] | null
          submitted_at?: string
          updated_at?: string
          user_id: string
          website_url?: string | null
          years_experience?: number | null
        }
        Update: {
          application_status?: string
          approach_description?: string | null
          availability_hours?: string | null
          bio?: string | null
          business_name?: string | null
          consultation_types?: string[] | null
          created_at?: string
          credentials?: string | null
          email_contact?: string | null
          id?: string
          languages_spoken?: string[] | null
          location_city?: string | null
          location_country?: string | null
          location_state?: string | null
          motivation_statement?: string | null
          phone_number?: string | null
          pricing_range?: string | null
          professional_title?: string
          reviewed_at?: string | null
          reviewer_notes?: string | null
          services_offered?: string
          specializations?: string[] | null
          submitted_at?: string
          updated_at?: string
          user_id?: string
          website_url?: string | null
          years_experience?: number | null
        }
        Relationships: []
      }
      professional_directory_listings: {
        Row: {
          approach_description: string | null
          availability_hours: string | null
          average_rating: number | null
          bio: string | null
          business_name: string | null
          consultation_types: string[] | null
          created_at: string | null
          credentials: string | null
          directory_visibility: boolean | null
          email_contact: string | null
          featured_listing: boolean | null
          id: string
          insurance_accepted: string[] | null
          languages_spoken: string[] | null
          last_active: string | null
          location_city: string | null
          location_country: string | null
          location_state: string | null
          phone_number: string | null
          pricing_range: string | null
          professional_id: string
          professional_title: string
          services_offered: string
          specializations: string[] | null
          total_interactions: number | null
          total_reviews: number | null
          updated_at: string | null
          verification_documents: string[] | null
          verification_level: string
          website_url: string | null
          years_experience: number | null
        }
        Insert: {
          approach_description?: string | null
          availability_hours?: string | null
          average_rating?: number | null
          bio?: string | null
          business_name?: string | null
          consultation_types?: string[] | null
          created_at?: string | null
          credentials?: string | null
          directory_visibility?: boolean | null
          email_contact?: string | null
          featured_listing?: boolean | null
          id?: string
          insurance_accepted?: string[] | null
          languages_spoken?: string[] | null
          last_active?: string | null
          location_city?: string | null
          location_country?: string | null
          location_state?: string | null
          phone_number?: string | null
          pricing_range?: string | null
          professional_id: string
          professional_title: string
          services_offered: string
          specializations?: string[] | null
          total_interactions?: number | null
          total_reviews?: number | null
          updated_at?: string | null
          verification_documents?: string[] | null
          verification_level?: string
          website_url?: string | null
          years_experience?: number | null
        }
        Update: {
          approach_description?: string | null
          availability_hours?: string | null
          average_rating?: number | null
          bio?: string | null
          business_name?: string | null
          consultation_types?: string[] | null
          created_at?: string | null
          credentials?: string | null
          directory_visibility?: boolean | null
          email_contact?: string | null
          featured_listing?: boolean | null
          id?: string
          insurance_accepted?: string[] | null
          languages_spoken?: string[] | null
          last_active?: string | null
          location_city?: string | null
          location_country?: string | null
          location_state?: string | null
          phone_number?: string | null
          pricing_range?: string | null
          professional_id?: string
          professional_title?: string
          services_offered?: string
          specializations?: string[] | null
          total_interactions?: number | null
          total_reviews?: number | null
          updated_at?: string | null
          verification_documents?: string[] | null
          verification_level?: string
          website_url?: string | null
          years_experience?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "professional_directory_listings_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_type: string
          member_id: string | null
          points_awarded: number
          professional_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_type: string
          member_id?: string | null
          points_awarded: number
          professional_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_type?: string
          member_id?: string | null
          points_awarded?: number
          professional_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_interactions_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_interactions_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "professional_profiles"
            referencedColumns: ["user_id"]
          },
        ]
      }
      professional_profiles: {
        Row: {
          ad_eligibility_status: boolean
          contact_info: string | null
          created_at: string | null
          id: string
          is_verified: boolean
          rates: string | null
          service_description: string | null
          specialties: string | null
          user_id: string
        }
        Insert: {
          ad_eligibility_status?: boolean
          contact_info?: string | null
          created_at?: string | null
          id?: string
          is_verified?: boolean
          rates?: string | null
          service_description?: string | null
          specialties?: string | null
          user_id: string
        }
        Update: {
          ad_eligibility_status?: boolean
          contact_info?: string | null
          created_at?: string | null
          id?: string
          is_verified?: boolean
          rates?: string | null
          service_description?: string | null
          specialties?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "professional_profiles_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      professional_reviews: {
        Row: {
          created_at: string | null
          helpful_votes: number | null
          id: string
          interaction_type: string | null
          professional_id: string
          rating: number
          review_date: string | null
          review_text: string | null
          reviewer_id: string
          verified_interaction: boolean | null
          would_recommend: boolean | null
        }
        Insert: {
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          interaction_type?: string | null
          professional_id: string
          rating: number
          review_date?: string | null
          review_text?: string | null
          reviewer_id: string
          verified_interaction?: boolean | null
          would_recommend?: boolean | null
        }
        Update: {
          created_at?: string | null
          helpful_votes?: number | null
          id?: string
          interaction_type?: string | null
          professional_id?: string
          rating?: number
          review_date?: string | null
          review_text?: string | null
          reviewer_id?: string
          verified_interaction?: boolean | null
          would_recommend?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "professional_reviews_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "professional_reviews_reviewer_id_fkey"
            columns: ["reviewer_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          account_type: string | null
          address: string | null
          ae_name: string | null
          ae_voice_description: string | null
          ai_name: string | null
          altar_intellect_description: string | null
          avatar_url: string | null
          beta_approval_date: string | null
          beta_approved: boolean | null
          calendar_color_scheme: string | null
          calendar_view_preference: string | null
          conflict_resolution_explanation: string | null
          conflict_resolution_type: string | null
          consequence_analysis_enabled: boolean | null
          contributor_points: number | null
          contributor_status: string | null
          country: string | null
          created_at: string | null
          current_points: number
          custom_reward_name: string | null
          daily_feeling_input: string | null
          debt_management_goals: string | null
          debt_stress_level: number | null
          default_dashboard_view: string | null
          diagnosing_professional: string | null
          diagnosis_type: string | null
          diagnosis_year: number | null
          email: string | null
          emergency_contact: string | null
          financial_outlook: string | null
          goal_1_year: string | null
          goal_3_year_1: string | null
          goal_3_year_2: string | null
          goal_3_year_3: string | null
          goal_5_year: string | null
          has_adhd_diagnosis: boolean | null
          id: string
          is_hardened: boolean
          last_activity_at: string
          login_dashboard_preference: string | null
          medication_provider: string | null
          mens_health_low_testosterone: string | null
          mens_health_mood_energy_conditions: string | null
          mens_health_other_medications: string | null
          mission_statement: string | null
          mission_statement_updated_at: string | null
          morals_and_values: string | null
          movement_statement: string | null
          movement_statement_updated_at: string | null
          nda_signed: boolean
          onboarding_completed: boolean | null
          other_providers: string | null
          overall_goals: string | null
          phone_number: string | null
          post_checkin_view_preference: string | null
          preferred_communication_style: string | null
          primary_therapist_contact: string | null
          primary_therapist_name: string | null
          professional_verified: boolean | null
          psychiatrist_contact: string | null
          psychiatrist_name: string | null
          purpose_statement: string | null
          purpose_updated_at: string
          questionnaire_progress_section: number | null
          recent_loss_input: string | null
          relationship_rank_input: string | null
          role: string
          routine_dashboard_preferences: Json | null
          selected_dashboard_type: string | null
          state_province: string | null
          suicidal_thoughts_input: string | null
          task_notification_hours: Json | null
          task_reminder_preference: string | null
          theme_preference: string | null
          therapy_frequency: string | null
          time_blindness_support_level: string | null
          total_contributions: number | null
          universal_access: boolean | null
          updated_at: string | null
          username: string | null
          womens_health_hormonal_medications: string | null
          womens_health_menstrual_cycle: string | null
          womens_health_pregnancy_history: string | null
          womens_health_reproductive_health: string | null
          zip_postal_code: string | null
        }
        Insert: {
          account_type?: string | null
          address?: string | null
          ae_name?: string | null
          ae_voice_description?: string | null
          ai_name?: string | null
          altar_intellect_description?: string | null
          avatar_url?: string | null
          beta_approval_date?: string | null
          beta_approved?: boolean | null
          calendar_color_scheme?: string | null
          calendar_view_preference?: string | null
          conflict_resolution_explanation?: string | null
          conflict_resolution_type?: string | null
          consequence_analysis_enabled?: boolean | null
          contributor_points?: number | null
          contributor_status?: string | null
          country?: string | null
          created_at?: string | null
          current_points?: number
          custom_reward_name?: string | null
          daily_feeling_input?: string | null
          debt_management_goals?: string | null
          debt_stress_level?: number | null
          default_dashboard_view?: string | null
          diagnosing_professional?: string | null
          diagnosis_type?: string | null
          diagnosis_year?: number | null
          email?: string | null
          emergency_contact?: string | null
          financial_outlook?: string | null
          goal_1_year?: string | null
          goal_3_year_1?: string | null
          goal_3_year_2?: string | null
          goal_3_year_3?: string | null
          goal_5_year?: string | null
          has_adhd_diagnosis?: boolean | null
          id: string
          is_hardened?: boolean
          last_activity_at?: string
          login_dashboard_preference?: string | null
          medication_provider?: string | null
          mens_health_low_testosterone?: string | null
          mens_health_mood_energy_conditions?: string | null
          mens_health_other_medications?: string | null
          mission_statement?: string | null
          mission_statement_updated_at?: string | null
          morals_and_values?: string | null
          movement_statement?: string | null
          movement_statement_updated_at?: string | null
          nda_signed?: boolean
          onboarding_completed?: boolean | null
          other_providers?: string | null
          overall_goals?: string | null
          phone_number?: string | null
          post_checkin_view_preference?: string | null
          preferred_communication_style?: string | null
          primary_therapist_contact?: string | null
          primary_therapist_name?: string | null
          professional_verified?: boolean | null
          psychiatrist_contact?: string | null
          psychiatrist_name?: string | null
          purpose_statement?: string | null
          purpose_updated_at?: string
          questionnaire_progress_section?: number | null
          recent_loss_input?: string | null
          relationship_rank_input?: string | null
          role?: string
          routine_dashboard_preferences?: Json | null
          selected_dashboard_type?: string | null
          state_province?: string | null
          suicidal_thoughts_input?: string | null
          task_notification_hours?: Json | null
          task_reminder_preference?: string | null
          theme_preference?: string | null
          therapy_frequency?: string | null
          time_blindness_support_level?: string | null
          total_contributions?: number | null
          universal_access?: boolean | null
          updated_at?: string | null
          username?: string | null
          womens_health_hormonal_medications?: string | null
          womens_health_menstrual_cycle?: string | null
          womens_health_pregnancy_history?: string | null
          womens_health_reproductive_health?: string | null
          zip_postal_code?: string | null
        }
        Update: {
          account_type?: string | null
          address?: string | null
          ae_name?: string | null
          ae_voice_description?: string | null
          ai_name?: string | null
          altar_intellect_description?: string | null
          avatar_url?: string | null
          beta_approval_date?: string | null
          beta_approved?: boolean | null
          calendar_color_scheme?: string | null
          calendar_view_preference?: string | null
          conflict_resolution_explanation?: string | null
          conflict_resolution_type?: string | null
          consequence_analysis_enabled?: boolean | null
          contributor_points?: number | null
          contributor_status?: string | null
          country?: string | null
          created_at?: string | null
          current_points?: number
          custom_reward_name?: string | null
          daily_feeling_input?: string | null
          debt_management_goals?: string | null
          debt_stress_level?: number | null
          default_dashboard_view?: string | null
          diagnosing_professional?: string | null
          diagnosis_type?: string | null
          diagnosis_year?: number | null
          email?: string | null
          emergency_contact?: string | null
          financial_outlook?: string | null
          goal_1_year?: string | null
          goal_3_year_1?: string | null
          goal_3_year_2?: string | null
          goal_3_year_3?: string | null
          goal_5_year?: string | null
          has_adhd_diagnosis?: boolean | null
          id?: string
          is_hardened?: boolean
          last_activity_at?: string
          login_dashboard_preference?: string | null
          medication_provider?: string | null
          mens_health_low_testosterone?: string | null
          mens_health_mood_energy_conditions?: string | null
          mens_health_other_medications?: string | null
          mission_statement?: string | null
          mission_statement_updated_at?: string | null
          morals_and_values?: string | null
          movement_statement?: string | null
          movement_statement_updated_at?: string | null
          nda_signed?: boolean
          onboarding_completed?: boolean | null
          other_providers?: string | null
          overall_goals?: string | null
          phone_number?: string | null
          post_checkin_view_preference?: string | null
          preferred_communication_style?: string | null
          primary_therapist_contact?: string | null
          primary_therapist_name?: string | null
          professional_verified?: boolean | null
          psychiatrist_contact?: string | null
          psychiatrist_name?: string | null
          purpose_statement?: string | null
          purpose_updated_at?: string
          questionnaire_progress_section?: number | null
          recent_loss_input?: string | null
          relationship_rank_input?: string | null
          role?: string
          routine_dashboard_preferences?: Json | null
          selected_dashboard_type?: string | null
          state_province?: string | null
          suicidal_thoughts_input?: string | null
          task_notification_hours?: Json | null
          task_reminder_preference?: string | null
          theme_preference?: string | null
          therapy_frequency?: string | null
          time_blindness_support_level?: string | null
          total_contributions?: number | null
          universal_access?: boolean | null
          updated_at?: string | null
          username?: string | null
          womens_health_hormonal_medications?: string | null
          womens_health_menstrual_cycle?: string | null
          womens_health_pregnancy_history?: string | null
          womens_health_reproductive_health?: string | null
          zip_postal_code?: string | null
        }
        Relationships: []
      }
      program_enrollment: {
        Row: {
          company_id: string
          compliance_score: number | null
          created_at: string | null
          current_module: string | null
          current_week: number | null
          enrolled_at: string | null
          enrollment_status: string | null
          id: string
          program_end_date: string | null
          program_start_date: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          company_id: string
          compliance_score?: number | null
          created_at?: string | null
          current_module?: string | null
          current_week?: number | null
          enrolled_at?: string | null
          enrollment_status?: string | null
          id?: string
          program_end_date?: string | null
          program_start_date: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          company_id?: string
          compliance_score?: number | null
          created_at?: string | null
          current_module?: string | null
          current_week?: number | null
          enrolled_at?: string | null
          enrollment_status?: string | null
          id?: string
          program_end_date?: string | null
          program_start_date?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "program_enrollment_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      program_progress: {
        Row: {
          accountability_score: number | null
          average_daily_mood_score: number | null
          average_task_completion_rate: number | null
          car_tasks_completed: number | null
          car_tasks_total: number | null
          coherence_score: number | null
          communication_score: number | null
          company_id: string
          created_at: string | null
          enrollment_id: string
          id: string
          is_complete: boolean | null
          module_completion_date: string | null
          module_name: string
          notes: string | null
          responsibility_score: number | null
          updated_at: string | null
          user_id: string
          week_number: number
        }
        Insert: {
          accountability_score?: number | null
          average_daily_mood_score?: number | null
          average_task_completion_rate?: number | null
          car_tasks_completed?: number | null
          car_tasks_total?: number | null
          coherence_score?: number | null
          communication_score?: number | null
          company_id: string
          created_at?: string | null
          enrollment_id: string
          id?: string
          is_complete?: boolean | null
          module_completion_date?: string | null
          module_name: string
          notes?: string | null
          responsibility_score?: number | null
          updated_at?: string | null
          user_id: string
          week_number: number
        }
        Update: {
          accountability_score?: number | null
          average_daily_mood_score?: number | null
          average_task_completion_rate?: number | null
          car_tasks_completed?: number | null
          car_tasks_total?: number | null
          coherence_score?: number | null
          communication_score?: number | null
          company_id?: string
          created_at?: string | null
          enrollment_id?: string
          id?: string
          is_complete?: boolean | null
          module_completion_date?: string | null
          module_name?: string
          notes?: string | null
          responsibility_score?: number | null
          updated_at?: string | null
          user_id?: string
          week_number?: number
        }
        Relationships: [
          {
            foreignKeyName: "program_progress_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "company_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "program_progress_enrollment_id_fkey"
            columns: ["enrollment_id"]
            isOneToOne: false
            referencedRelation: "program_enrollment"
            referencedColumns: ["id"]
          },
        ]
      }
      project_assignments: {
        Row: {
          assigned_at: string | null
          assigned_by: string | null
          created_at: string | null
          id: string
          member_id: string
          project_id: string
          role_in_project: string
          updated_at: string | null
        }
        Insert: {
          assigned_at?: string | null
          assigned_by?: string | null
          created_at?: string | null
          id?: string
          member_id: string
          project_id: string
          role_in_project?: string
          updated_at?: string | null
        }
        Update: {
          assigned_at?: string | null
          assigned_by?: string | null
          created_at?: string | null
          id?: string
          member_id?: string
          project_id?: string
          role_in_project?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "project_assignments_member_id_fkey"
            columns: ["member_id"]
            isOneToOne: false
            referencedRelation: "company_members"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "project_assignments_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      project_status_updates: {
        Row: {
          created_at: string
          financial_context: Json | null
          id: string
          media_files: Json | null
          project_id: string
          status_text: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          financial_context?: Json | null
          id?: string
          media_files?: Json | null
          project_id: string
          status_text: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          financial_context?: Json | null
          id?: string
          media_files?: Json | null
          project_id?: string
          status_text?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "project_status_updates_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "business_projects"
            referencedColumns: ["id"]
          },
        ]
      }
      projects: {
        Row: {
          client_id: string | null
          created_at: string
          description: string | null
          id: string
          name: string
          share_token: string | null
          status: string
          updated_at: string
          workspace_id: string
        }
        Insert: {
          client_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name: string
          share_token?: string | null
          status?: string
          updated_at?: string
          workspace_id: string
        }
        Update: {
          client_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          share_token?: string | null
          status?: string
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "projects_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "projects_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      prompt_interactions: {
        Row: {
          created_at: string
          id: string
          interaction_type: string
          prompt_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          interaction_type: string
          prompt_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          interaction_type?: string
          prompt_id?: string
          user_id?: string
        }
        Relationships: []
      }
      promptme_refine_history: {
        Row: {
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_result: string | null
          created_at: string
          generated_text: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          generated_text: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_result?: string | null
          created_at?: string
          generated_text?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      promptme_tasks: {
        Row: {
          ae_x_alignment_score: number | null
          calendar_event_id: string | null
          coins_awarded: number | null
          completed_at: string | null
          created_at: string | null
          due_date: string | null
          empathy_context: Json | null
          estimated_duration_minutes: number | null
          id: string
          linked_defining_moments: Json | null
          priority: string | null
          rated_at: string | null
          rating_request_sent_at: string | null
          recipient_id: string | null
          reminder_count: number | null
          reminder_datetime: string | null
          reminder_sent_at: string | null
          status: string | null
          tags: Json | null
          task_description: string | null
          task_quality_rating: number | null
          task_title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          ae_x_alignment_score?: number | null
          calendar_event_id?: string | null
          coins_awarded?: number | null
          completed_at?: string | null
          created_at?: string | null
          due_date?: string | null
          empathy_context?: Json | null
          estimated_duration_minutes?: number | null
          id?: string
          linked_defining_moments?: Json | null
          priority?: string | null
          rated_at?: string | null
          rating_request_sent_at?: string | null
          recipient_id?: string | null
          reminder_count?: number | null
          reminder_datetime?: string | null
          reminder_sent_at?: string | null
          status?: string | null
          tags?: Json | null
          task_description?: string | null
          task_quality_rating?: number | null
          task_title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          ae_x_alignment_score?: number | null
          calendar_event_id?: string | null
          coins_awarded?: number | null
          completed_at?: string | null
          created_at?: string | null
          due_date?: string | null
          empathy_context?: Json | null
          estimated_duration_minutes?: number | null
          id?: string
          linked_defining_moments?: Json | null
          priority?: string | null
          rated_at?: string | null
          rating_request_sent_at?: string | null
          recipient_id?: string | null
          reminder_count?: number | null
          reminder_datetime?: string | null
          reminder_sent_at?: string | null
          status?: string | null
          tags?: Json | null
          task_description?: string | null
          task_quality_rating?: number | null
          task_title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "promptme_tasks_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promptme_tasks_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "task_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "promptme_tasks_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      properties: {
        Row: {
          ap_num: string | null
          city: string | null
          company_id: string | null
          created_at: string
          full_address: string
          id: string
          insurance_company: string | null
          insurance_expiry: string | null
          insurance_policy_number: string | null
          mortgage_company: string | null
          property_manager_name: string | null
          property_manager_phone: string | null
          property_type: string | null
          purchase_price: number | null
          state: string | null
          units: number | null
          updated_at: string
          user_id: string
          utility_provider_electric: string | null
          utility_provider_gas: string | null
          utility_provider_water: string | null
          year_built: number | null
          zip_code: string | null
        }
        Insert: {
          ap_num?: string | null
          city?: string | null
          company_id?: string | null
          created_at?: string
          full_address: string
          id?: string
          insurance_company?: string | null
          insurance_expiry?: string | null
          insurance_policy_number?: string | null
          mortgage_company?: string | null
          property_manager_name?: string | null
          property_manager_phone?: string | null
          property_type?: string | null
          purchase_price?: number | null
          state?: string | null
          units?: number | null
          updated_at?: string
          user_id: string
          utility_provider_electric?: string | null
          utility_provider_gas?: string | null
          utility_provider_water?: string | null
          year_built?: number | null
          zip_code?: string | null
        }
        Update: {
          ap_num?: string | null
          city?: string | null
          company_id?: string | null
          created_at?: string
          full_address?: string
          id?: string
          insurance_company?: string | null
          insurance_expiry?: string | null
          insurance_policy_number?: string | null
          mortgage_company?: string | null
          property_manager_name?: string | null
          property_manager_phone?: string | null
          property_type?: string | null
          purchase_price?: number | null
          state?: string | null
          units?: number | null
          updated_at?: string
          user_id?: string
          utility_provider_electric?: string | null
          utility_provider_gas?: string | null
          utility_provider_water?: string | null
          year_built?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      property_account_notes: {
        Row: {
          created_at: string | null
          id: string
          is_sensitive: boolean | null
          label: string
          note_type: string
          property_id: string
          updated_at: string | null
          user_id: string
          value: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_sensitive?: boolean | null
          label: string
          note_type: string
          property_id: string
          updated_at?: string | null
          user_id: string
          value: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_sensitive?: boolean | null
          label?: string
          note_type?: string
          property_id?: string
          updated_at?: string | null
          user_id?: string
          value?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_account_notes_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_account_notes_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      property_analysis_logs: {
        Row: {
          ai_ae_ai_insights: string | null
          ai_alignment_feedback: string | null
          ai_lender_suggestions: string | null
          ai_market_analysis: string | null
          ai_pros_cons: string | null
          created_at: string
          id: string
          property_details_json: Json | null
          user_id: string
          zip_codes_searched: string
        }
        Insert: {
          ai_ae_ai_insights?: string | null
          ai_alignment_feedback?: string | null
          ai_lender_suggestions?: string | null
          ai_market_analysis?: string | null
          ai_pros_cons?: string | null
          created_at?: string
          id?: string
          property_details_json?: Json | null
          user_id: string
          zip_codes_searched: string
        }
        Update: {
          ai_ae_ai_insights?: string | null
          ai_alignment_feedback?: string | null
          ai_lender_suggestions?: string | null
          ai_market_analysis?: string | null
          ai_pros_cons?: string | null
          created_at?: string
          id?: string
          property_details_json?: Json | null
          user_id?: string
          zip_codes_searched?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_analysis_logs_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      property_clients: {
        Row: {
          client_email: string
          client_name: string
          client_user_id: string
          created_at: string
          id: string
          permissions: Json
          property_id: string
          role: string
          status: string
          typed_role: Database["public"]["Enums"]["property_client_role"]
        }
        Insert: {
          client_email: string
          client_name: string
          client_user_id: string
          created_at?: string
          id?: string
          permissions?: Json
          property_id: string
          role?: string
          status?: string
          typed_role?: Database["public"]["Enums"]["property_client_role"]
        }
        Update: {
          client_email?: string
          client_name?: string
          client_user_id?: string
          created_at?: string
          id?: string
          permissions?: Json
          property_id?: string
          role?: string
          status?: string
          typed_role?: Database["public"]["Enums"]["property_client_role"]
        }
        Relationships: [
          {
            foreignKeyName: "property_clients_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_clients_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      property_media: {
        Row: {
          caption: string | null
          category: string
          created_at: string
          file_url: string
          id: string
          media_type: string
          property_id: string
          uploaded_by: string
        }
        Insert: {
          caption?: string | null
          category?: string
          created_at?: string
          file_url: string
          id?: string
          media_type?: string
          property_id: string
          uploaded_by: string
        }
        Update: {
          caption?: string | null
          category?: string
          created_at?: string
          file_url?: string
          id?: string
          media_type?: string
          property_id?: string
          uploaded_by?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_media_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_media_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      property_meters: {
        Row: {
          account_number: string | null
          created_at: string | null
          id: string
          is_active: boolean | null
          login_url: string | null
          meter_number: string | null
          notes: string | null
          property_id: string
          provider_name: string | null
          updated_at: string | null
          user_id: string
          username_hint: string | null
          utility_type: string
        }
        Insert: {
          account_number?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          login_url?: string | null
          meter_number?: string | null
          notes?: string | null
          property_id: string
          provider_name?: string | null
          updated_at?: string | null
          user_id: string
          username_hint?: string | null
          utility_type: string
        }
        Update: {
          account_number?: string | null
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          login_url?: string | null
          meter_number?: string | null
          notes?: string | null
          property_id?: string
          provider_name?: string | null
          updated_at?: string | null
          user_id?: string
          username_hint?: string | null
          utility_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_meters_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_meters_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      property_updates: {
        Row: {
          created_at: string
          id: string
          message: string
          posted_by: string
          property_id: string
          title: string
          update_type: string
        }
        Insert: {
          created_at?: string
          id?: string
          message: string
          posted_by: string
          property_id: string
          title: string
          update_type?: string
        }
        Update: {
          created_at?: string
          id?: string
          message?: string
          posted_by?: string
          property_id?: string
          title?: string
          update_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "property_updates_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "property_updates_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      proxy_video_generations: {
        Row: {
          avatar_id: string
          deployed_to: string[] | null
          duration_seconds: number | null
          generated_at: string | null
          generation_status: string | null
          id: string
          script_text: string | null
          user_id: string
          video_url: string | null
          voice_id: string | null
          watermark_hash: string | null
        }
        Insert: {
          avatar_id: string
          deployed_to?: string[] | null
          duration_seconds?: number | null
          generated_at?: string | null
          generation_status?: string | null
          id?: string
          script_text?: string | null
          user_id: string
          video_url?: string | null
          voice_id?: string | null
          watermark_hash?: string | null
        }
        Update: {
          avatar_id?: string
          deployed_to?: string[] | null
          duration_seconds?: number | null
          generated_at?: string | null
          generation_status?: string | null
          id?: string
          script_text?: string | null
          user_id?: string
          video_url?: string | null
          voice_id?: string | null
          watermark_hash?: string | null
        }
        Relationships: []
      }
      purpose_alignment_analysis: {
        Row: {
          analysis_result: Json
          created_at: string
          data_analyzed: Json
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_result?: Json
          created_at?: string
          data_analyzed?: Json
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_result?: Json
          created_at?: string
          data_analyzed?: Json
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      purpose_alignment_insights: {
        Row: {
          ae_action_count: number | null
          ae_alignment_impact: number | null
          ai_action_count: number | null
          ai_alignment_impact: number | null
          analysis_period_end: string
          analysis_period_start: string
          created_at: string
          data_sources_analyzed: Json | null
          goal_completion_rate: number | null
          id: string
          misalignment_patterns: Json | null
          neutral_action_count: number | null
          neutral_alignment_impact: number | null
          overall_alignment_score: number | null
          recommendations: Json | null
          top_alignment_activities: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          ae_action_count?: number | null
          ae_alignment_impact?: number | null
          ai_action_count?: number | null
          ai_alignment_impact?: number | null
          analysis_period_end: string
          analysis_period_start: string
          created_at?: string
          data_sources_analyzed?: Json | null
          goal_completion_rate?: number | null
          id?: string
          misalignment_patterns?: Json | null
          neutral_action_count?: number | null
          neutral_alignment_impact?: number | null
          overall_alignment_score?: number | null
          recommendations?: Json | null
          top_alignment_activities?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          ae_action_count?: number | null
          ae_alignment_impact?: number | null
          ai_action_count?: number | null
          ai_alignment_impact?: number | null
          analysis_period_end?: string
          analysis_period_start?: string
          created_at?: string
          data_sources_analyzed?: Json | null
          goal_completion_rate?: number | null
          id?: string
          misalignment_patterns?: Json | null
          neutral_action_count?: number | null
          neutral_alignment_impact?: number | null
          overall_alignment_score?: number | null
          recommendations?: Json | null
          top_alignment_activities?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      purpose_goal_progress: {
        Row: {
          alignment_score: number | null
          data_source: string
          goal_id: string
          id: string
          progress_note: string | null
          progress_percentage: number | null
          recorded_at: string
          source_id: string | null
          user_id: string
        }
        Insert: {
          alignment_score?: number | null
          data_source?: string
          goal_id: string
          id?: string
          progress_note?: string | null
          progress_percentage?: number | null
          recorded_at?: string
          source_id?: string | null
          user_id: string
        }
        Update: {
          alignment_score?: number | null
          data_source?: string
          goal_id?: string
          id?: string
          progress_note?: string | null
          progress_percentage?: number | null
          recorded_at?: string
          source_id?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "purpose_goal_progress_goal_id_fkey"
            columns: ["goal_id"]
            isOneToOne: false
            referencedRelation: "purpose_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      purpose_goals: {
        Row: {
          completed_at: string | null
          created_at: string
          goal_text: string
          goal_type: string
          id: string
          is_completed: boolean
          priority_level: number | null
          status: string | null
          target_completion_date: string | null
          target_date: string
          updated_at: string
          user_id: string
          week_start_date: string | null
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          goal_text: string
          goal_type: string
          id?: string
          is_completed?: boolean
          priority_level?: number | null
          status?: string | null
          target_completion_date?: string | null
          target_date: string
          updated_at?: string
          user_id: string
          week_start_date?: string | null
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          goal_text?: string
          goal_type?: string
          id?: string
          is_completed?: boolean
          priority_level?: number | null
          status?: string | null
          target_completion_date?: string | null
          target_date?: string
          updated_at?: string
          user_id?: string
          week_start_date?: string | null
        }
        Relationships: []
      }
      purpose_tracker_logs: {
        Row: {
          ai_analysis: Json | null
          created_at: string
          generated_purpose_statement: string | null
          generated_reminders: Json | null
          id: string
          purpose_questions: Json
          updated_at: string
          user_id: string
        }
        Insert: {
          ai_analysis?: Json | null
          created_at?: string
          generated_purpose_statement?: string | null
          generated_reminders?: Json | null
          id?: string
          purpose_questions?: Json
          updated_at?: string
          user_id: string
        }
        Update: {
          ai_analysis?: Json | null
          created_at?: string
          generated_purpose_statement?: string | null
          generated_reminders?: Json | null
          id?: string
          purpose_questions?: Json
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      questionnaire_file_uploads: {
        Row: {
          file_name: string
          file_size: number | null
          file_type: string | null
          file_url: string
          id: string
          question_id: string
          questionnaire_id: string
          uploaded_at: string
        }
        Insert: {
          file_name: string
          file_size?: number | null
          file_type?: string | null
          file_url: string
          id?: string
          question_id: string
          questionnaire_id: string
          uploaded_at?: string
        }
        Update: {
          file_name?: string
          file_size?: number | null
          file_type?: string | null
          file_url?: string
          id?: string
          question_id?: string
          questionnaire_id?: string
          uploaded_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_file_uploads_questionnaire_id_fkey"
            columns: ["questionnaire_id"]
            isOneToOne: false
            referencedRelation: "client_questionnaires"
            referencedColumns: ["id"]
          },
        ]
      }
      questionnaire_progress_log: {
        Row: {
          answered_at: string | null
          created_at: string | null
          id: string
          question_id: string
          questionnaire_id: string
          section_name: string | null
        }
        Insert: {
          answered_at?: string | null
          created_at?: string | null
          id?: string
          question_id: string
          questionnaire_id: string
          section_name?: string | null
        }
        Update: {
          answered_at?: string | null
          created_at?: string | null
          id?: string
          question_id?: string
          questionnaire_id?: string
          section_name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_progress_log_questionnaire_id_fkey"
            columns: ["questionnaire_id"]
            isOneToOne: false
            referencedRelation: "client_questionnaires"
            referencedColumns: ["id"]
          },
        ]
      }
      questionnaire_templates: {
        Row: {
          branding: Json | null
          created_at: string
          description: string | null
          id: string
          is_default: boolean | null
          name: string
          questions: Json
          updated_at: string
          workspace_id: string
        }
        Insert: {
          branding?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          is_default?: boolean | null
          name: string
          questions?: Json
          updated_at?: string
          workspace_id: string
        }
        Update: {
          branding?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
          questions?: Json
          updated_at?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "questionnaire_templates_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      resident_checkins: {
        Row: {
          anxiety_level: number | null
          checkin_date: string
          checkin_time: string | null
          checkin_type: string
          concerns: string | null
          created_at: string
          energy_level: number | null
          follow_up_cpr: Json | null
          goals_for_period: string | null
          id: string
          missed: boolean | null
          missed_reason: string | null
          mood_score: number | null
          notes: string | null
          resident_id: string
          risk_flags: Json | null
          sleep_quality: number | null
          staff_notified: boolean | null
          staff_notified_at: string | null
          updated_at: string
        }
        Insert: {
          anxiety_level?: number | null
          checkin_date?: string
          checkin_time?: string | null
          checkin_type: string
          concerns?: string | null
          created_at?: string
          energy_level?: number | null
          follow_up_cpr?: Json | null
          goals_for_period?: string | null
          id?: string
          missed?: boolean | null
          missed_reason?: string | null
          mood_score?: number | null
          notes?: string | null
          resident_id: string
          risk_flags?: Json | null
          sleep_quality?: number | null
          staff_notified?: boolean | null
          staff_notified_at?: string | null
          updated_at?: string
        }
        Update: {
          anxiety_level?: number | null
          checkin_date?: string
          checkin_time?: string | null
          checkin_type?: string
          concerns?: string | null
          created_at?: string
          energy_level?: number | null
          follow_up_cpr?: Json | null
          goals_for_period?: string | null
          id?: string
          missed?: boolean | null
          missed_reason?: string | null
          mood_score?: number | null
          notes?: string | null
          resident_id?: string
          risk_flags?: Json | null
          sleep_quality?: number | null
          staff_notified?: boolean | null
          staff_notified_at?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "resident_checkins_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
        ]
      }
      resident_portal_messages: {
        Row: {
          content: string | null
          created_at: string
          facility_id: string
          id: string
          is_escalated: boolean
          is_read: boolean
          message_type: string
          photo_url: string | null
          portal_id: string
          sender_id: string | null
          sender_role: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          facility_id: string
          id?: string
          is_escalated?: boolean
          is_read?: boolean
          message_type?: string
          photo_url?: string | null
          portal_id: string
          sender_id?: string | null
          sender_role?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          facility_id?: string
          id?: string
          is_escalated?: boolean
          is_read?: boolean
          message_type?: string
          photo_url?: string | null
          portal_id?: string
          sender_id?: string | null
          sender_role?: string
        }
        Relationships: [
          {
            foreignKeyName: "resident_portal_messages_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_portal_messages_portal_id_fkey"
            columns: ["portal_id"]
            isOneToOne: false
            referencedRelation: "resident_portal_tokens"
            referencedColumns: ["id"]
          },
        ]
      }
      resident_portal_tokens: {
        Row: {
          created_at: string
          facility_id: string
          id: string
          is_active: boolean
          last_accessed_at: string | null
          resident_email: string | null
          resident_id: string
          resident_name: string
          token: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          created_at?: string
          facility_id: string
          id?: string
          is_active?: boolean
          last_accessed_at?: string | null
          resident_email?: string | null
          resident_id: string
          resident_name: string
          token?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          created_at?: string
          facility_id?: string
          id?: string
          is_active?: boolean
          last_accessed_at?: string | null
          resident_email?: string | null
          resident_id?: string
          resident_name?: string
          token?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "resident_portal_tokens_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_portal_tokens_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
        ]
      }
      resident_task_completions: {
        Row: {
          checklist_id: string
          completed_at: string | null
          completion_notes: string | null
          cpr_initiated: boolean | null
          cpr_response: Json | null
          created_at: string
          id: string
          minutes_late: number | null
          points_earned: number | null
          resident_id: string
          scheduled_date: string
          scheduled_for: string
          staff_verified: boolean | null
          updated_at: string
          verified_at: string | null
          verified_by: string | null
          was_late: boolean | null
          was_missed: boolean | null
        }
        Insert: {
          checklist_id: string
          completed_at?: string | null
          completion_notes?: string | null
          cpr_initiated?: boolean | null
          cpr_response?: Json | null
          created_at?: string
          id?: string
          minutes_late?: number | null
          points_earned?: number | null
          resident_id: string
          scheduled_date: string
          scheduled_for: string
          staff_verified?: boolean | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
          was_late?: boolean | null
          was_missed?: boolean | null
        }
        Update: {
          checklist_id?: string
          completed_at?: string | null
          completion_notes?: string | null
          cpr_initiated?: boolean | null
          cpr_response?: Json | null
          created_at?: string
          id?: string
          minutes_late?: number | null
          points_earned?: number | null
          resident_id?: string
          scheduled_date?: string
          scheduled_for?: string
          staff_verified?: boolean | null
          updated_at?: string
          verified_at?: string | null
          verified_by?: string | null
          was_late?: boolean | null
          was_missed?: boolean | null
        }
        Relationships: [
          {
            foreignKeyName: "resident_task_completions_checklist_id_fkey"
            columns: ["checklist_id"]
            isOneToOne: false
            referencedRelation: "care_checklists"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_task_completions_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "resident_task_completions_verified_by_fkey"
            columns: ["verified_by"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      reward_transactions: {
        Row: {
          created_at: string | null
          description: string
          id: string
          metadata: Json | null
          points_amount: number
          processed_at: string | null
          source_id: string | null
          source_type: string
          transaction_type: string
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description: string
          id?: string
          metadata?: Json | null
          points_amount: number
          processed_at?: string | null
          source_id?: string | null
          source_type: string
          transaction_type: string
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string
          id?: string
          metadata?: Json | null
          points_amount?: number
          processed_at?: string | null
          source_id?: string | null
          source_type?: string
          transaction_type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reward_transactions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      routine_completions: {
        Row: {
          calendar_event_id: string | null
          coins_awarded: number | null
          completed_at: string | null
          created_at: string | null
          id: string
          routine_id: string
          tasks_completed: number | null
          tasks_total: number | null
          total_time_minutes: number | null
          user_id: string
        }
        Insert: {
          calendar_event_id?: string | null
          coins_awarded?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_id: string
          tasks_completed?: number | null
          tasks_total?: number | null
          total_time_minutes?: number | null
          user_id: string
        }
        Update: {
          calendar_event_id?: string | null
          coins_awarded?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_id?: string
          tasks_completed?: number | null
          tasks_total?: number | null
          total_time_minutes?: number | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "routine_completions_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_completions_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      routine_task_completions: {
        Row: {
          actual_time_minutes: number | null
          completed_at: string | null
          created_at: string | null
          id: string
          routine_completion_id: string
          task_id: string
        }
        Insert: {
          actual_time_minutes?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_completion_id: string
          task_id: string
        }
        Update: {
          actual_time_minutes?: number | null
          completed_at?: string | null
          created_at?: string | null
          id?: string
          routine_completion_id?: string
          task_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "routine_task_completions_routine_completion_id_fkey"
            columns: ["routine_completion_id"]
            isOneToOne: false
            referencedRelation: "routine_completions"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_task_completions_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "routine_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      routine_tasks: {
        Row: {
          app_launcher_id: string | null
          created_at: string | null
          description: string | null
          id: string
          is_chunked: boolean | null
          motivation_prompt: string | null
          order_index: number
          parent_task_id: string | null
          routine_id: string
          task_name: string
          task_type: string | null
          time_estimate_minutes: number | null
          updated_at: string | null
        }
        Insert: {
          app_launcher_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_chunked?: boolean | null
          motivation_prompt?: string | null
          order_index: number
          parent_task_id?: string | null
          routine_id: string
          task_name: string
          task_type?: string | null
          time_estimate_minutes?: number | null
          updated_at?: string | null
        }
        Update: {
          app_launcher_id?: string | null
          created_at?: string | null
          description?: string | null
          id?: string
          is_chunked?: boolean | null
          motivation_prompt?: string | null
          order_index?: number
          parent_task_id?: string | null
          routine_id?: string
          task_name?: string
          task_type?: string | null
          time_estimate_minutes?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "routine_tasks_app_launcher_id_fkey"
            columns: ["app_launcher_id"]
            isOneToOne: false
            referencedRelation: "pm_app_launcher"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_tasks_parent_task_id_fkey"
            columns: ["parent_task_id"]
            isOneToOne: false
            referencedRelation: "routine_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "routine_tasks_routine_id_fkey"
            columns: ["routine_id"]
            isOneToOne: false
            referencedRelation: "routines"
            referencedColumns: ["id"]
          },
        ]
      }
      routines: {
        Row: {
          created_at: string | null
          description: string | null
          duration_minutes: number | null
          id: string
          is_active: boolean | null
          name: string
          start_time: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean | null
          name: string
          start_time?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          description?: string | null
          duration_minutes?: number | null
          id?: string
          is_active?: boolean | null
          name?: string
          start_time?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      savings_pillars: {
        Row: {
          allocation_pct: number
          created_at: string
          description: string | null
          id: string
          pillar_id: number
          pillar_name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          allocation_pct?: number
          created_at?: string
          description?: string | null
          id?: string
          pillar_id: number
          pillar_name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          allocation_pct?: number
          created_at?: string
          description?: string | null
          id?: string
          pillar_id?: number
          pillar_name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      security_events: {
        Row: {
          actor_id: string
          created_at: string
          event_type: string
          id: string
          ip_address: unknown
          metadata: Json
          resource_id: string | null
          resource_type: string
          user_agent: string | null
        }
        Insert: {
          actor_id: string
          created_at?: string
          event_type: string
          id?: string
          ip_address?: unknown
          metadata?: Json
          resource_id?: string | null
          resource_type: string
          user_agent?: string | null
        }
        Update: {
          actor_id?: string
          created_at?: string
          event_type?: string
          id?: string
          ip_address?: unknown
          metadata?: Json
          resource_id?: string | null
          resource_type?: string
          user_agent?: string | null
        }
        Relationships: []
      }
      sentry_app_registry: {
        Row: {
          app_name: string
          app_url: string
          created_at: string
          id: string
          last_adhd_score: number | null
          last_checked_at: string | null
          last_health_score: number | null
          supabase_project_id: string | null
          tier: string
          user_id: string
        }
        Insert: {
          app_name: string
          app_url: string
          created_at?: string
          id?: string
          last_adhd_score?: number | null
          last_checked_at?: string | null
          last_health_score?: number | null
          supabase_project_id?: string | null
          tier?: string
          user_id: string
        }
        Update: {
          app_name?: string
          app_url?: string
          created_at?: string
          id?: string
          last_adhd_score?: number | null
          last_checked_at?: string | null
          last_health_score?: number | null
          supabase_project_id?: string | null
          tier?: string
          user_id?: string
        }
        Relationships: []
      }
      sentry_audit_results: {
        Row: {
          app_id: string
          audit_type: string
          created_at: string
          details: Json | null
          id: string
          score: number | null
          status: string
        }
        Insert: {
          app_id: string
          audit_type: string
          created_at?: string
          details?: Json | null
          id?: string
          score?: number | null
          status?: string
        }
        Update: {
          app_id?: string
          audit_type?: string
          created_at?: string
          details?: Json | null
          id?: string
          score?: number | null
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "sentry_audit_results_app_id_fkey"
            columns: ["app_id"]
            isOneToOne: false
            referencedRelation: "sentry_app_registry"
            referencedColumns: ["id"]
          },
        ]
      }
      session_logs: {
        Row: {
          client_id: string
          client_responses_json: Json | null
          created_at: string
          id: string
          module_assignment_id: string
          professional_id: string
          session_end_at: string | null
          session_notes: string | null
          session_start_at: string
        }
        Insert: {
          client_id: string
          client_responses_json?: Json | null
          created_at?: string
          id?: string
          module_assignment_id: string
          professional_id: string
          session_end_at?: string | null
          session_notes?: string | null
          session_start_at?: string
        }
        Update: {
          client_id?: string
          client_responses_json?: Json | null
          created_at?: string
          id?: string
          module_assignment_id?: string
          professional_id?: string
          session_end_at?: string | null
          session_notes?: string | null
          session_start_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "session_logs_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_logs_module_assignment_id_fkey"
            columns: ["module_assignment_id"]
            isOneToOne: false
            referencedRelation: "module_assignments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "session_logs_professional_id_fkey"
            columns: ["professional_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sibling_communications: {
        Row: {
          ai_translation: string | null
          created_at: string
          id: string
          is_moderated: boolean
          message_text: string
          message_type: string
          moderation_flag: string | null
          pairing_id: string
          parent_viewed: boolean
          receiver_child_id: string
          sender_child_id: string
          updated_at: string
        }
        Insert: {
          ai_translation?: string | null
          created_at?: string
          id?: string
          is_moderated?: boolean
          message_text: string
          message_type?: string
          moderation_flag?: string | null
          pairing_id: string
          parent_viewed?: boolean
          receiver_child_id: string
          sender_child_id: string
          updated_at?: string
        }
        Update: {
          ai_translation?: string | null
          created_at?: string
          id?: string
          is_moderated?: boolean
          message_text?: string
          message_type?: string
          moderation_flag?: string | null
          pairing_id?: string
          parent_viewed?: boolean
          receiver_child_id?: string
          sender_child_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sibling_communications_pairing_id_fkey"
            columns: ["pairing_id"]
            isOneToOne: false
            referencedRelation: "sibling_pairings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_communications_receiver_child_id_fkey"
            columns: ["receiver_child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_communications_sender_child_id_fkey"
            columns: ["sender_child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sibling_conflict_mediation: {
        Row: {
          ai_cpr_talking_points: string
          child_1_perspective: string | null
          child_2_perspective: string | null
          conflict_description: string
          created_at: string
          id: string
          pairing_id: string
          parent_user_id: string
          resolution_notes: string | null
          resolution_status: string
          updated_at: string
        }
        Insert: {
          ai_cpr_talking_points: string
          child_1_perspective?: string | null
          child_2_perspective?: string | null
          conflict_description: string
          created_at?: string
          id?: string
          pairing_id: string
          parent_user_id: string
          resolution_notes?: string | null
          resolution_status?: string
          updated_at?: string
        }
        Update: {
          ai_cpr_talking_points?: string
          child_1_perspective?: string | null
          child_2_perspective?: string | null
          conflict_description?: string
          created_at?: string
          id?: string
          pairing_id?: string
          parent_user_id?: string
          resolution_notes?: string | null
          resolution_status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sibling_conflict_mediation_pairing_id_fkey"
            columns: ["pairing_id"]
            isOneToOne: false
            referencedRelation: "sibling_pairings"
            referencedColumns: ["id"]
          },
        ]
      }
      sibling_empathy_scripts: {
        Row: {
          child_profile_id: string
          created_at: string
          emotional_state: string
          generated_script: string
          id: string
          script_used: boolean
          target_sibling_id: string
          used_at: string | null
        }
        Insert: {
          child_profile_id: string
          created_at?: string
          emotional_state: string
          generated_script: string
          id?: string
          script_used?: boolean
          target_sibling_id: string
          used_at?: string | null
        }
        Update: {
          child_profile_id?: string
          created_at?: string
          emotional_state?: string
          generated_script?: string
          id?: string
          script_used?: boolean
          target_sibling_id?: string
          used_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "sibling_empathy_scripts_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_empathy_scripts_target_sibling_id_fkey"
            columns: ["target_sibling_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sibling_pairings: {
        Row: {
          child_profile_1_id: string
          child_profile_2_id: string
          created_at: string
          id: string
          mood_sharing_enabled: boolean
          pairing_status: string
          parent_user_id: string
          updated_at: string
        }
        Insert: {
          child_profile_1_id: string
          child_profile_2_id: string
          created_at?: string
          id?: string
          mood_sharing_enabled?: boolean
          pairing_status?: string
          parent_user_id: string
          updated_at?: string
        }
        Update: {
          child_profile_1_id?: string
          child_profile_2_id?: string
          created_at?: string
          id?: string
          mood_sharing_enabled?: boolean
          pairing_status?: string
          parent_user_id?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "sibling_pairings_child_profile_1_id_fkey"
            columns: ["child_profile_1_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_pairings_child_profile_2_id_fkey"
            columns: ["child_profile_2_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      sibling_shared_moments: {
        Row: {
          acknowledged_at: string | null
          ai_empathy_note: string
          created_at: string
          id: string
          moment_summary: string
          pairing_id: string
          receiver_acknowledged: boolean
          receiving_child_id: string
          shared_at: string
          sharing_child_id: string
          source_moment_id: string | null
          source_moment_type: string
        }
        Insert: {
          acknowledged_at?: string | null
          ai_empathy_note: string
          created_at?: string
          id?: string
          moment_summary: string
          pairing_id: string
          receiver_acknowledged?: boolean
          receiving_child_id: string
          shared_at?: string
          sharing_child_id: string
          source_moment_id?: string | null
          source_moment_type: string
        }
        Update: {
          acknowledged_at?: string | null
          ai_empathy_note?: string
          created_at?: string
          id?: string
          moment_summary?: string
          pairing_id?: string
          receiver_acknowledged?: boolean
          receiving_child_id?: string
          shared_at?: string
          sharing_child_id?: string
          source_moment_id?: string | null
          source_moment_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "sibling_shared_moments_pairing_id_fkey"
            columns: ["pairing_id"]
            isOneToOne: false
            referencedRelation: "sibling_pairings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_shared_moments_receiving_child_id_fkey"
            columns: ["receiving_child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "sibling_shared_moments_sharing_child_id_fkey"
            columns: ["sharing_child_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      signed_ndas: {
        Row: {
          created_at: string
          first_name: string | null
          id: string
          ip_address: string | null
          last_name: string | null
          nda_version: string
          phone_number: string | null
          signed_at: string
          state: string | null
          user_agent: string | null
          user_id: string
        }
        Insert: {
          created_at?: string
          first_name?: string | null
          id?: string
          ip_address?: string | null
          last_name?: string | null
          nda_version?: string
          phone_number?: string | null
          signed_at?: string
          state?: string | null
          user_agent?: string | null
          user_id: string
        }
        Update: {
          created_at?: string
          first_name?: string | null
          id?: string
          ip_address?: string | null
          last_name?: string | null
          nda_version?: string
          phone_number?: string | null
          signed_at?: string
          state?: string | null
          user_agent?: string | null
          user_id?: string
        }
        Relationships: []
      }
      site_content: {
        Row: {
          content: Json
          id: string
          updated_at: string
        }
        Insert: {
          content?: Json
          id?: string
          updated_at?: string
        }
        Update: {
          content?: Json
          id?: string
          updated_at?: string
        }
        Relationships: []
      }
      social_media_posts: {
        Row: {
          ai_provider_used: string | null
          content_variants: Json | null
          content_version: number
          cpr_context: string | null
          cpr_purpose: string | null
          cpr_quality_score: number | null
          cpr_result: string | null
          cpr_template_id: string | null
          created_at: string
          download_count: number | null
          engagement_score: number | null
          generated_caption: string | null
          generated_content: Json | null
          generated_description: string | null
          generated_hashtags: string[] | null
          id: string
          media_descriptions: string[] | null
          media_type: string | null
          media_urls: string[] | null
          original_content: string | null
          original_prompt: string | null
          performance_prediction: Json | null
          personality_tone: string | null
          platform: string | null
          platforms: string[] | null
          processing_status: string
          target_audience: string | null
          title: string | null
          tone_preference: string | null
          updated_at: string
          user_id: string
          voiceover_script: string | null
        }
        Insert: {
          ai_provider_used?: string | null
          content_variants?: Json | null
          content_version?: number
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_quality_score?: number | null
          cpr_result?: string | null
          cpr_template_id?: string | null
          created_at?: string
          download_count?: number | null
          engagement_score?: number | null
          generated_caption?: string | null
          generated_content?: Json | null
          generated_description?: string | null
          generated_hashtags?: string[] | null
          id?: string
          media_descriptions?: string[] | null
          media_type?: string | null
          media_urls?: string[] | null
          original_content?: string | null
          original_prompt?: string | null
          performance_prediction?: Json | null
          personality_tone?: string | null
          platform?: string | null
          platforms?: string[] | null
          processing_status?: string
          target_audience?: string | null
          title?: string | null
          tone_preference?: string | null
          updated_at?: string
          user_id: string
          voiceover_script?: string | null
        }
        Update: {
          ai_provider_used?: string | null
          content_variants?: Json | null
          content_version?: number
          cpr_context?: string | null
          cpr_purpose?: string | null
          cpr_quality_score?: number | null
          cpr_result?: string | null
          cpr_template_id?: string | null
          created_at?: string
          download_count?: number | null
          engagement_score?: number | null
          generated_caption?: string | null
          generated_content?: Json | null
          generated_description?: string | null
          generated_hashtags?: string[] | null
          id?: string
          media_descriptions?: string[] | null
          media_type?: string | null
          media_urls?: string[] | null
          original_content?: string | null
          original_prompt?: string | null
          performance_prediction?: Json | null
          personality_tone?: string | null
          platform?: string | null
          platforms?: string[] | null
          processing_status?: string
          target_audience?: string | null
          title?: string | null
          tone_preference?: string | null
          updated_at?: string
          user_id?: string
          voiceover_script?: string | null
        }
        Relationships: []
      }
      social_media_response_logs: {
        Row: {
          conversation_context: string | null
          created_at: string
          cultural_context_warnings: string | null
          energy_level: number | null
          generated_responses: Json | null
          id: string
          original_post_text: string
          platform: string
          post_intent_analysis: string | null
          post_tone_analysis: string | null
          responder_persona_id: string | null
          response_goal: string | null
          safety_level: string | null
          safety_notes: string | null
          sender_contact_id: string | null
          sender_context_notes: string | null
          sender_relationship_type: string | null
          user_id: string
          user_original_post_id: string | null
          user_original_post_text: string | null
        }
        Insert: {
          conversation_context?: string | null
          created_at?: string
          cultural_context_warnings?: string | null
          energy_level?: number | null
          generated_responses?: Json | null
          id?: string
          original_post_text: string
          platform: string
          post_intent_analysis?: string | null
          post_tone_analysis?: string | null
          responder_persona_id?: string | null
          response_goal?: string | null
          safety_level?: string | null
          safety_notes?: string | null
          sender_contact_id?: string | null
          sender_context_notes?: string | null
          sender_relationship_type?: string | null
          user_id: string
          user_original_post_id?: string | null
          user_original_post_text?: string | null
        }
        Update: {
          conversation_context?: string | null
          created_at?: string
          cultural_context_warnings?: string | null
          energy_level?: number | null
          generated_responses?: Json | null
          id?: string
          original_post_text?: string
          platform?: string
          post_intent_analysis?: string | null
          post_tone_analysis?: string | null
          responder_persona_id?: string | null
          response_goal?: string | null
          safety_level?: string | null
          safety_notes?: string | null
          sender_contact_id?: string | null
          sender_context_notes?: string | null
          sender_relationship_type?: string | null
          user_id?: string
          user_original_post_id?: string | null
          user_original_post_text?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "social_media_response_logs_responder_persona_id_fkey"
            columns: ["responder_persona_id"]
            isOneToOne: false
            referencedRelation: "user_contacts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "social_media_response_logs_sender_contact_id_fkey"
            columns: ["sender_contact_id"]
            isOneToOne: false
            referencedRelation: "user_contacts"
            referencedColumns: ["id"]
          },
        ]
      }
      sovereignty_settings: {
        Row: {
          created_at: string
          empire_pct: number
          foundation_pct: number
          id: string
          lifestyle_pct: number
          mode: string
          sovereignty_level: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          empire_pct?: number
          foundation_pct?: number
          id?: string
          lifestyle_pct?: number
          mode?: string
          sovereignty_level?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          empire_pct?: number
          foundation_pct?: number
          id?: string
          lifestyle_pct?: number
          mode?: string
          sovereignty_level?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      spending_categories: {
        Row: {
          category_type: string
          color: string
          created_at: string
          icon: string | null
          id: string
          is_default: boolean | null
          name: string
        }
        Insert: {
          category_type?: string
          color?: string
          created_at?: string
          icon?: string | null
          id?: string
          is_default?: boolean | null
          name: string
        }
        Update: {
          category_type?: string
          color?: string
          created_at?: string
          icon?: string | null
          id?: string
          is_default?: boolean | null
          name?: string
        }
        Relationships: []
      }
      spending_logs: {
        Row: {
          amount: number
          category_id: string
          created_at: string
          description: string | null
          id: string
          mood_at_transaction: number | null
          transaction_date: string
          transaction_type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          category_id: string
          created_at?: string
          description?: string | null
          id?: string
          mood_at_transaction?: number | null
          transaction_date?: string
          transaction_type: string
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          category_id?: string
          created_at?: string
          description?: string | null
          id?: string
          mood_at_transaction?: number | null
          transaction_date?: string
          transaction_type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "spending_logs_category_id_fkey"
            columns: ["category_id"]
            isOneToOne: false
            referencedRelation: "spending_categories"
            referencedColumns: ["id"]
          },
        ]
      }
      splash_screenshots: {
        Row: {
          carousel_number: number
          created_at: string
          description: string | null
          description_color: string | null
          description_size: string | null
          display_order: number
          feature_route: string
          feature_tier: string
          id: string
          image_url: string
          is_active: boolean
          orientation: string | null
          title: string
          title_color: string | null
          title_size: string | null
          updated_at: string
        }
        Insert: {
          carousel_number?: number
          created_at?: string
          description?: string | null
          description_color?: string | null
          description_size?: string | null
          display_order?: number
          feature_route: string
          feature_tier?: string
          id?: string
          image_url: string
          is_active?: boolean
          orientation?: string | null
          title: string
          title_color?: string | null
          title_size?: string | null
          updated_at?: string
        }
        Update: {
          carousel_number?: number
          created_at?: string
          description?: string | null
          description_color?: string | null
          description_size?: string | null
          display_order?: number
          feature_route?: string
          feature_tier?: string
          id?: string
          image_url?: string
          is_active?: boolean
          orientation?: string | null
          title?: string
          title_color?: string | null
          title_size?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      sso_tokens: {
        Row: {
          created_at: string
          expires_at: string
          id: string
          target_url: string
          token: string
          used: boolean
          user_id: string
        }
        Insert: {
          created_at?: string
          expires_at: string
          id?: string
          target_url: string
          token: string
          used?: boolean
          user_id: string
        }
        Update: {
          created_at?: string
          expires_at?: string
          id?: string
          target_url?: string
          token?: string
          used?: boolean
          user_id?: string
        }
        Relationships: []
      }
      subscribers: {
        Row: {
          business_tier: string | null
          created_at: string
          email: string | null
          id: string
          personality_tier: string
          stripe_customer_id: string | null
          subscribed: boolean
          subscription_end: string | null
          subscription_tier: string | null
          trial_end_date: string
          trial_start_date: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          business_tier?: string | null
          created_at?: string
          email?: string | null
          id?: string
          personality_tier?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          trial_end_date?: string
          trial_start_date?: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          business_tier?: string | null
          created_at?: string
          email?: string | null
          id?: string
          personality_tier?: string
          stripe_customer_id?: string | null
          subscribed?: boolean
          subscription_end?: string | null
          subscription_tier?: string | null
          trial_end_date?: string
          trial_start_date?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      subscriptions: {
        Row: {
          created_at: string
          credits_balance: number
          current_period_end: string | null
          current_period_start: string | null
          id: string
          plan: string
          status: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          credits_balance?: number
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          credits_balance?: number
          current_period_end?: string | null
          current_period_start?: string | null
          id?: string
          plan?: string
          status?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      suggestions_portal: {
        Row: {
          approved_by_3f: boolean
          category: string
          created_at: string | null
          description: string
          id: string
          link_url: string
          name: string
        }
        Insert: {
          approved_by_3f?: boolean
          category: string
          created_at?: string | null
          description: string
          id?: string
          link_url: string
          name: string
        }
        Update: {
          approved_by_3f?: boolean
          category?: string
          created_at?: string | null
          description?: string
          id?: string
          link_url?: string
          name?: string
        }
        Relationships: []
      }
      support_tickets: {
        Row: {
          admin_notes: string | null
          category: string
          created_at: string
          description: string
          email: string
          id: string
          name: string | null
          priority: string
          status: string
          subject: string
          updated_at: string
          user_id: string | null
        }
        Insert: {
          admin_notes?: string | null
          category?: string
          created_at?: string
          description: string
          email: string
          id?: string
          name?: string | null
          priority?: string
          status?: string
          subject: string
          updated_at?: string
          user_id?: string | null
        }
        Update: {
          admin_notes?: string | null
          category?: string
          created_at?: string
          description?: string
          email?: string
          id?: string
          name?: string | null
          priority?: string
          status?: string
          subject?: string
          updated_at?: string
          user_id?: string | null
        }
        Relationships: []
      }
      system_announcements: {
        Row: {
          created_at: string
          ends_at: string | null
          id: string
          is_active: boolean
          message: string | null
          starts_at: string
          title: string
          type: string
        }
        Insert: {
          created_at?: string
          ends_at?: string | null
          id?: string
          is_active?: boolean
          message?: string | null
          starts_at?: string
          title: string
          type?: string
        }
        Update: {
          created_at?: string
          ends_at?: string | null
          id?: string
          is_active?: boolean
          message?: string | null
          starts_at?: string
          title?: string
          type?: string
        }
        Relationships: []
      }
      system_settings: {
        Row: {
          created_at: string | null
          id: string
          setting_key: string
          setting_value: Json
          updated_at: string | null
          updated_by: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          setting_key: string
          setting_value: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          setting_key?: string
          setting_value?: Json
          updated_at?: string | null
          updated_by?: string | null
        }
        Relationships: []
      }
      task_empathy_prompts: {
        Row: {
          action_taken_at: string | null
          ae_voice_used: string | null
          ai_voice_used: string | null
          created_at: string | null
          empathy_message: string
          generated_by_ai: boolean | null
          id: string
          pmi_context_snapshot: Json | null
          prompt_type: string
          sent_at: string | null
          task_id: string
          user_action_taken: string | null
          user_id: string
          viewed_at: string | null
        }
        Insert: {
          action_taken_at?: string | null
          ae_voice_used?: string | null
          ai_voice_used?: string | null
          created_at?: string | null
          empathy_message: string
          generated_by_ai?: boolean | null
          id?: string
          pmi_context_snapshot?: Json | null
          prompt_type: string
          sent_at?: string | null
          task_id: string
          user_action_taken?: string | null
          user_id: string
          viewed_at?: string | null
        }
        Update: {
          action_taken_at?: string | null
          ae_voice_used?: string | null
          ai_voice_used?: string | null
          created_at?: string | null
          empathy_message?: string
          generated_by_ai?: boolean | null
          id?: string
          pmi_context_snapshot?: Json | null
          prompt_type?: string
          sent_at?: string | null
          task_id?: string
          user_action_taken?: string | null
          user_id?: string
          viewed_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "task_empathy_prompts_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "promptme_tasks"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_empathy_prompts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      task_rating_requests: {
        Row: {
          created_at: string | null
          id: string
          rated_at: string | null
          rating_comment: string | null
          rating_received: boolean | null
          rating_token: string
          rating_value: number | null
          recipient_id: string
          request_sent_at: string | null
          task_id: string
          token_expires_at: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          rated_at?: string | null
          rating_comment?: string | null
          rating_received?: boolean | null
          rating_token: string
          rating_value?: number | null
          recipient_id: string
          request_sent_at?: string | null
          task_id: string
          token_expires_at: string
        }
        Update: {
          created_at?: string | null
          id?: string
          rated_at?: string | null
          rating_comment?: string | null
          rating_received?: boolean | null
          rating_token?: string
          rating_value?: number | null
          recipient_id?: string
          request_sent_at?: string | null
          task_id?: string
          token_expires_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_rating_requests_recipient_id_fkey"
            columns: ["recipient_id"]
            isOneToOne: false
            referencedRelation: "task_recipients"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_rating_requests_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "promptme_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      task_recipients: {
        Row: {
          anniversary: string | null
          birthday: string | null
          communication_preference: string | null
          created_at: string | null
          custom_dates: Json | null
          id: string
          is_promptme_user: boolean | null
          promptme_user_id: string | null
          recipient_email: string | null
          recipient_name: string
          recipient_phone: string | null
          recipient_traits: Json | null
          relationship_type: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          anniversary?: string | null
          birthday?: string | null
          communication_preference?: string | null
          created_at?: string | null
          custom_dates?: Json | null
          id?: string
          is_promptme_user?: boolean | null
          promptme_user_id?: string | null
          recipient_email?: string | null
          recipient_name: string
          recipient_phone?: string | null
          recipient_traits?: Json | null
          relationship_type?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          anniversary?: string | null
          birthday?: string | null
          communication_preference?: string | null
          created_at?: string | null
          custom_dates?: Json | null
          id?: string
          is_promptme_user?: boolean | null
          promptme_user_id?: string | null
          recipient_email?: string | null
          recipient_name?: string
          recipient_phone?: string | null
          recipient_traits?: Json | null
          relationship_type?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "task_recipients_promptme_user_id_fkey"
            columns: ["promptme_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "task_recipients_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      team_invitations: {
        Row: {
          created_at: string
          email: string
          expires_at: string
          id: string
          invited_by: string
          role: string
          status: string
          token: string
          workspace_id: string
        }
        Insert: {
          created_at?: string
          email: string
          expires_at?: string
          id?: string
          invited_by: string
          role?: string
          status?: string
          token?: string
          workspace_id: string
        }
        Update: {
          created_at?: string
          email?: string
          expires_at?: string
          id?: string
          invited_by?: string
          role?: string
          status?: string
          token?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "team_invitations_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      transactions: {
        Row: {
          alter_ego_at_time: string | null
          amount: number
          class_id: number | null
          company_id: string | null
          cost_type: string
          created_at: string
          date: string
          description: string | null
          facility_id: string | null
          governor_status: string | null
          id: string
          influencer_tag: string | null
          last4_cc_id: string | null
          mood_at_time: number | null
          pillar_id: number | null
          property_id: string | null
          receipt_image_url: string | null
          session_id: string | null
          sub_class_id1: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          alter_ego_at_time?: string | null
          amount: number
          class_id?: number | null
          company_id?: string | null
          cost_type?: string
          created_at?: string
          date: string
          description?: string | null
          facility_id?: string | null
          governor_status?: string | null
          id?: string
          influencer_tag?: string | null
          last4_cc_id?: string | null
          mood_at_time?: number | null
          pillar_id?: number | null
          property_id?: string | null
          receipt_image_url?: string | null
          session_id?: string | null
          sub_class_id1?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          alter_ego_at_time?: string | null
          amount?: number
          class_id?: number | null
          company_id?: string | null
          cost_type?: string
          created_at?: string
          date?: string
          description?: string | null
          facility_id?: string | null
          governor_status?: string | null
          id?: string
          influencer_tag?: string | null
          last4_cc_id?: string | null
          mood_at_time?: number | null
          pillar_id?: number | null
          property_id?: string | null
          receipt_image_url?: string | null
          session_id?: string | null
          sub_class_id1?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "transactions_class_id_fkey"
            columns: ["class_id"]
            isOneToOne: false
            referencedRelation: "finance_categories"
            referencedColumns: ["class_id"]
          },
          {
            foreignKeyName: "transactions_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
        ]
      }
      trauma_drama_logs: {
        Row: {
          analysis_result: Json
          confidence_score: number | null
          created_at: string
          generated_response: string | null
          id: string
          original_message: string
          updated_at: string
          user_id: string
        }
        Insert: {
          analysis_result?: Json
          confidence_score?: number | null
          created_at?: string
          generated_response?: string | null
          id?: string
          original_message: string
          updated_at?: string
          user_id: string
        }
        Update: {
          analysis_result?: Json
          confidence_score?: number | null
          created_at?: string
          generated_response?: string | null
          id?: string
          original_message?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      tube_playlists: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_achievements: {
        Row: {
          achievement_name: string
          achievement_type: string
          badge_icon: string | null
          created_at: string | null
          description: string
          id: string
          points_awarded: number | null
          unlocked_at: string | null
          user_id: string
        }
        Insert: {
          achievement_name: string
          achievement_type: string
          badge_icon?: string | null
          created_at?: string | null
          description: string
          id?: string
          points_awarded?: number | null
          unlocked_at?: string | null
          user_id: string
        }
        Update: {
          achievement_name?: string
          achievement_type?: string
          badge_icon?: string | null
          created_at?: string | null
          description?: string
          id?: string
          points_awarded?: number | null
          unlocked_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_achievements_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_assets: {
        Row: {
          blueprint_id: string | null
          category: string | null
          client_id: string | null
          created_at: string | null
          file_name: string
          file_size: number | null
          file_type: string
          file_url: string
          id: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          blueprint_id?: string | null
          category?: string | null
          client_id?: string | null
          created_at?: string | null
          file_name: string
          file_size?: number | null
          file_type: string
          file_url: string
          id?: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          blueprint_id?: string | null
          category?: string | null
          client_id?: string | null
          created_at?: string | null
          file_name?: string
          file_size?: number | null
          file_type?: string
          file_url?: string
          id?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_assets_blueprint_id_fkey"
            columns: ["blueprint_id"]
            isOneToOne: false
            referencedRelation: "blueprints"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_assets_client_id_fkey"
            columns: ["client_id"]
            isOneToOne: false
            referencedRelation: "clients"
            referencedColumns: ["id"]
          },
        ]
      }
      user_communication_preferences: {
        Row: {
          allow_direct_messages: boolean | null
          allow_email_messages: boolean | null
          allow_sms_messages: boolean | null
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          allow_direct_messages?: boolean | null
          allow_email_messages?: boolean | null
          allow_sms_messages?: boolean | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          allow_direct_messages?: boolean | null
          allow_email_messages?: boolean | null
          allow_sms_messages?: boolean | null
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_connections: {
        Row: {
          addressee_consent: boolean | null
          addressee_id: string
          created_at: string
          id: string
          requester_consent: boolean | null
          requester_id: string
          status: string
          updated_at: string
        }
        Insert: {
          addressee_consent?: boolean | null
          addressee_id: string
          created_at?: string
          id?: string
          requester_consent?: boolean | null
          requester_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          addressee_consent?: boolean | null
          addressee_id?: string
          created_at?: string
          id?: string
          requester_consent?: boolean | null
          requester_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_connections_addressee_id_fkey"
            columns: ["addressee_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_connections_requester_id_fkey"
            columns: ["requester_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_contacts: {
        Row: {
          contact_name: string
          contact_type: string | null
          created_at: string
          email: string | null
          id: string
          notes: string | null
          perceived_personality: string | null
          persona_description: string | null
          phone_number: string | null
          typical_mood_patterns: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          contact_name: string
          contact_type?: string | null
          created_at?: string
          email?: string | null
          id?: string
          notes?: string | null
          perceived_personality?: string | null
          persona_description?: string | null
          phone_number?: string | null
          typical_mood_patterns?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          contact_name?: string
          contact_type?: string | null
          created_at?: string
          email?: string | null
          id?: string
          notes?: string | null
          perceived_personality?: string | null
          persona_description?: string | null
          phone_number?: string | null
          typical_mood_patterns?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_conversations: {
        Row: {
          created_at: string
          id: string
          initiated_by: string | null
          last_message_at: string | null
          participant_one_id: string
          participant_two_id: string
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          initiated_by?: string | null
          last_message_at?: string | null
          participant_one_id: string
          participant_two_id: string
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          initiated_by?: string | null
          last_message_at?: string | null
          participant_one_id?: string
          participant_two_id?: string
          status?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_conversations_participant_one_id_fkey"
            columns: ["participant_one_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_conversations_participant_two_id_fkey"
            columns: ["participant_two_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_creations: {
        Row: {
          content: string
          created_at: string
          creation_type: string
          engagement_score: number
          id: string
          indexed_for_portal: boolean
          ip_documentation_status: string | null
          is_trademarked: boolean
          likes_count: number
          metadata: Json
          moment_title: string | null
          moment_type: string | null
          originality_notes: string | null
          pmi_tag: string | null
          quote_context: string | null
          quote_meaning: string | null
          raw_thought: string | null
          refinement_iterations: number | null
          shares_count: number
          suggested_use_cases: Json | null
          tags: Json | null
          trademark_application_date: string | null
          unique_creation_id: string
          uniqueness_score: number | null
          uniqueness_status: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          creation_type: string
          engagement_score?: number
          id?: string
          indexed_for_portal?: boolean
          ip_documentation_status?: string | null
          is_trademarked?: boolean
          likes_count?: number
          metadata?: Json
          moment_title?: string | null
          moment_type?: string | null
          originality_notes?: string | null
          pmi_tag?: string | null
          quote_context?: string | null
          quote_meaning?: string | null
          raw_thought?: string | null
          refinement_iterations?: number | null
          shares_count?: number
          suggested_use_cases?: Json | null
          tags?: Json | null
          trademark_application_date?: string | null
          unique_creation_id?: string
          uniqueness_score?: number | null
          uniqueness_status?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          creation_type?: string
          engagement_score?: number
          id?: string
          indexed_for_portal?: boolean
          ip_documentation_status?: string | null
          is_trademarked?: boolean
          likes_count?: number
          metadata?: Json
          moment_title?: string | null
          moment_type?: string | null
          originality_notes?: string | null
          pmi_tag?: string | null
          quote_context?: string | null
          quote_meaning?: string | null
          raw_thought?: string | null
          refinement_iterations?: number | null
          shares_count?: number
          suggested_use_cases?: Json | null
          tags?: Json | null
          trademark_application_date?: string | null
          unique_creation_id?: string
          uniqueness_score?: number | null
          uniqueness_status?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_documents: {
        Row: {
          content_text: string
          created_at: string
          document_type: string
          id: string
          metadata: Json | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content_text: string
          created_at?: string
          document_type: string
          id?: string
          metadata?: Json | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content_text?: string
          created_at?: string
          document_type?: string
          id?: string
          metadata?: Json | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_favorite_functions: {
        Row: {
          created_at: string
          display_order: number | null
          function_icon: string | null
          function_name: string
          function_route: string
          id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          display_order?: number | null
          function_icon?: string | null
          function_name: string
          function_route: string
          id?: string
          user_id: string
        }
        Update: {
          created_at?: string
          display_order?: number | null
          function_icon?: string | null
          function_name?: string
          function_route?: string
          id?: string
          user_id?: string
        }
        Relationships: []
      }
      user_journey_selection: {
        Row: {
          config_id: string | null
          id: string
          path_id: string
          selected_at: string
          user_id: string
        }
        Insert: {
          config_id?: string | null
          id?: string
          path_id: string
          selected_at?: string
          user_id: string
        }
        Update: {
          config_id?: string | null
          id?: string
          path_id?: string
          selected_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_journey_selection_config_id_fkey"
            columns: ["config_id"]
            isOneToOne: false
            referencedRelation: "onboarding_configurations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_journey_selection_path_id_fkey"
            columns: ["path_id"]
            isOneToOne: false
            referencedRelation: "onboarding_paths"
            referencedColumns: ["id"]
          },
        ]
      }
      user_news_profiles: {
        Row: {
          breaking_news_preference: boolean | null
          created_at: string
          emotional_tolerance: string | null
          id: string
          interests: Json | null
          learning_data: Json | null
          preferred_complexity: string | null
          reading_time_preference: number | null
          source_preferences: Json | null
          topic_weights: Json | null
          updated_at: string
          user_id: string
        }
        Insert: {
          breaking_news_preference?: boolean | null
          created_at?: string
          emotional_tolerance?: string | null
          id?: string
          interests?: Json | null
          learning_data?: Json | null
          preferred_complexity?: string | null
          reading_time_preference?: number | null
          source_preferences?: Json | null
          topic_weights?: Json | null
          updated_at?: string
          user_id: string
        }
        Update: {
          breaking_news_preference?: boolean | null
          created_at?: string
          emotional_tolerance?: string | null
          id?: string
          interests?: Json | null
          learning_data?: Json | null
          preferred_complexity?: string | null
          reading_time_preference?: number | null
          source_preferences?: Json | null
          topic_weights?: Json | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_onboarding_progress: {
        Row: {
          assessment_completed: boolean | null
          created_at: string | null
          diagnosis_confirmed: boolean | null
          id: string
          profile_completed: boolean | null
          purpose_completed: boolean | null
          tools_explored: boolean | null
          updated_at: string | null
          user_id: string
          village_visited: boolean | null
          welcome_tour_completed: boolean | null
        }
        Insert: {
          assessment_completed?: boolean | null
          created_at?: string | null
          diagnosis_confirmed?: boolean | null
          id?: string
          profile_completed?: boolean | null
          purpose_completed?: boolean | null
          tools_explored?: boolean | null
          updated_at?: string | null
          user_id: string
          village_visited?: boolean | null
          welcome_tour_completed?: boolean | null
        }
        Update: {
          assessment_completed?: boolean | null
          created_at?: string | null
          diagnosis_confirmed?: boolean | null
          id?: string
          profile_completed?: boolean | null
          purpose_completed?: boolean | null
          tools_explored?: boolean | null
          updated_at?: string | null
          user_id?: string
          village_visited?: boolean | null
          welcome_tour_completed?: boolean | null
        }
        Relationships: []
      }
      user_page_visits: {
        Row: {
          id: string
          page_name: string
          page_route: string
          session_id: string
          user_id: string
          visited_at: string
        }
        Insert: {
          id?: string
          page_name: string
          page_route: string
          session_id: string
          user_id: string
          visited_at?: string
        }
        Update: {
          id?: string
          page_name?: string
          page_route?: string
          session_id?: string
          user_id?: string
          visited_at?: string
        }
        Relationships: []
      }
      user_privacy_consents: {
        Row: {
          consented_at: string
          created_at: string
          id: string
          ip_address: string | null
          privacy_notice_version_id: string
          updated_at: string
          user_agent: string | null
          user_id: string
        }
        Insert: {
          consented_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          privacy_notice_version_id: string
          updated_at?: string
          user_agent?: string | null
          user_id: string
        }
        Update: {
          consented_at?: string
          created_at?: string
          id?: string
          ip_address?: string | null
          privacy_notice_version_id?: string
          updated_at?: string
          user_agent?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_privacy_consents_privacy_notice_version_id_fkey"
            columns: ["privacy_notice_version_id"]
            isOneToOne: false
            referencedRelation: "privacy_notice_versions"
            referencedColumns: ["id"]
          },
        ]
      }
      user_prompts: {
        Row: {
          category: string
          content: string
          created_at: string
          downvotes: number
          featured: boolean
          id: string
          is_public: boolean
          tags: string[] | null
          title: string
          updated_at: string
          upvotes: number
          user_id: string
          uses_count: number
        }
        Insert: {
          category?: string
          content: string
          created_at?: string
          downvotes?: number
          featured?: boolean
          id?: string
          is_public?: boolean
          tags?: string[] | null
          title: string
          updated_at?: string
          upvotes?: number
          user_id: string
          uses_count?: number
        }
        Update: {
          category?: string
          content?: string
          created_at?: string
          downvotes?: number
          featured?: boolean
          id?: string
          is_public?: boolean
          tags?: string[] | null
          title?: string
          updated_at?: string
          upvotes?: number
          user_id?: string
          uses_count?: number
        }
        Relationships: []
      }
      user_rewards: {
        Row: {
          created_at: string | null
          id: string
          last_activity_at: string | null
          points_earned: number | null
          user_id: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          last_activity_at?: string | null
          points_earned?: number | null
          user_id: string
        }
        Update: {
          created_at?: string | null
          id?: string
          last_activity_at?: string | null
          points_earned?: number | null
          user_id?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      user_self_reflections: {
        Row: {
          adhd_type: string | null
          completed_at: string | null
          completed_sections: string[] | null
          created_at: string | null
          diagnosis_status: string | null
          id: string
          section1_responses: Json | null
          section2_responses: Json | null
          section3_responses: Json | null
          total_score: number | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          adhd_type?: string | null
          completed_at?: string | null
          completed_sections?: string[] | null
          created_at?: string | null
          diagnosis_status?: string | null
          id?: string
          section1_responses?: Json | null
          section2_responses?: Json | null
          section3_responses?: Json | null
          total_score?: number | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          adhd_type?: string | null
          completed_at?: string | null
          completed_sections?: string[] | null
          created_at?: string | null
          diagnosis_status?: string | null
          id?: string
          section1_responses?: Json | null
          section2_responses?: Json | null
          section3_responses?: Json | null
          total_score?: number | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_sensitive_approvals: {
        Row: {
          approved: boolean
          approved_at: string | null
          consent_type: Database["public"]["Enums"]["consent_type"]
          created_at: string
          id: string
          updated_at: string
          user_id: string
        }
        Insert: {
          approved?: boolean
          approved_at?: string | null
          consent_type: Database["public"]["Enums"]["consent_type"]
          created_at?: string
          id?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          approved?: boolean
          approved_at?: string | null
          consent_type?: Database["public"]["Enums"]["consent_type"]
          created_at?: string
          id?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      user_sessions: {
        Row: {
          activity_count: number | null
          created_at: string | null
          duration_minutes: number | null
          ended_at: string | null
          id: string
          started_at: string
          user_id: string
        }
        Insert: {
          activity_count?: number | null
          created_at?: string | null
          duration_minutes?: number | null
          ended_at?: string | null
          id?: string
          started_at?: string
          user_id: string
        }
        Update: {
          activity_count?: number | null
          created_at?: string | null
          duration_minutes?: number | null
          ended_at?: string | null
          id?: string
          started_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_sessions_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      user_uploaded_media: {
        Row: {
          ai_emotional_themes: string[] | null
          ai_keywords: string[] | null
          ai_summary: string | null
          ai_transcription: string | null
          created_at: string | null
          description: string | null
          duration_seconds: number | null
          file_size_bytes: number | null
          id: string
          media_type: string
          mime_type: string | null
          processed_at: string | null
          processing_status: string | null
          storage_url: string
          thumbnail_url: string | null
          title: string
          updated_at: string | null
          uploaded_at: string | null
          user_id: string
        }
        Insert: {
          ai_emotional_themes?: string[] | null
          ai_keywords?: string[] | null
          ai_summary?: string | null
          ai_transcription?: string | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          file_size_bytes?: number | null
          id?: string
          media_type?: string
          mime_type?: string | null
          processed_at?: string | null
          processing_status?: string | null
          storage_url: string
          thumbnail_url?: string | null
          title: string
          updated_at?: string | null
          uploaded_at?: string | null
          user_id: string
        }
        Update: {
          ai_emotional_themes?: string[] | null
          ai_keywords?: string[] | null
          ai_summary?: string | null
          ai_transcription?: string | null
          created_at?: string | null
          description?: string | null
          duration_seconds?: number | null
          file_size_bytes?: number | null
          id?: string
          media_type?: string
          mime_type?: string | null
          processed_at?: string | null
          processing_status?: string | null
          storage_url?: string
          thumbnail_url?: string | null
          title?: string
          updated_at?: string | null
          uploaded_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_wallets: {
        Row: {
          cash_balance: number | null
          coin_balance: number
          created_at: string
          id: string
          total_earned: number
          total_spent: number
          updated_at: string
          user_id: string
          wallet_address: string | null
        }
        Insert: {
          cash_balance?: number | null
          coin_balance?: number
          created_at?: string
          id?: string
          total_earned?: number
          total_spent?: number
          updated_at?: string
          user_id: string
          wallet_address?: string | null
        }
        Update: {
          cash_balance?: number | null
          coin_balance?: number
          created_at?: string
          id?: string
          total_earned?: number
          total_spent?: number
          updated_at?: string
          user_id?: string
          wallet_address?: string | null
        }
        Relationships: []
      }
      user_webhook_tokens: {
        Row: {
          created_at: string | null
          id: string
          is_active: boolean | null
          updated_at: string | null
          user_id: string
          webhook_secret: string
          webhook_token: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          user_id: string
          webhook_secret: string
          webhook_token: string
        }
        Update: {
          created_at?: string | null
          id?: string
          is_active?: boolean | null
          updated_at?: string | null
          user_id?: string
          webhook_secret?: string
          webhook_token?: string
        }
        Relationships: []
      }
      user_work_tasks: {
        Row: {
          approval_status: string | null
          assigned_to_user_id: string
          cash_reward: number | null
          child_profile_id: string | null
          coins_reward: number | null
          completed_at: string | null
          completion_media_urls: Json | null
          created_at: string | null
          creator_user_id: string
          due_datetime: string | null
          external_client_contact: string | null
          external_client_name: string | null
          id: string
          is_external_work: boolean | null
          linked_express_agreement_id: string | null
          pmi_points_reward: number | null
          proof_of_work_submitted: boolean | null
          proof_submission_date: string | null
          rejection_reason: string | null
          relationship_type: string | null
          reward_type: string | null
          rewards_distributed: boolean | null
          status: string | null
          suggested_by: string | null
          task_description: string | null
          task_title: string
          updated_at: string | null
          work_type: string | null
        }
        Insert: {
          approval_status?: string | null
          assigned_to_user_id: string
          cash_reward?: number | null
          child_profile_id?: string | null
          coins_reward?: number | null
          completed_at?: string | null
          completion_media_urls?: Json | null
          created_at?: string | null
          creator_user_id: string
          due_datetime?: string | null
          external_client_contact?: string | null
          external_client_name?: string | null
          id?: string
          is_external_work?: boolean | null
          linked_express_agreement_id?: string | null
          pmi_points_reward?: number | null
          proof_of_work_submitted?: boolean | null
          proof_submission_date?: string | null
          rejection_reason?: string | null
          relationship_type?: string | null
          reward_type?: string | null
          rewards_distributed?: boolean | null
          status?: string | null
          suggested_by?: string | null
          task_description?: string | null
          task_title: string
          updated_at?: string | null
          work_type?: string | null
        }
        Update: {
          approval_status?: string | null
          assigned_to_user_id?: string
          cash_reward?: number | null
          child_profile_id?: string | null
          coins_reward?: number | null
          completed_at?: string | null
          completion_media_urls?: Json | null
          created_at?: string | null
          creator_user_id?: string
          due_datetime?: string | null
          external_client_contact?: string | null
          external_client_name?: string | null
          id?: string
          is_external_work?: boolean | null
          linked_express_agreement_id?: string | null
          pmi_points_reward?: number | null
          proof_of_work_submitted?: boolean | null
          proof_submission_date?: string | null
          rejection_reason?: string | null
          relationship_type?: string | null
          reward_type?: string | null
          rewards_distributed?: boolean | null
          status?: string | null
          suggested_by?: string | null
          task_description?: string | null
          task_title?: string
          updated_at?: string | null
          work_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_work_tasks_child_profile_id_fkey"
            columns: ["child_profile_id"]
            isOneToOne: false
            referencedRelation: "child_profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_work_tasks_linked_express_agreement_id_fkey"
            columns: ["linked_express_agreement_id"]
            isOneToOne: false
            referencedRelation: "child_express_agreements"
            referencedColumns: ["id"]
          },
        ]
      }
      vault_documents: {
        Row: {
          created_at: string
          file_path: string
          folder_path: string
          id: string
          mime_type: string | null
          name: string
          size: number | null
          status: string
          type: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          file_path: string
          folder_path?: string
          id?: string
          mime_type?: string | null
          name: string
          size?: number | null
          status?: string
          type?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          file_path?: string
          folder_path?: string
          id?: string
          mime_type?: string | null
          name?: string
          size?: number | null
          status?: string
          type?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      vault_idioms: {
        Row: {
          created_at: string
          how_it_makes_you_feel: string | null
          how_it_shaped_you: string | null
          id: string
          idiom_text: string
          person_who_told: string
          user_id: string
        }
        Insert: {
          created_at?: string
          how_it_makes_you_feel?: string | null
          how_it_shaped_you?: string | null
          id?: string
          idiom_text: string
          person_who_told: string
          user_id: string
        }
        Update: {
          created_at?: string
          how_it_makes_you_feel?: string | null
          how_it_shaped_you?: string | null
          id?: string
          idiom_text?: string
          person_who_told?: string
          user_id?: string
        }
        Relationships: []
      }
      vault_moments: {
        Row: {
          body: string
          clerk_user_id: string
          created_at: string
          id: string
          kind: string
          sharing_level: string
        }
        Insert: {
          body: string
          clerk_user_id: string
          created_at?: string
          id?: string
          kind?: string
          sharing_level?: string
        }
        Update: {
          body?: string
          clerk_user_id?: string
          created_at?: string
          id?: string
          kind?: string
          sharing_level?: string
        }
        Relationships: []
      }
      video_avatars: {
        Row: {
          avatar_id: string | null
          avatar_name: string
          consent_video_url: string | null
          created_at: string | null
          error_message: string | null
          id: string
          liveness_verified: boolean | null
          metadata: Json | null
          quality: string | null
          style: string | null
          training_footage_url: string | null
          training_status: string
          updated_at: string | null
          user_id: string
          watermark_enabled: boolean | null
        }
        Insert: {
          avatar_id?: string | null
          avatar_name: string
          consent_video_url?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          liveness_verified?: boolean | null
          metadata?: Json | null
          quality?: string | null
          style?: string | null
          training_footage_url?: string | null
          training_status?: string
          updated_at?: string | null
          user_id: string
          watermark_enabled?: boolean | null
        }
        Update: {
          avatar_id?: string | null
          avatar_name?: string
          consent_video_url?: string | null
          created_at?: string | null
          error_message?: string | null
          id?: string
          liveness_verified?: boolean | null
          metadata?: Json | null
          quality?: string | null
          style?: string | null
          training_footage_url?: string | null
          training_status?: string
          updated_at?: string | null
          user_id?: string
          watermark_enabled?: boolean | null
        }
        Relationships: []
      }
      viewed_videos: {
        Row: {
          duration_seconds: number | null
          id: string
          thumbnail_url: string | null
          user_id: string
          user_notes: string | null
          video_platform: string
          video_title: string
          video_url: string
          viewed_at: string
          watch_time_seconds: number | null
        }
        Insert: {
          duration_seconds?: number | null
          id?: string
          thumbnail_url?: string | null
          user_id: string
          user_notes?: string | null
          video_platform?: string
          video_title: string
          video_url: string
          viewed_at?: string
          watch_time_seconds?: number | null
        }
        Update: {
          duration_seconds?: number | null
          id?: string
          thumbnail_url?: string | null
          user_id?: string
          user_notes?: string | null
          video_platform?: string
          video_title?: string
          video_url?: string
          viewed_at?: string
          watch_time_seconds?: number | null
        }
        Relationships: []
      }
      village_campfires: {
        Row: {
          created_at: string
          creator_id: string
          current_members: number
          description: string
          id: string
          is_active: boolean
          is_public: boolean
          last_activity_at: string
          max_members: number
          neighborhood: string
          requires_approval: boolean
          title: string
          topic_focus: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          creator_id: string
          current_members?: number
          description: string
          id?: string
          is_active?: boolean
          is_public?: boolean
          last_activity_at?: string
          max_members?: number
          neighborhood?: string
          requires_approval?: boolean
          title: string
          topic_focus: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          creator_id?: string
          current_members?: number
          description?: string
          id?: string
          is_active?: boolean
          is_public?: boolean
          last_activity_at?: string
          max_members?: number
          neighborhood?: string
          requires_approval?: boolean
          title?: string
          topic_focus?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_village_campfires_creator"
            columns: ["creator_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      village_news: {
        Row: {
          author_id: string
          author_name: string
          content: string
          created_at: string
          id: string
        }
        Insert: {
          author_id: string
          author_name: string
          content: string
          created_at?: string
          id?: string
        }
        Update: {
          author_id?: string
          author_name?: string
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      village_post_links: {
        Row: {
          author_id: string | null
          author_name: string
          author_tier: string
          content: string
          created_at: string
          id: string
          parent_post_id: string
          status: string
          tone: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          author_name: string
          author_tier?: string
          content: string
          created_at?: string
          id?: string
          parent_post_id: string
          status?: string
          tone?: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          author_name?: string
          author_tier?: string
          content?: string
          created_at?: string
          id?: string
          parent_post_id?: string
          status?: string
          tone?: string
          updated_at?: string
        }
        Relationships: []
      }
      village_post_replies: {
        Row: {
          author_id: string | null
          author_name: string
          author_tier: string
          content: string
          created_at: string
          id: string
          post_id: string
          status: string
          tone: string
          updated_at: string
        }
        Insert: {
          author_id?: string | null
          author_name: string
          author_tier?: string
          content: string
          created_at?: string
          id?: string
          post_id: string
          status?: string
          tone?: string
          updated_at?: string
        }
        Update: {
          author_id?: string | null
          author_name?: string
          author_tier?: string
          content?: string
          created_at?: string
          id?: string
          post_id?: string
          status?: string
          tone?: string
          updated_at?: string
        }
        Relationships: []
      }
      village_questions: {
        Row: {
          answer: string | null
          created_at: string
          id: string
          question: string
          status: string
          user_id: string
        }
        Insert: {
          answer?: string | null
          created_at?: string
          id?: string
          question: string
          status?: string
          user_id: string
        }
        Update: {
          answer?: string | null
          created_at?: string
          id?: string
          question?: string
          status?: string
          user_id?: string
        }
        Relationships: []
      }
      vision_board_entries: {
        Row: {
          created_at: string
          height: number | null
          id: string
          image_url: string
          keywords: string[] | null
          rotation: number | null
          updated_at: string
          user_id: string
          user_reflection: string | null
          width: number | null
          x_position: number | null
          y_position: number | null
        }
        Insert: {
          created_at?: string
          height?: number | null
          id?: string
          image_url: string
          keywords?: string[] | null
          rotation?: number | null
          updated_at?: string
          user_id: string
          user_reflection?: string | null
          width?: number | null
          x_position?: number | null
          y_position?: number | null
        }
        Update: {
          created_at?: string
          height?: number | null
          id?: string
          image_url?: string
          keywords?: string[] | null
          rotation?: number | null
          updated_at?: string
          user_id?: string
          user_reflection?: string | null
          width?: number | null
          x_position?: number | null
          y_position?: number | null
        }
        Relationships: []
      }
      visitor_requests: {
        Row: {
          created_at: string
          facility_id: string
          id: string
          notes: string | null
          portal_id: string | null
          purpose: string | null
          relationship: string | null
          requested_date: string
          requested_time: string | null
          resident_id: string
          review_notes: string | null
          reviewed_at: string | null
          reviewed_by: string | null
          status: string
          updated_at: string
          visitor_name: string
        }
        Insert: {
          created_at?: string
          facility_id: string
          id?: string
          notes?: string | null
          portal_id?: string | null
          purpose?: string | null
          relationship?: string | null
          requested_date: string
          requested_time?: string | null
          resident_id: string
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          visitor_name: string
        }
        Update: {
          created_at?: string
          facility_id?: string
          id?: string
          notes?: string | null
          portal_id?: string | null
          purpose?: string | null
          relationship?: string | null
          requested_date?: string
          requested_time?: string | null
          resident_id?: string
          review_notes?: string | null
          reviewed_at?: string | null
          reviewed_by?: string | null
          status?: string
          updated_at?: string
          visitor_name?: string
        }
        Relationships: [
          {
            foreignKeyName: "visitor_requests_facility_id_fkey"
            columns: ["facility_id"]
            isOneToOne: false
            referencedRelation: "care_facilities"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visitor_requests_portal_id_fkey"
            columns: ["portal_id"]
            isOneToOne: false
            referencedRelation: "resident_portal_tokens"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visitor_requests_resident_id_fkey"
            columns: ["resident_id"]
            isOneToOne: false
            referencedRelation: "housing_residents"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "visitor_requests_reviewed_by_fkey"
            columns: ["reviewed_by"]
            isOneToOne: false
            referencedRelation: "facility_staff"
            referencedColumns: ["id"]
          },
        ]
      }
      voice_profiles: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_imported: boolean
          name: string
          provider: string
          sample_url: string | null
          training_status: string
          updated_at: string
          user_id: string
          voice_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_imported?: boolean
          name: string
          provider?: string
          sample_url?: string | null
          training_status?: string
          updated_at?: string
          user_id: string
          voice_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_imported?: boolean
          name?: string
          provider?: string
          sample_url?: string | null
          training_status?: string
          updated_at?: string
          user_id?: string
          voice_id?: string | null
        }
        Relationships: []
      }
      waitlist_signups: {
        Row: {
          additional_info: string | null
          age_range: string | null
          application_status: string | null
          approval_note: string | null
          approval_sent_at: string | null
          approved: boolean | null
          approved_by: string | null
          children_ages: string | null
          commitment_level: string | null
          created_at: string
          device_preference: string | null
          email: string
          experience_level: string | null
          feedback_willingness: boolean | null
          first_name: string | null
          has_children: boolean | null
          how_heard: string | null
          id: string
          last_name: string | null
          notified_at: string | null
          number_of_children: number | null
          occupation: string | null
          phone_number: string | null
          primary_use_case: string[] | null
          referral_source: string | null
          referred_by: string | null
          review_started_at: string | null
          reviewed_by_user_id: string | null
          signed_up_at: string
          state: string | null
          updated_at: string
          why_join_beta: string | null
        }
        Insert: {
          additional_info?: string | null
          age_range?: string | null
          application_status?: string | null
          approval_note?: string | null
          approval_sent_at?: string | null
          approved?: boolean | null
          approved_by?: string | null
          children_ages?: string | null
          commitment_level?: string | null
          created_at?: string
          device_preference?: string | null
          email: string
          experience_level?: string | null
          feedback_willingness?: boolean | null
          first_name?: string | null
          has_children?: boolean | null
          how_heard?: string | null
          id?: string
          last_name?: string | null
          notified_at?: string | null
          number_of_children?: number | null
          occupation?: string | null
          phone_number?: string | null
          primary_use_case?: string[] | null
          referral_source?: string | null
          referred_by?: string | null
          review_started_at?: string | null
          reviewed_by_user_id?: string | null
          signed_up_at?: string
          state?: string | null
          updated_at?: string
          why_join_beta?: string | null
        }
        Update: {
          additional_info?: string | null
          age_range?: string | null
          application_status?: string | null
          approval_note?: string | null
          approval_sent_at?: string | null
          approved?: boolean | null
          approved_by?: string | null
          children_ages?: string | null
          commitment_level?: string | null
          created_at?: string
          device_preference?: string | null
          email?: string
          experience_level?: string | null
          feedback_willingness?: boolean | null
          first_name?: string | null
          has_children?: boolean | null
          how_heard?: string | null
          id?: string
          last_name?: string | null
          notified_at?: string | null
          number_of_children?: number | null
          occupation?: string | null
          phone_number?: string | null
          primary_use_case?: string[] | null
          referral_source?: string | null
          referred_by?: string | null
          review_started_at?: string | null
          reviewed_by_user_id?: string | null
          signed_up_at?: string
          state?: string | null
          updated_at?: string
          why_join_beta?: string | null
        }
        Relationships: []
      }
      website_previews: {
        Row: {
          blueprint_id: string | null
          created_at: string
          expires_at: string | null
          html_content: string
          id: string
          name: string
          share_token: string
          updated_at: string
          user_id: string
          view_count: number
        }
        Insert: {
          blueprint_id?: string | null
          created_at?: string
          expires_at?: string | null
          html_content: string
          id?: string
          name?: string
          share_token: string
          updated_at?: string
          user_id: string
          view_count?: number
        }
        Update: {
          blueprint_id?: string | null
          created_at?: string
          expires_at?: string | null
          html_content?: string
          id?: string
          name?: string
          share_token?: string
          updated_at?: string
          user_id?: string
          view_count?: number
        }
        Relationships: [
          {
            foreignKeyName: "website_previews_blueprint_id_fkey"
            columns: ["blueprint_id"]
            isOneToOne: false
            referencedRelation: "blueprints"
            referencedColumns: ["id"]
          },
        ]
      }
      weekly_appointments: {
        Row: {
          appointment_datetime: string
          appointment_description: string | null
          appointment_title: string
          appointment_type: string
          calendar_event_id: string | null
          created_at: string
          id: string
          linked_goal_id: string | null
          reminder_enabled: boolean
          status: string
          updated_at: string
          user_id: string
        }
        Insert: {
          appointment_datetime: string
          appointment_description?: string | null
          appointment_title: string
          appointment_type?: string
          calendar_event_id?: string | null
          created_at?: string
          id?: string
          linked_goal_id?: string | null
          reminder_enabled?: boolean
          status?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          appointment_datetime?: string
          appointment_description?: string | null
          appointment_title?: string
          appointment_type?: string
          calendar_event_id?: string | null
          created_at?: string
          id?: string
          linked_goal_id?: string | null
          reminder_enabled?: boolean
          status?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "weekly_appointments_calendar_event_id_fkey"
            columns: ["calendar_event_id"]
            isOneToOne: false
            referencedRelation: "calendar_events"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "weekly_appointments_linked_goal_id_fkey"
            columns: ["linked_goal_id"]
            isOneToOne: false
            referencedRelation: "purpose_goals"
            referencedColumns: ["id"]
          },
        ]
      }
      welcome_center_posts: {
        Row: {
          author_name: string | null
          author_session_id: string | null
          author_user_id: string | null
          content: string
          created_at: string
          id: string
          is_expert_response: boolean
          parent_post_id: string | null
          updated_at: string
        }
        Insert: {
          author_name?: string | null
          author_session_id?: string | null
          author_user_id?: string | null
          content: string
          created_at?: string
          id?: string
          is_expert_response?: boolean
          parent_post_id?: string | null
          updated_at?: string
        }
        Update: {
          author_name?: string | null
          author_session_id?: string | null
          author_user_id?: string | null
          content?: string
          created_at?: string
          id?: string
          is_expert_response?: boolean
          parent_post_id?: string | null
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "welcome_center_posts_parent_post_id_fkey"
            columns: ["parent_post_id"]
            isOneToOne: false
            referencedRelation: "welcome_center_posts"
            referencedColumns: ["id"]
          },
        ]
      }
      work_task_activity_logs: {
        Row: {
          action_type: string
          changes: Json | null
          created_at: string
          id: string
          notes: string | null
          task_id: string
          user_id: string
        }
        Insert: {
          action_type: string
          changes?: Json | null
          created_at?: string
          id?: string
          notes?: string | null
          task_id: string
          user_id: string
        }
        Update: {
          action_type?: string
          changes?: Json | null
          created_at?: string
          id?: string
          notes?: string | null
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "work_task_activity_logs_task_id_fkey"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "user_work_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      work_task_notifications: {
        Row: {
          created_at: string
          id: string
          is_read: boolean
          notification_message: string
          notification_title: string
          notification_type: string
          read_at: string | null
          task_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_read?: boolean
          notification_message: string
          notification_title: string
          notification_type: string
          read_at?: string | null
          task_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          is_read?: boolean
          notification_message?: string
          notification_title?: string
          notification_type?: string
          read_at?: string | null
          task_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_work_task_notifications_task"
            columns: ["task_id"]
            isOneToOne: false
            referencedRelation: "user_work_tasks"
            referencedColumns: ["id"]
          },
        ]
      }
      work_task_templates: {
        Row: {
          cash_reward: number | null
          coins_reward: number | null
          created_at: string
          estimated_duration_minutes: number | null
          id: string
          is_public: boolean | null
          pmi_points_reward: number | null
          reward_type: string | null
          task_description: string | null
          task_title: string
          template_name: string
          updated_at: string
          usage_count: number | null
          user_id: string
          work_type: string | null
        }
        Insert: {
          cash_reward?: number | null
          coins_reward?: number | null
          created_at?: string
          estimated_duration_minutes?: number | null
          id?: string
          is_public?: boolean | null
          pmi_points_reward?: number | null
          reward_type?: string | null
          task_description?: string | null
          task_title: string
          template_name: string
          updated_at?: string
          usage_count?: number | null
          user_id: string
          work_type?: string | null
        }
        Update: {
          cash_reward?: number | null
          coins_reward?: number | null
          created_at?: string
          estimated_duration_minutes?: number | null
          id?: string
          is_public?: boolean | null
          pmi_points_reward?: number | null
          reward_type?: string | null
          task_description?: string | null
          task_title?: string
          template_name?: string
          updated_at?: string
          usage_count?: number | null
          user_id?: string
          work_type?: string | null
        }
        Relationships: []
      }
      workforce_logs: {
        Row: {
          craft_code: string
          created_at: string
          full_name: string
          hourly_wage: number | null
          id: string
          notes: string | null
          property_id: string
          total_hours: number | null
          updated_at: string
          work_date: string | null
        }
        Insert: {
          craft_code: string
          created_at?: string
          full_name: string
          hourly_wage?: number | null
          id?: string
          notes?: string | null
          property_id: string
          total_hours?: number | null
          updated_at?: string
          work_date?: string | null
        }
        Update: {
          craft_code?: string
          created_at?: string
          full_name?: string
          hourly_wage?: number | null
          id?: string
          notes?: string | null
          property_id?: string
          total_hours?: number | null
          updated_at?: string
          work_date?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "workforce_logs_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "workforce_logs_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties_partner_view"
            referencedColumns: ["id"]
          },
        ]
      }
      workout_locations: {
        Row: {
          accuracy: number
          calories_burned: number | null
          created_at: string
          distance_meters: number | null
          duration_minutes: number | null
          id: string
          latitude: number
          longitude: number
          route_points: Json | null
          timestamp: number
          updated_at: string
          user_id: string
          workout_type: string
        }
        Insert: {
          accuracy: number
          calories_burned?: number | null
          created_at?: string
          distance_meters?: number | null
          duration_minutes?: number | null
          id?: string
          latitude: number
          longitude: number
          route_points?: Json | null
          timestamp: number
          updated_at?: string
          user_id: string
          workout_type: string
        }
        Update: {
          accuracy?: number
          calories_burned?: number | null
          created_at?: string
          distance_meters?: number | null
          duration_minutes?: number | null
          id?: string
          latitude?: number
          longitude?: number
          route_points?: Json | null
          timestamp?: number
          updated_at?: string
          user_id?: string
          workout_type?: string
        }
        Relationships: []
      }
      workspace_members: {
        Row: {
          id: string
          invited_at: string
          invited_by: string | null
          joined_at: string | null
          role: string
          user_id: string
          workspace_id: string
        }
        Insert: {
          id?: string
          invited_at?: string
          invited_by?: string | null
          joined_at?: string | null
          role?: string
          user_id: string
          workspace_id: string
        }
        Update: {
          id?: string
          invited_at?: string
          invited_by?: string | null
          joined_at?: string | null
          role?: string
          user_id?: string
          workspace_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "workspace_members_workspace_id_fkey"
            columns: ["workspace_id"]
            isOneToOne: false
            referencedRelation: "workspaces"
            referencedColumns: ["id"]
          },
        ]
      }
      workspaces: {
        Row: {
          branding: Json | null
          created_at: string
          generation_credits: number
          id: string
          name: string
          owner_id: string
          portal_config: Json | null
          portal_enabled: boolean | null
          prompt_credits: number
          questionnaire_credits: number
          slug: string
          stripe_customer_id: string | null
          stripe_subscription_id: string | null
          subscription_tier: string
          updated_at: string
        }
        Insert: {
          branding?: Json | null
          created_at?: string
          generation_credits?: number
          id?: string
          name: string
          owner_id: string
          portal_config?: Json | null
          portal_enabled?: boolean | null
          prompt_credits?: number
          questionnaire_credits?: number
          slug: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_tier?: string
          updated_at?: string
        }
        Update: {
          branding?: Json | null
          created_at?: string
          generation_credits?: number
          id?: string
          name?: string
          owner_id?: string
          portal_config?: Json | null
          portal_enabled?: boolean | null
          prompt_credits?: number
          questionnaire_credits?: number
          slug?: string
          stripe_customer_id?: string | null
          stripe_subscription_id?: string | null
          subscription_tier?: string
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      communication_history_view: {
        Row: {
          ai_reframe_suggestion: string | null
          ai_suggestion: string | null
          alert_created_at: string | null
          alert_id: string | null
          created_at: string | null
          message_id: string | null
          original_message_text: string | null
          recipient_id: string | null
          recipient_mood_at_send: string | null
          sender_id: string | null
          sender_mood_at_send: string | null
          sent_message: string | null
          severity_level: string | null
          thread_id: string | null
          tone_analysis: Json | null
          tone_indicators: Json | null
          user_action: string | null
          was_reframed: boolean | null
        }
        Relationships: []
      }
      properties_partner_view: {
        Row: {
          city: string | null
          full_address: string | null
          id: string | null
          property_type: string | null
          purchase_price: number | null
          state: string | null
          units: number | null
          year_built: number | null
          zip_code: string | null
        }
        Insert: {
          city?: string | null
          full_address?: string | null
          id?: string | null
          property_type?: string | null
          purchase_price?: number | null
          state?: string | null
          units?: number | null
          year_built?: number | null
          zip_code?: string | null
        }
        Update: {
          city?: string | null
          full_address?: string | null
          id?: string | null
          property_type?: string | null
          purchase_price?: number | null
          state?: string | null
          units?: number | null
          year_built?: number | null
          zip_code?: string | null
        }
        Relationships: []
      }
      user_unified_history: {
        Row: {
          ai_analysis: Json | null
          created_at: string | null
          export_data: Json | null
          id: string | null
          interaction_type: string | null
          metadata: Json | null
          original_content: string | null
          tool_type: string | null
          user_id: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      approve_beta_access: {
        Args: { p_user_email: string }
        Returns: undefined
      }
      audit_database_security: {
        Args: never
        Returns: {
          anon_can_delete: boolean
          anon_can_insert: boolean
          anon_can_select: boolean
          anon_can_update: boolean
          has_rls: boolean
          table_name: string
        }[]
      }
      award_aex_points: {
        Args: {
          p_aex_outcome?: string
          p_ai_contribution?: string
          p_child_profile_id: string
          p_if_iv_contribution?: string
          p_moment_description: string
          p_moment_type: string
          p_parent_note?: string
          p_points: number
        }
        Returns: string
      }
      award_child_logging_coins: {
        Args: {
          p_child_profile_id: string
          p_coins_amount: number
          p_log_type: string
          p_parent_user_id: string
        }
        Returns: undefined
      }
      award_coins: {
        Args: {
          p_amount: number
          p_description?: string
          p_source_id?: string
          p_source_type: string
          p_user_id: string
        }
        Returns: undefined
      }
      award_onboarding_completion_bonus: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      award_points: {
        Args: {
          p_description?: string
          p_points: number
          p_source_id?: string
          p_source_type: string
          p_user_id: string
        }
        Returns: undefined
      }
      award_profile_completion_points: {
        Args: { p_user_id: string }
        Returns: undefined
      }
      calculate_dynamic_budget: {
        Args: { p_user_id: string }
        Returns: {
          amount: number
          category_name: string
          percentage: number
        }[]
      }
      calculate_resident_compliance: {
        Args: { p_resident_id: string }
        Returns: number
      }
      can_invite_to_campfire: {
        Args: { p_campfire_id: string; p_user_id: string }
        Returns: boolean
      }
      check_achievements: { Args: { p_user_id: string }; Returns: undefined }
      check_affirmation_coin_rewards: {
        Args: { p_affirmation_id: string }
        Returns: undefined
      }
      check_creation_coin_rewards: {
        Args: { p_creation_id: string }
        Returns: undefined
      }
      check_overdue_compliance: { Args: never; Returns: undefined }
      check_rate_limit: {
        Args: {
          p_endpoint: string
          p_max_requests?: number
          p_user_id: string
          p_window_minutes?: number
        }
        Returns: boolean
      }
      check_workspace_access: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: boolean
      }
      check_workspace_admin: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: boolean
      }
      claim_contact_turning_reward: {
        Args: { p_celebration_year: number; p_contact_id: string }
        Returns: Json
      }
      cleanup_expired_sso_tokens: { Args: never; Returns: undefined }
      client_has_permission: {
        Args: { _permission: string; _property_id: string; _user_id: string }
        Returns: boolean
      }
      contact_birthday_in_year: {
        Args: { p_dob: string; p_year: number }
        Returns: string
      }
      convert_cash_to_coins: {
        Args: {
          p_cash_amount: number
          p_conversion_rate?: number
          p_user_id: string
        }
        Returns: boolean
      }
      convert_coins_to_cash: {
        Args: {
          p_coins_amount: number
          p_conversion_rate?: number
          p_user_id: string
        }
        Returns: boolean
      }
      deduct_credit: {
        Args: {
          p_credit_type: string
          p_description?: string
          p_user_id: string
          p_workspace_id: string
        }
        Returns: boolean
      }
      facility_financial_summary: {
        Args: {
          p_end_date?: string
          p_facility_id: string
          p_start_date?: string
        }
        Returns: Json
      }
      generate_compliance_todos: {
        Args: { p_company_id: string }
        Returns: {
          description: string
          due_date: string
          id: string
          priority: string
          requirement_id: string
          status: string
          title: string
        }[]
      }
      get_company_access_level: {
        Args: { p_company_id: string; p_user_id: string }
        Returns: string
      }
      get_company_compliance_status: {
        Args: { p_company_id: string }
        Returns: {
          compliance_score: number
          compliant_count: number
          overdue_count: number
          total_requirements: number
          upcoming_count: number
        }[]
      }
      get_daily_active_users: { Args: { target_date: string }; Returns: number }
      get_facility_house_vibe: {
        Args: { p_facility_id: string }
        Returns: {
          avg_energy: number
          avg_mood: number
          checkin_count: number
          compliance_avg: number
          resident_count: number
        }[]
      }
      get_intake_form_by_token: {
        Args: { p_share_token: string }
        Returns: Json
      }
      get_invitation_by_token: {
        Args: { _token: string }
        Returns: {
          email: string
          expires_at: string
          facility_id: string
          facility_name: string
          id: string
          role: string
          staff_name: string
          status: string
        }[]
      }
      get_monthly_active_users: {
        Args: { target_date: string }
        Returns: number
      }
      get_personality_limits: {
        Args: { p_user_id: string }
        Returns: {
          alter_ego_limit: number
          alter_intelligence_limit: number
          influencer_limit: number
        }[]
      }
      get_portal_by_token: { Args: { p_token: string }; Returns: Json }
      get_portal_chat_id: {
        Args: { p_client_email: string; p_workspace_id: string }
        Returns: string
      }
      get_portal_content: {
        Args: { p_email?: string; p_workspace_id: string }
        Returns: Json
      }
      get_pro_client_relationships: {
        Args: { p_professional_id: string }
        Returns: {
          client_ae_name: string
          client_ai_name: string
          client_data_consent: boolean
          client_email: string
          client_id: string
          client_username: string
          created_at: string
          professional_id: string
          relationship_id: string
          status: string
          updated_at: string
        }[]
      }
      get_profiles_count: { Args: { p_since?: string }; Returns: number }
      get_profiles_for_invitation: {
        Args: {
          p_campfire_id: string
          p_limit?: number
          p_search_term?: string
        }
        Returns: {
          email: string
          id: string
          username: string
        }[]
      }
      get_questionnaire_by_token: {
        Args: { p_share_token: string }
        Returns: {
          client_email: string | null
          client_id: string | null
          client_name: string | null
          completed_at: string | null
          created_at: string
          expires_at: string | null
          id: string
          last_activity_at: string | null
          progress_percentage: number | null
          project_id: string | null
          questionnaire_type: string
          questions_answered: number | null
          responses: Json | null
          revision_count: number
          sent_at: string | null
          share_token: string
          started_at: string | null
          status: string
          template_id: string | null
          total_questions: number | null
          updated_at: string
          viewed_at: string | null
          workspace_id: string
        }[]
        SetofOptions: {
          from: "*"
          to: "client_questionnaires"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_questionnaire_token: { Args: never; Returns: string }
      get_relationship_by_uid: {
        Args: { p_uid: string }
        Returns: {
          client_id: string
          id: string
          professional_id: string
          relationship_uid: string
          status: string
          verification_code: string
        }[]
      }
      get_relationship_by_verification_code: {
        Args: { p_code: string }
        Returns: {
          client_id: string
          id: string
          professional_id: string
          relationship_uid: string
          status: string
          verification_code: string
        }[]
      }
      get_user_account_types: { Args: { p_user_id: string }; Returns: string[] }
      get_user_facility_ids: { Args: { _user_id: string }; Returns: string[] }
      get_user_unified_history: {
        Args: {
          p_end?: string
          p_interaction_types?: string[]
          p_limit?: number
          p_origin_filters?: string[]
          p_start?: string
          p_text_search?: string
          p_tool_types?: string[]
        }
        Returns: {
          ai_analysis: Json | null
          created_at: string | null
          export_data: Json | null
          id: string | null
          interaction_type: string | null
          metadata: Json | null
          original_content: string | null
          tool_type: string | null
          user_id: string | null
        }[]
        SetofOptions: {
          from: "*"
          to: "user_unified_history"
          isOneToOne: false
          isSetofReturn: true
        }
      }
      get_user_unified_history_count: {
        Args: {
          p_end?: string
          p_interaction_types?: string[]
          p_origin_filters?: string[]
          p_start?: string
          p_text_search?: string
          p_tool_types?: string[]
        }
        Returns: number
      }
      get_weekly_active_users: {
        Args: { target_date: string }
        Returns: number
      }
      get_workspace_by_slug: {
        Args: { p_slug: string }
        Returns: {
          id: string
          name: string
          portal_config: Json
          portal_enabled: boolean
        }[]
      }
      grant_admin_by_email: { Args: { user_email: string }; Returns: undefined }
      has_account_type: {
        Args: { p_account_type: string; p_user_id: string }
        Returns: boolean
      }
      has_current_privacy_consent: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      increment_invitation_count: {
        Args: { p_campfire_id: string; p_user_id: string }
        Returns: undefined
      }
      increment_portal_unread: {
        Args: { p_portal_id: string }
        Returns: undefined
      }
      increment_preview_view_count: {
        Args: { preview_share_token: string }
        Returns: undefined
      }
      initialize_user_subscription: {
        Args: { p_email?: string; p_user_id: string }
        Returns: undefined
      }
      is_admin_or_moderator: { Args: { p_user_id: string }; Returns: boolean }
      is_any_jv_partner: { Args: { _user_id: string }; Returns: boolean }
      is_any_property_client: { Args: { _user_id: string }; Returns: boolean }
      is_beta_tester: { Args: { _user_id: string }; Returns: boolean }
      is_company_member: {
        Args: { p_company_id: string; p_user_id: string }
        Returns: boolean
      }
      is_facility_staff: {
        Args: { _facility_id: string; _user_id: string }
        Returns: boolean
      }
      is_jv_partner: {
        Args: { _property_id: string; _user_id: string }
        Returns: boolean
      }
      is_premium_access_active: {
        Args: { p_user_id: string }
        Returns: boolean
      }
      is_property_client: {
        Args: { _property_id: string; _user_id: string }
        Returns: boolean
      }
      is_property_owner: {
        Args: { _property_id: string; _user_id: string }
        Returns: boolean
      }
      is_super_admin: { Args: { _user_id: string }; Returns: boolean }
      is_workspace_admin: { Args: { workspace_uuid: string }; Returns: boolean }
      is_workspace_member: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: boolean
      }
      is_workspace_owner: {
        Args: { p_user_id: string; p_workspace_id: string }
        Returns: boolean
      }
      log_security_breach_attempt: {
        Args: {
          p_attempted_action: string
          p_metadata?: Json
          p_table_name: string
          p_user_id?: string
        }
        Returns: undefined
      }
      log_security_event:
        | {
            Args: {
              p_actor_id: string
              p_event_type: string
              p_metadata: Json
              p_resource_id: string
              p_resource_type: string
            }
            Returns: undefined
          }
        | {
            Args: {
              p_actor_id: string
              p_event_type: string
              p_ip_address?: unknown
              p_metadata: Json
              p_resource_id: string
              p_resource_type: string
              p_user_agent?: string
            }
            Returns: undefined
          }
      lookup_child_login: {
        Args: { p_pin_code: string; p_username: string }
        Returns: Json
      }
      lookup_user_id_by_email: { Args: { p_email: string }; Returns: string }
      owns_property: { Args: { _property_id: string }; Returns: boolean }
      purchase_onboarding_boost: {
        Args: { p_boost_type: string; p_coins_cost: number; p_user_id: string }
        Returns: boolean
      }
      queue_api_request: {
        Args: {
          p_endpoint: string
          p_priority?: number
          p_request_data: Json
          p_user_id: string
        }
        Returns: string
      }
      revoke_beta_access: { Args: { p_user_email: string }; Returns: undefined }
      save_intake_form_progress: {
        Args: {
          p_ae_profile?: Json
          p_ai_profile?: Json
          p_compatibility_answers?: Json
          p_financial_housing?: Json
          p_i_profile?: Json
          p_personal_info?: Json
          p_share_token: string
        }
        Returns: Json
      }
      search_community_embeddings: {
        Args: {
          exclude_user?: string
          match_count?: number
          min_similarity?: number
          query_embedding: string
        }
        Returns: {
          content_text: string
          id: string
          mood_score: number
          sharing_level: string
          similarity: number
          topic_tags: string[]
        }[]
      }
      search_users_basic: {
        Args: { p_limit?: number; p_search_term: string }
        Returns: {
          email: string
          id: string
          username: string
        }[]
      }
      secure_admin_action: {
        Args: {
          p_action_type: string
          p_details?: Json
          p_resource_id?: string
          p_resource_type: string
        }
        Returns: boolean
      }
      sign_nda: {
        Args: {
          p_first_name?: string
          p_ip_address?: string
          p_last_name?: string
          p_phone_number?: string
          p_state?: string
          p_user_agent?: string
        }
        Returns: undefined
      }
      spend_coins: {
        Args: {
          p_amount: number
          p_description?: string
          p_source_id?: string
          p_source_type: string
          p_user_id: string
        }
        Returns: boolean
      }
      spend_talks_credits: {
        Args: { p_cost: number; p_reason: string; p_reference_id?: string }
        Returns: Json
      }
      submit_intake_form: {
        Args: {
          p_ae_profile: Json
          p_ai_profile: Json
          p_compatibility_answers: Json
          p_financial_housing: Json
          p_i_profile: Json
          p_personal_info: Json
          p_share_token: string
        }
        Returns: Json
      }
      update_express_progress: {
        Args: {
          p_agreement_id: string
          p_completed: boolean
          p_task_type: string
        }
        Returns: undefined
      }
      update_questionnaire_by_token: {
        Args: {
          p_completed_at?: string
          p_responses?: Json
          p_share_token: string
          p_started_at?: string
          p_status?: string
          p_viewed_at?: string
        }
        Returns: boolean
      }
      update_questionnaire_progress: {
        Args: {
          p_progress_percentage: number
          p_question_id: string
          p_questions_answered: number
          p_section_name: string
          p_share_token: string
          p_total_questions: number
        }
        Returns: undefined
      }
      upsert_rate_limit: {
        Args: {
          p_endpoint: string
          p_request_count?: number
          p_user_id: string
        }
        Returns: undefined
      }
      validate_admin_session: { Args: { p_session_data?: Json }; Returns: Json }
      validate_ownership_total: {
        Args: { p_company_id: string }
        Returns: boolean
      }
    }
    Enums: {
      affirmation_feedback_rating_enum:
        | "very_helpful"
        | "helpful"
        | "neutral"
        | "not_helpful"
        | "distracting"
      affirmation_intent_enum:
        | "relationship"
        | "motivational"
        | "sports"
        | "financial_discipline"
        | "self_acceptance"
        | "productivity"
        | "confidence"
        | "stress_relief"
        | "other"
      app_role:
        | "admin"
        | "moderator"
        | "user"
        | "professional"
        | "beta_tester"
        | "business_user"
        | "enterprise_user"
        | "parent_user"
        | "investor"
        | "super_admin"
      care_area_enum: "self_care" | "health_care" | "wealth_care"
      chatbot_flow_action_type:
        | "redirect_url"
        | "handshake_card"
        | "custom_response"
      consent_type:
        | "health_data"
        | "personality_analysis"
        | "communication_analysis"
        | "location_tracking"
        | "marketing_communications"
      property_client_role:
        | "owner"
        | "jv_partner"
        | "lender"
        | "contractor"
        | "professional"
        | "client"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      affirmation_feedback_rating_enum: [
        "very_helpful",
        "helpful",
        "neutral",
        "not_helpful",
        "distracting",
      ],
      affirmation_intent_enum: [
        "relationship",
        "motivational",
        "sports",
        "financial_discipline",
        "self_acceptance",
        "productivity",
        "confidence",
        "stress_relief",
        "other",
      ],
      app_role: [
        "admin",
        "moderator",
        "user",
        "professional",
        "beta_tester",
        "business_user",
        "enterprise_user",
        "parent_user",
        "investor",
        "super_admin",
      ],
      care_area_enum: ["self_care", "health_care", "wealth_care"],
      chatbot_flow_action_type: [
        "redirect_url",
        "handshake_card",
        "custom_response",
      ],
      consent_type: [
        "health_data",
        "personality_analysis",
        "communication_analysis",
        "location_tracking",
        "marketing_communications",
      ],
      property_client_role: [
        "owner",
        "jv_partner",
        "lender",
        "contractor",
        "professional",
        "client",
      ],
    },
  },
} as const
