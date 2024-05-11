"use client";

import React from "react";
import { NotificationsProvider } from "reapop";

export default function NotifsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <NotificationsProvider>{children}</NotificationsProvider>;
}
