'use client'

import { useState } from "react"
import { BiEnvelope, BiMap, BiPhone, BiCheckCircle } from "react-icons/bi"
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa"

const inputClass = "px-4 py-3.5 bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] outline-none rounded-xl w-full placeholder:text-[var(--color-text-offset)] focus:border-[var(--color-accent)] transition-colors duration-200"

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', mobile: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
    setError('')
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    const subject = encodeURIComponent(`Portfolio Enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `Hi Anil,\n\nYou have a new message from your portfolio:\n\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n` +
      `Mobile: ${form.mobile || 'Not provided'}\n\n` +
      `Message:\n${form.message}\n\n` +
      `---\nSent via anilyadav.dev`
    )

    window.location.href = `mailto:anilky.office@gmail.com?subject=${subject}&body=${body}`

    setForm({ name: '', email: '', mobile: '', message: '' })
    setSent(true)
  }

  return (
    <div className="pt-16 pb-16">
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-(--color-accent) mb-2">Get In Touch</p>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-(--color-text)">
                    Schedule a call with me to see if I can help
                </h1>
                <p className="text-(--color-text-offset) mt-4 text-base sm:text-lg leading-relaxed">
                    Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
                </p>
                <div className="mt-7 space-y-4">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-(--color-background-offset) border border-(--color-border) flex items-center justify-center shrink-0">
                            <BiPhone className="w-5 h-5 text-(--color-accent)" />
                        </div>
                        <p className="text-base font-semibold text-(--color-text-offset)">+91-6363550291</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-(--color-background-offset) border border-(--color-border) flex items-center justify-center shrink-0">
                            <BiEnvelope className="w-5 h-5 text-(--color-accent)" />
                        </div>
                        <p className="text-base font-semibold text-(--color-text-offset)">anilky.office@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 rounded-xl bg-(--color-background-offset) border border-(--color-border) flex items-center justify-center shrink-0">
                            <BiMap className="w-5 h-5 text-(--color-accent)" />
                        </div>
                        <p className="text-base font-semibold text-(--color-text-offset)">Gurugram, India</p>
                    </div>
                </div>
                <div className="flex items-center mt-8 space-x-3">
                    <a href="https://www.facebook.com/profile.php?id=100006438086916" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-(--color-background-offset) border border-(--color-border) rounded-full flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
                        <FaFacebook className="text-(--color-text) w-5 h-5" />
                    </a>
                    <a href="https://www.instagram.com/anil.yadav02/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-(--color-background-offset) border border-(--color-border) rounded-full flex items-center justify-center hover:bg-pink-500 hover:border-pink-500 transition-all duration-300">
                        <FaInstagram className="text-(--color-text) w-5 h-5" />
                    </a>
                    <a href="https://wa.me/916363550291" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-(--color-background-offset) border border-(--color-border) rounded-full flex items-center justify-center hover:bg-green-500 hover:border-green-500 transition-all duration-300">
                        <FaWhatsapp className="text-(--color-text) w-5 h-5" />
                    </a>
                </div>
            </div>

            <div className="p-6 sm:p-10 bg-(--color-background-offset) border border-(--color-border) rounded-2xl">
                {sent ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
                        <BiCheckCircle className="w-16 h-16 text-(--color-accent)" />
                        <h3 className="text-xl font-bold text-(--color-text)">Message Ready to Send!</h3>
                        <p className="text-(--color-text-offset) text-sm leading-relaxed">
                            Your email client has opened with the message pre-filled. Just hit send!
                        </p>
                        <button
                            onClick={() => setSent(false)}
                            className="mt-4 px-6 py-2.5 border border-(--color-accent) text-(--color-accent) rounded-xl text-sm font-semibold hover:bg-(--color-accent) hover:text-white transition-all duration-300"
                        >
                            Send Another
                        </button>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} noValidate>
                        <input
                            type="text"
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Name *"
                            className={inputClass}
                        />
                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Email Address *"
                            className={`${inputClass} mt-4`}
                        />
                        <input
                            type="text"
                            name="mobile"
                            value={form.mobile}
                            onChange={handleChange}
                            placeholder="Mobile Number (optional)"
                            className={`${inputClass} mt-4`}
                        />
                        <textarea
                            name="message"
                            value={form.message}
                            onChange={handleChange}
                            placeholder="Your Message *"
                            className={`${inputClass} mt-4 h-40 resize-none`}
                        />
                        {error && (
                            <p className="mt-3 text-sm text-red-400 font-medium">{error}</p>
                        )}
                        <button
                            type="submit"
                            className="mt-6 w-full px-12 py-4 bg-(--color-primary) hover:opacity-90 transition-opacity duration-300 cursor-pointer text-white font-semibold rounded-xl flex items-center justify-center gap-2"
                        >
                            <BiEnvelope className="w-5 h-5" />
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    </div>
  )
}

export default Contact
