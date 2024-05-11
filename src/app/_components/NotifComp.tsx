"use client";

import NotificationsSystem, {
  atalhoTheme,
  setUpNotifications,
  useNotifications,
} from "reapop";

setUpNotifications({
  defaultProps: {
    position: "top-right",
    dismissible: true,
    dismissAfter: 7 * 1000,
    showDismissButton: true,
  },
});

export default function NotifComp() {
  const { notifications, dismissNotification } = useNotifications();

  return (
    <NotificationsSystem
      notifications={notifications}
      dismissNotification={(id) => dismissNotification(id)}
      theme={atalhoTheme}
    />
  );
}
