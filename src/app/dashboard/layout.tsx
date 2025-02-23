import ToggleDriverProvider from "./context/ToggleDriverContext";
import FullLayout from "./FullLayout";
function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ToggleDriverProvider>
      <FullLayout>{children}</FullLayout>
    </ToggleDriverProvider>
  );
}

export default DashboardLayout;
