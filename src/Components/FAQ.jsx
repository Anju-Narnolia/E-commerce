import { useState } from "react";
// import { motion } from "framer-motion";

const faqs = [
  { question: "What payment methods do you accept?", answer: "We accept credit cards, PayPal, and more." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with standard and express options." },
  { question: "How can I track my order?", answer: "Once your order is shipped, we provide a tracking number via email." },
  { question: "What is your return policy?", answer: "We offer a 30-day return policy on all items." },
  { question: "Are your products authentic?", answer: "Yes, we guarantee 100% authenticity on all our products." },
  { question: "Can I change or cancel my order?", answer: "Orders can be modified or canceled within 12 hours of purchase." },
  { question: "How do I contact customer support?", answer: "You can reach us via email or live chat on our website." },
  { question: "Do you offer discounts for bulk purchases?", answer: "Yes, we offer special discounts on bulk orders. Contact us for details." },
  { question: "How do I choose the right shoe size?", answer: "Refer to our size guide for accurate measurements." },
  { question: "Is my payment information secure?", answer: "Yes, we use SSL encryption to protect your payment details." }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg p-4">
            <button
              className="flex justify-between w-full text-lg font-medium text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-blue-500">{openIndex === index ? "➖" : "➕"}</span>
            </button>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-2 text-gray-600"
              >
                {faq.answer}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
