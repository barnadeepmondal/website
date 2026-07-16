import React from "react";

const About = () => {
  return (
    <div className="bg-white min-h-screen">
     
      <section className="relative h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
          alt="Fashion"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-4">About Fashionista</h1>
          <p className="text-lg max-w-2xl text-center px-4">
            Redefining style with premium fashion collections designed for
            confidence, elegance, and individuality.
          </p>
        </div>
      </section>

      
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Fashionista was founded with a simple vision: to make premium
              fashion accessible to everyone. We believe style is more than
              clothing—it’s a way to express yourself.
            </p>

            <p className="text-gray-600">
              Our collections blend modern trends with timeless elegance,
              ensuring every piece reflects quality, comfort, and confidence.
            </p>
          </div>

          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
            alt="Fashion Collection"
            className="rounded-xl shadow-lg"
          />
        </div>
      </section>

     
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            Why Choose Fashionista?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Every product is carefully selected to meet the highest
                standards of craftsmanship.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Trend-Driven Design
              </h3>
              <p className="text-gray-600">
                Stay ahead with fashion pieces inspired by global trends and
                modern aesthetics.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow">
              <h3 className="text-xl font-semibold mb-3">
                Customer First
              </h3>
              <p className="text-gray-600">
                We prioritize your shopping experience with exceptional support
                and fast delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      
      <section className="max-w-4xl mx-auto text-center px-6 py-16">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>

        <p className="text-gray-600 text-lg">
          To inspire confidence through fashion by offering stylish,
          high-quality, and affordable collections that help people look and
          feel their best every day.
        </p>
      </section>
    </div>
  );
};

export default About;