import { NextResponse } from 'next/server';

export function middleware(request) {
  const token = request.cookies.get('token');
  const role = request.cookies.get('role');
  const { pathname } = request.nextUrl;

  console.log(token,'',role,'',pathname)

  const url = request.nextUrl.clone()
  url.pathname = '/login'

  if (!token && pathname.includes('/dashboard/admin')) {
    return NextResponse.redirect(url);
  }

  if (role !== 'admin' && pathname.includes('/dashboard/admin')) {
    return NextResponse.redirect(url);
  }
  // // For accounts role
  // if (!token && pathname.includes('/accounts')) {
  //   return NextResponse.redirect('/login');
  // }

  // if (role !== 'accounts' && pathname.includes('/accounts')) {
  //   return NextResponse.redirect('/');
  // }

  // // For manager role
  // if (!token && pathname.includes('/manager')) {
  //   return NextResponse.redirect('/login');
  // }

  // if (role !== 'manager' && pathname.includes('/manager')) {
  //   return NextResponse.redirect('/');
  // }

  return NextResponse.next();
}