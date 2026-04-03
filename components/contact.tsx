"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
  const { t } = useLanguage();

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: "andyale01122177069@gmail.com",
      href: "mailto:andyale01122177069@gmail.com",
      color: "text-red-500",
    },
    {
      icon: MessageCircle,
      label: t.contact.telegram,
      value: "@darjiro",
      href: "https://t.me/darjiro",
      color: "text-[#26A5E4]",
    },
    {
      icon: Phone,
      label: t.contact.whatsapp,
      value: "+1 (813) 772-6434",
      href: "https://wa.me/18137726434",
      color: "text-[#25D366]",
    },
  ];

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
              {t.contact.title}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.contact.description}
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method) => {
              const Icon = method.icon;
              return (
                <Card
                  key={method.label}
                  className="p-6 space-y-4 hover:shadow-xl transition-all hover:scale-105"
                >
                  <div className="flex justify-center">
                    <div
                      className={`p-3 rounded-full bg-muted ${method.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="font-semibold">{method.label}</h3>
                    <p className="text-sm text-muted-foreground break-all">
                      {method.value}
                    </p>
                  </div>
                  <Button
                    asChild
                    className="w-full bg-transparent"
                    variant="outline"
                  >
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.nav.contact}
                    </a>
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
