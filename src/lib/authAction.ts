"use server";

import prisma from "./prisma";

export const saveNewUser = async ({
  name,
  email,
  password,
}: {
  name: string;
  email: string;
  password?: string;
}) => {
  //save new user to the db
  try {
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: password,
      },
    });

    return user;
  } catch (error) {
    return false;
  }
};
