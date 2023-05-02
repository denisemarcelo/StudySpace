import bcrypt from 'bcrypt';
import { NextApiRequest, NextApiResponse } from "next";

import prisma from '@/libs/prismadb';
import { NextResponse } from 'next/server';


export async function POST(req: Request, context) {
  try {

    const res = await req.json();
    const registerData = res.registerData;

        const sid=  'AC66120abed3941f298bda1748d3130603'
        const auth_token= '94f99944bdb20437cc29b7ad4a28b1ef'

        const twilio = require('twilio')(sid,auth_token)

    const hashedPassword = await bcrypt.hash(registerData.password, 12);

    const user = await prisma.user.create({
      data: {
        email: registerData.email,
        username: registerData.username,
        name: registerData.name,
        hashedPassword: hashedPassword,
      }
    });

    twilio.messages.create({
      body: "Welcome to StudySpace!" ,
      from:'+16206590608',
      to: registerData.number,
  });

    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}