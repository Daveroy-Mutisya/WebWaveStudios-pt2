import React from 'react'
import { NavBar } from '@/components/NavBar';
import { ContactForm } from '@/components/ContactForm';


const ContactPage = () => {
  return (
    <>
   <div className=" p-4 b-g bg-black ">
        <div>
          <NavBar />
        </div>
      </div>
      <section>
        < ContactForm />
      </section>
    </>
  )
}

export default ContactPage;