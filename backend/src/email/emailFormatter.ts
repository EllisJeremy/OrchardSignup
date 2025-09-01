export function formatTaskEmail(
  firstName: string,
  taskTitle: string,
  taskDescription: string,
  taskDate: Date | string,
  taskDueTime?: string
): string {
  const dateObj = new Date(taskDate);

  const dateStr = dateObj.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  let timeStr = "";
  if (taskDueTime) {
    timeStr = new Date(`1970-01-01T${taskDueTime}Z`).toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
      timeZone: "UTC",
    });
  }

  return `Hi ${firstName},

You have successfully joined the task:

${taskTitle}

${taskDescription}
 
Due by: ${timeStr} ${dateStr}

Thanks for your contribution!

- The Orchard`;
}
