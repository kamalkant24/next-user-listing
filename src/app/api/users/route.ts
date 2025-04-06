import { NextResponse } from 'next/server';
import  UserJson  from '@/public/user.json';
import { User } from '@/types/user';


export async function GET() {
  const data = await UserJson
  return NextResponse.json(data.users as User[]);
}
