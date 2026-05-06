// app/contact/page.tsx

"use client"; // Add this line to mark the component as a Client Component

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      "",
      formData.message,
    ].join("\n");
    const subject = encodeURIComponent(formData.subject || "DevOps Knowledge Board contact");
    window.location.href = `mailto:tarungurugubelli@outlook.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Contact Us</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Have a question? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>

        <div className="grid gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="grid gap-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" placeholder="Enter the subject" value={formData.subject} onChange={handleChange} />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Enter your message" className="min-h-[150px]" value={formData.message} onChange={handleChange} />
                </div>
                <Button size="lg" className="w-full" type="submit">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Connect with us</CardTitle>
              <CardDescription>Follow us on social media or reach out through other channels.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5" />
                  <Link href="mailto:tarungurugubelli@outlook.com" className="text-primary hover:underline">
                    tarungurugubelli@outlook.com
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://github.com/tarun-gurugubelli">
                      <Code2 className="w-4 h-4" />
                      <span className="sr-only">GitHub</span>
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <Link href="https://www.linkedin.com/in/tarun-gurugubelli/">
                      <BriefcaseBusiness className="w-4 h-4" />
                      <span className="sr-only">LinkedIn</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
