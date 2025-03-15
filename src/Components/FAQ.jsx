import { useState } from "react";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit cards, PayPal, and more.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide with standard and express options.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, we provide a tracking number via email.",
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all items.",
  },
  {
    question: "Are your products authentic?",
    answer: "Yes, we guarantee 100% authenticity on all our products.",
  },
  {
    question: "Can I change or cancel my order?",
    answer: "Orders can be modified or canceled within 12 hours of purchase.",
  },
  {
    question: "How do I contact customer support?",
    answer: "You can reach us via email or live chat on our website.",
  },
  {
    question: "Do you offer discounts for bulk purchases?",
    answer:
      "Yes, we offer special discounts on bulk orders. Contact us for details.",
  },
  {
    question: "How do I choose the right shoe size?",
    answer: "Refer to our size guide for accurate measurements.",
  },
  {
    question: "Is my payment information secure?",
    answer: "Yes, we use SSL encryption to protect your payment details.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-12 p-6">
      <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="flex justify-between items-center w-full px-6 py-4 text-lg font-medium text-gray-800 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-red-800 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={
                openIndex === index
                  ? { height: "auto", opacity: 1 }
                  : { height: 0, opacity: 0 }
              }
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <p className="px-6 py-4 bg-white text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
