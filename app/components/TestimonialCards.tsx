const testimonials = [
  { quote: "Smell and taste are exactly like the oil from our pind. Very clean and strong.", name: "Gurpreet Kaur, Mohali" },
  { quote: "Finally found mustard oil that feels authentic, not overly processed.", name: "Ankit Sharma, Chandigarh" },
  { quote: "Loved the transparency—batch details and report are easy to verify.", name: "Rajinder Singh, Kharar" }
];

export function TestimonialCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <figure key={testimonial.name} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft">
          <blockquote className="text-stone-700">“{testimonial.quote}”</blockquote>
          <figcaption className="mt-4 text-sm font-semibold text-forest">{testimonial.name}</figcaption>
        </figure>
      ))}
    </div>
  );
}
