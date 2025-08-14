export default function Layout({ children }) {
  return (
    <div className="flex flex-row items-start">
      <div className="w-[5%]">
        <div className="bg-surface-container min-h-screen"></div>
      </div>
      <div className="w-[95%]">{children}</div>
    </div>
  );
}
