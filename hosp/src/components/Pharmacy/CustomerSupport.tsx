import { Button } from '@/components/ui/button'
import { MessageCircle, Phone, Mail } from 'lucide-react'

export default function CustomerSupport() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Customer Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <MessageCircle className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Chat with our support team in real-time</p>
            <Button>Start Chat</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Phone className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Call us for immediate assistance</p>
            <Button variant="outline">1-800-HOSP</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Get help via email within 24 hours</p>
            <Button variant="outline">support@hosp.com</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

  