"use client"
import { db } from '@/configs/db'
import { Users } from '@/configs/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { PropsWithChildren, useEffect } from 'react';

const Provider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const { user } = useUser();

  useEffect(() => {
    if (user && user.primaryEmailAddress?.emailAddress) {
      isNewUser();
    }
  }, [user]);

  const isNewUser = async () => {
    const userEmail = user?.primaryEmailAddress?.emailAddress;
    if (!userEmail || !user?.fullName) return; // Check for required fields

    const result = await db.select().from(Users)
      .where(eq(Users.email, userEmail));

    if (!result[0]) {
      await db.insert(Users).values({
        name: user.fullName, // This field is required in schema
        email: userEmail,    // This field is required in schema
        imageUrl: user.imageUrl ?? null, // Optional field can be null
        subscription: false  // Using the default value from schema
      });
    }
  }

  return <div>{children}</div>;
};

export default Provider;