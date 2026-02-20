export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <div className="auth">{children}</div>
      </body>
    </html>
  );
}
