import PusherServer from 'pusher'
import PusherClient from 'pusher-js'

export const pusherServer = new PusherServer({
    appId: process.env.PUSHER_APPID!,
    cluster:"eu",
    secret:process.env.PUSHER_SECRET!,
    key:process.env.NEXT_PUBLIC_PUSHER_KEY!,
    useTLS:true
})

export const pusherClient = new PusherClient(
  process.env.NEXT_PUBLIC_PUSHER_KEY!,
  {
    cluster:"eu"
  }
)