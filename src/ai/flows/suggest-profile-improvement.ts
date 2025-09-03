// src/ai/flows/suggest-profile-improvement.ts
'use server';

/**
 * @fileOverview Provides AI-powered suggestions on how to improve a student's profile.
 *
 * - suggestProfileImprovement - A function that generates profile improvement suggestions.
 * - SuggestProfileImprovementInput - The input type for the suggestProfileImprovement function.
 * - SuggestProfileImprovementOutput - The return type for the suggestProfileImprovement function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestProfileImprovementInputSchema = z.object({
  profileText: z
    .string()
    .describe('The current text of the student profile.'),
});
export type SuggestProfileImprovementInput = z.infer<
  typeof SuggestProfileImprovementInputSchema
>;

const SuggestProfileImprovementOutputSchema = z.object({
  suggestions: z
    .string()
    .describe('AI-powered suggestions on how to improve the profile.'),
});
export type SuggestProfileImprovementOutput = z.infer<
  typeof SuggestProfileImprovementOutputSchema
>;

export async function suggestProfileImprovement(
  input: SuggestProfileImprovementInput
): Promise<SuggestProfileImprovementOutput> {
  return suggestProfileImprovementFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestProfileImprovementPrompt',
  input: {schema: SuggestProfileImprovementInputSchema},
  output: {schema: SuggestProfileImprovementOutputSchema},
  prompt: `You are an AI assistant that helps students improve their online profiles to attract more clients.

  Based on the current profile text provided, suggest concrete improvements to make the profile more appealing and effective.

  Current Profile Text: {{{profileText}}}

  Suggestions:
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const suggestProfileImprovementFlow = ai.defineFlow(
  {
    name: 'suggestProfileImprovementFlow',
    inputSchema: SuggestProfileImprovementInputSchema,
    outputSchema: SuggestProfileImprovementOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
