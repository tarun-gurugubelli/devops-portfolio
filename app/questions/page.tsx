"use client"; // Add this line at the top

import { useEffect, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface QuestionItem {
  question: string;
  answer: string;
}

interface QuestionCategory {
  category: string;
  items: QuestionItem[];
}

export default function QuestionsPage() {
  const [questions, setQuestions] = useState<QuestionCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false); // New state to track if component is mounted

  useEffect(() => {
    const fetchQuestions = async () => {
      const res = await fetch(`/data/questionsv2.json`);
      const data = await res.json();
      setQuestions(data.questions);
      setIsMounted(true); // Set mounted state to true after fetching
    };

    fetchQuestions();
  }, []);

  // Function to scroll to the section based on the hash
  const scrollToHash = (hash: string) => {
    const element = document.getElementById(hash);
    if (element) {
      const headerOffset = 100; // Adjust this if you have a fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Handle initial hash and scroll after questions are fetched
  useEffect(() => {
    if (isMounted) { // Check if component has mounted
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveCategory(hash);
        scrollToHash(hash);
      }
    }
  }, [isMounted]); // Run when isMounted changes

  // Handle hash changes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveCategory(hash);
        scrollToHash(hash);
      }
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold tracking-tight mb-8">Frequently Asked Questions</h1>

      <div className="space-y-8">
        {questions.map((category) => (
          <div key={category.category}>
            <h2
              className={`text-2xl font-semibold mb-4 ${activeCategory === category.category.toLowerCase() ? 'text-blue-500' : ''}`}
              id={category.category.toLowerCase()}
            >
              {category.category} Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {category.items.map((item, index) => (
                <AccordionItem key={index} value={`${category.category}-${index}`}>
                  <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        ))}
      </div>
    </main>
  );
}
