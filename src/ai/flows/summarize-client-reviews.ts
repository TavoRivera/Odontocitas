// SummarizeClientReviews.ts
'use server';

/**
 * @fileOverview Summarizes client reviews for a student.
 *
 * - summarizeClientReviews - A function that summarizes the client reviews.
 * - SummarizeClientReviewsInput - The input type for the summarizeClientReviews function.
 * - SummarizeClientReviewsOutput - The return type for the summarizeClientReviews function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeClientReviewsInputSchema = z.object({
  reviews: z
    .array(z.string())
    .describe('An array of client reviews to be summarized.'),
});
export type SummarizeClientReviewsInput = z.infer<
  typeof SummarizeClientReviewsInputSchema
>;

const SummarizeClientReviewsOutputSchema = z.object({
  summary: z
    .string()
    .describe(
      'A concise summary of the client reviews, highlighting key positive and negative feedback points.'
    ),
});
export type SummarizeClientReviewsOutput = z.infer<
  typeof SummarizeClientReviewsOutputSchema
>;

export async function summarizeClientReviews(
  input: SummarizeClientReviewsInput
): Promise<SummarizeClientReviewsOutput> {
  return summarizeClientReviewsFlow(input);
}

const summarizeClientReviewsPrompt = ai.definePrompt({
  name: 'summarizeClientReviewsPrompt',
  input: {schema: SummarizeClientReviewsInputSchema},
  output: {schema: SummarizeClientReviewsOutputSchema},
  prompt: `You are an expert in summarizing customer reviews.

  Please provide a concise summary of the following client reviews, highlighting the key positive and negative feedback points.

  Reviews:
  {{#each reviews}}
  - {{{this}}}
  {{/each}}
  `,
});

const summarizeClientReviewsFlow = ai.defineFlow(
  {
    name: 'summarizeClientReviewsFlow',
    inputSchema: SummarizeClientReviewsInputSchema,
    outputSchema: SummarizeClientReviewsOutputSchema,
  },
  async input => {
    const {output} = await summarizeClientReviewsPrompt(input);
    return output!;
  }
);
