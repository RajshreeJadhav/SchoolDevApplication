import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Teachinginclass from "../Assets/TeachinginclassIcon.jpeg";

const chapters = [
  { 
    title: 'Chapter 1: Real Numbers', 
    details: [
      '1.1 Decimal Expansions of Real Numbers',
      "1.2 Euclid's Division Lemma",
      '1.3 The Fundamental Theorem of Arithmetic'
    ] 
  },
  { 
    title: 'Chapter 2: Polynomials', 
    details: [
      '2.1 Division Algorithm for Polynomials',
      '2.2 Geometrical Meaning of the Zeroes of a Polynomial',
      '2.3 Relationship Between Zeroes and Coefficients of a Polynomial'
    ] 
  },
  { 
    title: 'Chapter 3: Pair of Linear Equations in Two Variables', 
    details: [
      '3.1 Cross-Multiplication Method to Solve a Pair of Linear Equations',
      '3.2 Elimination Method to Solve a Pair of Linear Equations',
      '3.3 Equation Pairs: Reducing to Linear Form',
      '3.4 Graphical Method of Solution of a Pair of Linear Equations',
      '3.5 Substitution Method to Solve a Pair of Linear Equations'
    ] 
  },
  { 
    title: 'Chapter 4: Quadratic Equations', 
    details: [
      '4.1 Introduction to Quadratic Equations',
      '4.2 Nature of Roots',
      '4.3 Solution of a Quadratic Equation by Completing the Square',
      '4.4 Solution of a Quadratic Equation by Factorisation'
    ] 
  },
  { 
    title: 'Chapter 5: Arithmetic Progressions', 
    details: [
      '5.1 General Term of an Arithmetic Progression',
      '5.2 Introduction to Arithmetic Progression',
      '5.3 Sum of First n Terms of an Arithmetic Progression'
    ] 
  },
  { 
    title: 'Chapter 6: Triangles', 
    details: [
      '6.1 Areas of Similar Triangles',
      '6.2 Basic Proportionality Theorem',
      '6.3 Criteria for Similarity of Triangles',
      '6.4 Pythagoras Theorem',
      '6.5 Similar Figures'
    ] 
  },
  { 
    title: 'Chapter 7: Coordinate Geometry', 
    details: [
      '7.1 Area of a Triangle',
      '7.2 Distance Formula',
      '7.3 Section Formula'
    ] 
  },
  { 
    title: 'Chapter 8: Introduction to Trigonometry', 
    details: [
      '8.1 Trigonometric Identities',
      '8.2 Trigonometric Ratios',
      '8.3 Trigonometric Ratios of Complementary Angles',
      '8.4 Trigonometric Ratios of Some Specific Angles'
    ] 
  },
  { 
    title: 'Chapter 9: Some Applications of Trigonometry', 
    details: [
      '9.1 Heights and Distances'
    ] 
  },
  { 
    title: 'Chapter 10: Circles', 
    details: [
      '10.1 Tangent to a Circle',
      '10.2 Tangents from a Point on a Circle'
    ] 
  },
];

const Mathematics = () => {
  const [openChapterIndex, setOpenChapterIndex] = useState(null);
  const [completedChapters, setCompletedChapters] = useState(Array(chapters.length).fill(false));

  const toggleChapter = (index) => {
    setOpenChapterIndex(openChapterIndex === index ? null : index);
  };

  const toggleCompletion = (index) => {
    const newCompletedChapters = [...completedChapters];
    newCompletedChapters[index] = !newCompletedChapters[index];
    setCompletedChapters(newCompletedChapters);
  };

  return (
    <div className="p-2 bg-orange-200">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-4 text-center font-fredericka">Mathematics Class X Course Structure</h1>
        {chapters.map((chapter, index) => (
          <div key={index} className="mb-4">
            <div className={`flex justify-between items-center mb-2 font-just-another-hand ${completedChapters[index] ? 'bg-green-100 rounded p-2 border border-gray-300' : ''} ${!completedChapters[index] && openChapterIndex !== null && openChapterIndex !== index ? 'text-gray-400' : 'text-black'}`}>
              <div className="flex items-center space-x-2">
                <input 
                  type="checkbox" 
                  checked={completedChapters[index]} 
                  onChange={() => toggleCompletion(index)} 
                  className="mr-2 font-just-another-hand"
                  disabled={openChapterIndex !== null && openChapterIndex !== index}
                />
                <span className="text-lg font-medium">{chapter.title}</span>
              </div>
              <div className="flex items-center space-x-2">
                {!completedChapters[index] && openChapterIndex === index && (
                  <div className="flex items-center">
                    <img src={Teachinginclass} alt="Teaching in class Icon" className="w-10 h-10 rounded-full overflow-hidden bg-gray-200" />
                    <span className="ml-1 text-sm font-bold text-green-700 font-just-another-hand">Teaching in class</span>
                  </div>
                )}
                <button className="ml-2 p-1 bg-transparent border-none" onClick={() => toggleChapter(index)}>
                  {openChapterIndex === index ? <FaChevronUp className="h-5 w-5" /> : <FaChevronDown className="h-5 w-5" />}
                </button>
              </div>
            </div>
            {openChapterIndex === index && (
              <div className="ml-4 mb-2 p-2 bg-white rounded shadow font-just-another-hand">
                {chapter.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-base">{detail}</p>
                ))}
                <hr className="mt-2 border-gray-400" />
              </div>
            )}
            {index < chapters.length - 1 && <hr className="my-2 border-2 border-red-600" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mathematics;
