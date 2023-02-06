
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google";
import connectDB from '../../../utils/connectDB'


connectDB()

export default NextAuth ({
  session:{
    jwt:true
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    }),
    
  ],
  pages: {
    signIn:'/'
  },

  database : process.env.MONGODB_URL

})




