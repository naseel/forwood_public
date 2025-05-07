
import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import ContactInfoFields from "./ContactInfoFields";
import SignatureProductFields from "./SignatureProductFields";
import ImperialProductFields from "./ImperialProductFields";
import AvatarProductFields from "./AvatarProductFields";
import { quoteSchema, type QuoteFormValues } from "./quoteSchema";

const QuoteForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const form = useForm<QuoteFormValues>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      product_17mm_signature: "",
      product_12mm_signature: "",
      product_8mm_signature: "",
      product_17mm_imperial: "",
      product_12mm_imperial: "",
      product_8mm_imperial: "",
      product_17mm_avatar: "",
    },
  });

  const onSubmit = async (values: QuoteFormValues) => {
    if (!captchaVerified) {
      toast({
        title: "CAPTCHA Required",
        description: "Please verify that you're not a robot.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Construct email content
      const emailBody = `
        New Quote Request:
        
        Contact Information:
        Full Name: ${values.full_name}
        Email: ${values.email || 'Not provided'}
        Phone: ${values.phone}
        
        Product Quantities:
        SIGNATURE PVC Sheets:
        - 17MM SIGNATURE (0.8 Density): ${values.product_17mm_signature || '0'}
        - 12MM SIGNATURE (0.8 Density): ${values.product_12mm_signature || '0'}
        - 8MM SIGNATURE (0.8 Density): ${values.product_8mm_signature || '0'}
        
        IMPERIAL PVC Sheets:
        - 17MM IMPERIAL (0.7 Density): ${values.product_17mm_imperial || '0'}
        - 12MM IMPERIAL (0.7 Density): ${values.product_12mm_imperial || '0'}
        - 8MM IMPERIAL (0.7 Density): ${values.product_8mm_imperial || '0'}
        
        AVATAR WPC Sheets:
        - 17MM AVATAR 3LAYER WPC (0.7 Density): ${values.product_17mm_avatar || '0'}
      `;
      
      // Send email using a service like EmailJS or your preferred method
      console.log("Sending email with content:", emailBody);
      
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Request Submitted",
        description: "Thanks for reaching out! We'll contact you shortly.",
      });
      form.reset();
      setCaptchaVerified(false);
      if (recaptchaRef.current) {
        recaptchaRef.current.reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setCaptchaVerified(!!value);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <ContactInfoFields control={form.control} />
        <SignatureProductFields control={form.control} />
        <ImperialProductFields control={form.control} />
        <AvatarProductFields control={form.control} />

        <div className="pt-4 flex flex-col items-center">
          <div className="mb-6 w-full flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Replace with your actual site key in production
              onChange={handleCaptchaChange}
            />
          </div>
          
          <Button 
            type="submit" 
            disabled={isSubmitting || !captchaVerified}
            className="w-full"
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : (
              "Submit Quote Request"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default QuoteForm;
