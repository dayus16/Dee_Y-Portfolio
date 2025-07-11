import React, { useState } from "react";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2dc75608-bdc0-41a8-b96f-17b199d7756c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      toast.success("Form Submitted Successfully");
      setResult("");
      setEmail("");
      setName("");
      setMessage("");
      event.target.reset();
    } else {
      toast.error(data.message);
      console.log("Error", data);
      setResult();
    }
  };

  return (
    <div className="p-5" id="contact">
      <div className="p-5 text-4xl text-[#00df9a]">
        <h1 className="border-b border-dotted pb-3">Contact Me</h1>
      </div>
      <form onSubmit={onSubmit}>
        <div className="mt-10 flex flex-col items-center">
          {/* Input Fields */}
          <div className="flex flex-col md:flex-row justify-center gap-4 w-full max-w-2xl">
            <div className="flex flex-col w-full">
              <label className="mb-1">Name</label>
              <input
                className="w-full py-2 px-4 outline-none border border-[#00df9a] rounded"
                type="text"
                name="name"
                placeholder="Fullname"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-col w-full">
              <label className="mb-1">Email</label>
              <input
                className="w-full py-2 px-4 outline-none border border-[#00df9a] rounded"
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="flex flex-col w-full max-w-2xl mt-5">
            <label className="mb-1">Message</label>
            <textarea
              className="w-full py-2 px-4 outline-none border border-[#00df9a] rounded"
              rows="5"
              name="message"
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-5">
            <button className="border border-[#00df9a] text-[#00df9a] py-1 px-6 rounded hover:bg-[#00df9a] hover:text-white cursor-pointer text-lg transition">
              {result ? result : " Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
