import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xpwloogn");
  if (state.succeeded) {
      return (
        <div className="flex flex-col items-center gap-4">
          <p>Thanks for messaging, You'll hear out from us soon!</p>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
            onClick={() => window.location.reload()}
          >
            Submit Another Message
          </button>
        </div>
      );
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      
      <label htmlFor="fullName" className="font-semibold">Full Name</label>
      <input
        id="fullName"
        type="text"
        name="fullName"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError 
        prefix="Full Name" 
        field="fullName"
        errors={state.errors}
      />
      
      <label htmlFor="contactNumber" className="font-semibold">Contact Number</label>
      <input
        id="contactNumber"
        type="tel"
        name="contactNumber"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError 
        prefix="Contact Number" 
        field="contactNumber"
        errors={state.errors}
      />
            <label htmlFor="email" className="font-semibold">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
            <label htmlFor="birthdate" className="font-semibold">Birthdate</label>
      <input
        id="birthdate"
        type="date"
        name="birthdate"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError 
        prefix="Birthdate" 
        field="birthdate"
        errors={state.errors}
      /> 

            <label htmlFor="occupation" className="font-semibold">Nature of Occupation</label>
      <input
        id="occupation"
        type="text"
        name="occupation"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      />
      <ValidationError 
        prefix="Occupation" 
        field="occupation"
        errors={state.errors}
      />

      
      <label htmlFor="message" className="font-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none min-h-[100px]"
        required
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      
      
      <button type="submit" disabled={state.submitting} className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Submit
      </button>
    </form>
  );
}


export default ContactForm;