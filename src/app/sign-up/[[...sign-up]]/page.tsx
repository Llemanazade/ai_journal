import React from 'react';
import { SignUp } from '@clerk/nextjs';

export default function JournalSignUp () {
  return <SignUp signInUrl='sign-in'/>;
};
