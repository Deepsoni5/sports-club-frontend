import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, PhoneCall, Award, Users, Zap } from "lucide-react"

const FEATURES = [
  {
    icon: Calendar,
    title: "Easy Booking",
    description: "Book your favorite sports venues with just a few clicks. Hassle-free and quick!",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Access our services anytime, anywhere. We're always open for your convenience.",
  },
  {
    icon: PhoneCall,
    title: "Expert Support",
    description: "Our dedicated team is always ready to assist you with any queries or issues.",
  },
  {
    icon: Award,
    title: "Top-notch Facilities",
    description: "Experience world-class sports facilities that meet international standards.",
  },
  {
    icon: Users,
    title: "Community Events",
    description: "Join exciting community events and connect with fellow sports enthusiasts.",
  },
  {
    icon: Zap,
    title: "Instant Confirmations",
    description: "Get immediate booking confirmations and start planning your game right away.",
  },
] as const

export function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Why Choose React Sports Club?</h2>
        <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
          Experience the best in sports facilities and services with our cutting-edge platform.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <Card key={feature.title} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="mr-4 bg-blue-100 rounded-full p-3">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

