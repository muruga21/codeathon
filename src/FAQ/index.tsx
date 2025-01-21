import { SetStateAction, useState } from 'react'

const Faq = () => {
  const faqQuestinons = [
    {
      question: 'What materials are Efful products made of?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'What is the estimated delivery time?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'What does "vegan leather" mean?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'Are Efful Wet Wipes safe for sensitive skin?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'Do Efful Wet Wipes contain alcohol?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'Can I use Efful Wet Wipes to remove makeup?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
    {
      question: 'Are your facial tissues made from recycled materials?',
      answer: 'All our products are crafted using 100% vegan leather and handcrafted Indian fabrics',
    },
  ]

  const [index, setIndex] = useState(0)

  const handleView = (val: SetStateAction<number>) => {
    if (index === val) {
      val = -1
    }
    setIndex(val)
  }

  return (
    <>
      <div className="py-20 text-white bg-[#333] transform ease-in">
        <h1 className="text-4xl font-bold text-center m-8">FREQUENTLY ASKED QUESTIONS</h1>
        <div className="flex flex-col justify-center items-center w-full">
          {faqQuestinons.map((question, key) => (
            <div key={key} className="w-[80%] md:w-[50%] p-4 border-b-2 flex justify-between text-lg items-center">
              <div className="flex gap-3 flex-col w-full">
                <div className="flex justify-between">
                  <div className="mr-4 font-medium">{question.question}</div>
                  <button onClick={() => handleView(key)}>
                    {index === key ? (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    ) : (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5 12H19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5V19"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </button>
                </div>
                <div className={`${key == index ? 'block' : 'hidden'} text-lg py-2 font-light`}>{question.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Faq
