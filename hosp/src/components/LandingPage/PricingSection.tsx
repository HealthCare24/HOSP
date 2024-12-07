'use client'

import React from 'react';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check, X } from 'lucide-react';

interface PlanFeature {
  name: string;
  included: boolean;
}

interface Plan {
  title: string;
  monthlyPrice: number;
  yearlyPrice: number;
  features: PlanFeature[];
  highlighted?: boolean;
}

const plans: Plan[] = [
  {
    title: "Basic",
    monthlyPrice: 50,
    yearlyPrice: 500,
    features: [
      { name: "Access to all healthcare features", included: true },
      { name: "Priority support", included: true },
      { name: "24/7 customer service", included: true },
      { name: "Regular updates and improvements", included: true },
      { name: "Personalized healthcare advice", included: false },
    ],
  },
  {
    title: "Standard",
    monthlyPrice: 80,
    yearlyPrice: 800,
    features: [
      { name: "Access to all healthcare features", included: true },
      { name: "Priority support", included: true },
      { name: "24/7 customer service", included: true },
      { name: "Regular updates and improvements", included: true },
      { name: "Personalized healthcare advice", included: true },
    ],
    highlighted: true,
  },
  {
    title: "Premium",
    monthlyPrice: 100,
    yearlyPrice: 1000,
    features: [
      { name: "Access to all healthcare features", included: true },
      { name: "Priority support", included: true },
      { name: "24/7 customer service", included: true },
      { name: "Regular updates and improvements", included: true },
      { name: "Personalized healthcare advice", included: true },
      { name: "Advanced health analytics", included: true },
    ],
  },
];

export default function PricingSection() {
  const [billingCycle, setBillingCycle] = React.useState<'monthly' | 'yearly'>('monthly');

  return (
    <section className="container mx-auto px-4 py-24 bg-gradient-to-b from-background to-muted">
      <h2 className="text-4xl font-extrabold text-center mb-4">Choose Your Plan</h2>
      <p className="text-xl text-center text-muted-foreground mb-12">Select the perfect plan for your healthcare needs</p>
      
      <Tabs defaultValue="monthly" className="mx-auto mb-12 w-fit">
        <TabsList className="grid w-full grid-cols-2 bg-muted rounded-full p-1">
          <TabsTrigger 
            value="monthly" 
            className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            onClick={() => setBillingCycle('monthly')}
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger 
            value="yearly" 
            className="rounded-full px-8 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground transition-all duration-300"
            onClick={() => setBillingCycle('yearly')}
          >
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <Card
            key={index}
            className={`relative overflow-hidden transition-all duration-300 transform hover:scale-105 ${
              plan.highlighted ? 'border-primary shadow-lg' : ''
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-4 py-1 rounded-bl-lg font-semibold">
                Most Popular
              </div>
            )}
            <CardHeader className={`p-6 ${plan.highlighted ? 'bg-primary text-primary-foreground' : 'bg-card'}`}>
              <CardTitle className="text-2xl font-bold mb-2">{plan.title}</CardTitle>
              <div className="text-4xl font-extrabold">
                <span className="text-lg align-top">$</span>
                {billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice}
                <span className="text-lg font-normal text-muted-foreground">
                  /{billingCycle === 'monthly' ? 'mo' : 'year'}
                </span>
              </div>
              {billingCycle === 'yearly' && (
                <p className="text-sm mt-2 text-muted-foreground">
                  Save ${plan.monthlyPrice * 2} annually
                </p>
              )}
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    {feature.included ? (
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                    ) : (
                      <X className="h-5 w-5 text-red-500 mr-2" />
                    )}
                    <span className={feature.included ? "" : "text-muted-foreground"}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-6">
              <Button 
                className={`w-full text-lg py-6 ${
                  plan.highlighted 
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90' 
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/90'
                }`}
              >
                Choose {plan.title}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}

