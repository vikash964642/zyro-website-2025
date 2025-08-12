import FAQUtils from '../../../Utils/FAQUtils';

function Faq() {

    const faq = [
  {
    ques: "How does the QR Sound Box connect to the internet?",
    ans: "It connects using a pre-installed SIM card, so no Wi-Fi is required.",
  },
  {
    ques: "What payment methods does the QR Sound Box support?",
    ans: "It supports payments through Bharat Pe QR and various other payment apps.",
  },
  {
    ques: "How many days does it take to install the sound box?",
    ans: "The sound box can be installed in just a few minutes—no waiting days needed. You can unbox it, connect it to power, and start using it right away!",
  },
  {
    ques: "How long does the battery last?",
    ans: "The QR Sound Box has a long battery life of up to 15 days on a single charge.",
  },
  {
    ques: "Can I receive payment notifications in different languages?",
    ans: "Yes, the QR Sound Box supports communication in 8 different languages.",
  },
  {
    ques: "Can I replay previous transactions?",
    ans: "Yes, the device supports replaying the last transaction whenever needed.",
  },
  {
    ques: "Is there a warranty for the QR Sound Box?",
    ans: "Yes, the QR Sound Box comes with a replacement warranty for peace of mind.",
  },
  {
    ques: "How do I charge the QR Sound Box?",
    ans: "It comes with a charging cable, and you can charge it using a standard USB power adapter.",
  },
  {
    ques: "Are there any subscription fees?",
    ans: "There are no subscription fees for using the QR Sound Box itself, but standard transaction fees from payment apps may apply.",
  },
];

  return (
   <FAQUtils heading="Frequently Asked Questions" subheading="Have any questions? We're here to assist you." faq={faq}/>
  )
}

export default Faq