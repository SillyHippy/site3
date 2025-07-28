import { Phone, MessageCircle, Mail } from "lucide-react"

export function StickyCallBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-red-600 text-white p-3 z-50 lg:hidden">
      <div className="flex justify-around items-center">
        <a
          href="tel:+16618097479"
          className="flex flex-col items-center gap-1 hover:bg-red-700 p-2 rounded transition-colors"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs">Call</span>
        </a>
        <a
          href="sms:+16618097479"
          className="flex flex-col items-center gap-1 hover:bg-red-700 p-2 rounded transition-colors"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Text</span>
        </a>
        <a
          href="mailto:joshuaheartsill@icloud.com"
          className="flex flex-col items-center gap-1 hover:bg-red-700 p-2 rounded transition-colors"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs">Email</span>
        </a>
        <a
          href="https://m.me/61578019610829"
          className="flex flex-col items-center gap-1 hover:bg-red-700 p-2 rounded transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="text-xs">Messenger</span>
        </a>
      </div>
    </div>
  )
}
