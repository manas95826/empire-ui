"use client";

import { AIGrammarCheckButton } from "../core/AIGrammarCheckButton";

export const AIGrammarButtonExample = () => {
  return (
    <div className="p-6 content-to-summarize">
      <div className="flex gap-5 flex-auto flex-wrap">
        <div>
          Artificial intelligence (AI) is a set of technologies that enable
          computers to perform advanced functions, such as learning, reasoning,
          and problem-solving. AI systems use logic and decision trees to learn
          from data, identify patterns, and mimic human decision-making.
        </div>
        <AIGrammarCheckButton textSelector=".content-to-summarize" />
      </div>
    </div>
  );
};
