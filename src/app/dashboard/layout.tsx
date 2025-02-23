import ToggleDriverProvider from "../../components/dashboard-layout/context/ToggleDriverContext";
import FullLayout from "../../components/dashboard-layout/FullLayout";
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
