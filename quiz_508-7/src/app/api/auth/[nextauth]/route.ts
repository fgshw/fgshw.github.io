import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/user';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '../../../lib/mongodbuser';

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "Username", type: "text", placeholder: "Username" },
        password: { label: "Password", type: "password", placeholder: "Password" }
      },
      async authorize(credentials) {
        // เชื่อมต่อกับฐานข้อมูล
        await connectToDatabase();

        // ตรวจสอบว่า credentials มีค่าอยู่หรือไม่
        if (!credentials) {
          return null; // คืนค่า null หาก credentials ไม่มี
        }

        // ค้นหาผู้ใช้จากชื่อผู้ใช้
        const user = await User.findOne({ username: credentials.username });
        if (!user) {
          return null; // คืนค่า null หากไม่พบผู้ใช้
        }

        // ตรวจสอบรหัสผ่าน
        const isValidPassword = await bcrypt.compare(credentials.password, user.password);
        if (isValidPassword) {
          // คืนข้อมูลผู้ใช้เมื่อเข้าสู่ระบบสำเร็จ
          return { id: user._id, username: user.username };
        }

        // คืนค่า null เมื่อข้อมูลไม่ถูกต้อง
        return null;
      },
    }),
  ],
});
