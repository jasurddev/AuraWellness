import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { prisma } from "@/lib/prisma"
import EmailProvider from "next-auth/providers/nodemailer"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST || "smtp.example.com",
        port: Number(process.env.EMAIL_SERVER_PORT) || 587,
        auth: {
          user: process.env.EMAIL_SERVER_USER || "user",
          pass: process.env.EMAIL_SERVER_PASSWORD || "pass",
        },
      },
      from: process.env.EMAIL_FROM || "noreply@twakos.com",
      sendVerificationRequest: async ({ identifier, url }) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(`\n\n=========================================`)
          console.log(`🔐 MAGIC LINK LOGIN FOR: ${identifier}`)
          console.log(`🔗 CLICK HERE: ${url}`)
          console.log(`=========================================\n\n`)
        } else {
          // TODO: Implement actual SMTP sending in production
          console.log(`[PRODUCTION EMAIL MOCK] URL: ${url}`);
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        (session.user as any).role = (user as any).role;
        (session.user as any).clinicId = (user as any).clinicId;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login', // Will be created later
  }
})
