import { useState } from "react"

function Contact() {

  const [formData, setFormData] = useState({

    name: "",
    email: "",
    message: ""

  })

  const [loading, setLoading] = useState(false)

  const [sent, setSent] = useState(false)

  const handleChange = (e) => {

    setFormData({

      ...formData,
      [e.target.name]: e.target.value

    })
  }

  const handleSubmit = async (e) => {

    e.preventDefault()

    setLoading(true)

    try {

      const response = await fetch(

        "http://localhost:8080/api/contact",

        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify(formData)
        }
      )

      if (response.ok) {

        setSent(true)

        setFormData({

          name: "",
          email: "",
          message: ""

        })

      }

    } catch (error) {

      console.error(error)

    } finally {

      setLoading(false)
    }
  }

  return (

    <section id="contact">

      <h2 className="text-5xl font-bold text-center mb-20 gradient-text">

        Contact

      </h2>

      <form
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto glass rounded-3xl p-10"
      >

        <div className="mb-6">

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-5 bg-black border border-gray-700 rounded-2xl outline-none focus:border-cyan-400"
            required
          />

        </div>

        <div className="mb-6">

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-5 bg-black border border-gray-700 rounded-2xl outline-none focus:border-cyan-400"
            required
          />

        </div>

        <div className="mb-8">

          <textarea
            rows="7"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-5 bg-black border border-gray-700 rounded-2xl outline-none focus:border-cyan-400"
            required
          />

        </div>

        <button
          type="submit"
          disabled={loading || sent}
          className={`
            px-10
            py-4
            rounded-2xl
            text-lg
            font-semibold
            transition-all
            duration-300
            min-w-55
            flex
            items-center
            justify-center

            ${sent
              ? "bg-green-500"
              : "bg-cyan-500 hover:bg-cyan-600 hover:scale-105"
            }

            ${loading ? "opacity-80 cursor-not-allowed" : ""}
          `}
        >

          {loading ? (

            <div className="flex items-center gap-3">

              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>

              Sending...

            </div>

          ) : sent ? (

            "Sent ✓"

          ) : (

            "Send Message"

          )}

        </button>

      </form>

    </section>
  )
}

export default Contact