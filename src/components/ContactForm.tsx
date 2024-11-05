'use client'

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContactDrawer from "./ContactDrawer";
import axios from "axios";
import { useState } from "react";

interface JW_Backend {
  id: string;
  first_name: string;
  surname: string;
  email: string;
  phone_number: string;
  project_type: string;
  description: string;
}

export function ContactForm() {
  const [contact, setContact] = useState<JW_Backend[]>([]);
  const [formData, setFormData] = useState({
    first_name: "",
    surname: "",
    email: "",
    phone_number: "",
    project_type: "",
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios.post("http://127.0.0.1:5000/contacts", formData)
      .then(response => {
        setContact([...contact, response.data]);
        alert("Form submitted successfully!");
      })
      .catch(error => {
        console.error(error);
        alert("Failed to submit the form.");
      });
  };

  return (
    <>
      <div className="relative h-screen flex flex-col gap-2 bg-black">
        <div className="w-full lg:grid lg:grid-cols-2 lg:min-h-[600px] xl:min-h-[800px]">
          <div className="flex items-start justify-items-start py-12">
            <div className="mx-auto grid w-[700px] gap-6">
              <div className="flex flex-col gap-2">
                <p className="leading-7 [&:not(:first-child)]:mt-6 text-2xl">
                  REQUEST A QUOTE
                </p>
                <h2 className="scroll-m-20 border-b pb-2 text-5xl font-semibold tracking-tight first:mt-0">
                    Get in touch with us
                </h2>
              </div>
              <div className="grid gap-2 text-center">
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="text-balance text-muted-foreground text-2xl">
                  Please fill in the following details
                </p>
              </div>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="first_name" className="text-xl">First Name</Label>
                  <Input
                    id="first_name"
                    type="text"
                    placeholder="John"
                    className="text-xl p-4 h-14"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="surname" className="text-xl">Surname</Label>
                  <Input
                    id="surname"
                    type="text"
                    placeholder="Doe"
                    className="text-xl p-4 h-14"
                    value={formData.surname}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xl">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    className="text-xl p-4 h-14"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="phone_number" className="text-xl">Phone Number</Label>
                  <Input
                    id="phone_number"
                    type="tel"
                    placeholder="123-456-7890"
                    className="text-xl p-4 h-14"
                    value={formData.phone_number}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="project_type" className="text-xl">Project Type</Label>
                  <Input
                    id="project_type"
                    type="text"
                    placeholder="Residential"
                    className="text-xl p-4 h-14"
                    value={formData.project_type}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description" className="text-xl">Description</Label>
                  <Input
                    id="description"
                    type="text"
                    placeholder="Talk to us"
                    className="text-xl p-6 h-20"
                    value={formData.description}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-white text-black hover:text-white">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
        <ContactDrawer />
      </div>
    </>
  );
}