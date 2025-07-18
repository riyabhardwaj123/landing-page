import React from "react";

export default function FaqSection() {
  return (
    <section className="py-16 px-4 md:px-20 bg-white text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-10 bg-gradient-to-r from-pink-100 to-blue-100 px-6 py-3 inline-block rounded-md">
        Frequently Asked Questions
      </h2>

      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title font-semibold">
          What curriculum does International Schooling follow?
        </div>
        <div className="collapse-content text-sm">
          We follow the American curriculum, offering globally accepted
          qualifications.
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          What programs and courses does International Schooling offer?
        </div>
        <div className="collapse-content text-sm">
          We offer live one-to-one, group learning and self-study learning
          programs which allows flexibility, affordability and accessibility. We
          offer 500+ top courses
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title font-semibold">
          How do I update my profile information?
        </div>
        <div className="collapse-content text-sm">
          Go to "My Account" settings and select "Edit Profile" to make changes.
        </div>
      </div>
      <div className="mt-14 bg-gradient-to-r from-blue-100 to-pink-100 py-10 px-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold text-gray-800 mb-2">
          More questions?
        </h3>
        <p className="text-gray-700 mb-4 text-sm md:text-base font-medium">
          Connect with our certified academic experts for a 30-minute
          complementary live session
        </p>
        <button className="bg-white text-blue-700 font-semibold px-5 py-2 rounded-md hover:bg-blue-100 transition">
          Let’s Connect
        </button>
      </div>
    </section>
  );
}
