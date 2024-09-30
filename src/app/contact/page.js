export default function Contact() {
    return (
      <main className="p-8">
        {/* Contact Introduction */}
        <section className="text-center my-16">
          <h1 className="text-4xl font-bold text-green-700">Contact Mast Mart</h1>
          <p className="text-lg mt-4">
            We’d love to hear from you. Whether you’re a retailer, farmer, or interested in partnering
            with us, feel free to reach out.
          </p>
        </section>
  
        {/* Contact Form Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold text-green-700 mb-8">Get In Touch</h2>
          <form className="max-w-xl mx-auto bg-white p-8 shadow-lg">
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="name">Name</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Your name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-lg mb-2" htmlFor="email">Email</label>
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Your email"
              />
            </div>
            <div className="mb-4">
            <label className="block text-lg mb-2" htmlFor="message">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded"
                id="message"
                placeholder="Your message"
                rows="4"
              ></textarea>
            </div>
            <button className="bg-green-700 text-white py-2 px-4 rounded" type="submit">
              Send Message
            </button>
          </form>
        </section>
      </main>
    );
  }

  