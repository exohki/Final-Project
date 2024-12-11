export const requestNotificationPermission = async () => {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications.");
    return;
  }

  if (Notification.permission === "default") {
    await Notification.requestPermission();
  }
};

export const notifyMealDeleted = (meal) => {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications.");
    return;
  }

  if (Notification.permission === "granted") {
    new Notification("Meal Deleted", {
      body: `${meal} has been successfully deleted!`,
      icon: "/assets/icons/success-icon.png", // Ensure the path is correct
    });
  } else {
    console.warn("Notification permission not granted.");
  }
};

export const confirmMealDeletion = (meal, onConfirm, onCancel) => {
  if (!("Notification" in window)) {
    console.warn("This browser does not support notifications.");
    const confirmed = window.confirm(`Are you sure you want to delete the meal: ${meal}?`);
    if (confirmed) {
      onConfirm();
    } else if (onCancel) {
      onCancel();
    }
    return;
  }

  // Display an in-app confirm as fallback
  const confirmed = window.confirm(`Are you sure you want to delete the meal: ${meal}?`);
  if (confirmed) {
    onConfirm();
  } else if (onCancel) {
    onCancel();
  }
};
