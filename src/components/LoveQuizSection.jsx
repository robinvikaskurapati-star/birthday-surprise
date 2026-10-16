import React, { useState } from 'react';
import { HelpCircle, Award, RotateCcw, CheckCircle2, Heart, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { personalization } from '../data/personalization';

export default function LoveQuizSection() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const quiz = personalization.quiz;
  const questions = quiz.questions;
  const currentQ = questions[currentQuestionIndex];

  const handleSelectOption = (index) => {
    setSelectedOption(index);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsCompleted(true);
      // Confetti burst for quiz completion!
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#f43f68', '#fbaac0', '#ffd166', '#a0c4ff'],
        });
      } catch {}
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setAnswers([]);
    setIsCompleted(false);
  };

  return (
    <section id="quiz" className="py-20 px-4 relative bg-[#fff9fa]">
      <div className="max-w-2xl mx-auto text-center">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-pink-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Couple's Mini Game</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-display font-bold text-gray-900 mb-3">
          {quiz.title}
        </h2>
        <p className="text-gray-600 max-w-md mx-auto text-base sm:text-lg font-light mb-10">
          {quiz.subtitle}
        </p>

        {/* Quiz Card */}
        <div className="romantic-glass rounded-3xl p-6 sm:p-10 shadow-xl border border-pink-200/90 text-left relative overflow-hidden">
          {!isCompleted ? (
            <div>
              {/* Progress Bar & Counter */}
              <div className="flex items-center justify-between mb-4 text-xs font-semibold text-pink-600">
                <span>
                  Question {currentQuestionIndex + 1} of {questions.length}
                </span>
                <span className="font-mono">
                  {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
                </span>
              </div>
              <div className="w-full h-2 bg-pink-100 rounded-full mb-8 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-pink-400 to-rose-500 transition-all duration-300"
                  style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
                />
              </div>

              {/* Question */}
              <h3 className="text-xl sm:text-2xl font-display font-bold text-gray-800 mb-6">
                {currentQ.question}
              </h3>

              {/* Options */}
              <div className="space-y-3 mb-6">
                {currentQ.options.map((opt, i) => {
                  const isSelected = selectedOption === i;
                  return (
                    <button
                      key={i}
                      onClick={() => handleSelectOption(i)}
                      className={`w-full text-left p-4 rounded-xl border text-sm sm:text-base font-medium transition-all duration-200 flex items-center justify-between ${
                        isSelected
                          ? 'bg-pink-500 text-white border-pink-600 shadow-md transform scale-[1.01]'
                          : 'bg-white hover:bg-pink-50/60 text-gray-700 border-pink-200'
                      }`}
                    >
                      <span>{opt}</span>
                      {isSelected && <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 ml-2" />}
                    </button>
                  );
                })}
              </div>

              {/* Reaction hint if selected */}
              {selectedOption !== null && currentQ.reaction && (
                <div className="mb-6 p-3 rounded-xl bg-pink-50 border border-pink-200 text-xs text-pink-700 flex items-center gap-2 animate-fadeIn">
                  <Sparkles className="w-4 h-4 flex-shrink-0 text-pink-500" />
                  <span>{currentQ.reaction}</span>
                </div>
              )}

              {/* Next Button */}
              <div className="text-right">
                <button
                  disabled={selectedOption === null}
                  onClick={handleNext}
                  className={`px-8 py-3 rounded-full font-semibold text-sm transition-all shadow-md ${
                    selectedOption !== null
                      ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white hover:opacity-95 cursor-pointer shadow-pink-500/20'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed shadow-none'
                  }`}
                >
                  {currentQuestionIndex + 1 === questions.length ? 'Finish Quiz 💖' : 'Next Question →'}
                </button>
              </div>
            </div>
          ) : (
            /* Completed Screen / Certificate of Love */
            <div className="py-6 text-center animate-fadeIn">
              <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-tr from-pink-400 to-rose-500 text-white flex items-center justify-center shadow-lg shadow-pink-500/30 mb-4 animate-bounce">
                <Award className="w-10 h-10" />
              </div>

              <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-700 text-xs font-bold uppercase tracking-wider mb-3">
                {quiz.completion.badge}
              </div>

              <h3 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">
                You Stole My Heart Completely! 💘
              </h3>

              <p className="text-gray-600 max-w-md mx-auto text-base font-light mb-8">
                {quiz.completion.message}
              </p>

              <button
                onClick={restartQuiz}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-pink-300 text-pink-600 hover:bg-pink-50 font-semibold text-sm shadow-sm transition-all"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{quiz.completion.restartButton}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
