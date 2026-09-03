import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/clinic";

export function FaqList() {
  return (
    <Accordion type="single" collapsible className="border-t border-border">
      {faqs.map((item, index) => (
        <AccordionItem key={item.q} value={`faq-${index}`} className="border-border">
          <AccordionTrigger className="py-5 text-left text-base font-normal hover:no-underline">
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
