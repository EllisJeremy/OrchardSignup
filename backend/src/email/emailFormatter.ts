export default function formatTaskEmail(
  firstName: string,
  taskTitle: string,
  taskDescription: string,
  taskDate: Date | string,
  taskDueTime?: string
): { text: string; html: string } {
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

  const text = `Hi ${firstName},

You have successfully joined the task:

${taskTitle}

${taskDescription}

Due by: ${timeStr} ${dateStr}

Thanks for your contribution!
- The Orchard`;

  const html = `
  <div style="max-width:600px;margin:20px auto;padding:20px;
              border:1px solid #e0e0e0;border-radius:10px;
              font-family: Arial, sans-serif; color:#333;
              background:#fafafa;">
    <p style="font-size:16px;">Hi ${firstName},</p>
    <p style="font-size:16px;">You have successfully joined the task:</p>
    <br>

    <h2 style="margin:10px 0;color:#265555;">${taskTitle}</h2>

    <p style="font-size:15px;line-height:1.5;">${taskDescription}</p>

    <p style="font-size:15px;margin:15px 0;">
      <strong>Due by:</strong>
      <span style="color:#000;">${timeStr} ${dateStr}</span>
    </p>
    <br>
    <p style="font-size:15px;">Thanks for your contribution!</p>
    <p style="font-size:15px;">- The Orchard</p>
  </div>
`;

  return { text, html };
}
