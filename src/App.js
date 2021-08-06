import "./styles.css";
import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";

export default function App() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>General Questions</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestion key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}
